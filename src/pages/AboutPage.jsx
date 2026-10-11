import React from 'react'

const timelineData = [
  {
    id: 'foundation',
    tag: 'FOUNDATION',
    year: '2022',
    description:
      'GDGC AIKTC was established with a vision to create a thriving developer community focused on Google technologies and innovation.',
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
      'Launched our first series of workshops covering Android development, Web technologies, and Google Cloud Platform basics.',
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
      'Reached 100+ active members and organized multiple hackathons, tech talks, and collaborative coding sessions.',
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
      'Won recognition for outstanding community engagement and successfully launched mentorship programs for junior developers.',
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
      'Expanded our reach with industry partnerships, advanced workshops, and preparation for Google Developer Student Club certification.',
    image: {
      src: '/images/events/pitch-carnival.jpg',
      alt: 'Pitch Carnival Final Pitch auditorium presentation',
    },
  },
]

function MilestoneRow({ milestone, index }) {
  const isEven = index % 2 === 0
  const image = milestone.image

  const imageCard = (
    <div className={`relative w-full max-w-[390px] group ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
      <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-neutral-200/90 transition-all duration-300 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
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
      <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#1a73e8] font-mono">
        {milestone.tag}
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 font-normal tracking-tight mt-1 mb-3 sm:mb-4">
        {milestone.year}
      </h2>

      <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-600 font-normal">
        {milestone.description}
      </p>
    </div>
  )

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-7 sm:py-12">
      {/* Center node dot on the timeline spine */}
      <div
        aria-hidden="true"
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#1a73e8] shadow-xs z-10 items-center justify-center"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]" />
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
    <div className="w-full min-h-screen bg-white text-neutral-900 py-12 sm:py-20 px-4 sm:px-6 md:px-10 selection:bg-[#8bd3c7] selection:text-[#142d20]">
      <div className="w-full max-w-5xl mx-auto relative">
        {/* ============================================================== */}
        {/* VERTICAL CONTINUOUS SPINE LINE                                 */}
        {/* ============================================================== */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-16 bottom-12 w-[1.5px] bg-neutral-200 pointer-events-none"
        />

        {/* ============================================================== */}
        {/* CENTERED PAGE HEADER                                           */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1a73e8] mb-2 font-mono">
            COMMUNITY TIMELINE
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-neutral-900 leading-[1.12] tracking-tight">
           Journey with GDGC AIKTC
          </h1>
        </div>

        {/* ============================================================== */}
        {/* ALTERNATING TIMELINE MILESTONES (1 Real Photo per Milestone)   */}
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
