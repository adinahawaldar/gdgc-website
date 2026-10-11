import React from 'react'
import { ArrowUpRight } from 'lucide-react'

// Custom Platform Brand SVGs
function WhatsAppIcon({ className = "w-4 h-4 sm:w-5 sm:h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

function InstagramIcon({ className = "w-4 h-4 sm:w-5 sm:h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-4 h-4 sm:w-5 sm:h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.97v-8.37H5.07v8.37h2.78z" />
    </svg>
  )
}

// Exactly 3 Platforms: WhatsApp, LinkedIn, Instagram
const row1Cards = [
  {
    id: 'wa-1',
    name: 'GDGC AIKTC',
    handle: '@whatsapp',
    desc: 'Join our WhatsApp community for quick updates.',
    url: 'https://chat.whatsapp.com',
    icon: WhatsAppIcon,
    iconBg: 'bg-[#25D366] text-white',
    hoverBorder: 'hover:border-[#25D366]/50',
  },
  {
    id: 'li-1',
    name: 'GDGC AIKTC',
    handle: '@gdg-on-campus-aiktc',
    desc: 'Connect with tech leaders & alumni network.',
    url: 'https://www.linkedin.com/company/gdg-on-campus-aiktc/posts/?feedView=all',
    icon: LinkedinIcon,
    iconBg: 'bg-[#0077b5] text-white',
    hoverBorder: 'hover:border-[#0077b5]/50',
  },
  {
    id: 'ig-1',
    name: 'GDGC AIKTC',
    handle: '@gdgc._aiktc',
    desc: 'Follow event highlights, stories & reels.',
    url: 'https://www.instagram.com/gdgc._aiktc?stkn=MXFoMW8yOW0xcXM5MQ==',
    icon: InstagramIcon,
    iconBg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white',
    hoverBorder: 'hover:border-[#dc2743]/50',
  },
]

const row2Cards = [
  {
    id: 'li-2',
    name: 'GDGC AIKTC',
    handle: '@gdg-on-campus-aiktc',
    desc: 'Professional news, webinars & opportunities.',
    url: 'https://www.linkedin.com/company/gdg-on-campus-aiktc/posts/?feedView=all',
    icon: LinkedinIcon,
    iconBg: 'bg-[#0077b5] text-white',
    hoverBorder: 'hover:border-[#0077b5]/50',
  },
  {
    id: 'ig-2',
    name: 'GDGC AIKTC',
    handle: '@gdgc._aiktc',
    desc: 'Behind the scenes & student community life.',
    url: 'https://www.instagram.com/gdgc._aiktc?stkn=MXFoMW8yOW0xcXM5MQ==',
    icon: InstagramIcon,
    iconBg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white',
    hoverBorder: 'hover:border-[#dc2743]/50',
  },
  {
    id: 'wa-2',
    name: 'GDGC AIKTC',
    handle: '@whatsapp',
    desc: 'Direct discussions & group announcements.',
    url: 'https://chat.whatsapp.com',
    icon: WhatsAppIcon,
    iconBg: 'bg-[#25D366] text-white',
    hoverBorder: 'hover:border-[#25D366]/50',
  },
]

// Loop arrays for seamless infinite marquee effect
const track1Items = [...row1Cards, ...row1Cards, ...row1Cards, ...row1Cards]
const track2Items = [...row2Cards, ...row2Cards, ...row2Cards, ...row2Cards]

// Reusable Social Card Component (Matching previous layout)
function SocialCard({ item }) {
  const Icon = item.icon
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-[240px] sm:w-[270px] shrink-0 bg-white border border-neutral-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${item.hoverBorder} hover:-translate-y-0.5 select-none`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {/* Platform Icon Badge */}
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${item.iconBg}`}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          {/* Name & Handle */}
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-[13px] font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-tight">
              {item.name}
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-500 font-medium">
              {item.handle}
            </span>
          </div>
        </div>

        {/* External Link Arrow */}
        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
      </div>

      {/* Description */}
      <p className="mt-2.5 text-[11px] sm:text-xs text-neutral-500 text-left line-clamp-1">
        {item.desc}
      </p>
    </a>
  )
}

