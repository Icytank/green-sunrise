
import navData from '../../data/navData.json';
import { t, getTranslatedPath, type TranslationKey } from '../../utils/i18n-helpers';

export interface NavigationItem {
    key: string;
    url: string;
    children?: NavigationItem[];
}

// Internal type for data structure from JSON
interface NavDataItem {
    key: string;
    url: string;
    children?: NavDataItem[];
}

/**
 * Retrieves the navigation structure with localized URLs and labels.
 * 
 * @param lang - The target language
 * @param data - Optional data source for testing (defaults to navData.json)
 */
export function getNavigation(lang: 'bg' | 'en', data: NavDataItem[] = navData): NavigationItem[] {
    return data.map((item: NavDataItem) => {
        // Convert "Home" -> "nav.home"
        const translationKey = `nav.${item.key.toLowerCase()}` as TranslationKey;
        const translatedLabel = t(translationKey, lang);

        return {
            key: translatedLabel,
            url: getTranslatedPath(item.url, lang),
            children: item.children?.map((child: NavDataItem) => {
                const childKey = `nav.${child.key.toLowerCase()}` as TranslationKey;
                return {
                    key: t(childKey, lang),
                    url: getTranslatedPath(child.url, lang),
                    children: [] // NavData structure implies only one level of nesting usually, but for type safety
                };
            })
        };
    });
}

export function getCTALabel(lang: 'bg' | 'en'): string {
    return t('nav.requestPartnership', lang);
}
