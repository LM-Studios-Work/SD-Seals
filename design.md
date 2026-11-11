# SD Seals Design System

## Purpose and visual direction

This document is the source of truth for future SD Seals UI work. Follow the existing brand and page structure unless the user explicitly asks for a change. When a screenshot or reference is supplied, match its typography, hierarchy, proportions, spacing, and content order; ignore reference colors when the user asks to preserve SD Seals colors.

SD Seals is a South African industrial catalogue and supply business. The site should feel practical, precise, established, and service-led—not like a generic SaaS dashboard. Favor strong horizontal bands, clear product navigation, compact but comfortable spacing, high-contrast typography, squared edges, and real product imagery. Do not invent company claims, addresses, certifications, supplier marks, or contact details. Use `sdseals.co.za`, `info@sdseals.co.za`, and `R` prices.

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

1. `components/site-header.tsx`: utility links, logo masthead, search, mobile actions, category navigation, and benefits bar.
2. Route content under `app/`.
3. `components/site-footer.tsx`: service links, contact details, operating hours (Monday to Friday 8:00 AM – 4:30 PM; Saturday & Sunday Closed), company statement, and legal footer.

Keep the header and footer consistent across routes. Treat the supplied references as three responsive compositions with a uniform industrial diagonal language, not one layout scaled down. Preserve SD Seals navy/gold/graphite/white; do not copy the reference brand's orange. The search action uses gold with navy text for readable contrast, and search elements share a uniform parallel slant angle (~15 degrees) across desktop, tablet, and mobile. SD Seals operates on a catalogue and trade enquiry model (no online checkout cart).

- Laptop / wide desktop (1100px and wider): utility links at the top with clean divider pipes and comfortable spacing (About us and Contact us on the left; Trade Account, phone, and email shifted to the right side; login/register removed). Masthead row features the uncropped logo on the left and a generous, cleanly integrated slanted search bar (white input and gold SEARCH button with a 3px parallel slanted seam) extending smoothly to the right margin with balanced alignment and no awkward empty voids. Follow it with the full navy product-category bar (gold hover accent) and graphite service-benefits bar. Maintain the 1180px content width and balanced alignment.
- iPad / tablet (760–1099px): compact utility row suppressing email and phone to avoid crowding. Masthead row includes the uncropped logo and the full-width slanted search field. Directly below that row, a full-width gold MENU bar with navy text and icon collapses the category and benefits bars into the accessible drawer menu. Leave an intentional 16–20px navy breathing space after the header before page content.
- Phone (up to 759px): hide the utility row and benefits bar. Row 1 features the uncropped logo on the left and two equal charcoal slanted icon tiles on the right: phone icon (where the cart was, beside menu) and menu toggle. Each tile has a parallel ~15-degree slant cut with clean 3px navy seams between them. Row 2 features the full-width slanted search bar (white input, 3px slanted seam, gold SEARCH button with matching slant on both edges). Leave an intentional 16–20px navy breathing space below the search bar before page content begins.

The mobile/tablet menu opens as a full-height white panel with a gold top bar, high-contrast navy MENU/close controls, ruled product rows, and a secondary-links group (About us, Contact us, Trade accounts). Use chevrons only for categories with real child links; the supplied Fluid Power submenu may show View all Fluid Power, Pneumatics, and Hose & Tubing. Every diagonal belongs to a repeated, aligned panel edge or the search/button edge with a uniform slant angle. Keep product hierarchy clear, allow Escape to close, expose `aria-expanded`, preserve keyboard access, and prevent horizontal overflow.

## Page patterns

### Home (`app/page.tsx`)

The home page structure directly mirrors the user-supplied reference:

