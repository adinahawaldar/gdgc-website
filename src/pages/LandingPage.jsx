import React, { useState, useEffect } from 'react'
import {
  Home,
  Info,
  Users,
  Calendar,
  Trophy,
  Layers,
} from 'lucide-react'
import HeroSection from '../components/HeroSection'
import RecentEvents from '../components/RecentEvents'
import AboutVisionMission from '../components/AboutVisionMission'
import TeamsSection from '../components/TeamsSection'
import SocialFollowSection from '../components/SocialFollowSection'
import FooterSection from '../components/FooterSection'
import { Events } from '../Events.jsx'
import { Resources } from '../Resources.jsx'
import { Teams } from '../Teams.jsx'
import AboutPage from './AboutPage'
import AchievementsPage from './AchievementsPage'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('home')

  const scrollToTop = () => {
    if (window.__lenis && typeof window.__lenis.scrollTo === 'function') {
      window.__lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  // Ensure each time any page / tab is opened, it always displays the top hero section
  useEffect(() => {
    scrollToTop()
  }, [activeTab])

  const openTeams = () => {
    setActiveTab('teams')
    scrollToTop()
  }

  const openAbout = () => {
    setActiveTab('about')
    scrollToTop()
  }

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

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    scrollToTop()
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 relative flex flex-col justify-start selection:bg-blue-500 selection:text-white">
      {/* Top Brand Header (GDG & College Name - No Nav links) */}
      <header className="w-full px-4 sm:px-8 lg:px-12 pt-3 sm:pt-5 pb-1 sm:pb-2 flex items-center justify-start select-none">
        <div className="flex flex-col justify-center leading-tight">
          <span className="text-[13.5px] sm:text-[16px] font-semibold tracking-tight text-[#3c4043]">
            Google Developer Groups
          </span>
          <span className="text-[10px] sm:text-[12px] font-medium text-neutral-600 tracking-tight flex items-center gap-1 sm:gap-1.5 flex-nowrap whitespace-nowrap">
            <span className="text-[#1a73e8] font-semibold shrink-0">On Campus</span>
            <span className="text-neutral-400 shrink-0">•</span>
            <span>Anjuman-I-Islam's Kalsekar Technical Campus</span>
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full flex-1 flex flex-col items-center">
        {activeTab === 'about' ? (
          <div className="w-full pt-4">
            <AboutPage />
          </div>
        ) : activeTab === 'teams' ? (
          <div className="w-full pt-4">
            <Teams />
          </div>
        ) : activeTab === 'events' ? (
          <div className="w-full pt-4">
            <Events />
          </div>
        ) : activeTab === 'achievements' ? (
          <div className="w-full pt-4">
            <AchievementsPage />
          </div>
        ) : activeTab === 'resources' ? (
          <div className="w-full pt-4">
            <Resources />
          </div>
        ) : (
          <>
            <div id="home" className="w-full flex justify-center">
              <HeroSection />
            </div>
            <RecentEvents />
            <AboutVisionMission onLearnMore={openAbout} />
            <TeamsSection onViewAll={openTeams} />
            <SocialFollowSection />
          </>
        )}

        {/* Global Footer rendered on every page bottom */}
        <FooterSection onNavigate={handleTabChange} />
      </main>

      {/* Floating Bottom Navigation (Google Themed Dock) */}
      <nav
        aria-label="Bottom Navigation"
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[92vw] sm:max-w-none"
      >
        <div className="relative group p-[1.5px] sm:p-[2px] rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] shadow-[0_8px_28px_rgba(32,33,36,0.14),0_2px_10px_rgba(66,133,244,0.16)] transition-all duration-300">
          <div className="flex items-center gap-0.5 sm:gap-1 bg-white text-neutral-800 px-1 py-1.5 sm:px-2 sm:py-1.5 rounded-full overflow-hidden">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    if (item.id === 'home' && activeTab === 'home') {
                      scrollToTop()
                    } else {
                      setActiveTab(item.id)
                      scrollToTop()
                    }
                  }}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-1.5 sm:px-3.5 py-2 sm:py-2 rounded-full text-[8.5px] sm:text-[13px] font-medium tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer select-none shrink-0 min-w-[39px] sm:min-w-0 ${
                    isActive
                      ? `${item.activeBg} font-semibold shadow-xs`
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 active:scale-95'
                  }`}
                >
                  <Icon
                    strokeWidth={isActive ? 2.3 : 1.9}
                    className={`w-[17px] h-[17px] sm:w-[17px] sm:h-[17px] transition-colors shrink-0 ${
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
