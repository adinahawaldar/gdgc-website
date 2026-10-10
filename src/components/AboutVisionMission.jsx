import React from 'react'

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

  return (
    <section id="about" className="w-full py-12 sm:py-20 space-y-16 sm:space-y-24 select-none">
      
      {/* ============================================================== */}
      {/* 1. ABOUT & QUOTE BANNER WITH STYLIZED YELLOW CURLY BRACKETS     */}
      {/* ============================================================== */}
      <div className="w-full px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left: Curly brackets with statement */}
        <div className="flex-1 flex items-center gap-3 sm:gap-6 w-full">
          {/* Left Yellow Curly Bracket */}
          <div className="shrink-0 text-[#f6bd38] select-none">
            <svg
              className="w-12 h-32 sm:w-16 sm:h-40 md:w-20 md:h-44"
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] font-extrabold text-neutral-900 leading-snug">
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
              className="w-12 h-32 sm:w-16 sm:h-40 md:w-20 md:h-44"
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
      {/* 2. VISION TRACK (Full Width Clean Layout)                      */}
      {/* ============================================================== */}
      <div id="vision" className="w-full border-t border-b border-black bg-white py-0 select-none overflow-hidden">
        <div className="w-full h-[180px] sm:h-[220px] md:h-[250px] flex items-center justify-between relative px-2 sm:px-4 lg:px-6">
          
          {/* Left Circle: Google Developers angled bracket logo (tangent to top & bottom) */}
          <div className="h-full aspect-square rounded-full border border-black bg-white flex items-center justify-center shrink-0">
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

          {/* Middle: Vision Text Block expanding to fill the entire remaining space */}
          <div className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-center text-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-[17px] text-neutral-800 leading-relaxed font-normal max-w-3xl">
              This organization envisions itself to be an avenue for the future generation to nurture their ideas and encourage critical thinking by establishing a community of tech enthusiasts who are passionate about uplifting communities through technology and innovation.
            </p>
          </div>

          {/* Right Circle: "Vision" Heading (tangent to top & bottom) */}
          <div className="h-full aspect-square rounded-full border border-black bg-white flex items-center justify-center shrink-0">
            <span className="text-lg sm:text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">
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
              className="w-full border-2 border-neutral-900 rounded-full py-2 px-3 sm:px-4 flex items-center gap-3.5 sm:gap-4 bg-white shadow-sm hover:shadow-md transition-shadow"
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
