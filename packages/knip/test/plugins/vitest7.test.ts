import { test } from 'bun:test';
import assert from 'node:assert/strict';
import { main } from '../../src/index.js';
import { resolve } from '../../src/util/path.js';
import baseArguments from '../helpers/baseArguments.js';
import baseCounters from '../helpers/baseCounters.js';

const cwd = resolve('fixtures/plugins/vitest7');

test('Find dependencies with Vitest plugin (7)', async () => {
  const { issues, counters } = await main({
    ...baseArguments,
    cwd,
  });

  assert(issues.unlisted['vitest.config.ts']['ReporterString']);
  assert(issues.unlisted['vitest.config.ts']['ReporterArray']);

  assert.deepEqual(counters, {
    ...baseCounters,
    files: 0,
    processed: 3,
    total: 3,
    unlisted: 2,
  });
});
