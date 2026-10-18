import React, { useState, useEffect } from 'react'
import './SplashScreen.css'

export default function SplashScreen({ minDuration = 3200, onComplete }) {
  const [isFading, setIsFading] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    // Allow the 7 dots to fully complete morphing into the complete GDG brackets (< >) logo
    const timer = setTimeout(() => {
      setIsFading(true)
      // Signal that screen is ready for smooth entrance animations
      document.documentElement.dataset.screenLoaded = 'true'
      window.dispatchEvent(new CustomEvent('gdgc-screen-loaded'))
      if (typeof onComplete === 'function') {
        onComplete()
      }

      // Smoothly transition and unmount
      const unmountTimer = setTimeout(() => {
        setIsMounted(false)
      }, 600)
      return () => clearTimeout(unmountTimer)
    }, minDuration)

    return () => clearTimeout(timer)
  }, [minDuration, onComplete])

  if (!isMounted) return null

  return (
    <div
      id="loader-overlay"
      className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-[99999] transition-opacity duration-500 ${
        isFading ? 'fade-out opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading GDGC AIKTC"
      role="status"
    >
      <div id="loader" className="loader select-none">
        <div className="loaderdot dot1" />
        <div className="loaderdot dot2" />
        <div className="loaderdot dot3" />
        <div className="loaderdot dot4" />
        <div className="loaderdot dot5" />
        <div className="loaderdot dot6" />
        <div className="loaderdot dot7" />
      </div>
    </div>
  )
}
