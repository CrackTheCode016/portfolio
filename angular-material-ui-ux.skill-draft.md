---
name: angular-material-ui-ux
description: Create polished Angular frontends with Angular Material, Material 3 theming, responsive layout, accessible interaction, and restrained animation. Use when implementing or refining Angular UI/UX, especially for requests about cleaner layouts, better spacing, Material-native components, cards, dialogs, navigation, theming, chip/button styling, mobile responsiveness, or subtle motion.
---

# Angular Material UI UX

## Overview

Use this skill to turn an Angular frontend into a cleaner, more intentional Angular Material experience. Prefer Material primitives first, then add only the minimum custom CSS needed for layout, brand polish, and motion.

Favor a concise, production-style result:
- Prefer one strong page over fragmented navigation when the content can live in a clear single flow
- Use modal detail or progressive disclosure instead of dumping long copy inline
- Keep copy straightforward and specific, not promotional or robotic
- Let the theme carry typography, color, dark mode, and component tone before adding local overrides
- Prefer readable, maintainable code over clever abstractions so the UI can be owned comfortably by a human team

## Default House Style

When the user wants a polished portfolio, product showcase, or editorial-technical landing page and does not provide a competing design system, default to this direction:
- Warm sand, parchment, or soft stone surfaces
- Deep teal or near-black ink with one sharper accent hue
- Large rounded outlined section shells with soft depth, not loud glassmorphism
- A visible but restrained page atmosphere: subtle grid, radial gradients, quiet halos
- Strong type hierarchy: oversized hero title, compact eyebrow, calm body text
- Card browsing on the page, with detail moved into modal or secondary screens
- Outlined tabs, chips, and buttons instead of filling everything with accent color
- Mobile-first stacking with desktop polish, not desktop-first compression
- Motion that clarifies structure, never constant card-level activity

If the user asks for a different direction, follow that instead.

## Working Model

Treat the UI as a system, not a pile of screens:
- Theme tokens define color, type, density, and surface behavior
- Shared layout primitives define shells, grids, stacks, and card rhythm
- Repeated section and card patterns should become reusable components before they become CSS exceptions
- Detail should expand through dialogs, drawers, or routes, not by making every card dense

## Workflow

### 1. Audit the existing surface

Identify:
- Which parts already use Angular Material correctly
- Which parts are custom-styled versions of Material patterns
- Where spacing, hierarchy, responsiveness, or motion feel inconsistent
- Whether the problem is structural, thematic, or purely visual

Start from the existing design system if one already exists.
Favor simplification when two approaches are equally capable.

### 2. Capture UI direction before building

Do not rely on vague requests like "clean", "modern", or "premium" if the user seems to want a specific visual outcome. Translate the request into a compact UI direction contract.

Research-backed guidance:
- Use a structured format instead of loose prose. Prompting guidance from OpenAI consistently recommends being specific about both the task and the desired output format.
- Keep the design brief explicit. Figma's design brief guidance emphasizes goals, audience, message, constraints, scope, and visual references.
- Keep style direction separate from implementation tokens. Angular Material theming guidance is strongest when product direction and theme/token implementation are distinct.

Use this structure when needed:

```yaml
ui_direction:
  product_type: portfolio | saas | dashboard | editorial | marketing | mobile
  audience: builders | consumers | recruiters | enterprise | mixed
  goals:
    primary: string
    secondary: [string]
  tone: calm technical | bold product | warm editorial | dense utilitarian
  density: airy | balanced | compact
  hierarchy: hero-first | content-first | browse-first
  surfaces: outlined | tonal | elevated | mixed
  card_behavior: concise cards + modal detail | dense cards | list rows
  motion: none | subtle | expressive
  color_direction: warm | neutral | dark | vivid | brand-led
  typography_direction: editorial | utilitarian | geometric | friendly
  references:
    emulate: [site/app names, screenshots, or links]
    avoid: [site/app names, screenshots, or links]
  constraints:
    must_keep: [brand, content, routes, analytics, accessibility, existing components]
    must_avoid: [hover zoom, glassmorphism, purple bias, etc.]
  deliverables:
    screens: [home, section, modal, dashboard, etc.]
    responsive_behavior: [mobile priorities, desktop priorities]
```

