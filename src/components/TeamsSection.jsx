import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import useTeams from '../hooks/useTeams'
import Card from './team/TeamCard'
import TeamModal from './team/TeamModal'
import OrganizersBand from './team/OrganizersBand'
import { TeamsHeading, StateMessage, getStats } from './team/TeamsShell'
import { Reveal } from './team/parts'

// Landing-page preview: organisers + the five team leads, then a button to the full Teams page.
export default function TeamsSection({ onViewAll }) {
  const { data, error } = useTeams()
  const [sel, setSel] = useState(null)

  return (
    <section id="teams" className="relative w-full py-12 sm:py-20 overflow-hidden select-none scroll-mt-4">
      <div className="relative w-full px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {!data ? <StateMessage error={error} /> : (
          <>
            <TeamsHeading meta={data.meta} stats={getStats(data)} sub="Our organisers and the leads of every team." />
            <OrganizersBand organizers={data.organizers} onOpen={setSel} />

            <Reveal className="mt-8 sm:mt-10">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-neutral-500 mb-3">Team leads</h3>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-3">
                {data.teams.map((t) => (
                  <Card key={t.id} m={t.members[0]} color={t.color} badge={`${t.name} Lead`} size="sm" onOpen={setSel} />
                ))}
              </div>
            </Reveal>

            <div className="mt-10 flex justify-center">
              <button
                onClick={onViewAll}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#f6bd38] border-2 border-neutral-950 text-neutral-950 text-sm font-bold shadow-[0_2px_8px_rgba(246,189,56,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Meet our whole team <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
      <TeamModal sel={sel} onClose={() => setSel(null)} yearLabels={data?.meta.yearLabels} />
    </section>
  )
}
