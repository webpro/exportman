import { hasDependency } from '../../util/plugin.js';
import { toEntryPattern, toProductionEntryPattern } from '../../util/protocols.js';
import type { GenericPluginCallback, IsPluginEnabledCallback } from '../../types/plugins.js';

// https://nextjs.org/docs/getting-started/project-structure

export const NAME = 'Next.js';

/** @public */
export const ENABLERS = ['next'];

export const isEnabled: IsPluginEnabledCallback = ({ dependencies }) => hasDependency(dependencies, ENABLERS);

/** @public */
export const ENTRY_FILE_PATTERNS = ['next.config.{js,ts,cjs,mjs}'];

const productionEntryFilePatternsWithoutSrc = [
  'middleware.{js,jsx,ts,tsx}',
  'app/global-error.{js,jsx,ts,tsx}',
  'app/**/{error,layout,loading,not-found,page,template,route,default}.{js,jsx,ts,tsx}',
  'instrumentation.{js,jsx,ts,tsx}',
  'app/{manifest,sitemap,robots}.{js,jsx,ts,tsx}',
  'app/**/{icon,apple-icon}.{js,jsx,ts,tsx}',
  'app/**/{opengraph,twitter}-image.{js,jsx,ts,tsx}',
  'pages/**/*.{js,jsx,ts,tsx}',
];

/** @public */
export const PRODUCTION_ENTRY_FILE_PATTERNS = [
  ...productionEntryFilePatternsWithoutSrc,
  ...productionEntryFilePatternsWithoutSrc.map(pattern => `src/${pattern}`),
];

export const findDependencies: GenericPluginCallback = async (configFilePath, options) => {
  const { config } = options;

  return config.entry
    ? config.entry.map(toProductionEntryPattern)
    : [...ENTRY_FILE_PATTERNS.map(toEntryPattern), ...PRODUCTION_ENTRY_FILE_PATTERNS.map(toProductionEntryPattern)];
};
