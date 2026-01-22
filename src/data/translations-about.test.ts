import { describe, it, expect } from 'vitest';
import { t } from '../utils/i18n-helpers';

describe('About Us Translations Structure', () => {
    it('has Intro section keys', () => {
        expect(t('about.intro.title', 'en')).toBeTruthy();
        expect(t('about.intro.text', 'en')).toContain('Green Sunrise Ltd is a specialized company');

        expect(t('about.intro.title', 'bg')).toBeTruthy();
        expect(t('about.intro.text', 'bg')).toContain('Green Sunrise Ltd е специализирана компания');
    });

    it('has Mission & Vision keys', () => {
        const keys = [
            'about.mission.title',
            'about.mission.text',
            'about.vision.title',
            'about.vision.text'
        ];
        keys.forEach(key => {
            expect(t(key as any, 'en')).toBeTruthy();
            expect(t(key as any, 'bg')).toBeTruthy();
        });
    });

    it('has Values section keys', () => {
        expect(t('about.values.title', 'en')).toBeTruthy();

        const valueKeys = ['quality', 'team', 'capability', 'integrity', 'responsibility'];
        valueKeys.forEach(v => {
            expect(t(`about.values.list.${v}.title` as any, 'en')).toBeTruthy();
            expect(t(`about.values.list.${v}.desc` as any, 'en')).toBeTruthy();

            expect(t(`about.values.list.${v}.title` as any, 'bg')).toBeTruthy();
            expect(t(`about.values.list.${v}.desc` as any, 'bg')).toBeTruthy();
        });
    });
});
