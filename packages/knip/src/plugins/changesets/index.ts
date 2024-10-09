import type { IsPluginEnabled, Plugin, ResolveConfig } from '../../types/config.js';
import { hasDependency } from '../../util/plugin.js';
import { toDependency } from '../../util/protocols.js';
import type { ChangesetsConfig } from './types.js';

// https://github.com/changesets/changesets/blob/main/docs/config-file-options.md

const title = 'Changesets';

const enablers = ['@changesets/cli'];

const isEnabled: IsPluginEnabled = ({ dependencies }) => hasDependency(dependencies, enablers);

const config = ['.changeset/config.json'];

const resolveConfig: ResolveConfig<ChangesetsConfig> = config => {
  return (
    Array.isArray(config.changelog)
      ? [config.changelog[0]]
      : typeof config.changelog === 'string'
        ? [config.changelog]
        : []
  ).map(toDependency);
};

export default {
  title,
  enablers,
  isEnabled,
  config,
  resolveConfig,
} satisfies Plugin;
