  - step-03-success
  - step-04-journeys
  - step-05-domain
  - step-06-innovation
  - step-07-project-type
  - step-08-scoping
  - step-09-functional
  - step-10-nonfunctional
  - step-11-polish
  - step-12-complete
---

# Product Requirements Document - green-sunrise

**Author:** Icytank
**Date:** 2026-01-20T15:33:00+02:00

## Success Criteria

### User Success

- **The "Confidence" Moment (EPC Leads):** A project lead finds the "Owned Pile-Drivers" detail and immediately feels the risk of scheduling delays has been mitigated.
- **The "Trust" Moment (Investors):** An international investor toggles to English and sees a professional project gallery that validates the company's technical capacity.
- **Information Accessibility:** Users can find specific MW capacity and scope for any project within 2 clicks.

### Business Success

- **B2B Lead Generation:** At least 3 qualified Industrial/PV inquiries via the contact form in the first 3 months.
- **Market Differentiation:** Successfully shifting the brand perception from "another subcontractor" to "the specialist with the machinery."
- **International Visibility:** Significant engagement from non-Bulgarian IP addresses on the English version of the site.

### Technical Success

- **Performance:** Maintaining <1s "First Contentful Paint" using the Astro/Cloudflare stack.
- **Localization:** 100% content parity between Bulgarian and English versions.
- **SEO Authority:** Ranking on Page 1 for local "PV installation Bulgaria" B2B searches.

## Product Scope

### MVP - Minimum Viable Product

- **5 Core Pages:** Home, About, Services, Projects, Contact.
- **Bilingual Support:** Full English/Bulgarian localization.
- **Technical Showcase:** Focal point on owned pile-driving machinery and professional teams.
- **Project Gallery:** Initial showcase of the 8 utility-scale projects.
- **B2B Lead Form:** Standard intake for project inquiries.

### Growth Features (Post-MVP)

- **Interactive ROI/Solar Yield Calculators.**
- **Dedicated Client Documentation Portal.**
- **Project Map Integration** (visualizing project locations across Europe).
- **Dynamic Case Study Blog.**

### Vision (Future)

- **Expanded geographic reach across Europe.**
- **Advanced site-specific technical documentation for auditors.**

## User Journeys

### Journey 1: Ivan, the High-Pressure Project Lead
- **The Scene:** Ivan is an EPC manager with a utility-scale project in Southern Bulgaria. A subcontractor just backed out because their rented pile-driver broke down. Ivan is 2 weeks behind schedule and looking for a "stable" replacement.
- **The Action:** He searches for "specialized PV pile driving Bulgaria." He lands on green-sunrise.bg.
- **The Climax:** He sees the banner: "We own our machinery." He clicks "Projects" and filters for utility-scale sites. He sees 8 completed projects with photos of the exact machines in action.
- **The Resolution:** He clicks the "Request Partnership" button. He feels relieved because he’s found a partner that doesn't rely on third-party equipment.

### Journey 2: Maria, the International Investor
- **The Scene:** Maria represents a German investment fund looking to scale their Bulgarian portfolio. She's wary of "local-only" shops that might not meet Euro-standard documentation or communication.
- **The Action:** She visits the site from a LinkedIn recommendation. She immediately toggles the site to English.
- **The Climax:** She reads the "About Us" section which details the technical certifications and professional team training. She views the "Services" page, which is perfectly translated and technically precise.
- **The Resolution:** She bookmarks the site and sends it to her technical auditor with the note: "This team looks ready for international collaboration."

### Journey 3: Georgi, the Internal Site Admin
- **The Scene:** Georgi is a lead engineer at Green Sunrise. They just finished a new 10MW project and have 5 high-res photos and technical data.
- **The Action:** He needs to get this new success story onto the website quickly so it can be used for an upcoming bid.
- **The Climax:** He opens the project management system (or content files) and uploads the photos, MW capacity, and terrain type.
- **The Resolution:** The site rebuilds (Astro) and the new project is live within minutes.

### Journey Requirements Summary

- **Dynamic Project Gallery:** Ability to showcase MW capacity, scope, and photos.
- **Localization Engine:** Seamless EN/BG switching for all technical content.
- **Machinery Showcase:** Dedicated UI component for owned equipment.
- **Performance/Speed:** Site must load instantly to reflect technical excellence.
- **Content Management:** Simplified workflow for adding new projects (Markdown/Git-based).

## Web App Specific Requirements

### Project-Type Overview
- **Type:** High-performance Multi-Page Application (MPA).
- **Stack:** Astro framework with Cloudflare hosting/deployment.
- **Focus:** Technical authority, speed, and B2B lead generation.

### Technical Architecture Considerations
- **Rendering Strategy:** Static Site Generation (SSG) via Astro for maximum performance and SEO.
- **Responsive Design:** Full mobile responsiveness ensure high-quality experience across all devices (Mobile-First approach).
- **Performance Targets:** Aiming for "Perfect Lighthouse Scores" (100/100) and <1s First Contentful Paint.
- **Legacy Support:** No legacy browser support requirements; focusing on modern enterprise browsers (Chrome, Edge, Safari).
- **Accessibility:** Standard web best practices; no specific WCAG compliance requirements at this stage.

