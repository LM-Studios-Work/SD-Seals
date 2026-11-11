"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"

export function EnquiryCallback() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Leads to contact page with pre-filled enquiry parameters
    const params = new URLSearchParams()
    if (name) params.set("name", name)
    if (telephone) params.set("telephone", telephone)
    params.set("callback", "true")
    router.push(`/contact-us?${params.toString()}`)
  }

  return (
    <section className="enquiry-split-section" aria-label="Seal & Bearing Suppliers and Make an Enquiry">
      <div className="container enquiry-split-container">
        {/* Left Column: Trusted seal & bearing suppliers (on white) */}
        <div className="enquiry-trusted-col">
          <h2 className="enquiry-trusted-heading">
            SEAL &amp; BEARING SUPPLIERS YOU CAN TRUST
          </h2>
          <div className="enquiry-trusted-divider" />

          <p className="enquiry-trusted-paragraph">
            SD Seals was established to address a clear gap in the supply of automotive seals and bearings. We focus directly on product sales, supplying mechanics, workshops, and vehicle owners with dependable replacement parts.
          </p>

          <p className="enquiry-trusted-paragraph">
            We supply a practical range of automotive seals and bearings, including wheel bearings, hub units, oil seals, and related parts. Our focus is on providing reliable components that match your automotive repair requirements.
          </p>

          <p className="enquiry-trusted-paragraph">
            We aim to make sourcing your automotive seals and bearings quick and straightforward. If you have specific part dimensions or need stock availability, our team is ready to assist.
          </p>
        </div>

        {/* Right Column: Slanted Navy Panel with Make An Enquiry callback form */}
        <div className="enquiry-form-col">
          {/* Slanted background layer extending to the right viewport edge */}
          <div className="enquiry-panel-backdrop" aria-hidden="true" />

          <div className="enquiry-panel-content">
            <h3 className="enquiry-panel-title">MAKE AN ENQUIRY</h3>
            <div className="enquiry-panel-divider" />

            <p className="enquiry-panel-intro">
              If you need help checking stock or identifying an automotive seal or bearing, enter your details below and we will get back to you.
            </p>

            <form className="enquiry-callback-form" onSubmit={handleSubmit}>
              <div className="enquiry-form-fields">
                <label className="sr-only" htmlFor="callback-name">Your Name</label>
                <input
                  id="callback-name"
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  className="enquiry-callback-input"
                />

                <label className="sr-only" htmlFor="callback-phone">Your Telephone</label>
                <input
                  id="callback-phone"
                  type="tel"
                  name="telephone"
                  required
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="Enter your telephone..."
                  className="enquiry-callback-input"
                />
              </div>

              <button type="submit" className="enquiry-callback-btn">
                <span>REQUEST A CALLBACK</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
