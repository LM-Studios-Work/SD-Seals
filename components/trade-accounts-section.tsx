import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function TradeAccountsSection() {
  return (
    <section className="trade-accounts-section" aria-label="Trade accounts">
      <div className="container">
        <div className="trade-accounts-header">
          <Link href="/info" className="trade-accounts-eyebrow">
            TRADE ACCOUNTS
          </Link>
        </div>

        <div className="trade-accounts-card">
          <div className="trade-accounts-image-container">
            {/* Slanted Ribbon Badge */}
            <div className="trade-accounts-ribbon">
              <span>TRADE ACCOUNTS</span>
            </div>

            <img
              src="/Homepage/trade%20account.jpg"
              alt="Trade Accounts"
              className="trade-accounts-img"
            />
          </div>

          <div className="trade-accounts-body">
            <p className="trade-accounts-copy">
              Open an SD Seals trade account for consistent supply and trade pricing on automotive seals and bearings.
            </p>
            <Link href="/contact-us" className="trade-accounts-cta">
              APPLY FOR TRADE ACCOUNT <ArrowRight className="inline-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

