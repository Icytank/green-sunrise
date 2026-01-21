---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
workflowType: 'architecture'
lastStep: 8
status: 'complete'
completedAt: '2026-01-20T17:18:03+02:00'
inputDocuments:
  - /mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md
  - /mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md
  - /mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/product-brief-green-sunrise-2026-01-20.md
project_name: 'green-sunrise'
user_name: 'Icytank'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
The system must provide a secure, high-performance platform for B2B lead generation. This involves a specialized "Machinery & Team" showcase, a filterable "Project Portfolio" (MW, location, terrain), and a bilingual (EN/BG) interface. Content management is handled via a Git-based headless CMS (Decap) allowing non-technical updates to projects and services.

**Non-Functional Requirements:**
- **Performance:** Sub-1s FCP and perfect Lighthouse scores are mandatory for architectural "Technical Authority."
- **Localization:** 100% parity across all technical specs.
- **Reliability:** 99.9% uptime via Cloudflare's global edge network.
- **Security:** Static-first approach reduces attack surface; Turnstile for form security.

**Scale & Complexity:**
The project is a professional multi-page application with a focus on information density and presentation quality.

- Primary domain: Web (Astro / Cloudflare)
- Complexity level: Medium
- Estimated architectural components: 5-8 Core Layouts/Components (Nav, Hero, Gallery, Card, Form, Footer)

### Technical Constraints & Dependencies

- **Astro (Core Framework):** For SSG performance.
- **Vanilla CSS (Styling):** Token-based system for zero-runtime overhead.
- **Cloudflare (Deployment):** Edge delivery and serverless forms.
- **Decap CMS (Content):** Git-native management of Markdown and assets.

### Cross-Cutting Concerns Identified

- **Bilingual State Management:** Ensuring the language persists across the entire audit trail.
- **Image Optimization Pipeline:** Automated processing of high-res project imagery to maintain performance.
- **Design Token Consistency:** Enforcing the "Institutional Stability" aesthetic across all components.

---

## ADR-001: Architecture Decisions & Trade-offs

I have conducted an expert panel review (ADR Debate) with Winston (Architect), Amelia (Dev), and Sally (UX) to validate our technical direction.

### 1. Astro (MPA) + View Transitions
**Decision:** We will use Astro as a Multi-Page Application (MPA) but leverage the View Transitions API.
**Rationale:** This provides pure HTML/CSS performance (<1s FCP) while maintaining the premium "native slide deck" feel required for boardroom presentations. It avoids the heavy JavaScript payload of typical SPAs like Next.js.

### 2. Vanilla CSS Design Tokens
**Decision:** We will implement styling using Vanilla CSS variables (Tokens) rather than a utility framework like Tailwind.
**Rationale:** This ensures 100% bespoke control over the branding (especially the specialized "GS Stamp" badges) and guarantees the smallest possible CSS payload.

### 3. Decap CMS (Git-Native Content)
**Decision:** Content will be managed via Decap CMS, storing project data as versioned Markdown in Git.
**Rationale:** This creates a permanent "Audit Trail" for technical proof. Changes trigger automated Cloudflare builds where images are optimized at the edge, ensuring Georgi (Admin) can add content without compromising performance.

---

## Starter Template Evaluation

### Primary Technology Domain
**Web (Astro MPA)** based on project requirements for technical excellence and performance.

### Starter Options Considered

| Option | Tech Highs | Trade-offs |
| :--- | :--- | :--- |
| **CodeStitch Intermediate** | Astro v5, Decap CMS, ViewTransitions | Needs restyling for GS Brand |
| **Astro i18n Starter** | Pure focus on localization/SEO | No CMS pre-configured |
| **Astro Bare** | Maximum control, zero bloat | High manual setup effort |

### Selected Starter: CodeStitch Intermediate Astro + Decap

**Rationale for Selection:**
This starter provides the most "implementation-ready" foundation. It pre-solves the integration between **Astro v5** and **Decap CMS**, while including the **ViewTransitions API** logic we need to make the portfolio feel like a native presentation deck. 

**Initialization Command:**
```bash
npx create-astro@latest --template CodeStitchOfficial/Intermediate-Astro-Decap-CMS
```

**Architectural Decisions Provided by Starter:**
- **Framework:** Astro v5 (SSG mode).
- **Core Patterns:** Git-based content management via Decap; Component-based architecture.
- **UX Foundation:** Native View Transitions enabled for seamless navigation.

---

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- **Content Engine:** Astro Content Collections (v5) for type-safe project data.
- **Localization:** Sub-path strategy (`/` and `/en/`) using Astro i18n.
- **Deployment:** Cloudflare Pages (SSG) with serverless Functions for lead handling.

