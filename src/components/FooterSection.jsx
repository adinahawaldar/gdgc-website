import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function FooterSection({ onNavigate, _isScreenLoaded = true }) {
  const sectionRef = useScrollReveal({ once: false })
  const handleNav = (e, tabId) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(tabId)
    } else {
      const target = document.querySelector(`#${tabId}`)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="reveal w-full bg-white select-none border-t border-neutral-200/80 pt-12 pb-28 sm:pb-32" ref={sectionRef}>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* ============================================================== */}
        {/* 1. PLAYFUL GOOGLE GEOMETRIC SHAPES (Resting on Divider Line)   */}
        {/* ============================================================== */}
        <div className="reveal stagger-1 w-full flex items-end justify-between px-1 sm:px-2 overflow-x-auto scrollbar-none pb-0">
          
          {/* Left Shapes Cluster: Green Column & Orange/Pink Column */}
          <div className="flex items-end gap-3 sm:gap-5 shrink-0">
            {/* Shape 1: Green Hexagon over Green Rounded Squircle */}
            <div className="footer-shape-1 flex flex-col items-center gap-1 group cursor-pointer transition-transform duration-500 hover:-translate-y-3 hover:scale-110 active:scale-95">
              {/* Hexagon */}
              <svg className="w-14 h-14 sm:w-20 md:w-24 sm:h-20 md:h-24 text-[#00e676] transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50 3, 93 27, 93 73, 50 97, 7 73, 7 27" rx="8" />
              </svg>
              {/* Rounded Squircle */}
              <div className="w-14 h-14 sm:w-20 md:w-24 sm:h-20 md:h-24 bg-[#00e676] rounded-2xl sm:rounded-3xl shadow-xs transition-transform duration-300 group-hover:scale-105" />
            </div>

            {/* Shape 2: Orange Hexagon over Pink Rounded Squircle */}
            <div className="footer-shape-2 flex flex-col items-center gap-1 group cursor-pointer transition-transform duration-500 hover:-translate-y-3 hover:-rotate-6 hover:scale-110 active:scale-95">
              {/* Hexagon */}
              <svg className="w-14 h-14 sm:w-20 md:w-24 sm:h-20 md:h-24 text-[#ff6e40] transition-transform duration-300 group-hover:-rotate-12" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50 3, 93 27, 93 73, 50 97, 7 73, 7 27" />
              </svg>
              {/* Pink Rounded Squircle */}
              <div className="w-14 h-14 sm:w-20 md:w-24 sm:h-20 md:h-24 bg-[#f48fb1] rounded-2xl sm:rounded-3xl shadow-xs transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>

          {/* Right Shapes Cluster: Yellow Clover & Two Blue Circles */}
          <div className="flex items-end gap-2.5 sm:gap-4 shrink-0 ml-6">
            {/* Shape 3: Yellow 4-Petal Clover */}
            <div className="footer-shape-3 group cursor-pointer transition-transform duration-500 hover:-translate-y-3 hover:scale-110 active:scale-95">
              <svg className="w-16 h-16 sm:w-24 md:w-28 sm:h-24 md:h-28 text-[#ffca28] transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="32" cy="50" r="22" />
                <circle cx="68" cy="50" r="22" />
                <circle cx="50" cy="32" r="22" />
                <circle cx="50" cy="68" r="22" />
                <rect x="32" y="32" width="36" height="36" rx="6" />
              </svg>
            </div>

            {/* Shape 4 & 5: Two Tangent Google Blue Circles */}
            <div className="footer-shape-4 flex items-end group cursor-pointer transition-transform duration-500 hover:-translate-y-3 active:scale-95">
              <div className="w-14 h-14 sm:w-20 md:w-24 sm:h-20 md:h-24 bg-[#4285f4] rounded-full shadow-xs transition-transform duration-500 group-hover:scale-105 group-hover:-translate-x-1" />
              <div className="w-14 h-14 sm:w-20 md:w-24 sm:h-20 md:h-24 bg-[#4285f4] rounded-full shadow-xs -ml-0.5 sm:-ml-1 transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-1" />
            </div>
          </div>

        </div>

        {/* Hairline Divider Line - Full Width */}
        <div className="w-full h-px bg-neutral-300/80 mb-4 sm:mb-6" />

        {/* ============================================================== */}
        {/* 2. ICONIC BIG STATEMENT HEADLINE (Google Themed Colors)        */}
        {/* ============================================================== */}
        <div className="reveal stagger-2 w-full my-3 sm:my-5 flex items-center justify-start overflow-visible">
          <svg
            viewBox="0 0 628 82"
            className="footer-headline-svg w-full h-auto select-none overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="68"
              fontFamily="'Product Sans', 'Google Sans', sans-serif"
              fontWeight="700"
              fontSize="84"
              letterSpacing="-2"
            >
              <tspan fill="#4285f4">G</tspan>
              <tspan fill="#ea4335">D</tspan>
              <tspan fill="#fbbc04">G</tspan>
              <tspan fill="#70757a"> on </tspan>
              <tspan fill="#4285f4">C</tspan>
              <tspan fill="#ea4335">a</tspan>
              <tspan fill="#fbbc04">m</tspan>
              <tspan fill="#4285f4">p</tspan>
              <tspan fill="#34a853">u</tspan>
              <tspan fill="#ea4335">s</tspan>
            </text>
          </svg>
        </div>

        {/* Bottom Hairline Divider - Full Width */}
        <div className="w-full h-px bg-neutral-200 mt-6 sm:mt-10 mb-5" />

        {/* ============================================================== */}
        {/* 3. BASE FOOTER: COLLEGE NAME & NAVBAR LINKS                   */}
        {/* ============================================================== */}
        <div className="reveal stagger-3 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-neutral-600 font-medium px-1">
          <div className="flex items-center">
            <span className="text-xs sm:text-[13px] font-medium text-neutral-600">
              Anjuman-I-Islam's Kalsekar Technical Campus
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 text-xs sm:text-[13px] text-neutral-600">
            <a
              href="#home"
              onClick={(e) => handleNav(e, 'home')}
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNav(e, 'about')}
              className="hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#teams"
              onClick={(e) => handleNav(e, 'teams')}
              className="hover:text-blue-600 transition-colors"
            >
              Teams
            </a>
            <a
              href="#events"
              onClick={(e) => handleNav(e, 'events')}
              className="hover:text-blue-600 transition-colors"
            >
              Events
            </a>
            <a
              href="#achievements"
              onClick={(e) => handleNav(e, 'achievements')}
              className="hover:text-blue-600 transition-colors"
            >
              Achievements
            </a>
            <a
              href="#resources"
              onClick={(e) => handleNav(e, 'resources')}
              className="hover:text-blue-600 transition-colors"
            >
              Resources
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
