---
project_name: 'green-sunrise'
user_name: 'Icytank'
date: '2026-01-20T17:51:59+02:00'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'quality_rules', 'workflow_rules', 'anti_patterns']
status: 'complete'
rule_count: 21
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- **Framework:** Astro v5 (SSG Mode)
- **CMS:** Decap CMS (Git-based Content Management)
- **Styling:** Vanilla CSS with Custom Design Tokens
- **Cloud/Deployment:** Cloudflare Pages + Edge Routing
- **Lead Pipeline:** Cloudflare Functions (Serverless) + Resend API
- **Localization:** Astro Native i18n (Sub-path strategy: `/bg/` and `/en/` with root redirect)
- **Data Validation:** Astro Content Collections (v5) schema validation

## Critical Implementation Rules

### Language-Specific Rules

- **Strict TypeScript:** Use explicit types for all utilities; avoid `any`.
- **Logic Extraction:** Component logic MUST be extracted into standalone `.ts` files for unit testing clarity.

### Framework-Specific Rules (Astro v5)

- **View Transitions State:** Agents MUST use the `astro:after-swap` event for re-initializing any client-side components. Do not use standard `window.onload`.
- **Content Collections:** define schemas in `src/content/config.ts` before adding Markdown files. Images MUST use the `image()` schema helper.
- **Astro Image:** Standard `<img>` tags are FORBIDDEN. Agents MUST use `astro:assets` for all project/machinery photos.

### Testing Rules

- **Co-Located Tests:** `[Filename].test.ts` lives next to the `[Filename].astro` or `.ts` file.
- **Vitest Integration:** Run logic tests via Vitest; avoid testing component templates unless UI regression is requested.

### Code Quality & Style Rules

- **PascalCase Components:** All Astro components MUST use PascalCase (e.g., `NavHeader.astro`).
- **CSS Variable Prefix:** Every custom CSS variable MUST use the `--gs-` prefix (e.g., `--gs-institutional-green`).
- **No Utility CSS:** Do not add Tailwind or Bootstrap. Use Vanilla CSS in `src/styles/`.

### Development Workflow Rules

- **Bilingual Sync:** Every project file in `bg/` MUST have a corresponding file with the same slug in `en/`.
- **Git CMS Workflow:** Content changes should be treated as commits to Markdown files in `src/content/`.

### Critical Don't-Miss Rules (Anti-Patterns)

- **No SPA Routing:** Rely exclusively on Astro's native MPA routing.
- **No Generic Badges:** Use the `GSStamp.astro` component for all Technical Authority badges.
- **Zero-JS Priority:** Prioritize HTML/CSS; client-side scripts are a last resort for interactivity.

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code.
- Follow ALL rules exactly as documented.
- When in doubt, prefer the more restrictive option.
- Update this file if new patterns are established by the user.

**For Humans:**

- Keep this file lean and focused on agent needs.
- Update when technology stack changes.
- Review quarterly for outdated rules.

Last Updated: 2026-01-20
