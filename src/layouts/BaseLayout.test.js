import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

const layoutPath = path.join(process.cwd(), 'src/layouts/BaseLayout.astro');

describe('BaseLayout Integration', () => {
    const content = fs.readFileSync(layoutPath, 'utf8');

    test('Imports Design Tokens', () => {
        assert.match(content, /import "@styles\/tokens.css";/, 'Must import tokens.css');
    });

    test('Imports Global CSS', () => {
        assert.match(content, /import "@styles\/global.css";/, 'Must import global.css');
    });

    test('Removes Legacy Less Imports', () => {
        // Should NOT import root.less or dark.less (commented out matches are fine, but active imports are bad)
        // We check that active imports are NOT present.
        // Regex for active import: ^import "@styles/root.less";
        const activeRootImport = /^\s*import "@styles\/root.less";/m.test(content);
        assert.strictEqual(activeRootImport, false, 'Should not have active import for root.less');

        const activeDarkImport = /^\s*import "@styles\/dark.less";/m.test(content);
        assert.strictEqual(activeDarkImport, false, 'Should not have active import for dark.less');
    });
});
