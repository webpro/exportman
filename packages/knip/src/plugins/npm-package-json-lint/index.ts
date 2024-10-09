import type { IsPluginEnabled, Plugin, ResolveConfig } from '../../types/config.js';
import { toCosmiconfig } from '../../util/plugin-config.js';
import { hasDependency } from '../../util/plugin.js';
import { toDependency } from '../../util/protocols.js';
import type { NpmPkgJsonLintConfig } from './types.js';

// https://npmpackagejsonlint.org/docs/

const title = 'npm-package-json-lint';

const enablers = ['npm-package-json-lint'];

const isEnabled: IsPluginEnabled = ({ dependencies }) => hasDependency(dependencies, enablers);

const packageJsonPath = 'npmpackagejsonlint';

const config = ['package.json', ...toCosmiconfig('npmpackagejsonlint')];

const resolveConfig: ResolveConfig<NpmPkgJsonLintConfig> = localConfig => {
  return localConfig?.extends ? [localConfig.extends].map(toDependency) : [];
};

export default {
  title,
  enablers,
  isEnabled,
  packageJsonPath,
  config,
  resolveConfig,
} satisfies Plugin;
