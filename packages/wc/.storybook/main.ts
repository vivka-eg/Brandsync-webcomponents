import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.ts', '../src/components/**/*.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-vitest'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  // Storybook Composition: this Storybook doubles as the "hub" for the sibling React/Angular
  // wrapper Storybooks, which live in separate repos (Brandsync-react-storybook,
  // Brandsync-angular-storybook) and deploy to their own independent GitHub Pages URLs. A ref
  // doesn't rebuild or merge those Storybooks into this one -- it just links to their already
  // -deployed `index.json`, so switching to one in the sidebar loads that ref's own canvas iframe
  // from its own URL. Each ref keeps deploying itself exactly as it already does; only this repo's
  // own deploy workflow needs to exist for this hub to actually serve anything.
  refs: {
    react: {
      title: 'React',
      url: 'https://vivka-eg.github.io/Brandsync-react-storybook',
    },
    angular: {
      title: 'Angular',
      url: 'https://vivka-eg.github.io/Brandsync-angular-storybook',
    },
  },
};

export default config;
