import React from 'react'
import { GdgLogo } from './parts'

const COLORS = ['#4285f4', '#ea4335', '#fbbc05', '#34a853', '#4285f4', '#ea4335']

// Counts come from the data file; organisers count as one team
export const getStats = (d) => ({
  members: d.organizers.length + d.teams.reduce((n, t) => n + t.members.length, 0),
  teams: d.teams.length + (d.organizers.length ? 1 : 0),
})

export function TeamsHeading({ meta, stats, sub, title = 'Meet the people behind GDGC' }) {
  const [a, word, b] = title.split(/ (behind) /)
  return (
    <div className="flex flex-col items-center text-center gap-3 mb-8 sm:mb-10">
      <span className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-900 bg-white px-4 py-1.5 text-xs sm:text-sm font-bold">
        <GdgLogo className="w-7 h-4" /> {meta.org} · {meta.batch} batch
      </span>
      <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 leading-tight">
        {a}{' '}
        <span className="inline-block">
          {word.split('').map((c, i) => <span key={i} style={{ color: COLORS[i % COLORS.length] }}>{c}</span>)}
        </span>{' '}
        {b}
      </h2>
      {sub && <p className="text-sm sm:text-base text-neutral-600 max-w-xl">{sub}</p>}
      {stats && (
        <div className="flex items-center gap-8 sm:gap-12 mt-1">
          {[[stats.members, 'members'], [stats.teams, 'teams']].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-neutral-950 leading-none">{n}</div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500 mt-1">{l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function StateMessage({ error }) {
  return (
    <div className="py-24 text-center text-neutral-500 text-sm">
      {error ? `Couldn't load the team data (${error}). Check public/data/teams.json.` : (
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => <div key={i} className="h-56 rounded-3xl bg-neutral-100 animate-pulse" />)}
        </div>
      )}
    </div>
  )
}
