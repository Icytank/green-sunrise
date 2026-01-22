
import { describe, it, expect } from 'vitest';
import { getFooterData } from './FooterLogic';

describe('FooterLogic', () => {
    describe('getFooterData', () => {
        it('should return English data correctly', () => {
            const data = getFooterData('en');
            expect(data.navigation.header).toBe('Navigation');
            expect(data.services.header).toBe('Services');
            expect(data.contact.header).toBe('Contact');
            expect(data.services.items[0].label).toBe('Owned Machinery');

            // Checking URL prefixing for EN (assuming i18n-helpers behavior)
            // If i18n-helpers prepends /en, then expect /en/services/...
            // Based on earlier analysis, i18n-helpers gets /en prefix for EN.
            expect(data.services.items[0].url).toContain('/en/services/');

            expect(data.navigation.items[0].key).toBe('Home');
        });

        it('should return Bulgarian data correctly', () => {
            const data = getFooterData('bg');
            expect(data.navigation.header).toBe('Навигация');
            expect(data.services.header).toBe('Услуги');
            expect(data.contact.header).toBe('Контакти');
            expect(data.services.items[0].label).toBe('Собствена Техника');

            expect(data.services.items[0].url).toContain('/bg/services/');

            // Navigation item translation
            expect(data.navigation.items[0].key).toBe('Начало');
        });
    });
});
