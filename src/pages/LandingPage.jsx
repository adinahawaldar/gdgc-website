import React, { useState } from 'react'
import {
  Home,
  Info,
  Users,
  Calendar,
  Layers,
  Trophy,
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import RecentEvents from '../components/RecentEvents'
import AboutVisionMission from '../components/AboutVisionMission'
import TeamsSection from '../components/TeamsSection'
import ProjectsAchievements, { AchievementsSection } from '../components/ProjectsAchievements'
import SocialFollowSection from '../components/SocialFollowSection'
import FooterSection from '../components/FooterSection'
import { Events } from '../Events.jsx'
import { Resources } from '../Resources.jsx'
import { Teams } from '../Teams.jsx'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('home')
  const openTeams = () => { setActiveTab('teams'); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      href: '#home',
      activeBg: 'bg-[#e8f0fe] text-[#1a73e8]',
      activeColor: 'text-[#1a73e8]',
    },
    {
      id: 'about',
      label: 'About',
      icon: Info,
      href: '#about',
      activeBg: 'bg-[#fce8e6] text-[#d93025]',
      activeColor: 'text-[#d93025]',
    },
    {
      id: 'teams',
      label: 'Teams',
      icon: Users,
      href: '#teams',
      activeBg: 'bg-[#fef7e0] text-[#b06000]',
      activeColor: 'text-[#b06000]',
    },
    {
      id: 'events',
      label: 'Events',
      icon: Calendar,
      href: '#events',
      activeBg: 'bg-[#e6f4ea] text-[#188038]',
      activeColor: 'text-[#188038]',
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: Layers,
      href: '#projects',
      activeBg: 'bg-[#e8f0fe] text-[#1a73e8]',
      activeColor: 'text-[#1a73e8]',
    },
    {
      id: 'achievements',
      label: 'Achievements',
      icon: Trophy,
      href: '#achievements',
      activeBg: 'bg-[#fef7e0] text-[#b06000]',
      activeColor: 'text-[#b06000]',
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: Layers,
      href: '#resources',
      activeBg: 'bg-[#e8f0fe] text-[#1a73e8]',
      activeColor: 'text-[#1a73e8]',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-neutral-900 relative flex flex-col justify-start selection:bg-blue-500 selection:text-white">
      {/* Top Brand Header (Logo & College Name - No Nav links) */}
      <header className="w-full px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-1 sm:pb-2 flex items-center justify-start select-none">
        <div className="flex items-center gap-3 sm:gap-3.5">
          {/* Google Developer Groups Angle Brackets Logo */}
          <svg
            className="w-10 sm:w-12 h-6 sm:h-7 shrink-0"
            viewBox="0 0 100 50"
            fill="none"
          >
            {/* Left Bracket < (Red top, Blue bottom) */}
            <line x1="40" y1="9" x2="18" y2="25" stroke="#EA4335" strokeWidth="8.5" strokeLinecap="round" />
            <line x1="18" y1="25" x2="40" y2="41" stroke="#4285F4" strokeWidth="8.5" strokeLinecap="round" />
            {/* Right Bracket > (Green top, Yellow bottom) */}
            <line x1="60" y1="9" x2="82" y2="25" stroke="#34A853" strokeWidth="8.5" strokeLinecap="round" />
            <line x1="82" y1="25" x2="60" y2="41" stroke="#FBBC04" strokeWidth="8.5" strokeLinecap="round" />
          </svg>

          {/* Text: Google Developer Groups & On Campus • College Name */}
          <div className="flex flex-col justify-center leading-tight">
            <span className="text-base sm:text-lg font-semibold tracking-tight text-[#3c4043]">
              Google Developer Groups
            </span>
            <span className="text-xs sm:text-[13px] font-medium text-neutral-600 tracking-tight flex items-center gap-1.5 flex-wrap">
              <span className="text-[#1a73e8] font-semibold">On Campus</span>
              <span className="text-neutral-400">•</span>
              <span>Anjuman-I-Islam's Kalsekar Technical Campus</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full flex-1 flex flex-col items-center">
        {activeTab === 'teams' ? (
          <div className="w-full pt-4 pb-20">
            <Teams />
          </div>
        ) : activeTab === 'events' ? (
          <div className="w-full pt-4 pb-20">
            <Events />
            <ProjectsAchievements />
            <AchievementsSection />
          </div>
        ) : activeTab === 'projects' ? (
          <div className="w-full pt-4 pb-20">
            <ProjectsAchievements />
          </div>
        ) : activeTab === 'achievements' ? (
          <div className="w-full pt-4 pb-20">
            <AchievementsSection />
          </div>
        ) : activeTab === 'resources' ? (
          <div className="w-full pt-4 pb-20">
            <Resources />
          </div>
        ) : (
          <>
            <div id="home" className="w-full flex justify-center">
              <HeroSection />
            </div>
            <RecentEvents />
            <AboutVisionMission />
            <TeamsSection onViewAll={openTeams} />
            <ProjectsAchievements />
            <AchievementsSection />
            <SocialFollowSection />
            <FooterSection />
          </>
        )}
      </main>

      {/* Floating Bottom Navigation (Google Themed Dock) */}
      <nav
        aria-label="Bottom Navigation"
        className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1rem)]"
      >
        <div className="relative group p-[2px] rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] shadow-[0_10px_32px_rgba(32,33,36,0.16),0_2px_10px_rgba(66,133,244,0.18)] hover:shadow-[0_16px_44px_rgba(66,133,244,0.26)] transition-all duration-300">
          <div className="flex items-center gap-0.5 sm:gap-1.5 bg-white text-neutral-800 p-1 sm:p-2 rounded-full backdrop-blur-xl">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveTab(item.id)
                    if (item.id === 'home' || item.id === 'about') {
                      setTimeout(() => {
                        const target = document.querySelector(item.href)
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' })
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      }, 50)
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  }}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2.5 rounded-full text-[10px] sm:text-[13px] font-medium tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                    isActive
                      ? `${item.activeBg} font-semibold shadow-xs`
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 active:scale-95'
                  }`}
                >
                  <Icon
                    strokeWidth={isActive ? 2.3 : 1.9}
                    className={`w-4 h-4 sm:w-[17px] sm:h-[17px] transition-colors shrink-0 ${
                      isActive ? item.activeColor : 'text-neutral-500'
                    }`}
                  />
                  <span className="leading-tight">{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}
