# Brandsync React Storybook

A Storybook showcase for [`@brandsync/react`](https://www.npmjs.com/package/@brandsync/react).
A sibling workspace package in the `brandsync-web-components` monorepo, alongside `packages/wc`
(whose own Storybook demos local web-component source directly via
`@storybook/web-components-vite`) and `packages/angular-storybook` (the same idea as this package,
for `@brandsync/angular`).

## Why a separate package, not folded into `packages/react` itself

Every component here is imported the same way a real consumer would:

```tsx
import { BsButton } from '@brandsync/react';
```

npm workspaces resolves that to `packages/react`'s real built output via a symlink (not a relative
import into its `src/`) -- so if a change lands here, it's because the package's own behavior
changed, not because of anything specific to this package's own source. Keeping the Storybook in
its own package (rather than inside `packages/react` itself) keeps Storybook's own devDependencies
out of the actual publishable package.

## Adding a story for another component

1. Add a `src/stories/<ComponentName>.stories.tsx` file, following the existing files' pattern
   (`Meta`/`StoryObj` from `@storybook/react-vite`, importing the component from `@brandsync/react`).
2. `@brandsync/react`'s own exported prop types (via its generated `.d.ts`) give you full
   autocomplete/type-checking for each component's props -- no need to hand-copy prop lists from the
   source repo.

## Local development

```
npm install
npm run storybook
```

## Deployment

Pushing to `main` (from the monorepo root) triggers `.github/workflows/storybook.yml`, which
builds this Storybook along with `packages/wc`'s and `packages/angular-storybook`'s, and deploys
all three together to GitHub Pages -- this package's build lands under the `/react/` subpath.
