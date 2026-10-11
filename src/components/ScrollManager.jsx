import { useEffect } from 'react'
import Lenis from 'lenis'

export default function ScrollManager() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Momentum Scrolling
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    })

    // Expose lenis globally so components/links can use window.__lenis.scrollTo()
    window.__lenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // 2. Track scroll direction & progress bar
    const progressBar = document.getElementById('global-scroll-progress')
    
    lenis.on('scroll', (e) => {
      const { scroll, limit, direction } = e
      const progress = limit > 0 ? Math.min(1, Math.max(0, scroll / limit)) : 0
      
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`
      }

      // Update body dataset for scroll direction (1 = down, -1 = up)
      document.body.dataset.scrollDirection = direction >= 0 ? 'down' : 'up'
    })

    // 3. IntersectionObserver for smooth entrance and exit animations on scroll up/down
    const selector = [
      'section:not(#home)',
      '.scroll-reveal',
      '.scroll-reveal-card',
      '.teams-card',
      '.team-card',
      '.event-card',
      '.resources-card',
      '.about-pillar-card'
    ].join(', ')

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view')
          entry.target.classList.remove('is-out-of-view')
        } else {
          // Trigger smooth exit so re-scrolling up or down re-animates smoothly
          entry.target.classList.remove('is-in-view')
          entry.target.classList.add('is-out-of-view')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    })

    const attachObservers = () => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el) => {
        // Prevent hiding initial hero or top elements
        if (el.id === 'home') return
        if (!el.classList.contains('scroll-reveal-target')) {
          el.classList.add('scroll-reveal-target')
        }
        observer.observe(el)
      })
    }

    // Attach initially and on dynamic DOM updates
    attachObservers()

    const mutationObserver = new MutationObserver(() => {
      attachObservers()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Intercept internal hash links for smooth Lenis scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const href = target.getAttribute('href')
      if (href && href !== '#') {
        const targetEl = document.querySelector(href)
        if (targetEl) {
          e.preventDefault()
          lenis.scrollTo(targetEl, { offset: -20, duration: 1.2 })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = null
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
