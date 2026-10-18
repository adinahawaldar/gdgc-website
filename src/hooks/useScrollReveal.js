import { useEffect, useRef, useCallback } from 'react'

/**
 * useScrollReveal — Shared hook for scroll-triggered reveal animations.
 * 
 * Uses IntersectionObserver to add 'revealed' class when elements enter viewport.
 * Respects prefers-reduced-motion by revealing everything immediately.
 * 
 * Usage:
 *   const containerRef = useScrollReveal()
 *   <div ref={containerRef}>
 *     <h2 className="reveal">...</h2>
 *     <div className="reveal stagger-1">...</div>
 *     <div className="reveal stagger-2">...</div>
 *   </div>
 * 
 * Options:
 *   threshold - visibility threshold (default: 0.12)
 *   rootMargin - observer root margin (default: '0px 0px -40px 0px')
 *   selector - CSS selector for elements to reveal (default: '.reveal, .reveal-left, .reveal-right, .reveal-scale')
 */
export default function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale'
} = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // If user prefers reduced motion, reveal everything immediately
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      container.querySelectorAll(selector).forEach(el => el.classList.add('revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    const elements = container.querySelectorAll(selector)
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold, rootMargin, selector])

  return containerRef
}

/**
 * useCountUp — Animate a number counting up when revealed.
 * Returns a ref to attach to the element containing the number.
 */
export function useCountUp(targetValue, duration = 1200) {
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          observer.disconnect()
          animateCount(el, targetValue, duration)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [targetValue, duration])

  return ref
}

function animateCount(el, target, duration) {
  // Extract numeric value and suffix (e.g., "500+" → 500, "+")
  const match = String(target).match(/^(\d+)(.*)$/)
  if (!match) return

  const end = parseInt(match[1], 10)
  const suffix = match[2] || ''
  const start = 0
  const startTime = performance.now()

  function update(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.round(start + (end - start) * eased)
    el.textContent = current + suffix

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

/**
 * useScrollProgress — Updates a progress bar based on scroll position.
 * Returns a ref to attach to the progress bar element.
 */
export function useScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const bar = ref.current
    if (!bar) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      bar.style.display = 'none'
      return
    }

    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      bar.style.transform = `scaleX(${progress})`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return ref
}
