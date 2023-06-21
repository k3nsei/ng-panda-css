import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  hash: true,
  include: ['./src/**/*.{js,ts}'],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'styled-system',
});
