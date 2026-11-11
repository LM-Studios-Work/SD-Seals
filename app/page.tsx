import { HeroSlideshow } from "@/components/hero-slideshow"
import { PopularCategories } from "@/components/popular-categories"
import { FeatureCardsSection } from "@/components/feature-cards"
import { EnquiryCallback } from "@/components/enquiry-callback"

export default function HomePage() {
  return (
    <main>
      {/* 1. Compact Hero Slideshow with 5-Star Google Rating Underneath CTA */}
      <HeroSlideshow />

      {/* 2. Popular Categories: 4 Blocked Cards in a 2x2 Grid using Homepage Images */}
      <PopularCategories />

      {/* 3. Three-in-a-Row Feature Cards: Trade Accounts, Who We Are, Bespoke Solutions */}
      <FeatureCardsSection />

      {/* 4. Make An Enquiry Callback Section (Right Above Footer) */}
      <EnquiryCallback />
    </main>
  )
}
