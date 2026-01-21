---
stepsCompleted: [step-01-validate-prerequisites, step-02-design-epics, step-03-create-stories]
inputDocuments:
  - /mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md
  - /mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md
  - /mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md
---

# green-sunrise - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for green-sunrise, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Visitors can view high-resolution imagery and technical specifications of owned pile-driving machinery.
FR2: Visitors can access detailed profiles of technical teams and their certifications.
FR3: Visitors can verify the company's technical capacity through "machinery ownership" declarations.
FR4: Visitors can browse a gallery of completed PV projects.
FR5: Visitors can filter projects by capacity (MW), location, or terrain type.
FR6: Visitors can view project-specific details including scope of work, timeline, and results.
FR7: Visitors can view a high-resolution photo gallery for each individual project.
FR8: Visitors can initiate a partnership inquiry via a specialized contact form.
FR9: Visitors can specify their project type and technical requirements in the contact request.
FR10: Users can toggle the entire site content between Bulgarian and English at any time.
FR11: Users can find technical terminology parity across all translated services and project details.
FR12: Users can navigate the 5 core pillar pages via a persistent header.
FR13: Users can access the site with full functionality on any modern mobile or desktop browser (Responsive Design).
FR14: Users can find critical company legal/contact info (VAT, address) in the footer.
FR15: Administrators can add new PV projects to the portfolio via a Simple CMS Interface (Decap CMS).
FR16: Administrators can upload and link project photography which is automatically optimized and stored in the repository.
FR17: Administrators can update service descriptions and technical specs without touching raw code.

### NonFunctional Requirements

NFR1: The site must achieve a "First Contentful Paint" (FCP) of <1.0s for users on modern 4G/5G connections.
NFR2: The site must maintain a 100/100 score across Performance, Accessibility, and SEO in Chrome Lighthouse audits.
NFR3: All high-res project imagery must be automatically optimized/web-formatted to prevent payload bloat.
NFR4: The site must maintain 99.9% availability leveraging Cloudflare's global CDN.
NFR5: International users must experience latency parity with local Bulgarian users via edge caching.
NFR6: 100% of traffic must be served over HTTPS (SSL/TLS).
NFR7: The contact form must implement standard anti-spam (e.g., Turnstile) and secure server-side email dispatch to prevent malicious injections or SMTP exposure.
NFR8: There must be 100% structural and technical parity between the Bulgarian and English versions of the site.

### Additional Requirements

- **Starter Template**: CodeStitch Intermediate Astro + Decap (npx create-astro@latest --template CodeStitchOfficial/Intermediate-Astro-Decap-CMS).
- **Core Framework**: Astro v5 (SSG mode) with View Transitions.
- **Content Engine**: Astro Content Collections (v5) for type-safe project data (MW, terrain, status).
- **Localization**: Sub-path strategy (/ and /en/) using Astro i18n with persistent language state.
- **Asset Pipeline**: Automated image optimization via Astro's built-in processing.
- **Lead Generation**: Cloudflare Turnstile + Resend API for B2B form deliverability.
- **CMS Access**: GitHub OAuth for Decap CMS access control.
- **Styling**: Vanilla CSS Design Tokens with `--gs-` prefix; zero-runtime philosophy.
- **UX Pattern**: "Data Hero" card using oversized Geist Mono typography for MW capacity.
- **UX Pattern**: "GS Stamp" badge for verified data points and project cards.
- **Narrative Structure**: Project pages broken into "The Challenge," "Technical Scope," and "The Outcome."
- **Visual Rule**: Real machinery and project photos only (no generic stock photos).
- **Naming**: PascalCase for components, kebab-case for generic files/utilities.

### FR Coverage Map

FR1: Epic 2 - Showcase of owned machinery imagery and specs.
FR2: Epic 2 - Profiles of technical teams and certifications.
FR3: Epic 2 - Machinery ownership declarations for technical capacity proof.
FR4: Epic 3 - Interactive gallery for browsing completed projects.
FR5: Epic 3 - Technical filtering (MW, Location, Terrain) for the gallery.
FR6: Epic 3 - Detailed project pages (Challenge, Scope, Outcome).
FR7: Epic 3 - High-resolution photo galleries for individual projects.
FR8: Epic 4 - Partnership inquiry intake via contact form.
FR9: Epic 4 - Collection of technical requirements in the contact request.
FR10: Epic 1 - Global bilingual toggle (BG/EN) integration.
FR11: Epic 3 - Technical terminology parity in project details.
FR12: Epic 1 - Persistent 5-page horizontal navigation.
FR13: Epic 1 - Responsive architecture for mobile/desktop.
FR14: Epic 1 - Institutional footer with legal and contact data.
FR15: Epic 5 - Decap CMS workflow for adding new projects.
FR16: Epic 5 - Automated Git-native image optimization pipeline.
FR17: Epic 5 - No-code updates for services and technical specs.

