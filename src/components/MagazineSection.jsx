import React, { useState, useEffect } from 'react'
import { BookOpen, X, ArrowRight, Download, Sparkles } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const MAGAZINES = [
  {
    id: 'grid-systems',
    spineTitle: 'Grid Systems',
    spineBg: 'bg-[#d9532f]',
    spineTextColor: 'text-white',
    spineBorder: 'border-r border-black/10',
    coverBg: 'bg-[#faf8f5]',
    coverTextColor: 'text-neutral-900',
    coverAccent: '#d9532f',
    title: 'GRID SYSTEMS',
    subtitle: 'Principles of Modern Layout & Responsive Geometry',
    author: 'GDGC Design Lab',
    issue: 'ISSUE 01',
    year: '2025',
    tag: 'UI & ARCHITECTURE',
    description:
      'A masterclass on spatial typography, golden ratio column arrangements, and modern CSS Grid architectures for mission-critical web applications.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    pagesCount: 48,
    readTime: '15 min read',
    articles: [
      { title: 'The Anatomy of the 12-Column Modern Grid', pages: '04-12' },
      { title: 'Fluid Typography & Viewport Units in 2025', pages: '13-24' },
      { title: 'Material You Dynamic Geometry in Practice', pages: '25-38' },
      { title: 'Student Showcase: Responsive Portfolios', pages: '39-48' },
    ],
  },
  {
    id: 'kinfolk-entrepreneur',
    spineTitle: 'The Kinfolk',
    spineSubtitle: 'Entrepreneur',
    spineBg: 'bg-[#edebe6]',
    spineTextColor: 'text-neutral-800',
    spineBorder: 'border border-neutral-300/80',
    coverBg: 'bg-[#f6f5f0]',
    coverTextColor: 'text-neutral-900',
    coverAccent: '#111111',
    title: 'THE KINFOLK',
    editionWord: 'ENTREPRENEUR',
    subtitle: 'Ideas for Meaningful Software & Student Startups',
    author: 'AIKTC Founders Circle',
    issue: 'VOLUME IV',
    year: '2025 EDITION',
    tag: 'ENTREPRENEURSHIP',
    description:
      'Conversations with collegiate founders turning late-night hackathon prototypes into revenue-generating SaaS platforms and campus initiatives.',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    pagesCount: 64,
    readTime: '22 min read',
    articles: [
      { title: 'From Campus Lab to Series A: An Alum Journey', pages: '06-18' },
      { title: 'Bootstrapping with Google Cloud Credits', pages: '19-32' },
      { title: 'The Lean Student MVP Blueprint', pages: '33-46' },
      { title: 'Pitch Deck Aesthetics That Win Hackathons', pages: '47-64' },
    ],
  },
  {
    id: 'genius-behind-google',
    spineTitle: 'Genius Behind AI',
    spineBg: 'bg-[#1e2026]',
    spineTextColor: 'text-[#8ab4f8]',
    spineBorder: 'border border-neutral-800',
    coverBg: 'bg-[#15171e]',
    coverTextColor: 'text-white',
    coverAccent: '#4285f4',
    title: 'GENIUS BEHIND GEMINI',
    subtitle: 'Multimodal Frontiers & On-Device Neural Networks',
    author: 'GDGC AI Research Group',
    issue: 'SPECIAL EDITION',
    year: 'SPRING 2025',
    tag: 'GENERATIVE AI',
    description:
      'Exploring transformer context windows, prompt-tuning architectures, and running lightweight quantized models directly in the browser with WebGPU.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    pagesCount: 56,
    readTime: '18 min read',
    articles: [
      { title: 'Architecture of Million-Token Context Windows', pages: '04-16' },
      { title: 'Fine-Tuning Open Models on Custom Codebases', pages: '17-28' },
      { title: 'Zero-Latency Edge Inference with WebGPU', pages: '29-42' },
      { title: 'Ethics & Safety Guardrails in Autonomous Agents', pages: '43-56' },
    ],
  },
  {
    id: 'app-icon-book',
    spineTitle: 'App Icon Book',
    spineBg: 'bg-[#dfe3ea]',
    spineTextColor: 'text-neutral-800',
    spineBorder: 'border border-neutral-300/80',
    coverBg: 'bg-[#eaf0f8]',
    coverTextColor: 'text-neutral-900',
    coverAccent: '#1a73e8',
    title: 'APP ICON & CRAFT',
    subtitle: 'The Micro-Detail of Mobile Interaction & Identity',
    author: 'Visual Systems Guild',
    issue: 'ANNUAL DIGEST',
    year: '2025',
    tag: 'MOBILE & MOTION',
    description:
      'A deep visual exploration of tactile skeuo-modernism, adaptive vector icons, and 60fps gesture choreography across iOS and Android.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    pagesCount: 42,
    readTime: '14 min read',
    articles: [
      { title: 'Vector Squircle Grids in Android 15 & iOS 18', pages: '04-14' },
      { title: 'Lighting, Depth & Multi-Layer App Icons', pages: '15-24' },
      { title: 'Fluid Micro-Interactions with Jetpack Compose', pages: '25-34' },
      { title: 'Showcase: Top 20 Student Icon Designs', pages: '35-42' },
    ],
  },
  {
    id: 'principles-of-ux',
    spineTitle: 'Principles of UX',
    spineBg: 'bg-[#2a2d34]',
    spineTextColor: 'text-neutral-200',
    spineBorder: 'border border-neutral-700',
    coverBg: 'bg-[#20232a]',
    coverTextColor: 'text-white',
    coverAccent: '#34a853',
    title: 'PRINCIPLES OF UX',
    subtitle: 'Cognitive Science, Fitts Law & Humane Interfaces',
    author: 'Human-Computer Interaction Track',
    issue: 'VOLUME II',
    year: '2025',
    tag: 'PRODUCT DESIGN',
    description:
      'Bridging psychological cognitive models with interface heuristics. How mental bandwidth dictates retention, delight, and conversion.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    pagesCount: 52,
    readTime: '17 min read',
    articles: [
      { title: 'Hick’s Law & Reducing Interface Cognitive Friction', pages: '04-15' },
      { title: 'Accessibility as a Core Engineering Pillar', pages: '16-28' },
      { title: 'Designing for Ambient & Spatial Computing', pages: '29-40' },
      { title: 'Usability Testing in Campus Hackathons', pages: '41-52' },
    ],
  },
  {
    id: 'how-to',
    spineTitle: 'How To Build',
    spineBg: 'bg-[#ffffff]',
    spineTextColor: 'text-neutral-900',
    spineBorder: 'border border-neutral-300 shadow-xs',
    coverBg: 'bg-[#fafafa]',
    coverTextColor: 'text-neutral-900',
    coverAccent: '#ea4335',
    title: 'HOW TO BUILD',
    subtitle: 'A Pragmatic Guide From Hello World to Production',
    author: 'GDGC Senior Mentors',
    issue: 'HANDBOOK',
    year: 'EDITION 2025',
    tag: 'ENGINEERING GUIDE',
    description:
      'The comprehensive survival and acceleration handbook for student software developers. Git hygiene, cloud CI/CD, and interview strategies.',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    pagesCount: 72,
    readTime: '25 min read',
    articles: [
      { title: 'Professional Git Hygiene & Trunk-Based Workflows', pages: '05-18' },
      { title: 'Building Zero-Cost Cloud Stacks on GCP', pages: '19-36' },
      { title: 'Crafting High-Signal Technical Resumes & Portfolios', pages: '37-52' },
      { title: 'Open-Source Contributions That Get You Noticed', pages: '53-72' },
    ],
  },
]

