import { useEffect } from 'react'
import Lenis from 'lenis'

export default function ScrollManager() {
  useEffect(() => {
    // 1. Detect touch/mobile screens to allow native 60fps/120fps hardware scrolling
    const isMobileOrTouch =
      typeof window !== 'undefined' &&
      (window.matchMedia('(max-width: 768px)').matches ||
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0)

    let lenis = null
    let rafId = null

    // Track progress bar
    const progressBar = document.getElementById('global-scroll-progress')
    const updateProgress = (scrollTop, scrollLimit) => {
      const progress = scrollLimit > 0 ? Math.min(1, Math.max(0, scrollTop / scrollLimit)) : 0
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`
      }
    }

    if (!isMobileOrTouch) {
      // Initialize Lenis ONLY on desktop with mouse wheel
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 0, // Never hijack touch gestures
        infinite: false,
      })

      window.__lenis = lenis

      function raf(time) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)

      lenis.on('scroll', (e) => {
        updateProgress(e.scroll, e.limit)
        document.body.dataset.scrollDirection = e.direction >= 0 ? 'down' : 'up'
      })
    } else {
      // On mobile / touch screens: Native silky-smooth hardware scrolling
      window.__lenis = {
        scrollTo: (target, options) => {
          const immediate = options?.immediate
          if (typeof target === 'number') {
            window.scrollTo({ top: target, left: 0, behavior: immediate ? 'instant' : 'smooth' })
          } else if (target instanceof HTMLElement) {
            target.scrollIntoView({ behavior: immediate ? 'instant' : 'smooth' })
          }
        },
      }

      let lastScrollY = window.scrollY
      const handleNativeScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        updateProgress(scrollTop, docHeight)
        document.body.dataset.scrollDirection = scrollTop >= lastScrollY ? 'down' : 'up'
        lastScrollY = scrollTop
      }

      window.addEventListener('scroll', handleNativeScroll, { passive: true })
    }

    // 2. IntersectionObserver: Reveal elements smoothly with Google Material Motion (Mobile & Desktop)
    const selector = [
      '.reveal',
      '.reveal-left',
      '.reveal-right',
      '.reveal-scale',
      '.scroll-reveal',
      '.scroll-reveal-card',
      '.teams-card',
      '.team-card',
      '.event-card',
      '.resources-card',
      '.about-pillar-card',
      '.milestone-row',
      '.achievement-card',
    ].join(', ')

    const observerCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          entry.target.classList.add('is-in-view')
          obs.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -15px 0px',
    })

    const attachObservers = () => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el) => {
        if (el.classList.contains('revealed') || el.classList.contains('is-in-view')) {
          return
        }
        const rect = el.getBoundingClientRect()
        // If already within viewport on initial load, reveal immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('revealed')
          el.classList.add('is-in-view')
        } else {
          observer.observe(el)
        }
      })
    }

    attachObservers()

    // Debounced mutation observer to avoid thrashing during typing or fast state changes
    let mutationTimer = null
    const mutationObserver = new MutationObserver(() => {
      if (mutationTimer) clearTimeout(mutationTimer)
      mutationTimer = setTimeout(attachObservers, 150)
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const href = target.getAttribute('href')
      if (href && href !== '#') {
        const targetEl = document.querySelector(href)
        if (targetEl) {
          e.preventDefault()
          if (lenis) {
            lenis.scrollTo(targetEl, { offset: -20, duration: 1.1 })
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (lenis) {
        lenis.destroy()
        window.__lenis = null
      }
      if (mutationTimer) clearTimeout(mutationTimer)
      observer.disconnect()
      mutationObserver.disconnect()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <>
      {/* Sleek Google 4-Color Gradient Scroll Progress Bar at the Top */}
      <div
        id="global-scroll-progress"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none origin-left transition-transform duration-75 ease-out bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]"
        style={{ transform: 'scaleX(0)' }}
      />
    </>
  )
}