**Important Decisions (Shape Architecture):**
- **Authentication:** GitHub OAuth for Decap CMS access control.
- **Lead Pipeline:** Cloudflare Turnstile + Resend API for B2B form deliverability.

### Data Architecture

**Decision:** Astro Content Collections (v5)
**Rationale:** We will use Astro's native content engine to define strict TypeScript schemas for projects, services, and machinery. This prevents "broken" entries by enforcing required fields like `capacity_mw`, `terrain_type`, and `hero_image`.

### Authentication & Security

**Decision:** GitHub OAuth + Cloudflare Turnstile
**Rationale:** Since the site is Git-based, GitHub OAuth provides a seamless, institutional-grade access control for Decap CMS. Cloudflare Turnstile will protect the B2B contact form from spam without the UX friction of traditional CAPTCHAs.

### API & Communication Patterns

**Decision:** Serverless Lead Handlers (Cloudflare Functions)
**Rationale:** The front-end remains 100% static (SSG) for performance, but lead generation will use an on-demand serverless function to validate data and dispatch emails via the **Resend** API.

### Infrastructure & Deployment

**Decision:** Cloudflare Pages + Edge Routing
**Rationale:** Maximizes global performance parity. The Bulgarian and English versions will be served from the edge nearest to the user, ensuring the <1s FCP target is met worldwide.

### Decision Impact Analysis

**Implementation Sequence:**
1. Initialize Project via CodeStitch Starter.
2. Configure Astro i18n sub-paths (`/`, `/en/`).
3. Define Content Collection schemas (Projects, Teams, Machinery).
4. Configure Cloudflare/GitHub OAuth for CMS access.
5. Implement Serverless Contact Form handler.

---

## Implementation Patterns & Consistency Rules

To ensure that multiple AI agents (Developer, QA, Writer) work consistently on **green-sunrise**, the following mandatory patterns are established.

### Naming Patterns

**Code Naming Conventions:**
- **Astro Components:** **PascalCase** (e.g., `ProjectCard.astro`, `LeadForm.astro`).
- **Styles/Tokens:** All CSS variables must use the **`--gs-`** prefix (e.g., `--gs-institutional-green`).
- **Generic Files:** **kebab-case** for utilities, assets, and standard TypeScript files (e.g., `image-optimizer.ts`).

### Structure Patterns

**Project Organization:**
- **Localization:** Content collections will use a **subdirectory strategy** for EN/BG parity.
  - `src/content/projects/bg/*.md`
  - `src/content/projects/en/*.md`
- **Tests:** **Co-located** naming pattern. Tests must live in the same directory as the target file using the `*.test.ts` or `*.spec.ts` suffix.

### Process & Logic Patterns

**Zero-Runtime Philosophy:**
- **JS Constraint:** All agents must prioritize HTML and Vanilla CSS. Client-side `<script>` tags are strictly reserved for high-priority boardroom interactions (e.g., filtering logic, view transitions).
- **Asset Optimization:** Every image added to a project must be handled via Astro's `<Image />` component or the defined optimization pipeline.

### Enforcement Guidelines

**All AI Agents MUST:**
- Check for existing CSS variables in `src/styles/tokens.css` before adding new colors.
- Ensure 100% technical terminology parity when creating content in the Bulgarian/English directories.
- Run co-located tests after any component modification to verify the "Institutional" layout hasn't regressed.

---

## Architecture Validation Results

### Coherence Validation ✅
Decision Compatibility: All technology choices (Astro v5, Decap CMS, Cloudflare) are inherently compatible and optimized for static-first delivery. Patterns like PascalCase components and co-located tests align perfectly with standard Astro/Vite workflows.

### Requirements Coverage Validation ✅
Functional Requirements Coverage: Every FR, from the "Owned Machinery Showcase" to the "B2B Lead Form," is mapped to a specific Astro component or Content Collection schema.
Non-Functional Requirements Coverage: Performance (SSG), Localization (Sub-paths), and Security (Turnstile/Static-first) are baked into the core decisions.

### Implementation Readiness Validation ✅
AI agents have a complete project tree, strict naming conventions, and clear data boundaries. The use of Astro Content Collections provides a compile-time check for data integrity.

### Architecture Readiness Assessment
**Overall Status:** READY FOR IMPLEMENTATION
**Confidence Level:** High

**Key Strengths:** 
- Bulletproof performance via SSG.
- "Audit Trail" integrity via Git-based content.
- Premium "Presentation Deck" UX via native View Transitions.

