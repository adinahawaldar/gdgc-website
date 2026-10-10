import React from 'react'
import { Trophy } from 'lucide-react'

export default function AchievementsPage() {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center min-h-[65vh] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      {/* Category Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 shadow-xs mb-6 sm:mb-8">
        <Trophy className="w-4 h-4 text-[#FBBC04]" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-600">
          GDGC AIKTC • Chapter Honors
        </span>
      </div>

      {/* Big Bold Headline */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 leading-[1.05]">
          Coming Soon <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#FBBC05] via-[#EA4335] via-[#4285F4] to-[#34A853] bg-clip-text text-transparent">
            with Achievements
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl font-medium text-neutral-500 pt-3 leading-relaxed">
          We are preparing our official showcase of hackathon victories, Tier 1 Google recognitions, and community milestones. Stay tuned!
        </p>
      </div>

      {/* Google 4-Color Floating Accents */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <div className="w-3 h-3 rounded-full bg-[#4285F4]" />
        <div className="w-3 h-3 rounded-full bg-[#EA4335]" />
        <div className="w-3 h-3 rounded-full bg-[#FBBC05]" />
        <div className="w-3 h-3 rounded-full bg-[#34A853]" />
      </div>
    </div>
  )
}
