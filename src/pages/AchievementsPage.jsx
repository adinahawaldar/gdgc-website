import React from 'react'

// ============================================================================
// GDGC AIKTC CHAPTER ACHIEVEMENTS
// 4 Official Honors permanently displayed full-width
// ============================================================================

const achievementsData = [
  {
    id: 'sih-runner-up',
    title: 'SIH Runner Up (National Level)',
    subtitle: 'National Level · Ministry of Education & AICTE',
    year: '2024',
    shortDesc:
      'Secured Runner Up position at the National Level Smart India Hackathon after getting shortlisted from the internal college round followed by the national PPT presentation round.',
    teamMembers: ['Zain Pawle', 'Aman Antuley'],
    image: '/achievements/sih_runnerup.jpg',
  },
  {
    id: 'internal-sih-runnerup',
    title: 'Internal SIH Hackathon (2nd Runner-Up)',
    subtitle: 'Campus Internal Hackathon · AIKTC',
    year: '2024',
    shortDesc:
      'Secured 2nd Runner-Up position in the Internal Smart India Hackathon after competing among top student teams across departments.',
    teamMembers: [
      'Sayed Hammaad Imtiyaz',
      'Sayyed Anas Akbar',
      'Toufiq Jamadar',
      'Aachal Narbage',
      'Mantasha Shaikh',
      'Pirkhan Ayesha',
    ],
    image: '/achievements/internal_sih_runnerup.jpg',
  },
  {
    id: 'build-vs-break-runnerup',
    title: '1st Runner-Up — Build vs Break 2.0 (State Level)',
    subtitle: 'State Level Hackathon',
    year: '2024',
    shortDesc:
      'Secured 1st Runner-Up position in the State Level Build vs Break 2.0 competition.',
    teamMembers: ['Mohammed Hayat Azad'],
    image: '/achievements/bvbwi.jpeg',
  },
  {
    id: 'academic-excellence-topper',
    title: 'Academic Excellence',
    subtitle: 'Academic Honors · AIKTC',
    year: '2024',
    shortDesc:
      'First topper in both first and second semester with outstanding academic performance.',
    teamMembers: ['Sadia Siddiqua Shaheen'],
    image: '/achievements/topper_img.jpg',
  },
]

export default function AchievementsPage() {
  return (
    <div className="page-fade-enter w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-6 pb-36 font-sans select-none text-neutral-900">
      {/* Top Left Title (Matching Reference Screenshot) */}
      <div className="reveal mb-10 sm:mb-14">
        <h3 className="section-heading-accent text-base sm:text-lg font-bold tracking-tight text-neutral-900 leading-tight">
          Chapter Honors
        </h3>
        <p className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 leading-tight">
          Built by Students
        </p>
      </div>

      {/* Main Full-Width List (All 4 Permanently Open) */}
      <div className="w-full divide-y divide-neutral-200">
        {achievementsData.map((item, index) => {
          const numberLabel = String(index + 1).padStart(2, '0')

          return (
            <article key={item.id} className={`achievement-card reveal stagger-${(index % 4) + 1} w-full py-10 sm:py-14 transition-all`}>
              {/* Header Row: Number + Heading */}
              <div className="w-full flex items-center gap-6 sm:gap-10">
                <span className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 shrink-0">
                  {numberLabel}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-tight text-neutral-900 leading-tight">
                  {item.title}
                </h2>
              </div>

              {/* Permanent Split Layout: Left Text & Team + Right Full-Width Image */}
              <div className="w-full mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Short Description & Team Members */}
                <div className="lg:col-span-5 pl-0 sm:pl-16 md:pl-20 flex flex-col justify-center space-y-3">
                  {item.shortDesc && (
                    <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed">
                      {item.shortDesc}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm font-medium text-neutral-400">
                    <span className="text-neutral-500 font-semibold">Team Members:</span> {item.teamMembers.join(', ')}
                  </p>
                </div>

                {/* Right Column: Prominent Image */}
                <div className="lg:col-span-7 flex justify-end">
                  <div className="w-full max-w-[540px] lg:max-w-[580px] aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 shadow-[0_20px_45px_rgba(0,0,0,0.09)] border border-neutral-200/80">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
