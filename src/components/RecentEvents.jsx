import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'CyberSecurity Workshop by Vaibhav Lakhani',
    category: 'CYBERSECURITY',
    categoryColor: 'bg-[#1a73e8]',
    image: '/events/event1.jpg',
  },
  {
    id: 2,
    title: 'Google Cloud + AI: Innovation Unleashed',
    category: 'CLOUD & GENAI',
    categoryColor: 'bg-[#34a853]',
    image: '/events/event2.jpg',
  },
  {
    id: 3,
    title: 'College Hackathon 2024 Demo Day Showcase',
    category: 'HACKATHON',
    categoryColor: 'bg-[#ea4335]',
    image: '/events/event3.jpg',
  },
  {
    id: 4,
    title: 'Mobile App Dev Workshop - Android & Flutter',
    category: 'MOBILE DEV',
    categoryColor: 'bg-[#fbbc04]',
    image: '/events/event4.jpg',
  },
]

export default function RecentEvents() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)

  // Auto transition every 1.8 - 2 seconds
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [isPaused, currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
    touchStartX.current = null
  }

  return (
    <section id="events" className="w-full py-8 sm:py-12 select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mb-4 sm:mb-6">
          Recent Events
        </h2>

        {/* Carousel Container */}
        <div
          className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-neutral-200/80 bg-neutral-900 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          {events.map((event, index) => {
            const isActive = index === currentIndex

            return (
              <div
                key={event.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Overlays for readable text and cinematic look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

                {/* Overlaid Event Title and Badge */}
                <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-5 sm:left-8 md:left-10 right-16 sm:right-20 flex flex-col items-start gap-2 sm:gap-2.5 z-20">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md line-clamp-2">
                    {event.title}
                  </h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-sm ${event.categoryColor}`}
                  >
                    {event.category}
                  </span>
                </div>
              </div>
            )
          })}

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/10 hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/10 hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-6 h-2 bg-white shadow-sm'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
