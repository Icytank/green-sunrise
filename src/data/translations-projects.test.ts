import { describe, it, expect } from 'vitest';
import { t } from '../utils/i18n-helpers';

describe('Projects Translations Structure', () => {
    it('has Methodology Intro keys', () => {
        expect(t('projects.methodology.intro', 'en')).toContain('Participants in construction');
        expect(t('projects.methodology.intro', 'bg')).toContain('Участници в строителството');
    });

    it('has Methodology Steps keys', () => {
        const steps = [
            'adherence',
            'precision',
            'coordination',
            'efficiency',
            'safety'
        ];

        steps.forEach(s => {
            expect(t(`projects.methodology.steps.${s}.title` as any, 'en')).toBeTruthy();
            expect(t(`projects.methodology.steps.${s}.desc` as any, 'en')).toBeTruthy();

            expect(t(`projects.methodology.steps.${s}.title` as any, 'bg')).toBeTruthy();
            expect(t(`projects.methodology.steps.${s}.desc` as any, 'bg')).toBeTruthy();
        });
    });

    it('has Project Detail keys', () => {
        expect(t('projects.detail.scope', 'en')).toBe('Scope of Work');
        expect(t('projects.detail.scope', 'bg')).toBe('Обхват на дейността');
    });
});
