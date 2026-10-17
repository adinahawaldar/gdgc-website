import React, { useState, useEffect } from 'react'
import './SplashScreen.css'

export default function SplashScreen({ minDuration = 3200 }) {
  const [isFading, setIsFading] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    // Check reduced motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setIsMounted(false)
      return
    }

    // Allow the 7 dots to fully complete morphing into the complete GDG brackets (< >) logo
    const timer = setTimeout(() => {
      setIsFading(true)
      // Smoothly transition and unmount
      const unmountTimer = setTimeout(() => {
        setIsMounted(false)
      }, 600)
      return () => clearTimeout(unmountTimer)
    }, minDuration)

    return () => clearTimeout(timer)
  }, [minDuration])

  if (!isMounted) return null

  return (
    <div
      id="loader-overlay"
      className={isFading ? 'fade-out' : ''}
      aria-label="Loading GDGC AIKTC"
      role="status"
    >
      <div className="loader-container">
        <div className="loader select-none">
          <div className="loaderdot dot1" />
          <div className="loaderdot dot2" />
          <div className="loaderdot dot3" />
          <div className="loaderdot dot4" />
          <div className="loaderdot dot5" />
          <div className="loaderdot dot6" />
          <div className="loaderdot dot7" />
        </div>

        {/* Brand text that fades in after brackets form */}
        <div className="loader-brand-text font-google">
          <span className="text-lg sm:text-xl font-bold tracking-tight text-[#3c4043]">
            Google Developer Groups
          </span>
          <span className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5 flex items-center gap-1.5">
            <span className="text-[#1a73e8] font-semibold">On Campus</span>
            <span className="text-neutral-400">•</span>
            <span>AIKTC</span>
          </span>
        </div>
      </div>
    </div>
  )
}
