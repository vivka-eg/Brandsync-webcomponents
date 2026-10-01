#!/usr/bin/env bash
# Custom publish step for the changesets/action release workflow -- NOT the default
# `changeset publish`, because that command assumes every workspace package's publishable
# artifact lives at that package's own root. That's true for @brandsync/wc and @brandsync/react,
# but NOT for @brandsync/angular: ng-packagr builds packages/angular/'s source into a *separate*,
# freshly-generated package.json one level down in packages/angular/dist/ -- that's what actually
# needs to be `npm publish`ed, not packages/angular/package.json itself.
#
# `changeset version` (run earlier in the same job, before this script) already bumped every
# package.json to the new lockstepped version -- this script just needs to build + publish each
# package at whatever version is now on disk, not decide versions itself.
#
# Guarded per-package by checking the registry first, so re-running this workflow (e.g. after a
# transient network failure on one package) doesn't error out trying to publish a version that's
# already live.
set -euo pipefail

publish_if_new() {
  local dir="$1"
  local name
  local version
  name=$(node -p "require('$(pwd)/$dir/package.json').name")
  version=$(node -p "require('$(pwd)/$dir/package.json').version")

  if npm view "$name@$version" version >/dev/null 2>&1; then
    echo "Skipping $name@$version -- already on the registry."
    return
  fi

  echo "Publishing $name@$version from $dir..."
  # `npm view` above is a read against the registry, which can lag a few seconds behind a publish
  # that's still propagating -- so two release.yml runs close together (e.g. the PR#4 merge commit
  # publishing successfully, then an unrelated follow-up push re-running this same script against
  # an unchanged version) can both see "not yet visible" and both attempt `npm publish`. The
  # second one gets a real 409 from npm ("Cannot publish over previously staged version") -- which
  # actually CONFIRMS the version is live, it just didn't do the uploading. Treat that one specific
  # case as success (not a failure to propagate upward and abort the whole script), everything
  # else still fails loudly.
  local publish_output
  if publish_output=$(npm publish "./$dir" 2>&1); then
    echo "$publish_output"
  elif echo "$publish_output" | grep -q "previously staged version"; then
    echo "$publish_output"
    echo "$name@$version was already published by a concurrent/earlier run -- treating as success."
  else
    echo "$publish_output" >&2
    return 1
  fi

  # changesets/action detects what got published by scanning this script's stdout for
  # "New tag: <pkg>@<version>" -- that's the exact line @changesets/cli's own `publish`
  # command prints, NOT npm publish's own "+ pkg@version" line above. Without this,
  # outputs.published/publishedPackages stay false/empty even on a real successful
  # publish, silently skipping the downstream story-scaffolding/notify steps.
  echo "New tag: $name@$version"

  # changesets/action's own internal step (after this script returns) tries to `git push` a tag
  # named exactly "$name@$version" for everything it parsed from the "New tag:" lines above --
  # but @changesets/cli's DEFAULT `changeset publish` command is what normally creates that local
  # tag via `git tag` as part of its own process. Since we bypass that default command entirely
  # (this custom script exists because of @brandsync/angular's nested dist/ publish path), nothing
  # ever actually ran `git tag` locally, so that push failed outright ("src refspec ... does not
  # match any") -- confirmed via a real CI run where npm publish fully succeeded but the job still
  # reported failure because of this, which in turn meant changesets/action never got to set its
  # own `published` output, silently skipping the downstream story-scaffolding steps every time.
  # Creating the tag ourselves here closes that gap. `-f` makes this idempotent against a retry
  # of the same version.
  git tag -f "$name@$version"
}

publish_if_new "packages/wc"
publish_if_new "packages/react"

# Angular specifically: rebuild (so dist/ reflects the version changeset just wrote to the
# source package.json) before publishing from dist/, not packages/angular/ itself.
npm run build -w packages/angular
publish_if_new "packages/angular/dist"
