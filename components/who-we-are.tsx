import Link from "next/link"
import { ArrowRight, Image as ImageIcon } from "lucide-react"

export function WhoWeAreSection() {
  return (
    <section className="who-we-are-section" aria-label="Learn about SD Seals">
      <div className="container">
        {/* Eyebrow link leading to about page */}
        <div className="who-we-are-header">
          <Link href="/about-us" className="who-we-are-eyebrow">
            LEARN ABOUT US
          </Link>
        </div>

        {/* Feature Card matching Image 3 */}
        <div className="who-we-are-card">
          <div className="who-we-are-image-container">
            {/* Slanted Ribbon Badge */}
            <div className="who-we-are-ribbon">
              <span>BESPOKE SOLUTIONS</span>
            </div>
            
            {/* Empty Image Placeholder for user's image */}
            <div className="who-we-are-placeholder" aria-label="Bespoke engineering solutions image placeholder">
              <ImageIcon className="placeholder-icon" aria-hidden="true" />
              <span className="placeholder-text">Bespoke Solutions</span>
              <span className="placeholder-sub">Drop image here</span>
            </div>
          </div>

          <div className="who-we-are-body">
            <p className="who-we-are-copy">
              Looking for a specific automotive seal or bearing? Get in touch with SD Seals and we will check our stock to help you find the right part.
            </p>
            <Link href="/contact-us" className="who-we-are-cta">
              SEND AN ENQUIRY <ArrowRight className="inline-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