## Epic List

### Epic 1: High-Performance Foundation & Core Layout
Establish the "Institutional Stability" baseline. This epic delivers the Astro v5 infrastructure, global i18n routing, and the core navigational shell (Header/Footer) optimized for sub-1s load times.
**FRs covered:** FR10, FR12, FR13, FR14.

### Epic 2: Technical Showcase - Owned Machinery & Teams
Implement the "Trust" center. This epic focuses on demonstrating technical capacity through specialized showcases of proprietary pile-driving machinery and certified personnel.
**FRs covered:** FR1, FR2, FR3.

### Epic 3: Professional Project Portfolio
Build the "Boardroom Discovery" engine. An interactive, filterable gallery of utility-scale projects with a narrative-driven "Audit Trail" (Challenge -> Scope -> Outcome).
**FRs covered:** FR4, FR5, FR6, FR7, FR11.

### Epic 4: B2B Lead Generation Pipeline
Create the "Conversion" channel. A high-security, professional lead intake system integrated with Cloudflare Turnstile and serverless email dispatch.
**FRs covered:** FR8, FR9.

### Epic 5: Content Management Operations (Decap CMS)
Enable "Audit Freshness." Integration of Decap CMS to allow non-technical administrators to update technical specs and projects via a version-controlled Git workflow.
**FRs covered:** FR15, FR16, FR17.
## Epic 1: High-Performance Foundation & Core Layout

Establish the "Institutional Stability" baseline. This epic delivers the Astro v5 infrastructure, global i18n routing, and the core navigational shell (Header/Footer) optimized for sub-1s load times.

### Story 1.1: Project Initialization & i18n Routing
As a developer,
I want to initialize the project using the CodeStitch Astro template and configure bilingual routing,
So that the site can be accessed at both Bulgarian and English sub-paths.

**Acceptance Criteria:**

**Given** the CodeStitch template is selected
**When** the initialization command `npx create-astro@latest --template CodeStitchOfficial/Intermediate-Astro-Decap-CMS` is run
**Then** the project structure is created following the Architecture specification
**And** the `astro.config.mjs` is updated to support `bg` and `en` locales
**And** navigating to `/` redirects to the default locale (`bg`)
**And** navigating to `/en` shows the English root.

### Story 1.2: Institutional Header & Footer
As a visitor,
I want to see a persistent corporate header and footer,
So that I can easily navigate the 5 core pages and find legal/contact information.

**Acceptance Criteria:**

**Given** a visitor is on any page
**When** the page loads
**Then** a horizontal header is visible containing the Green Sunrise logo and 5 navigation links (Home, About, Services, Projects, Contact)
**And** the footer is visible containing the GS Stamp, VAT number, physical address, and contact email
**And** the header remains responsive across mobile and desktop.

### Story 1.3: Bilingual Language Switcher
As an international investor,
I want to toggle the site language between Bulgarian and English,
So that I can review technical documents in my preferred language without losing my current page context.

**Acceptance Criteria:**

**Given** a visitor is on a specific page (e.g., `/projects`)
**When** they click the 'EN' toggle in the header
**Then** the URL changes to `/en/projects`
**And** the content updates to the English version instantly
**And** the language preference is persisted across subsequent navigation.

### Story 1.4: Global Performance CSS Foundation
As a user,
I want the site to load instantly without visual shifts,
So that the company's "Technical Authority" is established immediately.

**Acceptance Criteria:**

**Given** the Zero-Runtime CSS philosophy
**When** the project is built
**Then** all styles are delivered via Vanilla CSS tokens with the `--gs-` prefix
**And** the "First Contentful Paint" (FCP) is measured at <1.0s on a 4G connection
**And** CSS variables for `Institutional Green`, `Slate Gray`, and `Executive White` are applied across all layouts.

## Epic 2: Technical Showcase - Owned Machinery & Teams

