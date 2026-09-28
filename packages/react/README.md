# @brandsync/react

React component wrappers for the [`@brandsync/wc`](https://www.npmjs.com/package/@brandsync/wc) Web Components design system, generated with [`@stencil/react-output-target`](https://www.npmjs.com/package/@stencil/react-output-target).

## Install

```bash
npm install @brandsync/react @brandsync/wc react react-dom
```

## Usage

```tsx
import { BsComposer } from '@brandsync/react';

function App() {
  return (
    <BsComposer
      placeholder="Ask anything..."
      onBsSubmit={() => console.log('submitted')}
    />
  );
}
```

Components render as Web Components under the hood, so props map to element properties/attributes and events are exposed as `on*` React props (e.g. `onBsSubmit`, `onBsInput`).

## Required: load the design token stylesheet

Every component's shadow-DOM CSS is written against `--bs-*` custom properties that this package does not inject on its own. Without them, components render with no visible border/background and collapse to near-zero size (no console error — `var(--bs-*)` with no fallback just resolves to its CSS initial value). Import the token stylesheet once, globally, before any component renders:

```css
/* e.g. src/index.css, imported once in your app entry point */
@import '@brandsync/wc/dist/brandsync-wc/brandsync-wc.css';
```

See `@brandsync/wc`'s own README ("Design tokens — required, not optional") for the full explanation.
