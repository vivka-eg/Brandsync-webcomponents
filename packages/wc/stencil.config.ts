import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'brandsync-wc',
  globalStyle: 'src/global/index.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-custom-elements-manifest',
      file: 'custom-elements.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      // In-repo now (npm workspace sibling, at packages/react -- this config lives at
      // packages/wc), not a directory outside the repo entirely -- moved so GitHub Actions
      // (which only checks out this one repo) can actually build/publish it.
      outDir: '../react/src',
      componentCorePackage: '@brandsync/wc',
      proxiesFile: '../react/src/components.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@brandsync/wc',
      outputType: 'standalone',
      // Angular's default ('components') differs from React output-target's default
      // ('dist/components') for the same package -- align them so @brandsync/wc only needs one
      // exports entry to serve both wrapper packages.
      customElementsDir: 'dist/components',
      // Same in-repo move as reactOutputTarget above.
      directivesProxyFile: '../angular/src/lib/components.ts',
      directivesArrayFile: '../angular/src/lib/index.ts',
    }),
  ],
};
