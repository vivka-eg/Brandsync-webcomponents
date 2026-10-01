import type { StorybookConfig } from '@storybook/angular';

// Unlike the main brandsync-web-components repo (which demos local source via
// @storybook/web-components-vite), this Storybook exists specifically to prove out
// @brandsync/angular as installed from the public npm registry -- every story imports components
// from '@brandsync/angular' as a real dependency, never from local source.
const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.ts', '../src/stories/**/*.mdx'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  // Serves public/ at the site root (e.g. public/brand-logo.svg -> /brand-logo.svg), so this
  // could reference static assets as a plain absolute path in both `storybook dev` and
  // `build-storybook`, mirroring the sibling react-storybook package.
  staticDirs: ['../public'],
  // Unlike the Vite-based builder the sibling react-storybook package uses (which handles plain CSS
  // imports out of the box), @storybook/angular's webpack5 builder ships with no rule at all for
  // `.css` files -- needed here because .storybook/preview.ts does
  // `import '@brandsync/wc/dist/brandsync-wc/brandsync-wc.css'` to load the --bs-* design
  // tokens. Without this, that import fails the webpack build with "Module parse failed:
  // Unexpected token" (webpack trying to parse raw CSS as JS). css-loader/style-loader are
  // already present as transitive deps of @storybook/builder-webpack5, so no extra install is
  // needed.
  webpackFinal: async config => {
    config.module = config.module ?? { rules: [] };
    config.module.rules = config.module.rules ?? [];
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
  // Overrides Storybook's own default favicon with favicon.svg (BrandSync mark + a small Angular
  // badge) -- browsers use the last matching <link rel="icon">, so appending ours after the
  // existing head content is enough to replace it without needing to strip the original tag out.
  //
  // The `?v=1` query string is load-bearing, not cosmetic: browsers cache favicons far more
  // aggressively than normal page assets (independent of the page's own cache headers, and often
  // surviving a hard reload or even an incognito window), so anyone who already loaded this site
  // before this file existed can keep seeing Storybook's old default indefinitely otherwise. A
  // querystring makes it a new URL the browser has never cached. Bump it if the icon ever changes
  // again.
  managerHead: head => `
    ${head}
    <link rel="icon" href="./favicon.svg?v=1" type="image/svg+xml" />
  `,
};

export default config;
