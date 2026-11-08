"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, ShoppingBag, Globe, Coins, Settings, BadgeCheck } from "lucide-react"
import { productCategories, siteContact } from "@/lib/site-data"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="utility"><div className="container utility-inner"><span>Contact Us&nbsp;&nbsp; | &nbsp;&nbsp;About Us</span><span>{siteContact.phone}&nbsp;&nbsp; | &nbsp;&nbsp;{siteContact.email}&nbsp;&nbsp; | &nbsp;&nbsp;LOGIN / REGISTER&nbsp;&nbsp; | &nbsp;&nbsp;TRADE ACCOUNT</span></div></div>
    <div className="masthead container">
      <Link href="/" className="brand" aria-label="SD Seals home"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-2b6P9OzfLTmljZO9hwL6DOcEs0kXDF.jpeg" alt="SD Seals and Bearings" /></Link>
      <form className="search-form" role="search"><label className="sr-only" htmlFor="site-search">Search products</label><input id="site-search" placeholder="Search" /><button type="submit">Search <Search aria-hidden="true" /></button></form>
      <div className="cart-area"><strong>£0.00</strong><ShoppingBag aria-hidden="true" /><span className="cart-count">0</span></div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav className={open ? "category-nav open" : "category-nav"} aria-label="Product navigation"><div className="container category-inner">{productCategories.map((item) => <Link href="/info" key={item}>{item}</Link>)}</div></nav>
    <div className="benefits"><div className="container benefits-inner"><span><Globe /> Free tracked shipping on all orders over £50</span><span><Coins /> Premium & budget product ranges</span><span><Settings /> Bespoke solutions</span><span><BadgeCheck /> ISO 9001: 2015 certified</span></div></div>
  </header>
}