When helpful, also ask for or derive:
- A short design brief: purpose, audience, deliverables, constraints
- A moodboard or 2-5 visual references
- Anti-goals: what the UI should not feel like

If the user does not provide these, infer a direction and state the assumption briefly.

### 3. Refactor for readability before polishing

If the codebase is hard to iterate on, fix structure before visual tuning.

Prefer this cleanup order:
- Extract repeated `mat-card` or section-shell markup into reusable standalone components
- Centralize CTA and link-routing rules in small typed helpers instead of duplicating template logic
- Move broad styling off page-level wrappers and into component-local classes where possible
- Use direct-child selectors for container-card padding so nested cards are not affected
- Remove dead variants, unused selectors, and old one-off overrides before adding more CSS

A good result is when the page template mostly reads like content and composition, not low-level Material scaffolding.

### 4. Choose the right Material primitive

Use the official component list to map each UI problem to a native Angular Material component before inventing a custom pattern.

Prefer Angular Material components for:
- Navigation: `mat-toolbar`, `mat-sidenav`, `mat-nav-list`, `mat-menu`, `mat-tabs`
- Surfaces: `mat-card`, `mat-expansion-panel`, `mat-divider`, `mat-list`
- Actions: `mat-button`, `mat-icon-button`, `mat-fab`, `mat-button-toggle`
- Inputs: `mat-form-field`, `mat-input`, `mat-select`, `mat-autocomplete`, `mat-slide-toggle`
- Overlays: `MatDialog`, `mat-bottom-sheet`, `mat-snack-bar`, `mat-tooltip`
- Dense metadata: `mat-chip`, `mat-badge`, `mat-icon`

Do not reimplement buttons, dialogs, tabs, menus, form controls, or cards in custom CSS if Material already covers the interaction.

Read [references/material-docs.md](references/material-docs.md) when selecting components or checking whether Angular Material already provides a pattern.

### 5. Build layout with composition, not decoration

Use custom CSS mainly for:
- Page width and section containment
- Grid and stack layout
- Responsive reflow
- Visual grouping between sections
- Small brand-specific polish

Keep implementation style readable:
- Prefer small, explicit components and helpers
- Remove unused state, derived values, and dead variants
- Name layout tokens and shared UI patterns clearly
- Avoid clever indirection when straightforward code will do

Prefer:
- One content width for the page shell
- Consistent spacing tokens
- Contained section shells for major content groups
- Rounded "bubble" section containers built from Material surfaces when the page needs a softer premium feel
- Simple vertical flow on mobile
- Predictable card structure using `mat-card-header`, `mat-card-content`, `mat-divider`, and `mat-card-actions`
- Clear separation between card headers and content blocks

When repeated cards share structure, extract a reusable component instead of duplicating the same card markup in page templates.

When repeated sections share structure, extract a reusable section-shell component instead of repeating `section > mat-card > mat-card-content > heading`.

### 6. Use Material spacing first

Default to native Angular Material spacing inside repeated cards.

Only override internal spacing when there is a clear structural reason, and then do it carefully:
- Prefer dedicated component-local classes over broad global selectors
- Prefer targeting direct children when styling container cards so nested cards are not affected
- Do not style `.mat-mdc-card-content` broadly under a wrapper if that wrapper also contains nested cards
- Avoid fighting MDC internals when a simpler component boundary or native spacing solves the problem

For repeated browse cards, this is a strong baseline:
- `mat-card-header` for category/title
- Optional `mat-card-content` for a one-line or short description
- `mat-divider` before actions when the card needs stronger separation
- `mat-card-actions` for stacked primary/secondary actions

### 7. Use a deliberate card system

