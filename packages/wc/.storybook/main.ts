import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.ts', '../src/components/**/*.mdx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-vitest'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  // Storybook Composition: this Storybook doubles as the "hub" for the React/Angular wrapper
  // Storybooks, which are now sibling workspace packages in this SAME monorepo
  // (packages/react-storybook, packages/angular-storybook) rather than separate repos. A ref
  // doesn't rebuild or merge those Storybooks into this one -- it just links to their already
  // -built `index.json`, so switching to one in the sidebar loads that ref's own canvas iframe
  // from its own location. `.github/workflows/storybook.yml` builds all three and combines them
  // into one deploy: this Storybook at the site root, the other two at /react/ and /angular/ --
  // hence relative, same-origin paths here instead of external URLs.
  refs: {
    react: {
      title: 'React',
      url: './react',
    },
    angular: {
      title: 'Angular',
      url: './angular',
    },
  },
};

export default config;
