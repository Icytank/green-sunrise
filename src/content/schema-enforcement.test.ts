import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);
const CONTENT_DIR = path.join(process.cwd(), 'src/content/machinery/en');
const INVALID_FILE = path.join(CONTENT_DIR, 'invalid-schema-test.md');

describe('Content Schema Enforcement', () => {
    // Ensure cleanup happens even if test fails
    afterAll(async () => {
        try {
            await fs.unlink(INVALID_FILE);
        } catch (e) {
            // Ignore if file doesn't exist
        }
    });

    it('fails build when machinery schema is violated', async () => {
        // 1. Create a file that violates the schema (missing weight and impactPower)
        const invalidContent = `---
title: "Invalid Machine"
model: "Test-01"
# weight: MISSING
# impactPower: MISSING
heroImage: "../../../assets/images/placeholder.jpg"
galleryImages: []
---
This should fail validation.`;

        await fs.writeFile(INVALID_FILE, invalidContent, 'utf8');

        // 2. Run astro check and expect it to fail
        try {
            // Using npx astro check directly. 
            // We expect this command to throw an error (exit code 1)
            await execAsync('npx astro check');

            // If we get here, it didn't fail, which is BAD
            throw new Error('Astro check passed with invalid content - Schema not enforced!');
        } catch (error: any) {
            // 3. Verify the error is about the missing fields
            const output = (error.stdout || '') + (error.stderr || '') + (error.message || '');
            expect(output).toMatch(/weight|impactPower/);
            // expect(error.code).not.toBe(0); // execAsync throws on non-zero exit
        }
    }, 30000); // 30s timeout for build check
});
