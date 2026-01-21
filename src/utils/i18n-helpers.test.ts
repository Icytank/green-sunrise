import { describe, it, expect } from 'vitest';
import { getTranslatedPath, saveLanguagePreference, getPreferredLanguage } from './i18n-helpers';

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => { store[key] = value.toString(); },
        clear: () => { store = {}; },
        removeItem: (key: string) => { delete store[key]; }
    };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('i18n-helpers', () => {
    describe('persistence', () => {
        it('saves preference', () => {
            saveLanguagePreference('en');
            expect(localStorage.getItem('green-sunrise-lang')).toBe('en');
        });

        it('retrieves preference', () => {
            localStorage.setItem('green-sunrise-lang', 'bg');
            expect(getPreferredLanguage()).toBe('bg');
        });

        it('returns null if no preference', () => {
            localStorage.clear();
            expect(getPreferredLanguage()).toBeNull();
        });
    });

    describe('getTranslatedPath', () => {
        it('translates root path correctly', () => {
            expect(getTranslatedPath('/bg', 'en')).toBe('/en');
            expect(getTranslatedPath('/en', 'bg')).toBe('/bg');
            expect(getTranslatedPath('/en/', 'bg')).toBe('/bg');
            // Root / (if happens) should probably go to target lang
            expect(getTranslatedPath('/', 'bg')).toBe('/bg');
            expect(getTranslatedPath('/', 'en')).toBe('/en');
        });

        it('translates sub-paths correctly', () => {
            expect(getTranslatedPath('/bg/projects', 'en')).toBe('/en/projects');
            expect(getTranslatedPath('/en/projects', 'bg')).toBe('/bg/projects');
        });

        it('handles deep paths', () => {
            expect(getTranslatedPath('/bg/machinery/tractor', 'en')).toBe('/en/machinery/tractor');
            expect(getTranslatedPath('/en/machinery/tractor', 'bg')).toBe('/bg/machinery/tractor');
        });

        it('is idempotent if target language matches current path', () => {
            expect(getTranslatedPath('/en/projects', 'en')).toBe('/en/projects');
            expect(getTranslatedPath('/bg/projects', 'bg')).toBe('/bg/projects');
        });
    });
});
