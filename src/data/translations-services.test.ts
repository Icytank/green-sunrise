import { describe, it, expect } from 'vitest';
import { t } from '../utils/i18n-helpers';

describe('Services Translations Structure', () => {
    it('has Page Title and Description keys', () => {
        expect(t('services.pageTitle', 'en')).toContain('Services');
        expect(t('services.pageDescription', 'en')).toBeTruthy();
        expect(t('services.title', 'en')).toBe('Our Services');

        expect(t('services.pageTitle', 'bg')).toContain('Услуги');
        expect(t('services.title', 'bg')).toBe('Нашите Услуги');
    });

    it('has Service List keys', () => {
        const services = [
            'pileDriving',
            'structureInstallation',
            'moduleInstallation',
            'epcSupport',
            'labourTeams'
        ];

        services.forEach(s => {
            expect(t(`services.list.${s}.title` as any, 'en')).toBeTruthy();
            expect(t(`services.list.${s}.desc` as any, 'en')).toBeTruthy();

            expect(t(`services.list.${s}.title` as any, 'bg')).toBeTruthy();
            expect(t(`services.list.${s}.desc` as any, 'bg')).toBeTruthy();
        });
    });

    it('has Why Work With Us keys', () => {
        expect(t('services.whyUs.title', 'en')).toBeTruthy();

        const reasons = [
            'specialized',
            'machinery',
            'agility',
            'quality',
            'partnership' // Assuming these map to the 5 bullets requested
        ];

        reasons.forEach(r => {
            expect(t(`services.whyUs.list.${r}.title` as any, 'en')).toBeTruthy();
            expect(t(`services.whyUs.list.${r}.desc` as any, 'en')).toBeTruthy();
        });
    });
});
