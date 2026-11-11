# SD Seals Design System

## Direction

SD Seals is an industrial catalogue and supply site. The visual language is precise, practical, and service-led: strong horizontal bands, compact spacing, high-contrast type, minimal rounding, and clear product navigation. The supplied SD Seals and Bearings logo is the visual reference for the brand. The site serves South Africa: use `sdseals.co.za`, `sales@sdseals.co.za`, and `R` prices.

## Brand palette

- Primary navy `#012858` — site header, category navigation, CTA band, hero depth, and primary brand surfaces
- Gold `#DFB843` — search actions, borders, indicators, highlights, and focus details
- Pale gold `#F4D98A` — hover states and accessible focus rings
- Graphite `#252B33` — body text and footer/service surfaces
- Silver `#C8CDD2` — borders and secondary contrast
- Mist `#F2F4F7` — light supporting backgrounds
- White `#FFFFFF` — content surfaces and reversed type

Keep the palette blue-led. Gold is an accent, not a replacement for the primary navy. Preserve the existing greys unless a contrast issue requires a change.

## Typography

Use Montserrat from `app/globals.css`. Headings, navigation, buttons, eyebrows, and primary labels use a heavy italic industrial treatment:

```css
font-family: Montserrat, Arial, sans-serif;
font-weight: 800; /* or 900 */
font-style: italic;
text-transform: uppercase;
letter-spacing: 0.05em;
```

Body copy uses regular Montserrat with comfortable line height. Avoid playful, rounded, or decorative display styles. The About page hero has a single compact, left-aligned heavy italic uppercase heading with a short 4px gold underline immediately beneath it. On desktop, center hero content in an approximately 800px column and keep the hero shallow (about 165px tall); use a compact 26px heading and smaller sentence-case italic body copy. On mobile, preserve a roughly 270px image-led hero with comfortable left inset. The introduction section is plain copy beside a product image, without eyebrow labels or headings. Keep only the hero, introduction, and one centered CTA; do not add feature grids, value cards, logo strips, or decorative subheadings. Retain the brand navy/gold palette.

## Current page structure

The shared shell is rendered by `app/layout.tsx`:

1. `components/site-header.tsx` — utility links, logo masthead, search, basket, mobile menu, product navigation, and benefits bar
2. Route content — `app/page.tsx`, `app/contact-us/page.tsx`, and `app/info/page.tsx`
3. `components/site-footer.tsx` — service links, contact details, company statement, and legal footer

The home/about route mirrors the requested reference structure: a compact image-backed hero with one left-aligned heading and short italic introduction, a two-column body-copy-and-image section with no added subheadings, then one navy enquiry CTA. Avoid adding feature grids, value-card sections, logo strips, or extra headings unless requested.

## File structure and consistency

- Route-specific UI belongs in `app/<route>/page.tsx`.
- Shared site chrome belongs in `components/` and is imported by `app/layout.tsx`.
- Shared navigation, contact, category, and benefit data belongs in `lib/site-data.ts`; do not duplicate these strings across components.
- Global tokens, typography, layout utilities, and reusable visual classes belong in `app/globals.css`.
- Keep content and layout separate from global styling. Add a component when a section becomes reusable or has its own interaction/state.
- Use `@/` imports for project-local modules.
- Keep browser state in the smallest interactive component; do not make route pages client components unless required.

## Layout rules

Use a 1180px maximum content width, 40px total desktop gutters, and 20px mobile gutters. On mobile, the header uses the SD Seals logo, an unrotated phone-call icon, basket, menu toggle, and full-width search in that order. Use flexbox for navigation and footer rows, and grid for two- and three-column content sections. Keep vertical spacing compact and intentional: approximately 42px hero padding, 55–72px content sections, and 62px CTA padding.

## Component rules

Buttons are uppercase, heavy italic, and compact. Hero enquiry actions use graphite with white text and shift to gold with navy text on hover; CTA enquiry actions use gold and shift to pale gold on hover. Every button link must have a visible hover, focus, and keyboard state. Navigation and service messaging use full-width bars. Keep cards and rounded UI to a minimum: this is an industrial catalogue aesthetic rather than a SaaS dashboard.

## Accessibility

Use semantic landmarks, labelled search controls, descriptive logo alt text, visible keyboard focus rings, sufficient color contrast, and a mobile navigation button with `aria-expanded`. Preserve keyboard access for every interactive element and avoid text-only color cues.
