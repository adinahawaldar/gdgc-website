import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { Photo, Links, PLACEHOLDER, onColor } from './parts'

export default function TeamModal({ sel, onClose, yearLabels = {} }) {
  useEffect(() => {
    if (!sel) return
    const key = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', key)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = prev }
  }, [sel, onClose])
  if (!sel) return null
  const { m, color, badge } = sel
  const [yr, dept] = m.dept.split(' · ')
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-neutral-900/50 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label={m.name}>
      <div className="relative w-full max-w-4xl max-h-full overflow-auto bg-white rounded-3xl border-2 border-neutral-900 grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white border border-neutral-300 hover:bg-neutral-900 hover:text-white flex items-center justify-center">
          <X className="w-4 h-4" />
        </button>
        <div className="p-4 sm:p-6 flex flex-col gap-3" style={{ backgroundColor: `${color}14` }}>
          <div className="rounded-2xl overflow-hidden border border-neutral-200"><Photo m={m} color={color} className="aspect-[4/3] md:aspect-[4/5]" /></div>
          <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight">{m.name}</h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {badge && <span className="rounded-full px-3 py-1 font-bold border border-neutral-900" style={{ backgroundColor: color, color: onColor(color) }}>{badge}</span>}
            <span className="text-neutral-600 font-medium">{yearLabels[yr] || yr} · {dept}</span>
          </div>
          <Links m={m} />
          {m.email && <p className="text-xs text-neutral-500 break-all">{m.email}</p>}
        </div>
        <div className="p-6 sm:p-10 flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] mb-3" style={{ color: color === '#fbbc05' ? '#b06000' : color }}>Introduction</p>
          <p className="text-base sm:text-lg leading-relaxed text-neutral-800">{m.intro || PLACEHOLDER}</p>
        </div>
      </div>
    </div>
  )
}

