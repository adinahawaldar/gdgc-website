import React from 'react'

// ============================================================================
// GDGC AIKTC CHAPTER ACHIEVEMENTS
// Official Honors & Awards with Google Themed Styling & Full-Width Layout
// ============================================================================

const GOOGLE_COLORS = [
  {
    border: 'border-[#4285f4]',
    bg: 'bg-[#e8f0fe]',
    text: 'text-[#1a73e8]',
    titleText: 'text-[#1a73e8]',
    numberText: 'text-[#4285f4]',
    dot: 'bg-[#4285f4]',
    glow: 'hover:shadow-[0_20px_45px_-8px_rgba(66,133,244,0.24)]',
    tagBg: 'bg-[#e8f0fe] text-[#1a73e8] border-[#d2e3fc]',
  },
  {
    border: 'border-[#ea4335]',
    bg: 'bg-[#fce8e6]',
    text: 'text-[#d93025]',
    titleText: 'text-[#d93025]',
    numberText: 'text-[#ea4335]',
    dot: 'bg-[#ea4335]',
    glow: 'hover:shadow-[0_20px_45px_-8px_rgba(234,67,53,0.24)]',
    tagBg: 'bg-[#fce8e6] text-[#d93025] border-[#fad2cf]',
  },
  {
    border: 'border-[#fbbc05]',
    bg: 'bg-[#fef7e0]',
    text: 'text-[#b06000]',
    titleText: 'text-[#b06000]',
    numberText: 'text-[#fbbc05]',
    dot: 'bg-[#fbbc05]',
    glow: 'hover:shadow-[0_20px_45px_-8px_rgba(251,188,4,0.26)]',
    tagBg: 'bg-[#fef7e0] text-[#b06000] border-[#feefc3]',
  },
  {
    border: 'border-[#34a853]',
    bg: 'bg-[#e6f4ea]',
    text: 'text-[#188038]',
    titleText: 'text-[#188038]',
    numberText: 'text-[#34a853]',
    dot: 'bg-[#34a853]',
    glow: 'hover:shadow-[0_20px_45px_-8px_rgba(52,168,83,0.24)]',
    tagBg: 'bg-[#e6f4ea] text-[#188038] border-[#ceead6]',
  },
]

const achievementsData = [
  {
    id: 'sih-runner-up',
    title: 'SIH Runner Up (National Level)',
    subtitle: 'National Level • Ministry of Education & AICTE',
    year: '2024',
    shortDesc:
      'Secured Runner Up position at the National Level Smart India Hackathon after getting shortlisted from the internal college round followed by the national PPT presentation round.',
    teamMembers: ['Zain Pawle', 'Aman Antuley'],
    image: '/achievements/sih_runnerup.jpg',
    highlightBadge: 'NATIONAL FINALIST',
  },
  {
    id: 'internal-sih-runnerup',
    title: 'Internal SIH Hackathon (2nd Runner-Up)',
    subtitle: 'Campus Internal Hackathon • AIKTC',
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
    highlightBadge: 'CAMPUS SPOTLIGHT',
  },
  {
    id: 'build-vs-break-runnerup',
    title: '1st Runner-Up — Build vs Break 2.0 (State Level)',
    subtitle: 'State Level Technical Hackathon • Sprint Challenge',
    year: '2024',
    shortDesc:
      'Secured 1st Runner-Up position in the State Level Build vs Break 2.0 competition, engineering robust full-stack solutions under intense time pressure.',
    teamMembers: ['Mohammed Hayat Azad'],
    image: '/achievements/bvbwi.jpeg',
    highlightBadge: 'STATE RUNNER-UP',
  },
  {
    id: 'academic-excellence-topper',
    title: 'Academic Excellence Honors',
    subtitle: 'Department Topper • AIKTC Academic Distinction',
    year: '2024',
    shortDesc:
      'First topper in both first and second semester with outstanding academic performance, exemplary consistency, and technical dedication.',
    teamMembers: ['Sadia Siddiqua Shaheen'],
    image: '/achievements/topper_img.jpg',
    highlightBadge: 'SEMESTER TOPPER',
  },
]

