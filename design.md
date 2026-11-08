# SD Seals Design System

## Visual reference

The site follows the supplied industrial bearing-company screenshots while taking its colour direction directly from the SD Seals logo: compact dark utility header, centered search masthead, full-width gold category bar, charcoal benefits strip, shallow image-led hero, white content sections, gold enquiry band, supplier strip, and charcoal footer.

## Brand palette

- Midnight navy `#061A32` — logo blue, hero overlays, deep contrast
- Engineering blue `#0C3765` — supporting surfaces
- Deep logo navy `#071B35` — primary brand surface, hero overlays, footer
- Royal bearing blue `#0E3D73` — supporting surfaces and navigation depth
- Logo gold `#D7AA3F` — navigation, buttons, highlights, and fine rules
- Pale gold `#F4D98A` — focus states and soft highlights
- Machined silver `#C8CDD2` — borders, logo contrast, and secondary text
- Graphite `#252B33` — header/footer surfaces
- White `#FFFFFF` — content and reversed type

## Typography

Load Montserrat. All headings, navigation, buttons, eyebrows, and primary labels use the industrial display treatment:

```css
font-family: 'Montserrat', 'Futura', 'Eurostile', sans-serif;
font-weight: 800; /* or 900 */
font-style: italic;
text-transform: uppercase;
letter-spacing: 0.05em;
```

Body copy stays Montserrat italic or regular at a comfortable reading size. Avoid rounded, playful, or soft display styles.

## Page structure

1. Utility links and contact details
2. Masthead with logo, search, and basket
3. Orange product category navigation
4. Charcoal service-benefits bar
5. Image-backed page hero
6. White content sections with a two-column desktop grid
7. Orange centred enquiry CTA
8. Light supplier/trust strip
9. Charcoal footer with logo, service links, and contact details

## Layout rules

Use a 1180px maximum content width, 32px desktop gutters, and 20px mobile gutters. Keep vertical spacing compact and intentional: 42px hero padding, 55–72px content sections, and 62px CTA padding. Use flexbox for navigation and footer rows; use grid for two- and three-column content sections.

## Component rules

Buttons are uppercase, heavy italic, and compact. Primary actions use logo gold with deep navy text; dark actions use graphite or navy. Use full-width bars for navigation and service messaging. Keep cards and rounded UI to a minimum: this is an industrial catalogue aesthetic rather than a SaaS dashboard.

## Accessibility

Use semantic landmarks, labelled search, visible keyboard focus rings, descriptive logo alt text, adequate contrast, and a collapsed mobile navigation with `aria-expanded`.
