# SD Seals Design System

## Visual reference

The site follows the supplied industrial bearing-company screenshots: compact dark utility header, centered search masthead, full-width orange category bar, charcoal benefits strip, shallow image-led hero, white content sections, orange enquiry band, supplier strip, and charcoal footer.

## Brand palette

- Midnight navy `#061A32` — logo blue, hero overlays, deep contrast
- Engineering blue `#0C3765` — supporting surfaces
- Signal orange `#F27C00` — navigation, buttons, section accents
- Gold `#D5A63A` — logo highlight and fine rules
- Machined silver `#C8CDD2` — borders and secondary text
- Charcoal `#363636` — header/footer surfaces
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

Buttons are uppercase, heavy italic, and compact. Primary actions use signal orange with white text; dark actions use charcoal. Use full-width bars for navigation and service messaging. Keep cards and rounded UI to a minimum: this is an industrial catalogue aesthetic rather than a SaaS dashboard.

## Accessibility

Use semantic landmarks, labelled search, visible keyboard focus rings, descriptive logo alt text, adequate contrast, and a collapsed mobile navigation with `aria-expanded`.