export default function AchievementsPage() {
  return (
    <div className="page-fade-enter w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 pb-36 font-sans select-none text-neutral-900 relative overflow-hidden bg-white">
      
      {/* ============================================================== */}
      {/* GOOGLE THEMED AMBIENT COLOR SHADOWS & AURA IN BACKGROUND        */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-0">
        {/* Top-left Google Blue Glow */}
        <div
          className="absolute -top-20 -left-20 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-[#4285f4]/12 sm:bg-[#4285f4]/16 filter blur-[80px] sm:blur-[115px] animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        {/* Top-right Google Red Glow */}
        <div
          className="absolute top-1/4 -right-20 w-72 sm:w-[440px] h-72 sm:h-[440px] rounded-full bg-[#ea4335]/10 sm:bg-[#ea4335]/15 filter blur-[80px] sm:blur-[115px] animate-pulse"
          style={{ animationDuration: '7s', animationDelay: '1s' }}
        />
        {/* Middle-left Google Yellow Glow */}
        <div
          className="absolute top-1/2 -left-20 w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full bg-[#fbbc05]/12 sm:bg-[#fbbc05]/16 filter blur-[80px] sm:blur-[110px] animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '2s' }}
        />
        {/* Bottom-right Google Green Glow */}
        <div
          className="absolute bottom-20 -right-16 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-[#34a853]/12 sm:bg-[#34a853]/16 filter blur-[85px] sm:blur-[115px] animate-pulse"
          style={{ animationDuration: '6.5s', animationDelay: '3s' }}
        />
        {/* Center Multi-Color Ambient Mesh */}
        <div className="absolute inset-20 rounded-full bg-gradient-to-tr from-blue-400/6 via-amber-300/6 to-emerald-400/6 filter blur-[75px] opacity-70" />
      </div>

      {/* FULL-WIDTH CONTAINER */}
      <div className="w-full max-w-[1440px] mx-auto relative z-10">

        {/* ============================================================== */}
        {/* CENTERED PAGE HEADER WITH GOOGLE COLORED TYPOGRAPHY            */}
        {/* ============================================================== */}
        <div className="reveal flex flex-col items-center text-center mb-12 sm:mb-16">
          
          {/* Google Chapter Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 shadow-xs text-xs font-google font-semibold text-neutral-700 mb-4 select-none">
            <span className="w-2 h-2 rounded-full bg-[#4285f4]" />
            <span className="w-2 h-2 rounded-full bg-[#ea4335]" />
            <span className="w-2 h-2 rounded-full bg-[#fbbc05]" />
            <span className="w-2 h-2 rounded-full bg-[#34a853]" />
            <span className="ml-1 tracking-wider uppercase text-[10.5px]">Chapter Honors & Awards</span>
          </div>

          {/* Main Title: "Student Achievements" */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-google font-black text-neutral-900 leading-[1.1] tracking-tight">
            Student{' '}
            <span className="inline-flex tracking-tight select-none">
              <span className="text-[#4285f4]">A</span>
              <span className="text-[#ea4335]">c</span>
              <span className="text-[#fbbc05]">h</span>
              <span className="text-[#4285f4]">i</span>
              <span className="text-[#34a853]">e</span>
              <span className="text-[#ea4335]">v</span>
              <span className="text-[#4285f4]">e</span>
              <span className="text-[#34a853]">m</span>
              <span className="text-[#fbbc05]">e</span>
              <span className="text-[#ea4335]">n</span>
              <span className="text-[#4285f4]">t</span>
              <span className="text-[#34a853]">s</span>
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-600 font-google font-normal max-w-xl leading-relaxed">
            Celebrating national competitions, hackathon podium finishes, and academic triumphs achieved by GDGC community members.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-[#4285f4] via-[#ea4335] to-[#34a853] rounded-full mt-6" />
        </div>

        {/* ============================================================== */}
        {/* MAIN FULL-WIDTH ACHIEVEMENTS LIST WITH COLORED HEADINGS       */}
        {/* ============================================================== */}
        <div className="w-full divide-y divide-neutral-200/90">
          {achievementsData.map((item, index) => {
            const numberLabel = String(index + 1).padStart(2, '0')
            const colorTheme = GOOGLE_COLORS[index % GOOGLE_COLORS.length]

            return (
              <article
                key={item.id}
                className={`achievement-card reveal stagger-${(index % 4) + 1} w-full py-10 sm:py-16 transition-all`}
              >
                {/* Header Row: Number + Colored Heading + Highlight Tag */}
                <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className={`text-3xl sm:text-4xl md:text-5xl font-google font-black shrink-0 ${colorTheme.numberText}`}>
                      {numberLabel}
                    </span>
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-google font-black tracking-tight ${colorTheme.titleText} leading-tight`}>
                      {item.title}
                    </h2>
                  </div>

                  {/* Subtitle Badge */}
                  <span
                    className={`self-start sm:self-auto text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1 rounded-full border font-google whitespace-nowrap shadow-2xs ${colorTheme.tagBg}`}
                  >
                    {item.highlightBadge}
                  </span>
                </div>

                {/* Subtitle Line */}
                <div className="mt-2 pl-0 sm:pl-14 md:pl-20 text-xs sm:text-sm font-google font-medium text-neutral-500">
                  {item.subtitle}
                </div>

                {/* Split Layout: Left Text & Team + Right Prominent Image */}
                <div className="w-full mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  
                  {/* Left Column: Short Description & Team Members */}
                  <div className="lg:col-span-5 pl-0 sm:pl-14 md:pl-20 flex flex-col justify-center space-y-4">
                    {item.shortDesc && (
                      <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                        {item.shortDesc}
                      </p>
                    )}

                    <div className="pt-2 border-t border-neutral-100 flex flex-col gap-1.5">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
                        Team Members
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.teamMembers.map((member, mIdx) => (
                          <span
                            key={mIdx}
                            className="px-3 py-1 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 text-xs font-medium font-google transition-colors shadow-2xs"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Prominent Full-Width Image with Google Color Hover Glow */}
                  <div className="lg:col-span-7 flex justify-end">
                    <div
                      className={`w-full max-w-[680px] lg:max-w-none aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-neutral-200/90 transition-all duration-300 ${colorTheme.glow} hover:-translate-y-1 group relative`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Corner Number Tag */}
                      <div className="absolute top-3.5 right-3.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-google font-bold border backdrop-blur-md bg-white/90 shadow-xs ${colorTheme.text}`}>
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            )
          })}
        </div>

      </div>
    </div>
  )
}
