import { describe, it, expect } from 'vitest';
import { getMachineryUrl, formatSpecValue } from './MachineryCard.logic';

describe('MachineryCard Logic', () => {
    it('generates correct URL for English', () => {
        expect(getMachineryUrl('pile-driver-x1', 'en')).toBe('/en/machinery/pile-driver-x1');
    });

    it('generates correct URL for Bulgarian', () => {
        expect(getMachineryUrl('pile-driver-x1', 'bg')).toBe('/bg/machinery/pile-driver-x1');
    });

    it('formats spec value with unit', () => {
        expect(formatSpecValue(5000, 'kg')).toBe('5000 kg');
        expect(formatSpecValue('35t', '')).toBe('35t');
    });
});
