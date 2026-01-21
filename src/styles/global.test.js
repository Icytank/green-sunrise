import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

const globalPath = path.join(process.cwd(), 'src/styles/global.css');

describe('Global CSS', () => {
    let content;
    try {
        content = fs.readFileSync(globalPath, 'utf8');
    } catch (e) {
        content = '';
    }

    test('File exists', () => {
        assert.ok(fs.existsSync(globalPath), 'src/styles/global.css should exist');
    });

    test('CSS Reset', () => {
        assert.match(content, /box-sizing:\s*border-box/, 'Missing box-sizing reset');
        assert.match(content, /margin:\s*0/, 'Missing margin reset');
    });

    // Font Loading check moved to BaseLayout.astro or changed expectation
    test('Font Loading Strategy', () => {
        // We moved fonts to BaseLayout <link> tags, so global.css should NOT have @import
        const hasImport = /@import url\('https:\/\/fonts\.googleapis/.test(content);
        assert.strictEqual(hasImport, false, 'Should NOT use @import for fonts in global.css (performance)');
    });

    test('Reduced Motion', () => {
        assert.match(content, /@media\s*\(prefers-reduced-motion/, 'Missing prefers-reduced-motion query');
    });

    test('Base Styles', () => {
        // Check if body uses variables
        assert.match(content, /var\(--gs-background\)|var\(--gs-surface\)/, 'Body should use tokenized background');
        assert.match(content, /var\(--gs-text-primary\)/, 'Body should use tokenized text color');
    });

    test('Utility Classes', () => {
        // Check for .skip link styles
        assert.match(content, /\.skip/, 'Missing .skip utility class');
        assert.match(content, /transform:\s*translateY\(-100%\)/, 'Skip link should be hidden by default');
        assert.match(content, /:focus/, 'Skip link should have focus state');
    });
});
