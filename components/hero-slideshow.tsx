"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface SlideData {
  id: string
  eyebrow: string
  title: string
  ctaText: string
  ctaHref: string
  image: string
  alt: string
  rating?: {
    label: string
    score: string
    stars: number
  }
}

const DEFAULT_SLIDES: SlideData[] = [
  {
    id: "bearings",
    eyebrow: "SD SEALS & BEARINGS",
    title: "WE HAVE THE TECHNICAL EXPERTISE TO FIND EVEN THE MOST ELUSIVE BEARINGS, BELTS AND CHAINS",
    ctaText: "SHOP FEATURED",
    ctaHref: "/info",
    image: "/hero-2.webp",
    alt: "Industrial steel ball bearings and precision components",
    rating: {
      label: "Google rating",
      score: "5.0",
      stars: 5,
    },
  },
  {
    id: "seals",
    eyebrow: "SD SEALS & CIRCLIPS SPECIALISTS",
    title: "PRECISION OIL SEALS, HYDRAULIC PACKINGS & ROTARY SEALS FOR HEAVY APPLICATION",
    ctaText: "EXPLORE SEALS",
    ctaHref: "/info",
    image: "/hero-seals.jpg",
    alt: "Industrial hydraulic seals, O-rings, and machined engineering components",
    rating: {
      label: "Google rating",
      score: "5.0",
      stars: 5,
    },
  },
  {
    id: "transmissions",
    eyebrow: "POWER TRANSMISSION & BELTS",
    title: "PREMIUM & BUDGET TRANSMISSION RANGES BACKED BY SOUTH AFRICAN TRADE EXPERTISE",
    ctaText: "REQUEST A QUOTE",
    ctaHref: "/contact-us",
    image: "/hero-transmission.jpg",
    alt: "Heavy-duty industrial drive belts, pulleys, and roller transmission assemblies",
    rating: {
      label: "Google rating",
      score: "5.0",
      stars: 5,
    },
  },
]

const AUTOPLAY_DURATION = 6000

export function HeroSlideshow({ slides = DEFAULT_SLIDES }: { slides?: SlideData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex((index + slides.length) % slides.length)
  }, [slides.length])

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1)
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1)
  }, [currentIndex, goToSlide])

  // Autoplay rotation with pause on hover/focus
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, AUTOPLAY_DURATION)

    return () => clearInterval(timer)
  }, [currentIndex, isPaused, nextSlide, slides.length])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide()
    } else if (e.key === "ArrowRight") {
      nextSlide()
    }
  }

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50
    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  const activeSlide = slides[currentIndex]

  return (
    <section
      className="hero-slideshow"
      role="region"
      aria-roledescription="carousel"
      aria-label="SD Seals Hero Highlights"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      <div className="hero-slides-viewport" aria-live="polite">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex
          return (
            <div
              key={slide.id}
              className={`hero-slide ${isActive ? "active" : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-slide-bg"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="hero-slide-overlay" aria-hidden="true" />
            </div>
          )
        })}
      </div>

      {/* Slide Content Layer */}
      <div className="container hero-content-wrap">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>{activeSlide.eyebrow}</span>
          </div>

          <h1 className="hero-title">{activeSlide.title}</h1>

          <div className="hero-actions">
            <Link className="hero-cta-btn" href={activeSlide.ctaHref}>
              {activeSlide.ctaText}
            </Link>

            {activeSlide.rating && (
              <div className="google-rating" aria-label={`Google rating ${activeSlide.rating.score} out of 5 stars`}>
                <div className="google-rating-logo" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" focusable="false">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.25C.45 8.21 0 10.05 0 12s.45 3.79 1.25 5.41l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.59l4.03 3.15c.95-2.84 3.6-4.99 6.72-4.99z"
                    />
                  </svg>
                </div>
                <div className="google-rating-details">
                  <span className="google-rating-label">{activeSlide.rating.label}</span>
                  <div className="google-rating-stars-row">
                    <span className="google-rating-score">{activeSlide.rating.score}</span>
                    <span className="google-rating-stars" aria-hidden="true">
                      ★★★★★
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nav Arrows */}
      <button
        type="button"
        className="hero-nav-arrow hero-nav-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        className="hero-nav-arrow hero-nav-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight aria-hidden="true" />
      </button>
    </section>
  )
}