Implement the "Trust" center. This epic focuses on demonstrating technical capacity through specialized showcases of proprietary pile-driving machinery and certified personnel.

### Story 2.1: Machinery Schema & Content Collection
As a developer,
I want to define a type-safe schema for owned machinery,
So that I can ensure all technical specs (weight, impact power, model) are correctly stored and retrieved.

**Acceptance Criteria:**

**Given** the Architecture's Content Collection specification
**When** the `machinery` collection is defined in `src/content/config.ts`
**Then** it requires fields: `title`, `model`, `weight`, `impactPower`, `heroImage`, and `galleryImages`
**And** any markdown entry missing these fields fails the build.

### Story 2.2: Machinery Showcase Component
As a project lead (Ivan),
I want to see high-resolution photos and specs of the pile-drivers Green Sunrise owns,
So that I can verify they have the equipment required for my site.

**Acceptance Criteria:**

**Given** a list of owned machinery data
**When** the user visits the "Services" or dedicated "Machinery" section
**Then** a grid of machinery cards is displayed
**And** each card shows the machine's primary photo and key technical specifications
**And** clicking a card opens a detailed view with a high-resolution gallery.

### Story 2.3: Technical Team Profiles & Certifications
As an international investor,
I want to read about the certifications and experience of the technical teams,
So that I can be confident in the professional standard of the labor.

**Acceptance Criteria:**

**Given** a collection of team profile data
**When** the user navigates to the "About" or "Teams" section
**Then** they see profiles of key technical leads and department heads
**And** each profile includes a list of relevant EU/Local certifications and years of experience
**And** the "Green Sunrise" stamp of quality is applied to each verified profile.

### Story 2.4: "Machinery Ownership" Trust Declaration
As a visitor,
I want a clear visual confirmation that the machinery is owned, not rented,
So that I can mitigate the risk of subcontractor equipment failure.

**Acceptance Criteria:**

**Given** a machinery detail page or service highlight
**When** viewing the specs
**Then** a prominent "Owned & Maintained by GS" badge (the GS Stamp) is visible
**And** a declaration statement confirming direct ownership is included in the technical metadata.

## Epic 3: Professional Project Portfolio

Build the "Boardroom Discovery" engine. An interactive, filterable gallery of utility-scale projects with a narrative-driven "Audit Trail" (Challenge -> Scope -> Outcome).

### Story 3.1: Project Content Collection & Schema
As a developer,
I want to define a type-safe schema for projects including MW capacity and terrain,
So that I can enforce technical accuracy across the portfolio.

**Acceptance Criteria:**

**Given** the need for structured project data
**When** the `projects` collection is defined in `src/content/config.ts`
**Then** it requires fields: `title`, `capacityMW` (number), `location`, `terrainType`, `date`, `heroImage`, and `isVerified`.

### Story 3.2: Boardroom Gallery - High-Impact Grid
As an EPC Lead (Ivan),
I want a grid of project cards that highlights the MW capacity in large typography,
So that I can immediately identify projects relevant to my scale requirements.

**Acceptance Criteria:**

**Given** the "Data Hero" UX pattern
**When** the Project Gallery page loads
**Then** each project card displays the `capacityMW` prominently using Geist Mono font
**And** the card shows the location and terrain type
**And** the "GS Stamp" is visible on verified projects.

### Story 3.3: Multi-Parameter Project Filtering
As a user,
I want to filter the project gallery by capacity, location, or terrain,
So that I can find technical proof that matches my specific site conditions.

**Acceptance Criteria:**

**Given** a gallery with multiple projects
**When** the user selects a filter (e.g., "Terrain: Mountainous")
**Then** the grid updates instantly to show only matching projects
**And** the filtering logic runs on the client-side for zero-lag presentation.

### Story 3.4: The "Audit Trail" Project Page
As an investor (Maria),
I want a project detail page structured by Challenge, Scope, and Outcome,
So that I can evaluate the company's technical process and results.

**Acceptance Criteria:**

**Given** a user has clicked on a project card
**When** the project detail page loads
**Then** it displays the "The Challenge," "Technical Scope," and "The Outcome" sections
**And** a high-resolution photo gallery of the project is visible
**And** the technical specs are displayed in a precise, high-contrast sidebar or section.

### Story 3.5: Technical Terminology Localization (BG/EN)
As a user,
I want technical terms like "MWp" or "Pile-Driving" to be correctly translated,
So that the professional authority of the site is maintained in both languages.

