
import navData from '../../data/navData.json';
import { t, getTranslatedPath, type TranslationKey } from '../../utils/i18n-helpers';

export interface FooterLink {
    label: string;
    url: string;
}

export interface FooterData {
    description: string;
    navigation: {
        header: string;
        items: { key: string; url: string }[];
    };
    services: {
        header: string;
        items: FooterLink[];
    };
    contact: {
        header: string;
    };
}

interface NavDataItem {
    key: string;
    url: string;
}

export function getFooterData(lang: 'bg' | 'en'): FooterData {

    // Navigation items
    const navItems = navData.map((item: NavDataItem) => {
        const translationKey = `nav.${item.key.toLowerCase()}` as TranslationKey;
        return {
            key: t(translationKey, lang),
            url: getTranslatedPath(item.url, lang)
        };
    });

    // Services items
    const servicesItems: FooterLink[] = [
        { label: t('footer.ownedMachinery', lang), url: getTranslatedPath('/services/#machinery', lang) },
        { label: t('footer.pvInstallation', lang), url: getTranslatedPath('/services/#installation', lang) },
        { label: t('footer.maintenance', lang), url: getTranslatedPath('/services/#maintenance', lang) },
        { label: t('footer.technicalConsulting', lang), url: getTranslatedPath('/services/#consulting', lang) }
    ];

    return {
        description: t('footer.description', lang),
        navigation: {
            header: t('footer.navigation', lang),
            items: navItems
        },
        services: {
            header: t('footer.services', lang),
            items: servicesItems
        },
        contact: {
            header: t('footer.contact', lang)
        }
    };
}
