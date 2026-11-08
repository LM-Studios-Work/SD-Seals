"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, ShoppingBag, PhoneCall, Globe, Coins, Settings, BadgeCheck } from "lucide-react"
import { primaryLinks, productCategories, serviceBenefits, siteContact } from "@/lib/site-data"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="utility"><div className="container utility-inner"><span>{primaryLinks.slice(0, 2).map((link, index) => <span key={link.href}><Link href={link.href}>{link.label}</Link>{index === 0 && <>&nbsp;&nbsp; | &nbsp;&nbsp;</>}</span>)}</span><span>{siteContact.phone}&nbsp;&nbsp; | &nbsp;&nbsp;{siteContact.email}&nbsp;&nbsp; | &nbsp;&nbsp;LOGIN / REGISTER&nbsp;&nbsp; | &nbsp;&nbsp;TRADE ACCOUNT</span></div></div>
    <div className="masthead container">
      <Link href="/" className="brand" aria-label="SD Seals home"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-2b6P9OzfLTmljZO9hwL6DOcEs0kXDF.jpeg" alt="SD Seals and Bearings" /></Link>
      <form className="search-form" role="search"><label className="sr-only" htmlFor="site-search">Search products</label><input id="site-search" placeholder="Search" /><button type="submit">Search <Search aria-hidden="true" /></button></form>
      <a className="mobile-phone" href={siteContact.phoneHref} aria-label="Call SD Seals"><PhoneCall aria-hidden="true" /></a><div className="cart-area"><strong>R0.00</strong><ShoppingBag aria-hidden="true" /><span className="cart-count">0</span></div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav className={open ? "category-nav open" : "category-nav"} aria-label="Product navigation"><div className="container category-inner">{productCategories.map((item) => <Link href="/info" key={item}>{item}</Link>)}<div className="mobile-links">{primaryLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}<Link href="/info">Trade accounts</Link></div><Link className="mobile-login" href="/contact-us">Log in</Link></div></nav>
    <div className="benefits"><div className="container benefits-inner"><span><Globe /> {serviceBenefits[0]}</span><span><Coins /> {serviceBenefits[1]}</span><span><Settings /> {serviceBenefits[2]}</span><span><BadgeCheck /> {serviceBenefits[3]}</span></div></div>
  </header>
}