### Implementation Handoff
**AI Agent Guidelines:**
- Use the **`--gs-`** prefix for all new CSS variables.
- Place all project technical specs in **`src/content/projects`**.
- Maintain the physical **`[lang]`** route structure for all pages.

**First Implementation Priority:** 
```bash
npx create-astro@latest --template CodeStitchOfficial/Intermediate-Astro-Decap-CMS
```

---

## Project Structure & Boundaries

### Complete Project Directory Structure

```
green-sunrise/
├── public/                 # Static assets (favicons, logos)
├── src/
│   ├── components/         # PascalCase Astro Components
│   │   ├── Header.astro    # Bilingual Nav switcher
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── MachineryCard.astro
│   │   └── GSStamp.astro    # The specialized trust badge
│   ├── content/            # Type-safe collections (Astro v5)
│   │   ├── config.ts       # Schema definitions (MW, Terrain, etc.)
│   │   ├── projects/
│   │   │   ├── bg/         # Bulgarian project data
│   │   │   └── en/         # English project data
│   │   ├── teams/
│   │   └── machinery/
│   ├── layouts/            # Base layouts
│   │   └── BaseLayout.astro
│   ├── pages/              # Routing logic
│   │   ├── index.astro     # Redirects to /bg or /en
│   │   ├── [lang]/         # Dynamic localization pages
│   │   │   ├── index.astro
│   │   │   ├── projects/   # /en/projects/
│   │   │   └── about.astro
│   │   └── api/
│   │       └── contact.ts  # Serverless form handler
│   ├── styles/             # Vanilla CSS
│   │   ├── tokens.css      # --gs- tokens
│   │   └── global.css      # Reset and base styles
│   └── utils/              # kebab-case helpers
│       └── i18n-helpers.ts
├── admin/                  # Decap CMS Configuration
│   └── config.yml          # CMS field definitions
├── package.json            # Astro v5 & Dependencies
├── astro.config.mjs        # i18n and Cloudflare setup
└── tsconfig.json
```

### Architectural Boundaries

**Data Boundary:**
All technical specifications and project metadata must reside within the `src/content` directory. The schema in `config.ts` acts as the source of truth for all "Technical Authority" claims.

**Logic Boundary:**
Server-side operations (form validation, email dispatch) are strictly contained within `src/pages/api`. The main site remains a static MPA for maximum performance.

**Language Boundary:**
The physical `[lang]` route structure ensures that the user's chosen language (Bulgarian or English) is persistent across the entire audit trail and shareable via URL.

### Requirements to Structure Mapping

**Project Portfolio (FR4-FR7):**
- **Data:** `src/content/projects/`
- **UI:** `src/pages/[lang]/projects/`, `src/components/ProjectCard.astro`

**Technical Showcase (FR1-FR3):**
- **Data:** `src/content/machinery/`, `src/content/teams/`
- **UI:** `src/components/MachineryCard.astro`, `src/components/GSStamp.astro`

**B2B Lead Generation (FR8-FR9):**
- **Logic:** `src/pages/api/contact.ts`
- **UI:** `src/components/ContactForm.astro`

**Localization (FR10-FR11):**
- **Logic:** `src/pages/[lang]/` routes + `src/utils/i18n-helpers.ts`
- **UI:** `src/components/Header.astro` (Language Switcher)

---

## Architecture Completion Summary

### Workflow Completion

**Architecture Decision Workflow:** COMPLETED ✅
**Total Steps Completed:** 8
**Date Completed:** 2026-01-20
**Document Location:** /mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md

### Final Architecture Deliverables

**📋 Complete Architecture Document**
- All architectural decisions documented with specific versions.
- Implementation patterns ensuring AI agent consistency.
- Complete project structure with all files and directories.
- Requirements to architecture mapping.
- Validation confirming coherence and completeness.

**🏗️ Implementation Ready Foundation**
- **Decision Count:** ~15 core architectural decisions made.
- **Pattern Count:** 4 mandatory implementation patterns defined.
- **Component Count:** 8 main architectural areas specified.
- **Requirement Coverage:** 100% of functional and non-functional requirements.

### Implementation Handoff

**AI Agent Implementation Guide:**
- **Stack:** Astro v5 (SSG) + Decap CMS + Vanilla CSS.
- **Consistency:** Use PascalCase for components and `--gs-` prefix for all CSS tokens.
- **Localization:** Follow the sub-folder (`/bg/`, `/en/`) strategy for both pages and content.

**First Implementation Priority:**
```bash
npx create-astro@latest --template CodeStitchOfficial/Intermediate-Astro-Decap-CMS
```

---

**Architecture Status:** READY FOR IMPLEMENTATION ✅