**Acceptance Criteria:**

**Given** a bilingual project entry
**When** switching between Bulgarian and English
**Then** all technical labels (Capacity, Terrain, Status) use the correct industry terminology
**And** the meaning and precision of the data is preserved across translations.

## Epic 4: B2B Lead Generation Pipeline

Create the "Conversion" channel. A high-security, professional lead intake system integrated with Cloudflare Turnstile and serverless email dispatch.

### Story 4.1: Specialized B2B Contact Form
As a visitor (Ivan),
I want to specify my project type and technical requirements in a contact form,
So that my inquiry is qualified and ready for a technical discussion.

**Acceptance Criteria:**

**Given** the contact page or a project inquiry link
**When** the user fills out the form
**Then** they must provide `Name`, `Company`, `Email`, `Project Type` (Utility/Roof), and `Message`
**And** the form requires all fields before submission.

### Story 4.2: Anti-Spam Security - Cloudflare Turnstile
As an administrator,
I want to protect the contact form from spam without frustrating professional users,
So that I only receive legitimate business inquiries.

**Acceptance Criteria:**

**Given** the contact form is visible
**When** the page loads
**Then** a Cloudflare Turnstile widget is rendered
**And** form submission is blocked until the Turnstile challenge is passed
**And** the UX remains transparent and non-intrusive.

### Story 4.3: Serverless Lead Routing (Resend API)
As an administrator,
I want form submissions to be sent directly to the B2B email inbox,
So that I can respond to inquiries in a timely manner.

**Acceptance Criteria:**

**Given** a valid form submission
**When** the "Send Inquiry" button is clicked
**Then** a serverless function (`src/pages/api/contact.ts`) is triggered
**And** the data is validated and dispatched via the Resend API
**And** the user receives a "Success" confirmation toast message.

### Story 4.4: B2B Lead Data Format
As an administrator,
I want the inquiry emails to be formatted professionally with all technical details,
So that I can quickly assess the project scope from my inbox.

**Acceptance Criteria:**

**Given** an inquiry email is received
**When** opened
**Then** it contains the `Project Type`, `Inquiry Source` (e.g., specific project page), and `Technical Specs` provided
**And** the email subject line clearly identifies the "New Strategic Partnership Inquiry."

## Epic 5: Content Management Operations (Decap CMS)

Enable "Audit Freshness." Integration of Decap CMS to allow non-technical administrators to update technical specs and projects via a version-controlled Git workflow.

### Story 5.1: Decap CMS Configuration & Authentication
As a developer,
I want to configure Decap CMS with GitHub OAuth,
So that only authorized administrators (like Georgi) can access the content management interface.

**Acceptance Criteria:**

**Given** the CodeStitch template foundation
**When** the `/admin/config.yml` is updated
**Then** it points to the correct GitHub repository
**And** authentication is handled via GitHub OAuth
**And** accessing `/admin` redirects to the login screen.

### Story 5.2: Project CMS Fields (MW, Terrain, Photos)
As an administrator (Georgi),
I want to add new projects via a simple form with MW and terrain fields,
So that I can update the portfolio without editing raw markdown files.

**Acceptance Criteria:**

**Given** an authorized CMS session
**When** creating or editing a "Project" entry
**Then** fields for `Title`, `Capacity (MW)`, `Location`, `Terrain Type`, and `Photos` are available
**And** the UI validates that capacity is a number and terrain is a selection from the approved list.

### Story 5.3: Automated Git-Native Image Optimization
As an administrator,
I want my uploaded project photos to be optimized automatically,
So that the site performance remains <1s FCP even after adding many high-res images.

**Acceptance Criteria:**

**Given** a project photo upload in the CMS
**When** the entry is saved and a Git commit is triggered
**Then** the Cloudflare/Astro build pipeline automatically processes the image into modern web formats (WebP/AVIF)
**And** the resulting site uses these optimized assets in the Project Gallery.

### Story 5.4: Professional Spec Updates (No-Code)
As an administrator,
I want to update service descriptions and technical specifications without touching code,
So that the site's "Technical Authority" claims are always up to date.

**Acceptance Criteria:**

**Given** a change in service technical specs or machinery details
**When** updated via the Decap CMS
**Then** a new Git commit is generated
**And** the live site reflects the updated technical content within the defined CI/CD rebuild window.
