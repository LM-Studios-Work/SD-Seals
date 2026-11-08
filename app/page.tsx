import Link from "next/link"

export default function AboutPage() {
  return <main>
    <section className="hero"><div className="container hero-content"><p className="eyebrow">SD Seals & Bearings</p><h1>Precision parts.<br /><em>Reliable service.</em></h1><p className="hero-copy">Your independent supplier of seals, bearings and industrial components.</p><Link className="button button-primary" href="/contact-us">Make an enquiry</Link></div></section>
    <section className="about-intro"><div className="container split"><div><p className="eyebrow">About SD Seals</p><h2>Built around<br />your business.</h2></div><div className="body-copy"><p>At SD Seals, we pride ourselves on our knowledge and service. No job is too big or too small for our experienced team.</p><p>From replacement components to ongoing supply, we help you find the right product for the application and keep your operation moving.</p></div></div></section>
    <section className="feature-strip"><div className="container feature-grid"><div><p className="eyebrow">A dependable partner</p><h2>Quality you can<br /><em>count on.</em></h2></div><div className="feature-image" role="img" aria-label="Industrial bearing components"></div></div></section>
    <section className="values"><div className="container values-grid"><article><span className="value-number">01</span><h3>Technical knowledge</h3><p>Practical product guidance from an experienced team.</p></article><article><span className="value-number">02</span><h3>Fast response</h3><p>Clear communication and dependable supply when it matters.</p></article><article><span className="value-number">03</span><h3>Made to fit</h3><p>Solutions selected around your equipment and application.</p></article></div></section>
    <section className="cta-band"><div className="cta-center"><p className="eyebrow">Need a hand?</p><h2>How can we help?</h2><p>Tell us what you need and our team will be happy to help.</p><Link className="button button-dark" href="/contact-us">Make an enquiry</Link></div></section>
    <section className="brand-strip"><div className="container"><span>Trusted supply</span><b>SD SEALS</b><b>PRECISION</b><b>DEPENDABLE</b><b>INDUSTRIAL</b></div></section>
  </main>
}
