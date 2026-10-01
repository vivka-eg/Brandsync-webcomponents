# Brandsync Angular Storybook

A Storybook showcase for [`@brandsync/angular`](https://www.npmjs.com/package/@brandsync/angular).
A sibling workspace package in the `brandsync-web-components` monorepo, alongside `packages/wc`
(whose own Storybook demos local web-component source directly via
`@storybook/web-components-vite`) and `packages/react-storybook` (the same idea as this package,
for `@brandsync/react`).

## Why a separate package, not folded into `packages/angular` itself

Every component here is imported the same way a real consumer would:

```ts
import { BsButton } from '@brandsync/angular';
```

npm workspaces resolves that to `packages/angular`'s real built output via a symlink (not a
relative import into its `src/`) -- so if a change lands here, it's because the package's own
behavior changed, not because of anything specific to this package's own source. Keeping the
Storybook in its own package (rather than inside `packages/angular` itself) keeps Storybook's own
devDependencies out of the actual publishable package.

## Design tokens

`@brandsync/angular`'s standalone components wrap `@brandsync/wc`'s custom elements, whose
shadow-DOM CSS is written entirely against `--bs-*` custom properties. This repo loads the
vendored token stylesheet globally in `.storybook/preview.ts`:

```css
@import '@brandsync/wc/dist/brandsync-wc/brandsync-wc.css';
```

If a component ever renders with no visible border/background and near-zero size, check that this
import is still in place before anything else -- see `@brandsync/wc`'s own `CLAUDE.md` for why.

## Adding a story for another component

1. Add a `src/stories/<ComponentName>.stories.ts` file, following the existing files' pattern
   (`Meta`/`StoryObj` from `@storybook/angular`, importing the component from `@brandsync/angular`).
2. `@brandsync/angular`'s own exported prop types (via its generated `.d.ts`) give you full
   autocomplete/type-checking for each component's inputs/outputs -- no need to hand-copy prop
   lists from the source repo.

## Local development

```
npm install
npm run storybook
```

## Deployment

Pushing to `main` (from the monorepo root) triggers `.github/workflows/storybook.yml`, which
builds this Storybook along with `packages/wc`'s and `packages/react-storybook`'s, and deploys all
three together to GitHub Pages -- this package's build lands under the `/angular/` subpath.
