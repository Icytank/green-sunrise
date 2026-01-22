import { describe, it, expect } from 'vitest';
import { t } from '../utils/i18n-helpers';

describe('Homepage Translations Structure', () => {
    it('has correct Hero dictionary keys', () => {
        // EN
        expect(t('hero.title', 'en')).toContain('Construction');
        // We expect the new subtitle to mention "Green Sunrise Ltd" as per Story 6.1
        expect(t('hero.subtitle', 'en')).toContain('Green Sunrise Ltd');

        // BG
        expect(t('hero.title', 'bg')).toContain('Специализирани');
        expect(t('hero.subtitle', 'bg')).toContain('Green Sunrise Ltd');
    });

    it('has Advantages section keys', () => {
        const advKeys = [
            'home.advantages.title',
            'home.advantages.expertise.title',
            'home.advantages.expertise.desc',
            'home.advantages.machinery.title',
            'home.advantages.machinery.desc',
            'home.advantages.precision.title',
            'home.advantages.precision.desc',
            'home.advantages.workflow.title',
            'home.advantages.workflow.desc',
            'home.advantages.partnership.title',
            'home.advantages.partnership.desc'
        ];

        advKeys.forEach(key => {
            expect(t(key as any, 'en')).toBeTruthy();
            expect(t(key as any, 'bg')).toBeTruthy();
        });
    });

    it('has Trusted Partner banner keys', () => {
        const partnerKeys = [
            'home.trustedPartner.text',
        ];

        partnerKeys.forEach(key => {
            // Expect specific AC text
            expect(t(key as any, 'en')).toBe('Trusted Partner');
            expect(t(key as any, 'bg')).toBe('Партньорство с доверие');
        });
    });
});
