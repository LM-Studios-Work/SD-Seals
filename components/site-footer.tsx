import Link from "next/link"
import { operatingHours, primaryLinks, siteContact } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-heading">Customer service</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/info">Delivery & returns</Link>
            <Link href="/info">Privacy policy</Link>
            <Link href="/info">Terms & conditions</Link>
          </nav>
        </div>

        <div>
          <p className="footer-heading">Get in touch</p>
          <div className="footer-links">
            <span>{siteContact.addressShort}</span>
            <a href={siteContact.phoneHref}>Tel: {siteContact.phone}</a>
            <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
          </div>
        </div>

        <div>
          <p className="footer-heading">Operating hours</p>
          <div className="footer-hours">
            <div className="footer-hours-row">
              <span className="footer-hours-label">{operatingHours.days}</span>
              <span className="footer-hours-time">{operatingHours.hours}</span>
            </div>
            <div className="footer-hours-row is-closed">
              <span className="footer-hours-label">{operatingHours.closedDays}</span>
              <span className="footer-hours-time">{operatingHours.closedStatus}</span>
            </div>
          </div>
        </div>

        <div>
          <p className="footer-heading">SD Seals</p>
          <p className="footer-intro">
            Supplying quality automotive seals and bearings for trade and retail customers.
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 SD Seals. All rights reserved.</span>
        <span>
          {primaryLinks.map((link, index) => (
            <span key={link.href}>
              <Link href={link.href}>{link.label}</Link>
              {index < primaryLinks.length - 1 && <>&nbsp;&nbsp; | &nbsp;&nbsp;</>}
            </span>
          ))}
        </span>
      </div>
    </footer>
  )
}
