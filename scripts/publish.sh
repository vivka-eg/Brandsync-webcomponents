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
  else
    echo "Publishing $name@$version from $dir..."
    npm publish "./$dir"
    # changesets/action detects what got published by scanning this script's stdout for
    # "New tag: <pkg>@<version>" -- that's the exact line @changesets/cli's own `publish`
    # command prints, NOT npm publish's own "+ pkg@version" line above. Without this,
    # outputs.published/publishedPackages stay false/empty even on a real successful
    # publish, silently skipping the downstream Brandsync-react notify step.
    echo "New tag: $name@$version"
  fi
}

publish_if_new "packages/wc"
publish_if_new "packages/react"

# Angular specifically: rebuild (so dist/ reflects the version changeset just wrote to the
# source package.json) before publishing from dist/, not packages/angular/ itself.
npm run build -w packages/angular
publish_if_new "packages/angular/dist"
