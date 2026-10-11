import React, { useEffect, useRef, useState } from 'react'
import { Mail } from 'lucide-react'

export const initials = (n) => n.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('')
export const PLACEHOLDER = 'Self-written introduction goes here. Add it as "intro" in public/data/teams.json.'
export const onColor = (c) => (c === '#fbbc05' ? '#111' : '#fff')

// Brand icons are not in lucide-react v1, so draw them (same approach as SocialFollowSection)
export const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)
export const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.97v-8.37H5.07v8.37h2.78z" />
  </svg>
)

// Site's own angle-bracket logo
export const GdgLogo = ({ className = 'w-10 h-6' }) => (
  <svg className={className} viewBox="0 0 100 50" fill="none">
    <line x1="40" y1="9" x2="18" y2="25" stroke="#EA4335" strokeWidth="8.5" strokeLinecap="round" />
    <line x1="18" y1="25" x2="40" y2="41" stroke="#4285F4" strokeWidth="8.5" strokeLinecap="round" />
    <line x1="60" y1="9" x2="82" y2="25" stroke="#34A853" strokeWidth="8.5" strokeLinecap="round" />
    <line x1="82" y1="25" x2="60" y2="41" stroke="#FBBC04" strokeWidth="8.5" strokeLinecap="round" />
  </svg>
)

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.1 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
    >
      {children}
    </div>
  )
}

// Rectangular photo that fills the card width; falls back to initials if the file is missing
export function Photo({ m, color, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (!failed && m.photo) {
    return <img src={m.photo} alt={m.name} loading="lazy" onError={() => setFailed(true)} style={{ objectPosition: m.focus || '50% 25%' }} className={`w-full object-cover ${className}`} />
  }
  return (
    <div className={`w-full relative flex items-center justify-center overflow-hidden ${className}`} style={{ backgroundColor: `${color}22` }}>
      <GdgLogo className="absolute w-3/5 opacity-20" />
      <span className="relative font-extrabold text-2xl sm:text-4xl" style={{ color }}>{initials(m.name)}</span>
    </div>
  )
}

export function Links({ m, small }) {
  const box = `${small ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-8 h-8'} rounded-full border border-neutral-300 bg-white text-neutral-700 flex items-center justify-center transition-colors`
  const ico = small ? 'w-3 h-3 sm:w-3.5 sm:h-3.5' : 'w-4 h-4'
  const item = (href, label, icon) => (
    <a
      href={href || undefined}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      aria-disabled={!href}
      onClick={(e) => { e.stopPropagation(); if (!href) e.preventDefault() }}
      className={`${box} ${href ? 'hover:bg-neutral-900 hover:text-white hover:border-neutral-900' : 'opacity-30 pointer-events-none'}`}
    >
      {icon}
    </a>
  )
  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      {item(m.github, 'GitHub', <GithubIcon className={ico} />)}
      {item(m.linkedin, 'LinkedIn', <LinkedinIcon className={ico} />)}
      {item(m.email && `mailto:${m.email}`, 'Email', <Mail className={ico} />)}
    </div>
  )
}