For portfolio-style or showcase pages, standardize card behavior:
- Spotlight cards can contain richer summaries, chips, and media
- Secondary cards should stay concise and hand off detail to `More details` or a modal
- Keep one clear primary CTA per card and one optional secondary technical link
- If both live product and repository exist, lead with the product and place the repo second
- If only a repository exists, `View Project` should point to the repository
- Prefer full-width stacked actions when card widths vary significantly
- Keep button labels short and uniform across card sets

A strong default structure is:

```html
<mat-card appearance="outlined">
  <app-project-media />
  <mat-card-header />
  <mat-card-content />
  <mat-divider />
  <mat-card-actions />
</mat-card>
```

### 8. Drive color and type through the theme first

Adjust the Angular Material theme before adding one-off overrides.

Use the theme for:
- Primary, secondary, tertiary, and surface colors
- Typography family and weight
- Density choices
- Component tokens

Keep per-component color overrides rare. Use them only for deliberate semantic accents like technology chips or status indicators.

When semantic chips are needed:
- Map chip color to the actual technology or status, not just the section
- Keep chip styling classic and readable
- In dark mode, make non-accent text light enough to stay legible
- Prefer one dominant accent family for the product and use other hues only when they carry meaning

Read [references/material-docs.md](references/material-docs.md) before changing the theme or styling custom components around the theme.

### 9. Add motion carefully

Animation should clarify structure, not slow the page down.

Prefer:
- Entrance and reveal motion only where it helps orientation
- Subtle background motion behind content, not on top of it
- Small state transitions for chips, buttons, tabs, cards, and overlays
- A few shared timing values used consistently across the page
- Static or very low-frequency ambient backgrounds on content-heavy pages
- Reduced-motion fallbacks for every non-trivial animation
- Disabling or simplifying continuous motion on smaller screens if scroll performance drops

Avoid:
- Hover zoom as a default card treatment
- Long reveal chains that hide content too aggressively
- Heavy blur or filter effects on many elements at once
- Decorative motion that makes the interface feel laggy
- Continuous animation on many separate cards or surfaces at once

If the page already feels slow, reduce motion cost before adding more animated background elements.

### 10. Portfolio-specific defaults

For portfolio, writing, or showcase sites, prefer this baseline:
- `mat-toolbar` plus a simple mobile nav pattern instead of custom nav widgets
- A concise hero with chips and one or two clear actions
- Project browsing on the main page with modal detail before adding extra routes
- Media cards with reserved thumbnail space or simplified monogram placeholders
- Material-native selectors such as tabs, chips, or button toggles with clear spacing and outlined grouping
- Tabs with visible separators or pill boundaries when many projects need stronger scanning
- Slight active-state glow is fine; hover theatrics usually are not
- Dark mode should increase icon and control contrast, not just invert the page

### 11. Keep the skill easy to steer

If this skill will be reused via prompts or prompt management tools, structure it so it is easy to parameterize:
- Put stable house rules first
- Put style variables in one compact block
- Keep examples concise and easy to swap
- Version the prompt or skill and evaluate after changes
- If the workflow supports it, prefer one machine-readable direction block over scattered adjectives

Good variable slots:
- `{{product_type}}`
- `{{audience}}`
- `{{primary_goal}}`
- `{{ui_tone}}`
- `{{references_to_emulate}}`
- `{{anti_references}}`
- `{{density}}`
- `{{motion_level}}`
- `{{color_direction}}`
- `{{content_strategy}}`
- `{{must_keep}}`
- `{{must_avoid}}`

### 12. Verify mobile, accessibility, and containment

Check:
- No horizontal overflow
- Chips wrap within cards
- Long labels break safely
- Hero, nav, and major cards stay within padded page containers
- Menus, drawers, and dialogs work with keyboard and screen readers
- Headings and supporting text have the right hierarchy
- Interactive controls have accessible names
- Focus states remain visible
- Dark mode controls still hit WCAG AA contrast

### 13. Use the official docs deliberately

Use the Angular Material docs for three distinct jobs:
- Component selection: use the component categories page
- App theming: use the theming guide
- Custom component styling around the theme: use the theming-your-components guide

The exact links are listed in [references/material-docs.md](references/material-docs.md).
