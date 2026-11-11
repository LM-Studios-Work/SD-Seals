"use client"

import type { FormEvent } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteContact } from "@/lib/site-data"

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

  return <main className="contact-page">
    <section className="contact-content" aria-label="Contact SD Seals">
      <div className="container contact-grid">
        <div className="contact-form-wrap">
          <h1>Contact us</h1>
          <p className="contact-intro">Send us a message using the form below and one of our team will get back to you.</p>
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
            <div><MapPin aria-hidden="true" /><span><strong>Head office</strong><span>South Africa<br />Industrial supply, nationwide</span></span></div>
            <div><Phone aria-hidden="true" /><span><strong>Telephone</strong><a href={siteContact.phoneHref}>{siteContact.phone}</a></span></div>
            <div><Mail aria-hidden="true" /><span><strong>Email</strong><a href={`mailto:${siteContact.email}`}>{siteContact.email}</a></span></div>
          </div>
        </aside>
      </div>
    </section>
  </main>
}
