# Brandsync Angular Storybook

A Storybook showcase for [`@brandsync/angular`](https://www.npmjs.com/package/@brandsync/angular),
consuming it as a **real published npm package**, not local source. This exists specifically to
prove out the published package's own usage as an Angular consumer would experience it -- separate
from [brandsync-web-components](https://github.com/vivka-eg/Brandsync-web-components), whose own
Storybook demos local web-component source directly via `@storybook/web-components-vite`, and from
the sibling [Brandsync-react](https://github.com/vivka-eg/Brandsync-react) repo, which does the
same thing for `@brandsync/react`.

## Why a separate repo

Every component here is imported the same way a real consumer would:

```ts
import { BsButton } from '@brandsync/angular';
```

No relative imports into another repo's `src/`, no local `dist/` -- if a change lands here, it's
because the *published* package's own behavior changed, not because of anything specific to this
repo's own source.

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

Pushing to `main` triggers `.github/workflows/storybook.yml`, which builds and deploys this
Storybook to GitHub Pages.
