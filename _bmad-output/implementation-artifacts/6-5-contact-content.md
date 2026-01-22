# Story 6.5: Contact Page Corporate Details
Status: ready

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
