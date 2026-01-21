/**
 * Internationalization (i18n) Utility Functions
 * Follows kebab-case naming convention per Dev Notes.
 */
import translations from '../data/translations.json';

type TranslationKeys = typeof translations.en;
type NestedKeyOf<T> = {
    [K in keyof T & string]: T[K] extends object
    ? `${K}.${NestedKeyOf<T[K]>}`
    : K
}[keyof T & string];

export type TranslationKey = NestedKeyOf<TranslationKeys>;

/**
 * Determines if the current path corresponds to the given language.
 * 
 * @param currentPath - The current URL pathname
 * @param targetLang - The language code to check ('bg' or 'en')
 * @returns true if the path is for the target language
 */
export function isActiveLanguage(currentPath: string, targetLang: 'bg' | 'en'): boolean {
    const path = currentPath.endsWith('/') && currentPath.length > 1
        ? currentPath.slice(0, -1)
        : currentPath;

    if (targetLang === 'en') {
        return path.startsWith('/en');
    } else {
        // For BG, we check if it starts with /bg
        // OR if it's the root /, assuming redirect handles it, but purely for active state:
        // If the path IS /bg or starts with /bg/, it's BG.
        return path === '/bg' || path.startsWith('/bg/');
    }
}

/**
 * Calculates the translated URL for the current path.
 *
 * @param currentPath - The current URL pathname
 * @param targetLang - The target language code ('bg' or 'en')
 * @returns The translated path
 */
export function getTranslatedPath(currentPath: string, targetLang: 'bg' | 'en'): string {
    // Normalize path
    const path = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;

    // Strip current language prefix
    // If starts with /en, remove it.
    // If starts with /bg, remove it.
    let cleanPath = path;

    if (path.startsWith('/en')) {
        cleanPath = path.replace(/^\/en/, '') || '/';
    } else if (path.startsWith('/bg')) {
        cleanPath = path.replace(/^\/bg/, '') || '/';
    }

    // Clean path should now be "/" or "/about" etc.

    // Normalize cleanPath to ensure it starts with /
    if (!cleanPath.startsWith('/')) {
        cleanPath = '/' + cleanPath;
    }

    // Construct new path
    if (targetLang === 'en') {
        return `/en${cleanPath === '/' ? '' : cleanPath}`;
    } else {
        return `/bg${cleanPath === '/' ? '' : cleanPath}`;
    }
}

const LANG_STORAGE_KEY = 'green-sunrise-lang';

/**
 * Saves the language preference to local storage.
 * Safe to call in SSR (no-op).
 * 
 * @param lang - The language code to save
 */
export function saveLanguagePreference(lang: 'bg' | 'en'): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
    }
}

/**
 * Retrieves the preferred language from local storage.
 * Safe to call in SSR (returns null).
 * 
 * @returns The stored language code or null
 */
export function getPreferredLanguage(): string | null {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(LANG_STORAGE_KEY);
    }
    return null;
}

/**
 * Translates a key based on the target language.
 * 
 * @param key - The translation key (e.g., 'machinery.weight')
 * @param lang - The target language ('bg' or 'en')
 * @returns The translated string
 */
export function t(key: TranslationKey, lang: 'bg' | 'en'): string {
    const keys = key.split('.');
    let result: any = (translations as any)[lang];

    for (const k of keys) {
        if (result && result[k]) {
            result = result[k];
        } else {
            console.warn(`Translation key not found: ${key} for language: ${lang}`);
            return key;
        }
    }

    return result;
}

/**
 * Terrain type mapping for type-safe translation
 */
const terrainTypeMap: Record<string, string> = {
    'Mountainous': 'terrainMountainous',
    'Flat': 'terrainFlat',
    'Industrial': 'terrainIndustrial',
    'Roof-top': 'terrainRooftop'
};

/**
 * Translates terrain type enum values to localized strings.
 * Maintains technical precision across languages.
 * 
 * @param terrainType - The terrain type from schema ('Mountainous', 'Flat', 'Industrial', 'Roof-top')
 * @param lang - The target language ('bg' or 'en')
 * @returns The localized terrain type string
 */
export function translateTerrain(terrainType: string, lang: 'bg' | 'en'): string {
    const key = terrainTypeMap[terrainType];
    if (!key) {
        console.warn(`Unknown terrain type: ${terrainType}`);
        return terrainType;
    }
    return t(`technical.${key}` as TranslationKey, lang);
}

/**
 * Formats capacity with localized unit (MW / МВт)
 * 
 * @param capacityMW - The capacity value in MW
 * @param lang - The target language ('bg' or 'en')
 * @returns Formatted capacity string with unit
 */
export function formatCapacity(capacityMW: number, lang: 'bg' | 'en'): string {
    const unit = t('technical.capacityUnit' as TranslationKey, lang);
    return `${capacityMW} ${unit}`;
}

