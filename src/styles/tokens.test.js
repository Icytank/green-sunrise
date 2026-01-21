import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

const tokensPath = path.join(process.cwd(), 'src/styles/tokens.css');

describe('Design Tokens', () => {
    const content = fs.readFileSync(tokensPath, 'utf8');

    test('Color Tokens', () => {
        assert.match(content, /--gs-institutional-green:\s*#064E3B/, 'Missing institutional-green');
        assert.match(content, /--gs-slate-gray:\s*#334155/, 'Missing slate-gray');
        assert.match(content, /--gs-executive-white:\s*#F8FAFC/, 'Missing executive-white');
        assert.match(content, /--gs-success-emerald:\s*#10B981/, 'Missing success-emerald');
        assert.match(content, /--gs-surface:\s*#F8FAFC/, 'Missing surface');
        assert.match(content, /--gs-text-primary:\s*#0F172A/, 'Missing text-primary');
    });

    test('Dark Mode Overrides', () => {
        assert.match(content, /body\.dark-mode/, 'Missing body.dark-mode selector');
        assert.match(content, /--gs-surface: #0F172A/, 'Missing dark mode surface override');
        assert.match(content, /--gs-text-primary: #F8FAFC/, 'Missing dark mode text override');
    });

    test('Spacing Tokens', () => {
        assert.match(content, /--gs-space-1:\s*8px/, 'Missing space-1');
        assert.match(content, /--gs-space-2:\s*16px/, 'Missing space-2');
        assert.match(content, /--gs-space-3:\s*24px/, 'Missing space-3');
        assert.match(content, /--gs-space-4:\s*32px/, 'Missing space-4');
        assert.match(content, /--gs-space-5:\s*40px/, 'Missing space-5');
        assert.match(content, /--gs-space-6:\s*48px/, 'Missing space-6');
        assert.match(content, /--gs-space-8:\s*64px/, 'Missing space-8');
        assert.match(content, /--gs-space-10:\s*80px/, 'Missing space-10');
        assert.match(content, /--gs-space-12:\s*96px/, 'Missing space-12');
    });

    test('Typography Tokens', () => {
        assert.match(content, /--gs-font-primary:\s*'Inter'/, 'Missing font-primary');
        assert.match(content, /--gs-font-mono:\s*'Geist Mono'/, 'Missing font-mono');
    });

    test('Type Scale', () => {
        assert.match(content, /--gs-text-h1:\s*3.052rem/, 'Missing text-h1');
        assert.match(content, /--gs-text-h2:\s*2.441rem/, 'Missing text-h2');
        assert.match(content, /--gs-text-base:\s*1rem/, 'Missing text-base');
    });
});
