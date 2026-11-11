import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | SD Seals",
  description:
    "SD Seals is an independent supplier specialising in automotive seals and bearings, established to provide dependable parts and trade service.",
}

export default function AboutUsPage() {
  return (
    <main className="about-page">
      {/* 1. Hero Banner */}
      <section className="about-hero" aria-label="About SD Seals">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">SD SEALS</h1>
            <span className="about-hero-divider" aria-hidden="true" />
            <p className="about-hero-lead">
              SD Seals is an independent supplier specialising in the supply of automotive seals and bearings, established to provide dependable product availability and straightforward trade service.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Story & Offerings Section */}
      <section className="about-body-section" aria-label="Company Overview and Products">
        <div className="container about-grid">
          {/* Left Column: Narrative Copy */}
          <div className="about-text-col">
            <p className="about-paragraph">
              At SD Seals, we focus on supplying quality seals and bearings specifically for the automotive sector. The business was established to address a clear gap in the market for dependable, readily available automotive seals and replacement bearings. If you need assistance finding the right part for your vehicle or workshop, contact us and our team will be glad to assist.
            </p>

            <p className="about-paragraph">
              We supply automotive workshops, independent mechanics, fleet operators, and vehicle owners with the critical seals and bearings required for day to day repair and maintenance work.
            </p>

            <p className="about-paragraph">
              We concentrate directly on product supply, offering an accessible range of automotive oil seals, wheel bearings, hub units, and related replacement components. Our aim is to provide practical service and get the right parts into your hands without unnecessary delays.
            </p>
          </div>

          {/* Right Column: Provided Project Image */}
          <div className="about-image-col">
            <div className="about-image-card">
              <img
                src="/Homepage/about-main-300x424-1.jpeg"
                alt="SD Seals automotive seals and bearings"
                className="about-bearing-img"
                width={300}
                height={424}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Callout: "HOW CAN WE HELP?" */}
      <section className="about-help-banner" aria-label="How can we help?">
        <div className="container about-help-inner">
          <h2 className="about-help-title">HOW CAN WE HELP?</h2>
          <p className="about-help-copy">
            If you are looking for automotive seals or replacement bearings, get in touch with us. We are here to help you identify the right parts for your requirements.
          </p>
          <Link href="/contact-us" className="about-help-cta">
            MAKE AN ENQUIRY
          </Link>
        </div>
      </section>
    </main>
  )
}
