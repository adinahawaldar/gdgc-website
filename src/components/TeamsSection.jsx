import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import useTeams from '../hooks/useTeams'
import Card from './team/TeamCard'
import TeamModal from './team/TeamModal'
import OrganizersBand from './team/OrganizersBand'
import { TeamsHeading, StateMessage } from './team/TeamsShell'
import { Reveal } from './team/parts'

export default function TeamsSection({ onViewAll }) {
  const { data, error } = useTeams()
  const [sel, setSel] = useState(null)

  return (
    <section id="teams" className="relative w-full py-12 sm:py-20 overflow-hidden select-none scroll-mt-4">
      <div className="relative w-full px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {!data ? <StateMessage error={error} /> : (
          <>
            <TeamsHeading meta={data.meta} />
            <OrganizersBand organizers={data.organizers} onOpen={setSel} />
            
            <Reveal className="mt-8 sm:mt-10">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-neutral-500 mb-4">Team leads</h3>
              
              {/* FIX 1: Responsive Grid (2 cols on mobile, 3 on tablet, 5 on desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {data.teams.map((t) => {
                  const lead = t.members[0];
                  return (
                    // FIX 2: Wrapper to hold the outside tag
                    <div key={t.id} className="relative mt-3"> 
                      
                      {/* The Tag Floating Outside the Top-Right */}
                      <span className="absolute -top-3 right-2 z-10 bg-neutral-900 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                        {t.name} Lead
                      </span>
                      
                      {/* The Card (badge prop removed so it doesn't show inside) */}
                      <Card m={lead} color={t.color} size="sm" onOpen={setSel} />
                    </div>
                  );
                })}
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