
import { describe, it, expect } from 'vitest';
import { getNavigation, getCTALabel } from './HeaderLogic';

// Define mock data
const mockNavData = [
    { key: 'Home', url: '/', children: [] },
    { key: 'About', url: '/about/', children: [] }
];

describe('HeaderLogic', () => {
    describe('getNavigation', () => {
        it('should return English labels and localized URLs for "en"', () => {
            // Pass mock data
            // Note: i18n-helpers adds /en prefix and strips trailing slashes
            const nav = getNavigation('en', mockNavData);

            const home = nav.find(item => item.key === 'Home');
            expect(home).toBeDefined();
            expect(home?.url).toBe('/en'); // Root becomes /en

            const about = nav.find(item => item.key === 'About');
            expect(about).toBeDefined();
            expect(about?.url).toBe('/en/about'); // /about/ becomes /en/about
        });

        it('should return translated labels and localized URLs for "bg"', () => {
            // Pass mock data
            const nav = getNavigation('bg', mockNavData);

            // "Home" translates to "Начало" in translations.json
            const home = nav.find(item => item.key === 'Начало');
            expect(home).toBeDefined();
            expect(home?.url).toBe('/bg');

            // "About" translates to "За Нас"
            const about = nav.find(item => item.key === 'За Нас');
            expect(about).toBeDefined();
            expect(about?.url).toBe('/bg/about');
        });

        it('should structure children correctly', () => {
            const mockWithChildren = [
                {
                    key: 'Services',
                    url: '/services/',
                    children: [
                        { key: 'Projects', url: '/projects/' }
                        // Note: "Projects" key normally translates to "Проекти" 
                    ]
                }
            ];

            const nav = getNavigation('en', mockWithChildren);
            expect(nav[0].children).toBeDefined();
            expect(nav[0].children?.length).toBe(1);
            expect(nav[0].children?.[0].key).toBe('Projects');
            expect(nav[0].children?.[0].url).toBe('/en/projects');
        });
    });

    describe('getCTALabel', () => {
        it('should return localized CTA label', () => {
            expect(getCTALabel('en')).toBe('Request Partnership');
            expect(getCTALabel('bg')).toBe('Заяви Партньорство');
        });
    });
});
