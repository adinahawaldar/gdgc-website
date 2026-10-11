import React from 'react'
import Card from './TeamCard'
import { Reveal } from './parts'

// Vision-style outlined band holding the organiser cards
export default function OrganizersBand({ organizers, onOpen }) {
  return (
    <Reveal>
      <div className="w-full border-y border-black bg-white/80 backdrop-blur-sm py-5 sm:py-6 px-2 sm:px-6 flex items-center gap-3 sm:gap-8">
        <div className="hidden sm:flex shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full border border-black bg-white items-center justify-center">
          <span className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">Organizers</span>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {organizers.map((m) => (
            <Card key={m.name} m={m} color="#4285f4" badge="Organizer" size="lg" onOpen={onOpen} className="!flex-none" />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
