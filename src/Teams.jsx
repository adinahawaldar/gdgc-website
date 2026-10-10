import React, { useMemo, useState } from 'react'
import {
  ArrowRight, Sparkles, Search, Users, X,
  Code2, Palette, Camera, Megaphone, FileText, Star,
} from 'lucide-react'
import useTeams from './hooks/useTeams'
import TeamModal from './components/team/TeamModal'
import { StateMessage, getStats } from './components/team/TeamsShell'
import { Photo, Links, PLACEHOLDER } from './components/team/parts'
import './Teams.css'

const ICONS = { Code2, Palette, Camera, Megaphone, FileText, Star, Users }
const INK = '#1F2937'
const BLUE = '#4285F4'

function MemberCard({ m, team, role, yearLabels, onOpen, feature = false }) {
  const [yr, dept] = m.dept.split(' · ')
  const open = () => onOpen({ m, color: team.color, badge: role === 'Member' ? null : (role === 'Lead' ? `${team.name} Lead` : role) })
  return (
    <div className={`teams-card teams-member-card ${feature ? 'feature' : ''}`} role="button" tabIndex={0} onClick={open}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } }}>
      <div className="teams-member-photo"><Photo m={m} color={team.color} className={feature ? 'h-full' : 'aspect-[4/5]'} /></div>
      <div className="teams-card-inner">
        <div className="teams-card-header-row">
          <span className={`teams-card-role ${role === 'Member' ? 'member' : 'lead'}`}>{role}</span>
          <span className="teams-category-chip">{team.name}</span>
        </div>
        <h3 className="teams-member-name">{m.name}</h3>
        <div className="teams-member-dept">{yearLabels[yr] || yr} · {dept}</div>
        <p className="teams-member-intro">{m.intro || PLACEHOLDER}</p>
        <div className="teams-member-footer">
          <Links m={m} small />
          <span className="teams-view-link">Profile <ArrowRight className="w-3.5 h-3.5" /></span>
        </div>
      </div>
    </div>
  )
}

