import React from 'react'

const GOOGLE_COLORS = [
  {
    border: 'border-[#4285f4]',
    bg: 'bg-[#e8f0fe]',
    text: 'text-[#1a73e8]',
    dot: 'bg-[#4285f4]',
    glow: 'hover:shadow-[0_16px_36px_-8px_rgba(66,133,244,0.22)]',
    tagBg: 'bg-[#e8f0fe] text-[#1a73e8] border-[#d2e3fc]',
  },
  {
    border: 'border-[#ea4335]',
    bg: 'bg-[#fce8e6]',
    text: 'text-[#d93025]',
    dot: 'bg-[#ea4335]',
    glow: 'hover:shadow-[0_16px_36px_-8px_rgba(234,67,53,0.22)]',
    tagBg: 'bg-[#fce8e6] text-[#d93025] border-[#fad2cf]',
  },
  {
    border: 'border-[#fbbc05]',
    bg: 'bg-[#fef7e0]',
    text: 'text-[#b06000]',
    dot: 'bg-[#fbbc05]',
    glow: 'hover:shadow-[0_16px_36px_-8px_rgba(251,188,4,0.24)]',
    tagBg: 'bg-[#fef7e0] text-[#b06000] border-[#feefc3]',
  },
  {
    border: 'border-[#34a853]',
    bg: 'bg-[#e6f4ea]',
    text: 'text-[#188038]',
    dot: 'bg-[#34a853]',
    glow: 'hover:shadow-[0_16px_36px_-8px_rgba(52,168,83,0.22)]',
    tagBg: 'bg-[#e6f4ea] text-[#188038] border-[#ceead6]',
  },
  {
    border: 'border-[#4285f4]',
    bg: 'bg-[#e8f0fe]',
    text: 'text-[#1a73e8]',
    dot: 'bg-[#4285f4]',
    glow: 'hover:shadow-[0_16px_36px_-8px_rgba(66,133,244,0.22)]',
    tagBg: 'bg-[#e8f0fe] text-[#1a73e8] border-[#d2e3fc]',
  },
]

const timelineData = [
  {
    id: 'foundation',
    tag: 'FOUNDATION',
    year: '2022',
    description:
      'GDGC AIKTC was established with a vision to create a thriving developer community focused on Google technologies, hands-on learning, and open-source innovation.',
    image: {
      src: '/images/events/chapter-kickoff.jpg',
      alt: 'GDGC AIKTC Chapter Kickoff ceremony',
    },
  },
  {
    id: 'first-workshops',
    tag: 'HANDS-ON LEARNING',
    year: 'First Workshops',
    description:
      'Launched our foundational workshop series covering Android app development, modern Web technologies, and Google Cloud Platform basics for engineering students.',
    image: {
      src: '/images/events/web-dev-bootcamp.jpg',
      alt: 'Web development and Android workshop in campus lab',
    },
  },
  {
    id: 'community-growth',
    tag: 'EXPANDING REACH',
    year: 'Community Growth',
    description:
      'Reached 350+ active members across computer science, electronics, and engineering disciplines with hackathons, tech talks, and collaborative peer learning.',
    image: {
      src: '/images/events/backend-bootcamp.jpg',
      alt: 'Collaborative development bootcamp in the computer lab',
    },
  },
  {
    id: 'major-achievements',
    tag: 'RECOGNITION & MENTORSHIP',
    year: 'Major Achievements',
    description:
      'Won campus accolades for outstanding community engagement and successfully launched student mentorship cohorts guiding juniors in full-stack engineering.',
    image: {
      src: '/images/events/genai-study-jam.jpg',
      alt: 'GDGC AIKTC student cohort and faculty mentors at campus tech center',
    },
  },
  {
    id: 'expansion',
    tag: 'INNOVATION & BEYOND',
    year: '2024 - Expansion',
    description:
      'Expanded our reach with cutting-edge GenAI study jams, Solution Challenge sprints, industry speaker sessions, and student startup prototype incubation.',
    image: {
      src: '/images/events/pitch-carnival.jpg',
      alt: 'Pitch Carnival Final Pitch auditorium presentation',
    },
  },
]

