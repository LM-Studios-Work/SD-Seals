export const siteContact = {
  phone: "01527 509620",
  phoneHref: "tel:01527509620",
  email: "info@sdseals.co.za",
  address: {
    street: "1 Susan Street",
    suburb: "Strydom Park",
    city: "Randburg",
    province: "Gauteng",
    postalCode: "2169",
    country: "South Africa",
  },
  addressShort: "1 Susan Street, Strydom Park",
  addressFull: "1 Susan Street, Strydom Park, Randburg, 2169, South Africa",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=1+Susan+Street,+Strydom+Park,+Randburg,+South+Africa&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1+Susan+Street,+Strydom+Park,+Randburg,+South+Africa",
  googleMapsViewUrl:
    "https://maps.google.com/?q=1+Susan+Street,+Strydom+Park,+Randburg,+South+Africa",
}

export const operatingHours = {
  days: "Monday to Friday",
  hours: "8:00 AM - 4:30 PM",
  closedDays: "Saturday & Sunday",
  closedStatus: "Closed",
} as const

export const primaryLinks = [
  { href: "/about-us", label: "About us" },
  { href: "/contact-us", label: "Contact us" },
  { href: "/info", label: "Info" },
] as const

export const productCategories = [
  "Bearings",
  "Adhesives & Greases",
  "Belts",
  "Transmissions",
  "Fluid Power",
  "Seals & Circlips",
  "PPE & Tools",
  "OEM Belts",
] as const

export const serviceBenefits = [
  "Free tracked shipping on all orders over R500",
  "Premium & budget product ranges",
  "Bespoke solutions",
  "100% Quality Guaranteed",
] as const
