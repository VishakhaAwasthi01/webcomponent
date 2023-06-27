import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'drccomponents',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
};
