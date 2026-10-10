import React from 'react'
import { BookOpen, Code2, Users, Rocket, ArrowUpRight, Sparkles } from 'lucide-react'

export default function AboutVisionMission() {
  const missionItems = [
    {
      id: 1,
      color: 'bg-[#ea4335]', // Google Red
      text: 'Bridge the gap between theory and practice through a peer-to-peer learning environment.',
    },
    {
      id: 2,
      color: 'bg-[#fbbc05]', // Google Yellow
      text: 'Empower our members to leave an impact by building solutions that solve real-life problems in the community and by equipping them with the tools to address local issues.',
    },
    {
      id: 3,
      color: 'bg-[#34a853]', // Google Green
      text: 'Empower people through technology and programming education.',
    },
    {
      id: 4,
      color: 'bg-[#4285f4]', // Google Blue
      text: 'Create meaningful technological solutions for other communities.',
    },
    {
      id: 5,
      color: 'bg-[#94a3b8]', // Slate/Gray
      text: 'Make connections to different organizations that will enable us to grow our network.',
    },
  ]

  const pillars = [
    {
      title: 'Learn',
      tagline: 'Deepen Technical Skills',
      description: 'Hands-on learning experiences through workshops, labs, and guided technical sessions.',
      color: 'bg-[#e8f0fe] text-[#1a73e8] border-[#d2e3fc]',
      borderColor: 'hover:border-[#4285f4]',
      glowColor: 'hover:shadow-[0_20px_40px_-12px_rgba(66,133,244,0.25)]',
      topBar: 'bg-[#4285f4]',
      icon: BookOpen,
      iconBg: 'bg-[#e8f0fe] text-[#1a73e8]',
      tags: ['Codelabs', 'Cloud & AI', 'Workshops'],
      actionText: 'Explore learning',
    },
    {
      title: 'Build',
      tagline: 'Ship Real Solutions',
      description: 'Turn ideas into prototypes and products that solve real challenges for real communities.',
      color: 'bg-[#e6f4ea] text-[#188038] border-[#ceead6]',
      borderColor: 'hover:border-[#34a853]',
      glowColor: 'hover:shadow-[0_20px_40px_-12px_rgba(52,168,83,0.25)]',
      topBar: 'bg-[#34a853]',
      icon: Code2,
      iconBg: 'bg-[#e6f4ea] text-[#188038]',
      tags: ['Hackathons', 'Prototypes', 'Open Source'],
      actionText: 'Explore builds',
    },
    {
      title: 'Connect',
      tagline: 'Grow Your Network',
      description: 'Create a strong network of developers, mentors, founders, and collaborators across campus.',
      color: 'bg-[#fef7e0] text-[#b06000] border-[#feefc3]',
      borderColor: 'hover:border-[#fbbc04]',
      glowColor: 'hover:shadow-[0_20px_40px_-12px_rgba(251,188,4,0.3)]',
      topBar: 'bg-[#fbbc04]',
      icon: Users,
      iconBg: 'bg-[#fef7e0] text-[#b06000]',
      tags: ['DevFest', 'Mentorship', 'Meetups'],
      actionText: 'Connect with peers',
    },
    {
      title: 'Lead',
      tagline: 'Inspire & Empower',
      description: 'Develop future-ready leaders who can shape technology, create impact, and inspire others.',
      color: 'bg-[#fce8e6] text-[#d93025] border-[#fad2cf]',
      borderColor: 'hover:border-[#ea4335]',
      glowColor: 'hover:shadow-[0_20px_40px_-12px_rgba(234,67,53,0.25)]',
      topBar: 'bg-[#ea4335]',
      icon: Rocket,
      iconBg: 'bg-[#fce8e6] text-[#d93025]',
      tags: ['Leadership', 'Impact', 'Community'],
      actionText: 'Grow as a leader',
    },
  ]

  return (
    <section id="about" className="w-full py-12 sm:py-20 space-y-16 sm:space-y-24 select-none">
      
      {/* ============================================================== */}
      {/* 1. ABOUT & QUOTE BANNER WITH STYLIZED YELLOW CURLY BRACKETS     */}
      {/* ============================================================== */}
      <div className="w-full px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left: Curly brackets with statement */}
        <div className="flex-1 flex items-center gap-2 sm:gap-6 w-full">
          {/* Left Yellow Curly Bracket */}
          <div className="shrink-0 text-[#f6bd38] select-none">
            <svg
              className="w-7 h-20 sm:w-16 sm:h-40 md:w-20 md:h-44"
              viewBox="0 0 50 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 40 10 C 25 10, 20 25, 20 50 C 20 62, 12 70, 4 70 C 12 70, 20 78, 20 90 C 20 115, 25 130, 40 130"
                stroke="#111111"
                strokeWidth="5"
                fill="#fde047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Quote Text */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.4rem] font-extrabold text-neutral-900 leading-snug">
            Here, we don't just grow with technology—we{' '}
            <span className="inline-block font-black">
              <span className="text-[#4285f4]">e</span>
              <span className="text-[#ea4335]">v</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">l</span>
              <span className="text-[#34a853]">v</span>
              <span className="text-[#ea4335]">e</span>
            </span>{' '}
            with it.
          </h2>

          {/* Right Yellow Curly Bracket */}
          <div className="shrink-0 text-[#f6bd38] select-none">
            <svg
              className="w-7 h-20 sm:w-16 sm:h-40 md:w-20 md:h-44"
              viewBox="0 0 50 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 10 C 25 10, 30 25, 30 50 C 30 62, 38 70, 46 70 C 38 70, 30 78, 30 90 C 30 115, 25 130, 10 130"
                stroke="#111111"
                strokeWidth="5"
                fill="#fde047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Right: Description & Learn More Button */}
        <div className="w-full lg:w-[360px] xl:w-[420px] shrink-0 flex flex-col items-start lg:pl-6 space-y-4">
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
            Develop leadership skills, gain recognition, expand your network and collaborate with other passionate developers at Anjuman-I-Islam's Kalsekar Technical Campus.
          </p>
          <a
            href="#vision"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#f6bd38] border-2 border-neutral-950 text-neutral-950 text-xs sm:text-sm font-bold shadow-[0_2px_8px_rgba(246,189,56,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. WHAT WE DO - FULL WIDTH INTERACTIVE GOOGLE STYLE            */}
      {/* ============================================================== */}
      <div id="what-we-do" className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="w-full">
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-bold text-neutral-700 tracking-wide uppercase mb-3 shadow-2xs">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#4285f4] animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-[#ea4335]" />
                  <span className="w-2 h-2 rounded-full bg-[#fbbc04]" />
                  <span className="w-2 h-2 rounded-full bg-[#34a853]" />
                </span>
                What we do
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-900">
                Building a stronger developer culture
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl font-medium">
                Four foundational pillars that drive our campus community from curious beginners to confident builders.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-neutral-600 bg-white border border-neutral-200/90 px-4 py-2 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#fbbc04]" />
              <span>Interactive Google tracks</span>
            </div>
          </div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article
                  key={pillar.title}
                  className={`group relative flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 ${pillar.borderColor} ${pillar.glowColor} overflow-hidden cursor-pointer active:scale-[0.99]`}
                >
                  {/* Top Google colored accent stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${pillar.topBar} transition-all duration-300 group-hover:h-2`} />

                  {/* Subtle hover wash gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Header row: Pill Badge + Google Icon */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide border shadow-2xs ${pillar.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${pillar.topBar}`} />
                        {pillar.title}
                      </div>

                      <div className={`p-2.5 rounded-2xl ${pillar.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xs`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-black transition-colors">
                      {pillar.tagline}
                    </h4>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-700 transition-colors">
                      {pillar.description}
                    </p>

                    {/* Feature tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2.5 py-0.5 rounded-md bg-neutral-100/90 text-[11px] font-medium text-neutral-600 transition-colors group-hover:bg-neutral-200/80 group-hover:text-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Interactive link / action */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-700 transition-colors">
                    <span className="group-hover:text-neutral-950 font-bold">{pillar.actionText}</span>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-100 text-neutral-700 transition-all duration-300 group-hover:bg-neutral-950 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 shadow-2xs">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. VISION TRACK (Responsive Layout: Clean card on Mobile, Track on Desktop) */}
      {/* ============================================================== */}
      <div id="vision" className="w-full border-t border-b border-black bg-white py-6 md:py-0 select-none overflow-hidden">
        <div className="w-full md:h-[220px] lg:h-[250px] flex flex-col md:flex-row items-center justify-center md:justify-between relative px-4 sm:px-6 lg:px-8 gap-4 md:gap-0">
          
          {/* Mobile Badge: Google Brackets + "Vision" Heading */}
          <div className="md:hidden inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-black bg-neutral-50 shadow-xs">
            <div className="flex items-center gap-1 scale-75">
              <div className="flex flex-col gap-0.5 items-end -rotate-12">
                <div className="w-5 h-2.5 rounded-full bg-[#ea4335]" />
                <div className="w-5 h-2.5 rounded-full bg-[#4285f4]" />
              </div>
              <div className="flex flex-col gap-0.5 items-start rotate-12">
                <div className="w-5 h-2.5 rounded-full bg-[#34a853]" />
                <div className="w-5 h-2.5 rounded-full bg-[#fbbc05]" />
              </div>
            </div>
            <span className="text-sm font-bold text-neutral-900 tracking-tight uppercase">
              Vision
            </span>
          </div>

          {/* Desktop Left Circle: Google Developers angled bracket logo (tangent to top & bottom) */}
          <div className="hidden md:flex h-full aspect-square rounded-full border border-black bg-white items-center justify-center shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Left bracket (Red / Blue) */}
              <div className="flex flex-col gap-1 sm:gap-1.5 items-end -rotate-12">
                <div className="w-7 sm:w-10 h-3.5 sm:h-5 rounded-full bg-[#ea4335] shadow-sm" />
                <div className="w-7 sm:w-10 h-3.5 sm:h-5 rounded-full bg-[#4285f4] shadow-sm" />
              </div>
              {/* Right bracket (Green / Yellow) */}
              <div className="flex flex-col gap-1 sm:gap-1.5 items-start rotate-12">
                <div className="w-7 sm:w-10 h-3.5 sm:h-5 rounded-full bg-[#34a853] shadow-sm" />
                <div className="w-7 sm:w-10 h-3.5 sm:h-5 rounded-full bg-[#fbbc05] shadow-sm" />
              </div>
            </div>
          </div>

          {/* Middle: Vision Text Block */}
          <div className="flex-1 px-2 sm:px-6 md:px-8 lg:px-14 flex items-center justify-center text-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-[17px] text-neutral-800 leading-relaxed font-normal max-w-3xl">
              This organization envisions itself to be an avenue for the future generation to nurture their ideas and encourage critical thinking by establishing a community of tech enthusiasts who are passionate about uplifting communities through technology and innovation.
            </p>
          </div>

          {/* Desktop Right Circle: "Vision" Heading (tangent to top & bottom) */}
          <div className="hidden md:flex h-full aspect-square rounded-full border border-black bg-white items-center justify-center shrink-0">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 tracking-tight">
              Vision
            </span>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. MISSION SECTION (Full Width Spanning Layout)                */}
      {/* ============================================================== */}
      <div id="mission" className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10 lg:gap-14 pt-2">
        
        {/* Left Column: Heading */}
        <div className="w-full md:w-auto md:min-w-[220px] lg:min-w-[260px] shrink-0 flex flex-col justify-start">
          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
              Mission
            </h3>
            <p className="mt-2 text-sm text-neutral-500 font-semibold tracking-wide">
              This organization aims to:
            </p>
          </div>
        </div>

        {/* Right Column: 5 Stacked Mission Pills (Full Width) */}
        <div className="flex-1 w-full flex flex-col gap-3.5">
          {missionItems.map((item) => (
            <div
              key={item.id}
              className="w-full border-2 border-neutral-900 rounded-2xl sm:rounded-full py-2.5 px-3.5 sm:px-4 flex items-center gap-3.5 sm:gap-4 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Numbered Circle with Brand Color */}
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${item.color} text-white font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm`}
              >
                {item.id}
              </div>

              {/* Mission Text */}
              <p className="text-xs sm:text-sm md:text-base text-neutral-800 font-medium pr-4 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
