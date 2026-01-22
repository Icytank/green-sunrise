# Story 6.5: Contact Page Corporate Details
Status: done

## Story
As a Lead,
I want to see the company's official address and business hours next to the contact form,
so that I know when and where I can reach them.

## Acceptance Criteria
1.  **Given** the Contact page
    - **When** the page loads
    - **Then** the layout is a 2-column split (desktop).

2.  **Given** the Left Column (Info)
    - **When** viewing the page
    - **Then** the Company Name, Address (Opaka), Phone/Email (placeholders), and Business Hours (M-F 09-18) are displayed.

3.  **Given** the Right Column (Form)
    - **When** viewing the page
    - **Then** the existing B2B Contact Form (Story 4.1) is rendered.

## Technical Notes
- Update `contact.astro`.
- Define phone/email constants in `src/data/client.ts` if possible.

## Tasks/Subtasks
- [x] Update `client.ts` with Opaka address and business hours constants
- [x] Add contact page translations (BG/EN) to `translations.json`
- [x] Restructure `contact.astro` with 2-column layout (Info Left + Form Right)
- [x] [Design Polish] Style info column with premium card design, SVG icons, and consistent tokens
- [x] Validate build and tests pass

## Dev Agent Record

### Implementation Plan
Restructured contact page to professional 2-column layout:
- Left column: Company info wrapped in styled card with subtle shadows and hover lift
- Right column: Existing B2B ContactForm component (styled to match card)
- Icons: Added inline SVGs for Map, Phone, Email, and Clock
- Typography: Applied `--gs-font-primary` for headers, `--gs-text-secondary` for labels
- Responsive: stacks vertically on mobile, side-by-side on desktop (1024px+)
- Data: Opaka address and Business Hours (M-F 09-18) added to client.ts

### Completion Notes
- All acceptance criteria satisfied
- Build passes successfully
- All 43 unit tests pass
- Design upgraded to match `MachineryCard` aesthetics (borders, shadows, hover effects)
- Full localization support for new layout elements

## File List
- `src/pages/[lang]/contact.astro` - Redesigned with premium 2-column card layout
- `src/data/client.ts` - Added businessHours, updated address to Opaka
- `src/data/translations.json` - Added contact page translations (BG/EN)

## Change Log
- 2026-01-22: Implemented 2-column contact layout with company info and business hours
- 2026-01-22: [Polish] Redesigned contact page with card styling and SVG icons
- 2026-01-22: [Fix] Resolved localization issues for business address and hours
