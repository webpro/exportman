// This file is generated (no need to edit)
import { z } from 'zod';
export const globSchema = z.union([z.string(), z.array(z.string())]);

export const pluginSchema = z.union([
  z.boolean(),
  globSchema,
  z.object({
    config: globSchema.optional(),
    entry: globSchema.optional(),
    project: globSchema.optional(),
  }),
]);

export const pluginsSchema = z.object({
  angular: pluginSchema,
  astro: pluginSchema,
  ava: pluginSchema,
  babel: pluginSchema,
  c8: pluginSchema,
  capacitor: pluginSchema,
  changesets: pluginSchema,
  commitizen: pluginSchema,
  commitlint: pluginSchema,
  cspell: pluginSchema,
  cucumber: pluginSchema,
  cypress: pluginSchema,
  dotenv: pluginSchema,
  drizzle: pluginSchema,
  eleventy: pluginSchema,
  eslint: pluginSchema,
  expo: pluginSchema,
  gatsby: pluginSchema,
  'github-actions': pluginSchema,
  glob: pluginSchema,
  'graphql-codegen': pluginSchema,
  husky: pluginSchema,
  jest: pluginSchema,
  karma: pluginSchema,
  ladle: pluginSchema,
  lefthook: pluginSchema,
  'lint-staged': pluginSchema,
  linthtml: pluginSchema,
  'lockfile-lint': pluginSchema,
  'lost-pixel': pluginSchema,
  markdownlint: pluginSchema,
  metro: pluginSchema,
  mocha: pluginSchema,
  moonrepo: pluginSchema,
  msw: pluginSchema,
  nest: pluginSchema,
  netlify: pluginSchema,
  next: pluginSchema,
  node: pluginSchema,
  'node-test-runner': pluginSchema,
  nodemon: pluginSchema,
  'npm-package-json-lint': pluginSchema,
  nuxt: pluginSchema,
  nx: pluginSchema,
  nyc: pluginSchema,
  oclif: pluginSchema,
  playwright: pluginSchema,
  'playwright-ct': pluginSchema,
  'playwright-test': pluginSchema,
  plop: pluginSchema,
  postcss: pluginSchema,
  preconstruct: pluginSchema,
  prettier: pluginSchema,
  'react-cosmos': pluginSchema,
  'release-it': pluginSchema,
  remark: pluginSchema,
  remix: pluginSchema,
  rollup: pluginSchema,
  rsbuild: pluginSchema,
  rspack: pluginSchema,
  'semantic-release': pluginSchema,
  sentry: pluginSchema,
  'simple-git-hooks': pluginSchema,
  'size-limit': pluginSchema,
  storybook: pluginSchema,
  stryker: pluginSchema,
  stylelint: pluginSchema,
  svelte: pluginSchema,
  syncpack: pluginSchema,
  tailwind: pluginSchema,
  travis: pluginSchema,
  'ts-node': pluginSchema,
  tsup: pluginSchema,
  tsx: pluginSchema,
  typedoc: pluginSchema,
  typescript: pluginSchema,
  unbuild: pluginSchema,
  unocss: pluginSchema,
  'vercel-og': pluginSchema,
  vike: pluginSchema,
  vite: pluginSchema,
  vitest: pluginSchema,
  vue: pluginSchema,
  'webdriver-io': pluginSchema,
  webpack: pluginSchema,
  wireit: pluginSchema,
  wrangler: pluginSchema,
  xo: pluginSchema,
  yarn: pluginSchema,
  yorkie: pluginSchema,
});
