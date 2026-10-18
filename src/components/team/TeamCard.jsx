import React from 'react'
import { Photo, Links, PLACEHOLDER, onColor } from './parts'

// One card, three sizes: "lg" (organizers / feature lead), "md" (members), "sm" (leads row)
export default function Card({ m, color, badge, size = 'md', onOpen, className = '' }) {
  const sm = size === 'sm'
  const feature = size === 'lg'
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen({ m, color, badge })}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen({ m, color, badge }) } }}
      className={`group relative flex flex-col justify-between overflow-hidden bg-white border-2 border-neutral-200 hover:border-neutral-900 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer outline-none focus-visible:border-neutral-900 text-left ${sm ? 'rounded-2xl p-2 sm:p-3 h-full' : 'rounded-3xl p-2.5 sm:p-3'} ${className}`}
    >
      <div>
        {badge && (
          <div className="mb-2 flex justify-center">
            <span
              className="rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-bold border border-neutral-900 whitespace-nowrap"
              style={{ backgroundColor: color, color: onColor(color) }}
            >
              ★ {badge}
            </span>
          </div>
        )}

        <div className={`overflow-hidden ${sm ? 'rounded-xl' : 'rounded-2xl'} ${feature ? 'flex-1 min-h-[140px]' : ''}`}>
          <Photo m={m} color={color} className={feature ? 'h-full' : sm ? 'aspect-[3/4]' : 'aspect-[4/3]'} />
        </div>
        <h3 className={`font-bold text-neutral-900 leading-tight ${sm ? 'mt-2 text-xs sm:text-base line-clamp-1' : feature ? 'mt-3 text-xl sm:text-2xl' : 'mt-2.5 text-sm sm:text-base truncate'}`}>
          {m.name}
        </h3>
        <p className={`text-neutral-500 font-medium ${sm ? 'text-[10px] sm:text-xs mt-0.5' : 'text-xs'}`}>{m.dept}</p>
        <p className={`mt-1 text-neutral-600 truncate ${sm ? 'hidden sm:block text-xs' : 'hidden sm:block text-xs sm:text-[13px]'}`}>{m.intro || PLACEHOLDER}</p>
      </div>
      <div className={sm ? 'mt-2 pt-1 border-t border-neutral-100' : 'mt-2.5'}><Links m={m} small={sm} /></div>
    </div>
  )
}

