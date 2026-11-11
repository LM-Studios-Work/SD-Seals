"use client"

import type { FormEvent } from "react"
import Link from "next/link"
import { Clock, ExternalLink, Mail, MapPin, Navigation, Phone, Warehouse } from "lucide-react"
import { operatingHours, siteContact } from "@/lib/site-data"

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Website enquiry from ${data.get("name")}`)
    const body = encodeURIComponent([
      `Name: ${data.get("name")}`,
      `Telephone: ${data.get("telephone")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      "",
      `Enquiry: ${data.get("message")}`,
    ].join("\n"))
    window.location.href = `mailto:${siteContact.email}?subject=${subject}&body=${body}`
  }

  function scrollToMap(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const el = document.getElementById("location-map")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-content" aria-label="Contact SD Seals">
        <div className="container contact-grid">
          <div className="contact-form-wrap">
            <h1>Contact us</h1>
            <p className="contact-intro">
              Send us a message using the form below for automotive seals and bearings enquiries.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Name<input autoComplete="name" name="name" required placeholder="Your name" /></label>
                <label>Telephone<input autoComplete="tel" name="telephone" type="tel" required placeholder="Your telephone" /></label>
              </div>
              <div className="form-row">
                <label>Email<input autoComplete="email" name="email" type="email" required placeholder="Your email" /></label>
                <label>Company<input autoComplete="organization" name="company" placeholder="Company name" /></label>
              </div>
              <label>Enquiry<textarea name="message" required placeholder="Some brief details about your enquiry..." rows={5} /></label>
              <p className="privacy-note">Your information is important to us. Please see our <Link href="/info">privacy policy</Link>. Sending this form opens your email app.</p>
              <button className="button button-primary" type="submit">Send enquiry</button>
            </form>
          </div>

          <aside className="contact-details">
            <h2>Contact details</h2>
            <div className="detail-list">
              <div>
                <MapPin aria-hidden="true" />
                <span>
                  <strong>Head office &amp; Trade Counter</strong>
                  <span>
                    {siteContact.addressShort}<br />
                    {siteContact.address.city}, {siteContact.address.country}
                  </span>
                  <div className="detail-action-links">
                    <a
                      href={siteContact.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-action-link"
                    >
                      Get directions <ExternalLink size={12} aria-hidden="true" />
                    </a>
                    <a
                      href="#location-map"
                      onClick={scrollToMap}
                      className="detail-action-link"
                    >
                      View on map ↓
                    </a>
                  </div>
                </span>
              </div>
              <div>
                <Phone aria-hidden="true" />
                <span>
                  <strong>Telephone</strong>
                  <a href={siteContact.phoneHref}>{siteContact.phone}</a>
                </span>
              </div>
              <div>
                <Mail aria-hidden="true" />
                <span>
                  <strong>Email</strong>
                  <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
                </span>
              </div>
              <div>
                <Clock aria-hidden="true" />
                <span>
                  <strong>Opening hours</strong>
                  <span>{operatingHours.days}: {operatingHours.hours}</span>
                  <span className="detail-subtext">Automotive seals and bearings enquiries welcome</span>
                </span>
              </div>
            </div>
          </aside>

          {/* Embedded Google Maps Section */}
          <div className="contact-map-block" id="location-map">
            <div className="contact-map-header">
              <div className="contact-map-title-wrap">
                <span className="eyebrow">Trade counter &amp; collections</span>
                <h2>Find Us in Strydom Park</h2>
                <p className="contact-map-address-line">
                  <MapPin aria-hidden="true" />
                  <span><strong>SD Seals:</strong> {siteContact.addressFull}</span>
                </p>
              </div>
              <div className="contact-map-actions">
                <a
                  href={siteContact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-directions-btn"
                >
                  <Navigation size={14} aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="contact-map-frame-container">
              <iframe
                src={siteContact.googleMapsEmbedUrl}
                title="Google Maps location of SD Seals, 1 Susan Street, Strydom Park"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact-map-highlights">
              <div className="map-highlight-item">
                <MapPin aria-hidden="true" />
                <span><strong>Prime Location:</strong> 1 Susan Street, Strydom Park industrial hub</span>
              </div>
              <div className="map-highlight-item">
                <Warehouse aria-hidden="true" />
                <span><strong>Counter Sales:</strong> In-store collections {operatingHours.days}: {operatingHours.hours}</span>
              </div>
              <div className="map-highlight-item">
                <Navigation aria-hidden="true" />
                <span><strong>Easy Access:</strong> Conveniently accessible from Malibongwe Drive</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