export const Teams = () => {
  const { data, error } = useTeams()
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [sel, setSel] = useState(null)

  const groups = useMemo(() => {
    if (!data) return []
    const q = query.trim().toLowerCase()
    const hit = (m, t) => !q || [m.name, m.dept, m.intro || '', t.name].some((x) => x.toLowerCase().includes(q))
    if (category === 'leads') {
      const rows = data.teams.filter((t) => hit(t.members[0], t)).map((t) => ({ m: t.members[0], t, role: 'Lead' }))
      return rows.length ? [{ key: 'leads', name: 'Team Leads', sub: 'The first name on every team', color: INK, rows }] : []
    }
    return data.teams
      .filter((t) => category === 'all' || t.id === category)
      .map((t) => ({
        key: t.id, name: t.name, sub: t.blurb, color: t.color,
        rows: t.members.map((m, i) => ({ m, t, role: i === 0 ? 'Lead' : 'Member' })).filter((r) => hit(r.m, t)),
      }))
      .filter((g) => g.rows.length)
  }, [data, category, query])

  if (!data) return <div className="teams-page"><div className="teams-navbar-spacer" /><StateMessage error={error} /></div>

  const { meta, organizers, teams } = data
  const page = meta.page
  const stats = getStats(data)
  const memberCount = teams.reduce((n, t) => n + t.members.length, 0)
  const categories = [
    { id: 'all', name: 'All Teams', Icon: Users, count: memberCount },
    { id: 'leads', name: 'Team Leads', Icon: Star, count: teams.length },
    ...teams.map((t) => ({ id: t.id, name: t.name, Icon: ICONS[t.icon] || Users, count: t.members.length })),
  ]
  const orgTeam = { name: 'Organizers', color: BLUE }

  return (
    <div className="teams-page">
      <div className="teams-navbar-spacer" aria-hidden="true" />

      {/* 1. Hero */}
      <section className="teams-hero">
        <div className="teams-hero-grid">
          <div className="teams-hero-left">
            <div className="teams-hero-top-deco">
              <div className="teams-bracket-pair" aria-hidden="true">
                <span className="teams-bracket-pill left" /><span className="teams-bracket-pill right" />
              </div>
              <div className="teams-wordmark-gather">
                {'Meet'.split('').map((c, i) => <span key={i}>{c}</span>)}
              </div>
              <div className="teams-deco-arrow" aria-hidden="true">
                <svg width="34" height="18" viewBox="0 0 34 18" fill="none">
                  <path d="M1 9H31M31 9L23 2M31 9L23 16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="teams-deco-wavy" aria-hidden="true">
                <svg width="48" height="14" viewBox="0 0 48 14" fill="none">
                  <path d="M2 10C5 3 8 3 11 10C14 17 17 17 20 10C23 3 26 3 29 10C32 17 35 17 38 10C41 3 44 3 46 10" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="teams-deco-star" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <h1 className="teams-hero-title">{page.heroTitle[0]}<br />{page.heroTitle[1]}</h1>
            <p className="teams-hero-subtitle">{page.heroSubtitle}</p>

          </div>
        </div>
      </section>

      {/* 3. Stats */}
      <section className="teams-stats-section" aria-label="Team highlights">
        <div className="teams-stats-grid">
          {[
            { number: stats.members, label: 'Members', note: 'Across every team' },
            { number: stats.teams, label: 'Teams', note: `Organizers + ${teams.length} domain teams` },
            { number: teams.length, label: 'Team Leads', note: 'One lead per domain team' },
            { number: meta.batch, label: 'Batch', note: 'Current academic year' },
          ].map((s) => (
            <div key={s.label} className="teams-stat-card">
              <div className="teams-stat-number">{s.number}</div>
              <div className="teams-stat-label">{s.label}</div>
              <div className="teams-stat-note">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Organizers spotlight */}
      <section className="teams-featured-section">
        <div className="teams-featured-card">
          <div className="teams-featured-top-badge-row">
            <div className="teams-badge-pill featured"><Sparkles className="w-3.5 h-3.5" /><span>{page.spotlightBadge}</span></div>
            <div className="teams-status-indicator"><span className="teams-status-dot" /><span>{meta.batch} batch</span></div>
          </div>
          <h2 className="teams-featured-title">{page.spotlightTitle}</h2>
          <p className="teams-featured-tagline">{page.spotlightTagline}</p>
          <div className="teams-org-grid">
            {organizers.map((m) => (
              <MemberCard key={m.name} m={m} team={orgTeam} role="Organizer" yearLabels={meta.yearLabels} onOpen={setSel} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Filters */}
      <section id="teams-catalogue" className="teams-filter-section">
        <div className="teams-filter-header-row">
          <div className="teams-section-title-wrap">
            <span className="teams-section-badge-dot" />
            <h2 className="teams-section-title">Explore Teams & Members</h2>
          </div>
          <div className="teams-search-box">
            <Search className="w-4 h-4 teams-search-icon" />
            <input type="text" placeholder="Search by name, branch or team..." value={query}
              onChange={(e) => setQuery(e.target.value)} className="teams-search-input" />
            {query && (
              <button onClick={() => setQuery('')} aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
        <div className="teams-filter-pills-wrap">
          {categories.map(({ id, name, Icon, count }) => (
            <button key={id} onClick={() => setCategory(id)} className={`teams-filter-pill ${category === id ? 'active' : ''}`}>
              <Icon className="w-4 h-4" /><span>{name}</span><span className="teams-filter-pill-count">{count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 7. Members */}
      <section className="teams-grid-section">
        {groups.length === 0 ? (
          <div className="teams-empty-state">
            <div className="teams-empty-state-title">No matching members found</div>
            <p className="teams-empty-state-desc">Try a different name, branch or team.</p>
            <button onClick={() => { setCategory('all'); setQuery('') }} className="teams-reset-filter-btn">Reset Filters</button>
          </div>
        ) : groups.map((g) => (
          <div key={g.key}>
            <div className="teams-group-title">
              <span className="teams-group-dot" style={{ backgroundColor: g.color }} />
              <span className="teams-group-name">{g.name}</span>
              <span className="teams-group-sub">{g.sub}</span>
            </div>
            <div className="teams-team-grid">
              {g.rows.map(({ m, t, role }) => (
                <MemberCard key={`${t.id}-${m.name}`} m={m} team={t} role={role} feature={g.key !== 'leads' && role === 'Lead'} yearLabels={meta.yearLabels} onOpen={setSel} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <TeamModal sel={sel} onClose={() => setSel(null)} yearLabels={meta.yearLabels} />
    </div>
  )
}

export default Teams
