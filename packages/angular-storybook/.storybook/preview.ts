import type { Preview } from '@storybook/angular';

// brandsync-tokens is the canonical, versioned source of the --bs-* design tokens (colors,
// spacing, typography, dark-theme overrides via [data-theme="dark"]) that every bs-* component's
// shadow-DOM CSS is written against.
//
// @brandsync/wc/dist/brandsync-wc/brandsync-wc.css re-bundles those token values (plus the
// document root font-family and bs-logo's dark-mode asset-visibility custom properties, which
// brandsync-tokens itself does not define) -- loading it here is the fix for the #1 cause of a
// bs-* component rendering with no visible border/background and near-zero size, with no console
// error: see this repo's CLAUDE.md-equivalent (README.md) for the full explanation.
import '@brandsync/wc/dist/brandsync-wc/brandsync-wc.css';

// brandsync-tokens defines --bs-typography-font-family-* as "Roboto" and @brandsync/wc's CSS
// applies that to the document root, but neither actually loads the Roboto font file -- that's
// the consuming app's job. Loaded as `rel="preload"` + swapped to `rel="stylesheet"` on load
// (not a plain `rel="stylesheet"`, which is render-blocking and can hang Storybook's Docs page).
const robotoLink = document.createElement('link');
robotoLink.rel = 'preload';
robotoLink.as = 'style';
robotoLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;600;700;900&display=swap';
robotoLink.onload = () => {
  robotoLink.rel = 'stylesheet';
};
document.head.appendChild(robotoLink);

const preview: Preview = {
  // Generates a Docs page for every story automatically (props table + whatever
  // component/prop descriptions each story's meta/argTypes provide), instead of requiring
  // `tags: ['autodocs']` to be repeated in every story file.
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        order: ['Welcome', 'Components'],
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'brandsync-tokens color theme',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme ?? 'light';
      document.documentElement.setAttribute('data-theme', theme);
      document.body.style.background = 'var(--bs-surface-base)';
      return story();
    },
  ],
};

export default preview;
