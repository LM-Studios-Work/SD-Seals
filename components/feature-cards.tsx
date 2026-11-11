import Link from "next/link"

export interface FeatureCardItem {
  id: string
  ribbon: string
  imageSrc: string
  alt: string
  copy: string
  ctaText: string
  ctaHref: string
}

const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: "trade-accounts",
    ribbon: "TRADE ACCOUNTS",
    imageSrc: "/Homepage/trade%20account.jpg",
    alt: "Trade accounts for automotive seals and bearings",
    copy: "Sign up for an SD Seals trade account for consistent trade pricing and priority supply of automotive seals and bearings.",
    ctaText: "REGISTER NOW",
    ctaHref: "/contact-us?enquiry=trade",
  },
  {
    id: "who-we-are",
    ribbon: "WHO WE ARE",
    imageSrc: "/Homepage/about-main-300x424-1.jpeg",
    alt: "SD Seals automotive seals and bearings supply",
    copy: "SD Seals is an independent product supplier focused on automotive seals and bearings, serving trade workshops and automotive customers.",
    ctaText: "LEARN ABOUT US",
    ctaHref: "/about-us",
  },
  {
    id: "bespoke-solutions",
    ribbon: "BESPOKE SOLUTIONS",
    imageSrc: "/Homepage/bearing%20bespoke.jpg",
    alt: "Automotive replacement bearings and seals",
    copy: "Looking for a specific automotive seal or bearing size? Contact us with your specifications and we will check availability for you.",
    ctaText: "SEND AN ENQUIRY",
    ctaHref: "/contact-us",
  },
]

export function FeatureCardsSection() {
  return (
    <section className="feature-cards-section" aria-label="About SD Seals and Services">
      <div className="container">
        {/* 3 in a Row Cards */}
        <div className="feature-cards-grid">
          {FEATURE_CARDS.map((card) => (
            <div key={card.id} className="feature-card">
              <div className="feature-card-image-wrap">
                {/* Slanted Ribbon Badge */}
                <div className="feature-card-ribbon">
                  <span>{card.ribbon}</span>
                </div>
                <div className="feature-card-image-inner">
                  <img
                    src={card.imageSrc}
                    alt={card.alt}
                    className="feature-card-img"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="feature-card-body">
                <p className="feature-card-copy">{card.copy}</p>
                <Link href={card.ctaHref} className="feature-card-cta">
                  {card.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