// Doodle Phone Vector Mockup
function DoodlePhone({ rotation = "-rotate-12" }) {
  return (
    <div
      className={`relative w-28 sm:w-36 md:w-44 h-48 sm:h-60 md:h-72 bg-white rounded-[28px] sm:rounded-[36px] border-[2.5px] sm:border-[3px] border-neutral-900 p-2 sm:p-2.5 shadow-[4px_8px_20px_rgba(0,0,0,0.08)] transform ${rotation} hover:rotate-0 transition-transform duration-500 shrink-0 pointer-events-none select-none`}
    >
      {/* Speaker Bar */}
      <div className="w-8 sm:w-12 h-1 bg-neutral-300 rounded-full mx-auto mb-2" />

      {/* Screen Body */}
      <div className="w-full h-[calc(100%-1.2rem)] bg-neutral-50/80 rounded-[20px] sm:rounded-[26px] p-2 flex flex-col gap-2 overflow-hidden border border-neutral-200/60">
        {/* WhatsApp Mockup Bar */}
        <div className="w-full bg-white rounded-xl p-1.5 border border-neutral-200/70 shadow-xs flex items-center gap-2">
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#25D366] shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
            WA
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="w-3/4 h-2 bg-neutral-200 rounded-full" />
            <div className="w-1/2 h-1.5 bg-neutral-100 rounded-full" />
          </div>
        </div>

        {/* LinkedIn Mockup Bar */}
        <div className="w-full bg-white rounded-xl p-1.5 border border-neutral-200/70 shadow-xs flex items-center gap-2">
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#0077b5] shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
            in
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="w-2/3 h-2 bg-blue-100 rounded-full" />
            <div className="w-1/3 h-1.5 bg-neutral-100 rounded-full" />
          </div>
        </div>

        {/* Instagram Mockup Bar */}
        <div className="w-full bg-white rounded-xl p-1.5 border border-neutral-200/70 shadow-xs flex items-center gap-2">
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
            IG
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="w-4/5 h-2 bg-neutral-200 rounded-full" />
            <div className="w-2/5 h-1.5 bg-neutral-100 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SocialFollowSection() {
  return (
    <section
      id="social"
      className="w-full bg-white py-10 sm:py-14 select-none overflow-hidden border-t border-neutral-100"
    >
      {/* Compact Header Container flanked by Doodle Phone Mockups */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 md:gap-8 mb-8 sm:mb-10">
        {/* Left Phone Mockup */}
        <div className="hidden sm:flex items-center justify-center shrink-0">
          <DoodlePhone rotation="-rotate-12" />
        </div>

        {/* Center Text (Clean professional font colors) */}
        <div className="flex-1 text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-google leading-tight text-neutral-900">
            You can follow us on{' '}
            <span className="text-[#1a73e8]">social media</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            Stay connected with GDGC! Follow us on social media for the latest updates, events, and resources to help you grow as a developer. Join our community online and be part of the innovation—don't miss out!
          </p>
        </div>

        {/* Right Phone Mockup */}
        <div className="hidden sm:flex items-center justify-center shrink-0">
          <DoodlePhone rotation="rotate-12" />
        </div>
      </div>

      {/* Dual-Row Marquee Tracks with ONLY WhatsApp, LinkedIn & Instagram */}
      <div className="w-full flex flex-col gap-3 overflow-hidden py-1">
        {/* Row 1 (Scrolling Left) */}
        <div className="flex overflow-hidden mask-horizontal">
          <div className="animate-marquee flex gap-3 sm:gap-4 shrink-0">
            {track1Items.map((item, idx) => (
              <SocialCard key={`${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right / Reverse) */}
        <div className="flex overflow-hidden mask-horizontal">
          <div className="animate-marquee-reverse flex gap-3 sm:gap-4 shrink-0">
            {track2Items.map((item, idx) => (
              <SocialCard key={`${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
