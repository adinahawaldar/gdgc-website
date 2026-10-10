import React, { useState } from 'react'
import {
  ArrowRight,
  Command,
  ExternalLink,
  Users,
  Code2,
  Check
} from 'lucide-react'

export default function HeroSection() {
  const [toggleActive, setToggleActive] = useState(false)
  const [sliderPos, setSliderPos] = useState(50)
  const [cmdCopied, setCmdCopied] = useState(false)

  const handleCopyCommand = () => {
    setCmdCopied(true)
    setTimeout(() => setCmdCopied(false), 2000)
  }

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 select-none overflow-hidden bg-white">
      {/* ============================================================== */}
      {/* GOOGLE CONSTELLATION & FLOATING SPHERES (Full Hero, Both Sides) */}
      {/* ============================================================== */}
      {/* SVG Constellation Network & Solid Colored Balls (Hidden on mobile view) */}
      <svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        viewBox="0 0 1440 850"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle drop shadows for spheres to give tactile Google feel */}
          <filter id="ball-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* ------------------------------------------------------------ */}
        {/* LEFT FLANK CONSTELLATION & SPHERES (Shifted Far Left)       */}
        {/* ------------------------------------------------------------ */}
        <g className="transition-all duration-500">
          {/* Constellation Network Lines (Left) */}
          <path
            d="M 40 160 L 110 90 L 160 190 L 80 330 L 30 480 L 120 460 L 170 560 L 110 680 L 170 760 L 70 810"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 110 90 L 25 250 L 80 330"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 160 190 L 210 170"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 120 460 L 190 500 L 170 560"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 30 480 L 60 610 L 110 680"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Hollow Constellation Nodes (Left) */}
          <circle cx="40" cy="160" r="10" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="110" cy="90" r="13" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="25" cy="250" r="8" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="160" cy="190" r="11" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="120" cy="460" r="15" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="30" cy="480" r="10" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="60" cy="610" r="11" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="170" cy="560" r="14" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="70" cy="810" r="10" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Solid Google Colored Spheres (Left - Far from Text) */}
          {/* Yellow Primary Ball */}
          <circle
            cx="80"
            cy="330"
            r="30"
            fill="#fbbc04"
            filter="url(#ball-shadow)"
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          {/* Green Ball */}
          <circle
            cx="210"
            cy="170"
            r="22"
            fill="#34a853"
            filter="url(#ball-shadow)"
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          {/* Small Green Dot */}
          <circle cx="190" cy="500" r="12" fill="#34a853" filter="url(#ball-shadow)" />
          {/* Accent Blue Ball */}
          <circle cx="110" cy="680" r="20" fill="#4285f4" filter="url(#ball-shadow)" />
          {/* Lower Yellow Node */}
          <circle cx="170" cy="760" r="13" fill="#fbbc04" filter="url(#ball-shadow)" />
        </g>

        {/* ------------------------------------------------------------ */}
        {/* RIGHT FLANK CONSTELLATION & SPHERES (Shifted Far Right)      */}
        {/* ------------------------------------------------------------ */}
        <g className="transition-all duration-500">
          {/* Constellation Network Lines (Right) */}
          <path
            d="M 1435 110 L 1370 70 L 1320 150 L 1395 240 L 1435 350 L 1380 350 L 1320 500 L 1385 580 L 1335 700 L 1410 770"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 1370 70 L 1280 120 L 1315 200 L 1230 230"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 1315 200 L 1380 350"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 1380 350 L 1320 500 L 1390 520"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 1320 500 L 1290 730 L 1335 700"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Hollow Constellation Nodes (Right) */}
          <circle cx="1435" cy="110" r="9" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="1370" cy="70" r="12" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="1320" cy="150" r="12" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="1315" cy="200" r="9" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="1395" cy="240" r="13" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="1435" cy="350" r="9" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Large hollow node like the reference doodle */}
          <circle cx="1390" cy="520" r="30" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="1385" cy="580" r="12" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="1335" cy="700" r="11" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="1410" cy="770" r="9" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Solid Google Colored Spheres (Right - Far Away from Text) */}
          {/* Large Yellow Ball */}
          <circle
            cx="1280"
            cy="120"
            r="32"
            fill="#fbbc04"
            filter="url(#ball-shadow)"
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          {/* Small Red Ball */}
          <circle
            cx="1230"
            cy="230"
            r="14"
            fill="#ea4335"
            filter="url(#ball-shadow)"
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          {/* Vibrant Blue Ball */}
          <circle
            cx="1380"
            cy="350"
            r="28"
            fill="#4285f4"
            filter="url(#ball-shadow)"
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          {/* Small Yellow Dot */}
          <circle cx="1320" cy="500" r="11" fill="#fbbc04" filter="url(#ball-shadow)" />
          {/* Lower Red Ball */}
          <circle
            cx="1290"
            cy="730"
            r="22"
            fill="#ea4335"
            filter="url(#ball-shadow)"
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        </g>

        {/* ------------------------------------------------------------ */}
        {/* BOTTOM FLANK ACCENT SPHERES (Positioned below content)       */}
        {/* ------------------------------------------------------------ */}
        <g>
          {/* Solid Red Ball below CTA buttons */}
          <circle
            cx="720"
            cy="780"
            r="34"
            fill="#ea4335"
            filter="url(#ball-shadow)"
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          />
          <path
            d="M 640 800 L 720 780 L 800 800"
            stroke="#e2e8f0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="640" cy="800" r="9" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="800" cy="800" r="9" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Main Canvas Container */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center z-10">

        {/* ============================================================== */}
        {/* BIG INTERACTIVE HEADLINE (Product Sans typography)              */}
        {/* ============================================================== */}
        <div className="w-full flex flex-col items-center text-center font-bold tracking-tight text-[#111111] leading-none space-y-3 sm:space-y-4 md:space-y-5 font-google">

          {/* LINE 1: "Google" + [Minimal Green circle] + [Minimal Blue switch] */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 md:gap-4 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="tracking-tight hover:opacity-95 transition-opacity inline-flex select-none">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </span>

            {/* Widget 1: Minimal Google Green Circle with Arrow */}
            <div
              className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#e6f4ea] border border-[#ceead6] shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer group shrink-0"
              title="Next Step"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#188038] group-hover:translate-x-0.5 transition-transform stroke-[2.6]" />
            </div>

            {/* Widget 2: Minimal Google Blue Switch */}
            <div
              onClick={() => setToggleActive(!toggleActive)}
              className="inline-flex items-center h-10 sm:h-12 md:h-14 w-24 sm:w-28 md:w-32 rounded-full p-1 sm:p-1.5 cursor-pointer shadow-xs bg-[#e8f0fe] border border-[#d2e3fc] relative transition-all duration-300 overflow-hidden shrink-0"
              title="Toggle State"
            >
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-[#1a73e8] shadow-sm flex items-center justify-center text-white transition-transform duration-300 ease-out ${
                  toggleActive
                    ? 'translate-x-1 sm:translate-x-1.5'
                    : 'translate-x-[3.2rem] sm:translate-x-[3.8rem] md:translate-x-[4.4rem]'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white/90" />
              </div>
            </div>
          </div>

          {/* LINE 2: [Minimal Google Yellow dot] + "— Developer Group" with Google color shades */}
          <div className="relative flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-5 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            
            {/* Widget 3: Minimal Google Yellow Glow Node */}
            <div className="inline-flex items-center justify-center shrink-0">
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#fbbc04] ring-4 ring-[#fef7e0] shadow-xs" />
            </div>

            {/* Dash and word "Developer Group" with Google Color Shades */}
            <span className="tracking-tight select-none">
              <span className="text-neutral-300 mr-2">—</span>
              <span className="text-[#1a73e8] hover:opacity-90 transition-opacity">Developer</span>{' '}
              <span className="text-[#188038] hover:opacity-90 transition-opacity">Group</span>
            </span>
          </div>

          {/* LINE 3: [Minimal Google Red badge] + "on Campus" with Google color shades */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-5 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            
            {/* Widget 5: Minimal Google Red / Blue Pill */}
            <div
              onClick={handleCopyCommand}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#fce8e6] border border-[#fad2cf] shadow-xs cursor-pointer hover:bg-red-100/70 active:scale-95 transition-all shrink-0"
              title="Click to copy GDGC short-key"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#ea4335]" />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#d93025] tracking-wider">
                {cmdCopied ? 'COPIED' : 'GDGC'}
              </span>
            </div>

            {/* Word "on Campus" with Google color shade */}
            <span className="tracking-tight select-none">
              <span className="text-neutral-400 font-medium mr-2">on</span>
              <span className="text-[#ea4335] hover:opacity-90 transition-opacity">Campus</span>
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SUBTITLE & CTA BUTTONS (Comfortable vertical clearance)         */}
        {/* ============================================================== */}
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-2xl mx-auto text-center px-4">
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-medium leading-relaxed max-w-xl mx-auto">
            Connecting curious minds and developers in the learning process so students can build better products, faster.
          </p>

          {/* CTA Pill Buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 active:scale-95 transition-all shadow-[0_4px_14px_rgba(0,0,0,0.18)] cursor-pointer"
            >
              Join Chapter
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold tracking-wide active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Events</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
