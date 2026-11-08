"use client"

import { FormEvent, useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteContact } from "@/lib/site-data"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return <main className="contact-page">
    <section className="contact-hero"><div className="container"><p className="eyebrow">SD Seals & Bearings</p><h1>Let&apos;s keep<br /><em>things moving.</em></h1><p>Tell us what you need and our experienced team will get back to you.</p></div></section>
    <section className="contact-content"><div className="container contact-grid">
      <div className="contact-form-wrap"><p className="eyebrow">Make an enquiry</p><h2>How can we help?</h2><p className="contact-intro">Send us a message using the form below and one of our team will be in touch.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Telephone<input name="telephone" type="tel" required placeholder="Your telephone" /></label></div>
          <div className="form-row"><label>Email<input name="email" type="email" required placeholder="Your email" /></label><label>Company<input name="company" placeholder="Company name" /></label></div>
          <label>Enquiry<textarea name="message" required placeholder="Tell us about your enquiry" rows={6} /></label>
          <button className="button button-primary" type="submit">Send enquiry</button>
          {sent && <p className="form-success" role="status">Thanks — your enquiry has been noted. We&apos;ll be in touch shortly.</p>}
        </form>
      </div>
      <aside className="contact-details"><p className="eyebrow">Contact details</p><h2>Speak to the team.</h2><div className="detail-list"><div><Phone aria-hidden="true" /><span><strong>Phone</strong><a href={siteContact.phoneHref}>{siteContact.phone}</a></span></div><div><Mail aria-hidden="true" /><span><strong>Email</strong><a href={`mailto:${siteContact.email}`}>{siteContact.email}</a></span></div><div><MapPin aria-hidden="true" /><span><strong>Head office</strong><span>South Africa<br />Industrial supply, nationwide</span></span></div></div></aside>
    </div></section>
  </main>
}
