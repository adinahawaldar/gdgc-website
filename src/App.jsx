import Resources from './Resources';
import { useState } from 'react'
import {
  Home,
  Info,
  Users,
  Calendar,
  Layers,
  BookOpen,
  MessageSquare,
} from 'lucide-react'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: Info, href: '#about' },
    { id: 'teams', label: 'Teams', icon: Users, href: '#teams' },
    { id: 'events', label: 'Events', icon: Calendar, href: '#events' },
    { id: 'resources', label: 'Resources', icon: Layers, href: '#resources' },
    { id: 'magazine', label: 'Magazine', icon: BookOpen, href: '#magazine' },
    { id: 'contact', label: 'Contact', icon: MessageSquare, href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-white text-neutral-900 relative flex flex-col items-center justify-center p-4">
      <nav
        aria-label="Bottom Navigation"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1.5rem)]"
      >
        <div className="flex items-center gap-1 bg-[#1a1a1e]/90 text-white p-1.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.18)] border border-neutral-700/50 backdrop-blur-md overflow-x-auto scrollbar-none">
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
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                  isActive
                    ? 'bg-white text-neutral-950 shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/10 active:scale-95'
                }`}
              >
                <Icon
                  size={15}
                  strokeWidth={2}
                  className={`transition-colors shrink-0 ${
                    isActive ? 'text-neutral-950' : 'text-neutral-400'
                  }`}
                />
                <span>{item.label}</span>
              </a>
            )
          })}
        </div>
      </nav>
      {activeTab === 'resources' && (
        <Resources />
      )}
    </div>
  )
}
