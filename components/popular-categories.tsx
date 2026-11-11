import Link from "next/link"

export interface PopularCategoryItem {
  id: string
  title: string
  href: string
  imageSrc: string
  alt: string
}

const POPULAR_4_CATEGORIES: PopularCategoryItem[] = [
  {
    id: "wheel-bearings",
    title: "Wheel Bearings & Hub Assemblies",
    href: "/info?category=wheel-bearings",
    imageSrc: "/Homepage/Wheel%20Bearings%20&%20Hub%20Assemblies.jpg",
    alt: "Wheel Bearings and Hub Assemblies industrial supply",
  },
  {
    id: "oil-seals",
    title: "Engine & Drivetrain Oil Seals",
    href: "/info?category=oil-seals",
    imageSrc: "/Homepage/Engine%20&%20Drivetrain%20Oil%20Seals.jpg",
    alt: "Engine and Drivetrain Oil Seals industrial supply",
  },
  {
    id: "ancillary-bearings",
    title: "Transmission & Ancillary Bearings",
    href: "/info?category=transmission-bearings",
    imageSrc: "/Homepage/Transmission%20&%20Ancillary%20Bearings.webp",
    alt: "Transmission and Ancillary Bearings industrial supply",
  },
  {
    id: "o-rings",
    title: "Sizing, Matching & O-Rings",
    href: "/info?category=o-rings",
    imageSrc: "/Homepage/Sizing,%20Matching%20&%20O-Rings.jpg",
    alt: "Sizing, Matching and O-Rings industrial supply",
  },
]

export function PopularCategories() {
  return (
    <section id="popular-categories" className="popular-categories-section">
      <div className="container">
        <div className="popular-categories-header">
          <h2>POPULAR CATEGORIES</h2>
          <p className="popular-categories-intro">
            Automotive replacement seals and bearings for trade and retail supply.
          </p>
        </div>

        {/* 2x2 Grid with 4 Blocked Cards */}
        <div className="popular-categories-2x2-grid">
          {POPULAR_4_CATEGORIES.map((item) => (
            <Link key={item.id} href={item.href} className="cat-block-card">
              <div className="cat-block-image-wrap">
                <img
                  src={item.imageSrc}
                  alt={item.alt}
                  className="cat-block-img"
                  loading="lazy"
                />
              </div>
              <div className="cat-block-label-bar">
                <span className="cat-block-title">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