function MilestoneRow({ milestone, index }) {
  const isEven = index % 2 === 0
  const image = milestone.image
  const colorTheme = GOOGLE_COLORS[index % GOOGLE_COLORS.length]

  const imageCard = (
    <div className={`relative w-full max-w-[420px] group ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
      <div
        className={`relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-neutral-200/90 transition-all duration-300 ${colorTheme.glow} group-hover:-translate-y-1`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle Google themed accent badge at image corner */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-google font-bold border backdrop-blur-md bg-white/90 shadow-xs ${colorTheme.text}`}>
            0{index + 1}
          </span>
        </div>
      </div>
    </div>
  )

  const textContent = (
    <div
      className={`flex flex-col justify-center max-w-md ${
        isEven
          ? 'items-start text-left md:pl-6 lg:pl-10'
          : 'items-start md:items-end text-left md:text-right md:pr-6 lg:pr-10 md:ml-auto'
      }`}
    >
      {/* Category Pill with Google Color Accent */}
      <span
        className={`text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full border mb-2 font-google ${colorTheme.tagBg}`}
      >
        {milestone.tag}
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-google font-black text-neutral-900 tracking-tight leading-tight mb-2 sm:mb-3">
        {milestone.year}
      </h2>

      <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-600 font-normal">
        {milestone.description}
      </p>
    </div>
  )

  return (
    <div className={`milestone-row reveal ${isEven ? 'reveal-left' : 'reveal-right'} relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-8 sm:py-14`}>
      {/* Center node dot on the timeline spine with Google Color */}
      <div
        aria-hidden="true"
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-neutral-900 shadow-sm z-10 items-center justify-center transition-transform duration-300 hover:scale-125"
      >
        <span className={`w-2.5 h-2.5 rounded-full ${colorTheme.dot}`} />
      </div>

      {isEven ? (
        <>
          <div className="md:col-span-6 flex justify-end">
            {imageCard}
          </div>
          <div className="md:col-span-6">
            {textContent}
          </div>
        </>
      ) : (
        <>
          {/* On mobile: keep image first, on desktop: content on left and image on right */}
          <div className="md:col-span-6 order-2 md:order-1">
            {textContent}
          </div>
          <div className="md:col-span-6 order-1 md:order-2 flex justify-start">
            {imageCard}
          </div>
        </>
      )}
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="page-fade-enter w-full min-h-screen bg-white text-neutral-900 py-12 sm:py-20 px-4 sm:px-6 md:px-10 selection:bg-blue-500 selection:text-white relative overflow-hidden">
      
      {/* ============================================================== */}
      {/* GOOGLE THEMED AMBIENT COLOR SHADOWS & AURA IN BACKGROUND        */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-0">
        {/* Top-left Google Blue Glow */}
        <div
          className="absolute -top-20 -left-20 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-[#4285f4]/12 sm:bg-[#4285f4]/18 filter blur-[80px] sm:blur-[110px] animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        {/* Top-right Google Red Glow */}
        <div
          className="absolute top-1/4 -right-20 w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full bg-[#ea4335]/10 sm:bg-[#ea4335]/16 filter blur-[80px] sm:blur-[110px] animate-pulse"
          style={{ animationDuration: '7s', animationDelay: '1s' }}
        />
        {/* Middle-left Google Yellow Glow */}
        <div
          className="absolute top-1/2 -left-20 w-72 sm:w-[400px] h-72 sm:h-[400px] rounded-full bg-[#fbbc05]/12 sm:bg-[#fbbc05]/18 filter blur-[80px] sm:blur-[105px] animate-pulse"
          style={{ animationDuration: '8s', animationDelay: '2s' }}
        />
        {/* Bottom-right Google Green Glow */}
        <div
          className="absolute bottom-20 -right-16 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-[#34a853]/12 sm:bg-[#34a853]/18 filter blur-[85px] sm:blur-[110px] animate-pulse"
          style={{ animationDuration: '6.5s', animationDelay: '3s' }}
        />
        {/* Center Multi-Color Ambient Mesh */}
        <div className="absolute inset-24 rounded-full bg-gradient-to-tr from-blue-400/6 via-amber-300/6 to-emerald-400/6 filter blur-[70px] opacity-70" />
      </div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        
        {/* ============================================================== */}
        {/* VERTICAL CONTINUOUS GOOGLE GRADIENT SPINE LINE                 */}
        {/* ============================================================== */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-28 bottom-16 w-[3px] bg-gradient-to-b from-[#4285f4] via-[#ea4335] via-[#fbbc05] to-[#34a853] rounded-full pointer-events-none opacity-85 shadow-xs"
        />

        {/* ============================================================== */}
        {/* CENTERED PAGE HEADER WITH GOOGLE COLORED TYPOGRAPHY            */}
        {/* ============================================================== */}
        <div className="reveal flex flex-col items-center text-center mb-14 sm:mb-20">
          
          {/* Google Chapter Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 shadow-xs text-xs font-google font-semibold text-neutral-700 mb-4 select-none">
            <span className="w-2 h-2 rounded-full bg-[#4285f4]" />
            <span className="w-2 h-2 rounded-full bg-[#ea4335]" />
            <span className="w-2 h-2 rounded-full bg-[#fbbc05]" />
            <span className="w-2 h-2 rounded-full bg-[#34a853]" />
            <span className="ml-1 tracking-wider uppercase text-[10.5px]">Our Community Journey</span>
          </div>

          {/* Main Title: "Journey with Google Developer Groups" */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-google font-black text-neutral-900 leading-[1.1] tracking-tight">
            Journey with{' '}
            <span className="inline-flex tracking-tight select-none">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </span>{' '}
            <span className="text-[#1a73e8]">Developer</span>{' '}
            <span className="text-[#188038]">Groups</span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-600 font-google font-normal max-w-xl leading-relaxed">
            Connecting curious minds, building technical products, and empowering student engineers at Anjuman-I-Islam's Kalsekar Technical Campus since 2022.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-[#4285f4] via-[#ea4335] to-[#34a853] rounded-full mt-6" />
        </div>

        {/* ============================================================== */}
        {/* ALTERNATING TIMELINE MILESTONES (Google Themed Cards)          */}
        {/* ============================================================== */}
        <div className="flex flex-col space-y-4 sm:space-y-6 relative">
          {timelineData.map((milestone, index) => (
            <MilestoneRow key={milestone.id} milestone={milestone} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}
