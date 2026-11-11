# SD Seals Design System

## Purpose and visual direction

This document is the source of truth for future SD Seals UI work. Follow the existing brand and page structure unless the user explicitly asks for a change. When a screenshot or reference is supplied, match its typography, hierarchy, proportions, spacing, and content order; ignore reference colors when the user asks to preserve SD Seals colors.

SD Seals is a South African industrial catalogue and supply business. The site should feel practical, precise, established, and service-led—not like a generic SaaS dashboard. Favor strong horizontal bands, clear product navigation, compact but comfortable spacing, high-contrast typography, squared edges, and real product imagery. Do not invent company claims, addresses, certifications, supplier marks, or contact details. Use `sdseals.co.za`, `sales@sdseals.co.za`, and `R` prices.

## Brand colors

Use these existing tokens and keep the design blue-led:

- Primary navy `#012858`: main navigation, hero depth, primary actions, and brand surfaces.
- Gold `#DFB843`: key accent, search/action highlights, short rules, selected states, and focus details.
- Pale gold `#F4D98A`: subtle hover and focus surfaces.
- Graphite `#252B33`: body text, masthead, footer, and secondary dark surfaces.
- Silver `#C8CDD2`: borders and secondary contrast.
- Mist `#F2F4F7`: page and section backgrounds.
- White `#FFFFFF`: content panels and reversed text.

Gold is an accent, never a substitute for navy. Keep the current colors consistent across routes; do not borrow orange/red colors from a reference unless explicitly requested. Use semantic CSS variables from `app/globals.css` and check contrast before using an accent for small text.

## Typography

Use the existing Montserrat family from `app/globals.css`; do not add fonts without a clear need. Use a clear weight hierarchy:

- Display headings, navigation, buttons, and short labels: heavy (800–900), italic, uppercase, slightly tracked.
- Section headings: bold italic uppercase, sized below the page title, with a short gold underline only where the page design calls for one.
- Body copy: sentence case, regular-to-medium weight, comfortable line height. Italic is appropriate for the About page/reference copy, but avoid making long paragraphs heavy, tightly tracked, or shouty.
- Form labels and utility text: compact but legible; never rely on placeholders as the only accessible label.

Avoid rounded, playful, condensed, or decorative display fonts. Preserve natural sentence case in body copy even when nearby headings are uppercase.

## Shared site shell

The shared shell lives in `app/layout.tsx`:

1. `components/site-header.tsx`: utility links, logo masthead, search, basket, mobile actions, category navigation, and benefits bar.
2. Route content under `app/`.
3. `components/site-footer.tsx`: service links, contact details, company statement, and legal footer.

Keep the header and footer consistent across routes. The desktop header uses the existing dark masthead, navy category bar, and graphite benefits row with gold reserved for the search/action accent. On mobile, preserve this action order: SD Seals logo, unrotated phone-call icon, basket, menu toggle, then full-width search. Do not rotate the phone icon or introduce a second mobile header treatment. Keep category and service messaging in strong horizontal bands; make menus keyboard-operable and prevent horizontal overflow.

## Page patterns

### Home / About (`app/page.tsx`)

Keep the page deliberately simple and close to the supplied reference:

1. Image-led hero with one left-aligned page heading, a short gold underline, and a concise italic introduction. Vertically center the copy in the image area. Target about 330px hero height on desktop and 310px on mobile, adjusting when content or viewport requires it. Keep the heading compact and the body copy lighter than the heading.
2. Plain text-and-image introduction. Use a generous width (about 1040px), with a slightly wider text column beside one relevant product image. Do not add eyebrow labels or subheadings to this section.
3. One centered enquiry CTA using navy/gold tokens.

Do not add feature grids, value-card sections, duplicate hero claims, unnecessary headings, decorative logo strips, or made-up supplier logos unless explicitly requested. Prefer real supplied product assets over placeholders.

### Contact (`app/contact-us/page.tsx`)

Use one white contact panel on the mist background. On desktop, place the enquiry form and contact details in two aligned columns; on narrow screens, stack them with the form first. Start both columns with clear headings and short gold underline accents. Keep the form easy to scan: paired fields on desktop, full-width fields on mobile, a clearly sized message area, a concise privacy note, and one prominent action. Keep the contact details factual and readable, with phone and email links.

Use real, labelled inputs and native validation. Do not add a fake CAPTCHA or display a “sent” state unless an actual delivery endpoint confirms success. The current form opens a prefilled email in the visitor’s email app; state that behavior honestly. If the user later requests direct website delivery, use a real server-side mail integration rather than pretending a client-only form sends mail. Do not add supplier/payment logos from a reference without approved local assets.

### Other routes

For catalog, category, product, or information pages, reuse the shared shell and palette. Put the main task and page title first, use real product information/images, and add only sections that support the route’s purpose. Keep product browsing and contact actions obvious. Do not create filler content or repeated marketing sections to make a page longer.

## Layout and responsive behavior

- Use a centered content width up to 1180px with 40px total desktop gutters and 20px mobile gutters. Page-specific content may be narrower when that matches the reference; long paragraphs must not be constrained so tightly that they wrap awkwardly.
- Use flexbox for one-dimensional rows and navigation; use CSS grid for intentional multi-column layouts. Collapse columns cleanly on small screens and preserve a sensible content order.
- Let images retain useful proportions with `object-fit: cover` only when cropping is intentional; set a purposeful focal position for cropped product imagery.
- Keep spacing consistent and purposeful. Avoid large blank areas, compressed form fields, overly tall headers, or hero text stranded at the top of a tall image.
- Use minimal corner rounding and restrained borders/shadows. This is an industrial catalogue, not a card-heavy application.

## Components and interaction

Buttons are compact, uppercase, heavy italic, and use the existing button variants. Gold actions use navy text; dark actions use white text. Provide clear hover, active, disabled, and keyboard-focus states without shifting layout. Links should look and behave like links. Search, basket, menus, and forms must be real controls—not decorative mockups.

Use shared data from `lib/site-data.ts` for navigation, categories, benefits, contact information, and other repeated site content. Do not duplicate or invent contact strings in route components. Keep route-specific UI in `app/<route>/page.tsx`, shared UI in `components/`, and global tokens/typography/reusable classes in `app/globals.css`. Add a component when it is reusable or owns meaningful state. Use `@/` imports. Keep client components as small as possible; do not mark a whole route client-side without a functional reason.

## Accessibility and content integrity

Use semantic landmarks and a logical heading hierarchy. Label every input independently of its placeholder; provide useful alt text for meaningful images and empty alt text for decorative ones. Keep all controls keyboard accessible, expose menu state with `aria-expanded`, use visible focus indicators, and never communicate state by color alone. Respect reduced-motion preferences for nonessential animation. Preserve readable contrast and touch targets at mobile sizes.

Never claim a form was delivered unless the server confirms it. Never simulate CAPTCHA, certifications, payment brands, testimonials, supplier logos, or legal assurances. Use only verified content and assets already in the project or explicitly provided by the user.