export default function MagazineSection() {
  const sectionRef = useScrollReveal()
  const [hoveredBookId, setHoveredBookId] = useState(MAGAZINES[1].id) // Default highlight "The Kinfolk" matching user image
  const [activeMagazine, setActiveMagazine] = useState(null)

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveMagazine(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section
      id="magazines"
      ref={sectionRef}
      className="reveal w-full py-16 sm:py-24 bg-white text-neutral-900 select-none overflow-hidden relative border-t border-neutral-200/80"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: FAITHFUL TO USER REFERENCE IMAGE               */}
        {/* Google Themed Geometric Shapes & Google Colors Typography      */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
          
          {/* Playful Google Geometric Shapes (Exactly matching user's reference image) */}
          <div className="flex items-end justify-center gap-3.5 sm:gap-5 mb-5 select-none">
            {/* Shape 1: Green Hexagon over Green Rounded Squircle */}
            <div className="flex flex-col items-center gap-1 group cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 hover:scale-105">
              {/* Hexagon */}
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#00e676] drop-shadow-xs transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50 3, 93 27, 93 73, 50 97, 7 73, 7 27" />
              </svg>
              {/* Rounded Squircle */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00e676] rounded-xl sm:rounded-2xl shadow-xs transition-transform duration-300 group-hover:scale-105" />
            </div>

            {/* Shape 2: Orange Hexagon over Pink Rounded Squircle */}
            <div className="flex flex-col items-center gap-1 group cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 hover:scale-105">
              {/* Hexagon */}
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff6e40] drop-shadow-xs transition-transform duration-300 group-hover:-rotate-12" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50 3, 93 27, 93 73, 50 97, 7 73, 7 27" />
              </svg>
              {/* Pink Rounded Squircle */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f48fb1] rounded-xl sm:rounded-2xl shadow-xs transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>

          {/* Title Line with Authentic Google Letter Colors: "— Publication —" (Exact same size as Teams Section) */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-2xl">
            <div className="h-px bg-neutral-300 flex-1" />
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight uppercase select-none flex items-center gap-0.5 sm:gap-1 font-google">
              <span className="text-[#4285f4]">P</span>
              <span className="text-[#ea4335]">u</span>
              <span className="text-[#fbbc05]">b</span>
              <span className="text-[#4285f4]">l</span>
              <span className="text-[#34a853]">i</span>
              <span className="text-[#ea4335]">c</span>
              <span className="text-[#4285f4]">a</span>
              <span className="text-[#34a853]">t</span>
              <span className="text-[#ea4335]">i</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">n</span>
            </h2>
            <div className="h-px bg-neutral-300 flex-1" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* THE BOOKSHELF: STANDING BOOKS (Spine to 3D Front Turn on Hover)  */}
        {/* RESPONSIVE FOR MOBILE: Smooth Touch, Swipe & Proportional Scale */}
        {/* ============================================================== */}
        <div className="w-full flex items-end justify-start md:justify-center py-4 sm:py-8 md:py-10 px-2 sm:px-4 overflow-x-auto scrollbar-none min-h-[400px] sm:min-h-[460px] md:min-h-[520px]">
          <div className="flex items-end justify-start md:justify-center gap-2 sm:gap-4 md:gap-6 pb-2 min-w-max mx-auto">
            {MAGAZINES.map((book) => {
              const isHovered = hoveredBookId === book.id

              return (
                <div
                  key={book.id}
                  onMouseEnter={() => setHoveredBookId(book.id)}
                  onClick={() => {
                    // On touch/click: if already active/expanded, open reader; otherwise expand the book
                    if (hoveredBookId === book.id) {
                      setActiveMagazine(book)
                    } else {
                      setHoveredBookId(book.id)
                    }
                  }}
                  className={`group relative cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom ${
                    isHovered
                      ? 'w-[225px] sm:w-[280px] md:w-[340px] z-30 -translate-y-2 sm:-translate-y-3'
                      : 'w-[44px] sm:w-[60px] md:w-[76px] z-10 hover:-translate-y-1'
                  } h-[350px] sm:h-[400px] md:h-[440px]` }
                >
                  {/* Outer Book Wrapper with 3D Depth, Rounded Spine and Realistic Shadow */}
                  <div
                    className={`relative w-full h-full rounded-sm overflow-hidden transition-all duration-500 will-change-transform ${book.spineBorder}`}
                    style={{
                      boxShadow: isHovered
                        ? '0 28px 50px -12px rgba(0,0,0,0.22), 0 8px 18px -4px rgba(0,0,0,0.12)'
                        : '0 12px 24px -6px rgba(0,0,0,0.1), 0 4px 8px -2px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* -------------------------------------------------------- */}
                    {/* STATE A: VERTICAL BOOK SPINE (Visible when NOT hovered)  */}
                    {/* -------------------------------------------------------- */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-between py-4 sm:py-6 md:py-7 px-1 sm:px-2 items-center transition-opacity duration-300 ${
                        book.spineBg
                      } ${book.spineTextColor} ${
                        isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    >
                      {/* Top Spine Mark */}
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-current opacity-70" />

                      {/* Vertical Rotated Title (Responsive font size) */}
                      <div className="flex-1 flex items-center justify-center overflow-hidden py-2 sm:py-3">
                        <span
                          className="font-google font-bold tracking-wider text-[11px] sm:text-[13.5px] md:text-[15px] whitespace-nowrap uppercase select-none"
                          style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                          }}
                        >
                          {book.spineTitle}
                        </span>
                      </div>

                      {/* Bottom Spine Issue / Tag */}
                      <span className="text-[8.5px] sm:text-[10px] font-mono tracking-widest opacity-70 font-semibold">
                        GDGC
                      </span>
                    </div>

                    {/* -------------------------------------------------------- */}
                    {/* STATE B: FULL 3D FRONT COVER (Turns forward on hover)    */}
                    {/* -------------------------------------------------------- */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-between p-3.5 sm:p-5 md:p-6 transition-all duration-500 ${
                        book.coverBg
                      } ${book.coverTextColor} ${
                        isHovered
                          ? 'opacity-100 scale-100 pointer-events-auto'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      {/* Left 3D Spine Fold Shadow Gradient for Realistic Book Turning Feel */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 pointer-events-none z-20"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)',
                        }}
                      />

                      {/* Right Edge Page Texture Gradient */}
                      <div
                        className="absolute right-0 top-0 bottom-0 w-1.5 pointer-events-none z-20"
                        style={{
                          background:
                            'linear-gradient(270deg, rgba(0,0,0,0.12) 0%, transparent 100%)',
                        }}
                      />

                      {/* Header on Cover */}
                      <div className="flex flex-col items-center text-center z-10">
                        <span className="text-[9px] sm:text-[10px] md:text-[10.5px] tracking-[0.2em] font-google text-neutral-500 uppercase font-semibold">
                          {book.issue} • {book.year}
                        </span>
                        
                        {/* Main Cover Title (Responsive size) */}
                        <h3 className="text-sm sm:text-lg md:text-[22px] font-google font-bold tracking-tight uppercase text-neutral-900 mt-1 sm:mt-2 leading-tight">
                          {book.title}
                        </h3>
                        {book.editionWord && (
                          <span className="text-[10px] sm:text-xs font-google font-medium tracking-wide text-neutral-600 mt-0.5">
                            {book.editionWord}
                          </span>
                        )}

                        <div className="w-8 sm:w-10 h-px bg-neutral-300 my-1.5 sm:my-2" />
                        
                        <p className="text-[9px] sm:text-[10px] text-neutral-600 font-google font-medium tracking-normal leading-tight max-w-[190px] sm:max-w-[230px] line-clamp-2">
                          {book.subtitle}
                        </p>
                      </div>

                      {/* Center Artwork / Cover Photo (Scaled for mobile) */}
                      <div className="relative my-1.5 sm:my-2 w-full flex-1 max-h-[125px] sm:max-h-[160px] md:max-h-[185px] rounded-xs overflow-hidden shadow-xs border border-neutral-300/60 bg-neutral-100">
                        <img
                          src={book.coverImage}
                          alt={book.title}
                          className="w-full h-full object-cover grayscale contrast-125 brightness-95 transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply" />
                      </div>

                      {/* Cover Footer & Click Prompt */}
                      <div className="flex items-center justify-between text-neutral-600 text-[10px] sm:text-[11px] z-10 pt-1.5 sm:pt-2 border-t border-neutral-300/70 font-google">
                        <span className="font-semibold tracking-wider text-[8.5px] sm:text-[9.5px] uppercase text-neutral-500">
                          {book.tag}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-[#1a73e8] tracking-wider uppercase group-hover:translate-x-0.5 transition-transform">
                          <span>Open Issue</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Tactile Book Base Shadow on the shelf */}
                  <div
                    className="absolute -bottom-2 left-2 right-2 h-2.5 rounded-full bg-neutral-900/15 blur-xs transition-opacity duration-300 pointer-events-none"
                    style={{ opacity: isHovered ? 0.8 : 0.3 }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Minimalist Bookshelf Plinth (Clean light line matching landing page) */}
        <div className="w-full max-w-4xl mx-auto h-[4px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent rounded-full shadow-xs" />

        {/* Bottom Helper Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600 font-google">
          <span className="flex items-center gap-1.5 font-semibold text-neutral-800">
            <BookOpen className="w-4 h-4 text-[#1a73e8]" />
            <span>6 Chapter Publications</span>
          </span>
          <span className="text-neutral-300">•</span>
          <span>Curated by Google Developer Groups on Campus AIKTC</span>
          <span className="text-neutral-300">•</span>
          <span className="text-neutral-900 font-bold">Free for all students</span>
        </div>

      </div>

      {/* ============================================================== */}
      {/* FULL MAGAZINE READER MODAL (Clean Light Theme Matching Site)    */}
      {/* ============================================================== */}
      {activeMagazine && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 page-fade-enter"
          onClick={() => setActiveMagazine(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white border border-neutral-200 rounded-2xl sm:rounded-3xl shadow-[0_24px_64px_rgba(32,33,36,0.18)] overflow-hidden text-neutral-900 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a73e8]" />
                <span className="text-xs font-google font-bold tracking-wider text-neutral-600 uppercase">
                  GDGC Digital Publication • {activeMagazine.issue}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveMagazine(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center cursor-pointer transition-colors"
                title="Close Magazine (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Two Column Magazine Showcase */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Realistic Magazine Cover Preview */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[280px] aspect-[1/1.4] rounded-sm overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.12)] border border-neutral-300 group">
                  <img
                    src={activeMagazine.coverImage}
                    alt={activeMagazine.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[10px] tracking-widest uppercase font-mono text-[#8ab4f8]">
                      {activeMagazine.tag}
                    </span>
                    <h4 className="text-2xl font-google font-bold tracking-tight mt-1">
                      {activeMagazine.title}
                    </h4>
                    <p className="text-xs text-neutral-200 mt-1 line-clamp-2 font-google">
                      {activeMagazine.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500 font-medium font-google">
                  <span>{activeMagazine.pagesCount} Pages</span>
                  <span>•</span>
                  <span>{activeMagazine.readTime}</span>
                  <span>•</span>
                  <span>PDF & Web</span>
                </div>
              </div>

              {/* Right Column: Magazine Details & Table of Contents */}
              <div className="md:col-span-7 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-150 text-[#1a73e8] text-[11px] font-google font-semibold tracking-wider w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeMagazine.year} • {activeMagazine.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-google font-bold text-neutral-900 tracking-tight mt-3">
                  {activeMagazine.title}
                </h3>
                <p className="text-sm font-medium text-neutral-600 mt-1 font-google">
                  {activeMagazine.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-neutral-600 mt-4 leading-relaxed font-google">
                  {activeMagazine.description}
                </p>

                {/* Table of Contents */}
                <div className="mt-6 border-t border-neutral-200 pt-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-google">
                    Table of Contents & Highlights
                  </span>
                  <div className="mt-3 space-y-2">
                    {activeMagazine.articles.map((art, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/80 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono text-[#1a73e8] font-bold">
                            0{idx + 1}
                          </span>
                          <span className="text-xs sm:text-[13px] text-neutral-800 font-medium font-google">
                            {art.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 shrink-0 font-medium">
                          pp. {art.pages}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Action CTA Buttons (Google Themed) */}
                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Opening "${activeMagazine.title}" reader. In production, this links to the PDF or digital flipbook.`)
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_4px_14px_rgba(26,115,232,0.25)] cursor-pointer font-google"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Full Magazine</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      alert(`Preparing download package for "${activeMagazine.title}" (PDF).`)
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer font-google"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  )
}
