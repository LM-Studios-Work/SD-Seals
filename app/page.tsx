import Link from "next/link"

export default function AboutPage() {
  return <main>
    <section className="hero"><img className="hero-image" src="/hero-2.webp" alt="Close-up of industrial bearings" /><div className="container hero-content"><h1>The Bearing Company</h1><p className="hero-copy">The Bearing Company is an independent company specialising in the supply of bearings, belts, seals and consumables.</p></div></section>
    <section className="about-intro"><div className="container about-content"><div className="body-copy"><p>At SD Seals, we pride ourselves on our knowledge and service. No job is too big or too small for our experienced team. If you can&apos;t find what you are looking for, give us a call and we will be happy to help.</p><p>Our range of products and services covers a broad spectrum of industries. We don&apos;t just sell bearings and transmission products; we also provide practical support to help you find the right solution for your application.</p></div><img className="about-image" src="/hero-2.webp" alt="Industrial bearing components" /></div></section>
    <section className="cta-band"><div className="cta-center"><h2>How can we help?</h2><p>Tell us what you need and our team will be happy to help.</p><Link className="button button-dark" href="/contact-us">Make an enquiry</Link></div></section>
  </main>
}
