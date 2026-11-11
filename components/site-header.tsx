"use client"

import Link from "next/link"
import { useState } from "react"
import { BadgeCheck, ChevronDown, Coins, Globe, Menu, PhoneCall, Search, Settings, ShoppingBag, X } from "lucide-react"
import { primaryLinks, productCategories, serviceBenefits, siteContact } from "@/lib/site-data"

const mobileSubcategories: Record<string, string[]> = {
  "Fluid Power": ["Pneumatics", "Hose & Tubing"],
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  function closeMenu() {
    setOpen(false)
    setExpandedCategory(null)
  }

  return (
    <header className="site-header" onKeyDown={(event) => { if (open && event.key === "Escape") closeMenu() }}>
      <div className="utility">
        <div className="container utility-inner">
          <div className="utility-primary">
            {primaryLinks.slice(0, 2).map((link, index) => (
              <span key={link.href}>
                {index > 0 && <span className="utility-divider" aria-hidden="true">|</span>}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
          </div>
          <div className="utility-secondary">
            <a className="utility-contact" href={siteContact.phoneHref}>{siteContact.phone}</a>
            <a className="utility-contact" href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
            <span>Login / Register</span>
            <span>Trade Account</span>
          </div>
        </div>
      </div>

      <div className="masthead container">
        <Link href="/" className="brand" aria-label="SD Seals home">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-2b6P9OzfLTmljZO9hwL6DOcEs0kXDF.jpeg" alt="SD Seals and Bearings" />
        </Link>
        <form className="search-form" role="search">
          <label className="sr-only" htmlFor="site-search">Search products</label>
          <input id="site-search" placeholder="Search" />
          <button type="submit">Search <Search aria-hidden="true" /></button>
        </form>
        <div className="mobile-actions">
          <a className="mobile-phone" href={siteContact.phoneHref} aria-label="Call SD Seals"><PhoneCall aria-hidden="true" /></a>
          <div className="cart-area">
            <strong>R0.00</strong>
            <ShoppingBag aria-hidden="true" />
            <span className="cart-count">0</span>
          </div>
          <button className="menu-toggle" aria-controls="mobile-category-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="menu-toggle-label">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      <nav className={open ? "category-nav open" : "category-nav"} aria-label="Product navigation" id="mobile-category-navigation">
        <div className="container category-inner desktop-category-list">
          {productCategories.map((item) => <Link href="/info" key={item}>{item}</Link>)}
        </div>
        <div className="mobile-menu-head">
          <strong>Menu</strong>
          <button className="mobile-menu-close" type="button" onClick={closeMenu} aria-label="Close menu"><X aria-hidden="true" /></button>
        </div>
        <div className="container mobile-menu-list">
          <div className="mobile-product-links">
            {productCategories.map((item) => {
              const children = mobileSubcategories[item]
              if (!children) return <Link className="mobile-category-link" href="/info" key={item} onClick={closeMenu}>{item}</Link>
              const expanded = expandedCategory === item
              const submenuId = `mobile-submenu-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
              return (
                <div className="mobile-category-group" key={item}>
                  <button className="mobile-category-toggle" type="button" aria-expanded={expanded} aria-controls={submenuId} onClick={() => setExpandedCategory(expanded ? null : item)}>
                    {item}<ChevronDown aria-hidden="true" />
                  </button>
                  <div className="mobile-category-submenu" id={submenuId} hidden={!expanded}>
                    <Link href="/info" onClick={closeMenu}>View all {item}</Link>
                    {children.map((child) => <Link href="/info" key={child} onClick={closeMenu}>{child}</Link>)}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mobile-links">
            {primaryLinks.filter((link) => link.label !== "Info").map((link) => <Link href={link.href} key={link.href} onClick={closeMenu}>{link.label}</Link>)}
            <Link href="/info" onClick={closeMenu}>Trade accounts</Link>
          </div>
          <Link className="mobile-login" href="/contact-us" onClick={closeMenu}>Log in</Link>
        </div>
      </nav>

      <div className="benefits">
        <div className="container benefits-inner">
          <span><Globe /> {serviceBenefits[0]}</span>
          <span><Coins /> {serviceBenefits[1]}</span>
          <span><Settings /> {serviceBenefits[2]}</span>
          <span><BadgeCheck /> {serviceBenefits[3]}</span>
        </div>
      </div>
    </header>
  )
}