### SEO & Localization Strategy
- **Bilingual Interface:** Bulgarian (BG) and English (EN) support for all pages.
- **Standard SEO:** Implementation of meta tags, OpenGraph (OG) for LinkedIn/B2B sharing, and semantic HTML.
- **Technical SEO:** Fast load times and high Core Web Vitals to drive organic authority in the PV installation niche.

### Implementation Considerations
- **Content Management:** Git-based workflow using a **Simple Headless CMS** (e.g., Decap CMS) for non-technical project and service updates.
- **Asset Optimization:** Git-Native strategy; automated image optimization via Astro's built-in image processing for high-res machinery and project photos.
- **Lead Routing:** Form data is routed via a serverless function to a designated **B2B Email Inbox**.
- **CI/CD Pipeline:** Automated builds and deployments via Cloudflare Pages.

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Quality & Trust MVP
**Resource Requirements:** Small specialized team (Design + Astro Dev + Content)

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Journey 1: Ivan (Technical Proof)
- Journey 2: Maria (International Credibility)
- Journey 3: Georgi (Content Freshness)

**Must-Have Capabilities:**
- **Mobile First Design:** Full responsiveness for on-site technicians and busy EPC leads.
- **5 Core Pillar Pages:** Home, About, Services, Projects, Contact.
- **High-Performance Project Gallery:** Filterable technical showcases.
- **Owned Machinery Showcase:** Direct evidence of technical capacity.
- **Bilingual Technical Parity:** Bulgarian and English versions.
- **Optimized B2B Contact Form:** Streamlined lead intake.

### Post-MVP Features

**Phase 2 (Post-MVP):**
- Interactive Project Map
- Dynamic Case Study Blog

**Phase 3 (Expansion):**
- Client/Partner Documentation Portal
- Solar Yield / ROI Calculators

### Risk Mitigation Strategy

**Technical Risks:** Image weight vs. Performance (Mitigation: Astro optimization).
**Market Risks:** Lack of perceived authority (Mitigation: Focus on machinery ownership).
**Resource Risks:** Content bottleneck (Mitigation: Simple Markdown-based project entry).

## Functional Requirements

### Technical Showcase (Machinery & Teams)
- **FR1:** Visitors can view high-resolution imagery and technical specifications of owned pile-driving machinery.
- **FR2:** Visitors can access detailed profiles of technical teams and their certifications.
- **FR3:** Visitors can verify the company's technical capacity through "machinery ownership" declarations.

### Project Portfolio
- **FR4:** Visitors can browse a gallery of completed PV projects.
- **FR5:** Visitors can filter projects by capacity (MW), location, or terrain type.
- **FR6:** Visitors can view project-specific details including scope of work, timeline, and results.
- **FR7:** Visitors can view a high-resolution photo gallery for each individual project.

### Lead Generation
- **FR8:** Visitors can initiate a partnership inquiry via a specialized contact form.
- **FR9:** Visitors can specify their project type and technical requirements in the contact request.

### Bilingual Content & Localization
- **FR10:** Users can toggle the entire site content between Bulgarian and English at any time.
- **FR11:** Users can find technical terminology parity across all translated services and project details.

### Navigation & Mobile Experience
- **FR12:** Users can navigate the 5 core pillar pages via a persistent header.
- **FR13:** Users can access the site with full functionality on any modern mobile or desktop browser (Responsive Design).
- **FR14:** Users can find critical company legal/contact info (VAT, address) in the footer.

### Content Management (Admin Flow)
- **FR15:** Administrators can add new PV projects to the portfolio via a **Simple CMS Interface** (Decap CMS).
- **FR16:** Administrators can upload and link project photography which is automatically optimized and stored in the repository.
- **FR17:** Administrators can update service descriptions and technical specs without touching raw code.

## Non-Functional Requirements

### Performance
- **NFR1:** The site must achieve a "First Contentful Paint" (FCP) of <1.0s for users on modern 4G/5G connections.
- **NFR2:** The site must maintain a 100/100 score across Performance, Accessibility, and SEO in Chrome Lighthouse audits.
- **NFR3:** All high-res project imagery must be automatically optimized/web-formatted to prevent payload bloat.

### Reliability & Availability
- **NFR4:** The site must maintain 99.9% availability leveraging Cloudflare's global CDN.
- **NFR5:** International users must experience latency parity with local Bulgarian users via edge caching.

### Security & Trust
- **NFR6:** 100% of traffic must be served over HTTPS (SSL/TLS).
- **NFR7:** The contact form must implement standard anti-spam (e.g., Turnstile) and secure server-side email dispatch to prevent malicious injections or SMTP exposure.

### Localization Quality
- **NFR8:** There must be 100% structural and technical parity between the Bulgarian and English versions of the site.