1. **Compact Hero Slideshow**: An image slider (~380px on desktop, ~320px on mobile) with bold italic headline, slanted CTA button, and the **Google rating (5.0 ★★★★★)** placed underneath with comfortable spacing. The slideshow auto-rotates smoothly, supports touch swipe on mobile, and has desktop navigation arrows.
2. **Popular Categories (2x2 Grid)**: 4 blocked cards in a 2x2 grid using the user-provided images from `public/Homepage`:
   - `Wheel Bearings & Hub Assemblies` (`/Homepage/Wheel Bearings & Hub Assemblies.jpg`)
   - `Engine & Drivetrain Oil Seals` (`/Homepage/Engine & Drivetrain Oil Seals.jpg`)
   - `Transmission & Ancillary Bearings` (`/Homepage/Transmission & Ancillary Bearings.webp`)
   - `Sizing, Matching & O-Rings` (`/Homepage/Sizing, Matching & O-Rings.jpg`)
   Each card features a solid navy title bar that transitions to gold on hover with smooth image zoom.
3. **Three-in-a-Row Feature Cards (`components/feature-cards.tsx`)**: Directly below categories, three cards side-by-side in one row (matching the reference):
   - **Trade Accounts**: Angled gold `TRADE ACCOUNTS` ribbon, copy (*Sign up to a Trade Account today...*), and `REGISTER NOW` link.
   - **Who We Are**: Angled gold `WHO WE ARE` ribbon with user-specified image (`/Homepage/about-main-300x424-1.jpeg`), copy (*SD Seals is an independent company...*), and `LEARN ABOUT US` link.
   - **Bespoke Solutions**: Angled gold `BESPOKE SOLUTIONS` ribbon with user-specified image (`/Homepage/bearing bespoke.jpg`), copy (*Trying to source a non-standard bearing?...*), and `SEND AN ENQUIRY` link.
4. **Seal & Bearing Suppliers + Make an Enquiry Split Section (`components/enquiry-callback.tsx`)**: Prominent full-width split section placed directly above the footer (matching the reference layout):
   - **Left Column (White background)**: `SEAL & BEARING SUPPLIERS YOU CAN TRUST` title with a short dark underline divider, followed by three detailed paragraphs covering 50+ years of industrial experience, comprehensive bearing and seal product ranges (rotary shaft seals, hydraulic packings, deep groove, spherical, cylindrical, needle, etc.), and bespoke taper roller / multi-row assembly capabilities.
   - **Right Column (Slanted Navy Panel)**: Industrial diagonal panel slanting forward (`clip-path: polygon(72px 0, 100% 0, 100% 100%, 0 100%)`) in SD Seals navy (`#012858`) with subtle workshop depth, bleeding seamlessly to the right viewport edge. Features `MAKE AN ENQUIRY` with a gold underline, advisory intro copy, two clean white text inputs (`Enter your name...`, `Enter your telephone...`), and a slanted charcoal `REQUEST A CALLBACK` button routing to `/contact-us` with pre-filled parameters.
   - **Mobile Layout**: Neatly stacks on screens under 960px, presenting the supplier trust text on white followed by the full-bleed navy callback card.

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

Buttons are compact, uppercase, heavy italic, and use the existing button variants. Gold actions use navy text; dark actions use white text. Provide clear hover, active, disabled, and keyboard-focus states without shifting layout. Links should look and behave like links. Search, menus, and forms must be real controls—not decorative mockups.

Use shared data from `lib/site-data.ts` for navigation, categories, benefits, contact information, and other repeated site content. Do not duplicate or invent contact strings in route components. Keep route-specific UI in `app/<route>/page.tsx`, shared UI in `components/`, and global tokens/typography/reusable classes in `app/globals.css`. Add a component when it is reusable or owns meaningful state. Use `@/` imports. Keep client components as small as possible; do not mark a whole route client-side without a functional reason.

## Accessibility and content integrity

Use semantic landmarks and a logical heading hierarchy. Label every input independently of its placeholder; provide useful alt text for meaningful images and empty alt text for decorative ones. Keep all controls keyboard accessible, expose menu state with `aria-expanded`, use visible focus indicators, and never communicate state by color alone. Respect reduced-motion preferences for nonessential animation. Preserve readable contrast and touch targets at mobile sizes.

Never claim a form was delivered unless the server confirms it. Never simulate CAPTCHA, certifications, payment brands, testimonials, supplier logos, or legal assurances. Use only verified content and assets already in the project or explicitly provided by the user.
