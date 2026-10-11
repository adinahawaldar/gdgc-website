import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Search,
  Layers,
  BookOpen,
  Code2,
  History,
  X,
} from 'lucide-react';
import {
  officialChapterUrl,
  eventCategories,
  featuredEvent,
  upcomingEvents,
  pastEvents,
  communityImpactStats,
} from './events.js';
import './Events.css';

export const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapper helper
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'History':
        return <History className="w-4 h-4" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  // Filtered Upcoming Events
  const filteredUpcoming = useMemo(() => {
    return upcomingEvents.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' ||
        activeCategory === 'upcoming' ||
        item.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Filtered Past Events
  const filteredPast = useMemo(() => {
    return pastEvents.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' ||
        activeCategory === 'past' ||
        (activeCategory === 'workshops' && item.categoryType.toLowerCase().includes('bootcamp')) ||
        (activeCategory === 'study-jams' && item.categoryType.toLowerCase().includes('study jam'));

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Category counts calculation
  const getCategoryCount = (catId) => {
    if (catId === 'all') return upcomingEvents.length + pastEvents.length;
    if (catId === 'upcoming') return upcomingEvents.length;
    if (catId === 'past') return pastEvents.length;
    if (catId === 'workshops') return upcomingEvents.filter(e => e.category === 'workshops').length + 1;
    if (catId === 'study-jams') return upcomingEvents.filter(e => e.category === 'study-jams').length + 1;
    if (catId === 'hackathons') return upcomingEvents.filter(e => e.category === 'hackathons').length;
    return null;
  };

  return (
    <div className="events-page">
      {/* Spacer for navigation clearance */}
      <div className="events-navbar-spacer" aria-hidden="true" />

      {/* ====================================================================
          1. Hero Section (Playful Editorial Headline & Layered Collage)
          ==================================================================== */}
      <section className="events-hero">
        <div className="events-hero-grid">
          {/* Left Column: Bold Headline & Editorial Intro */}
          <div className="events-hero-left">
            {/* Top decorative row: < > Pill brackets, GATHER wordmark, Arrow, Wavy line, Asterisk */}
            <div className="events-hero-top-deco">
              {/* < > Pill brackets in Coral/Pink */}
              <div className="events-bracket-pair" aria-hidden="true">
                <span className="events-bracket-pill left" />
                <span className="events-bracket-pill right" />
              </div>

              {/* Multicolor "Gather" */}
              <div className="events-wordmark-gather">
                <span>G</span>
                <span>a</span>
                <span>t</span>
                <span>h</span>
                <span>e</span>
                <span>r</span>
              </div>

              {/* Hand-drawn style arrow */}
              <div className="events-deco-arrow" aria-hidden="true">
                <svg width="34" height="18" viewBox="0 0 34 18" fill="none">
                  <path
                    d="M1 9H31M31 9L23 2M31 9L23 16"
                    stroke="#1F2937"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Wavy line */}
              <div className="events-deco-wavy" aria-hidden="true">
                <svg width="48" height="14" viewBox="0 0 48 14" fill="none">
                  <path
                    d="M2 10C5 3 8 3 11 10C14 17 17 17 20 10C23 3 26 3 29 10C32 17 35 17 38 10C41 3 44 3 46 10"
                    stroke="#1F2937"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* 8-pointed starburst / asterisk */}
              <div className="events-deco-star" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93"
                    stroke="#1F2937"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="events-hero-title">
              Where Ideas Gather,<br />
              Builders Connect.
            </h1>

            {/* Supporting Intro Text */}
            <p className="events-hero-subtitle">
              Google Developer Groups on Campus · AIKTC brings together passionate student engineers in Navi Mumbai. Join hands-on technical workshops, peer study jams, and hackathons designed to turn curiosity into production-ready software.
            </p>

            {/* Hero CTAs */}
            <div className="events-hero-cta-row">
              <a href="#events-catalogue" className="events-pill-btn-blue">
                <span>Browse Sessions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={officialChapterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="events-pill-btn-outline"
              >
                <span>Join Chapter Community</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Connected Outline Circles `○○○` */}
              <div className="events-triple-circles" aria-hidden="true">
                <span className="events-circle-ring" />
                <span className="events-circle-ring" />
                <span className="events-circle-ring" />
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Collage with Reference Accents */}
          <div className="events-hero-right">
            <div className="events-collage-wrap">
              {/* Globe wireframe with Yellow accent */}
              <div className="events-accent-globe" aria-hidden="true">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    fill="#FBBC05"
                    fillOpacity="0.85"
                    stroke="#1F2937"
                    strokeWidth="2"
                  />
                  <ellipse cx="22" cy="22" rx="10" ry="20" stroke="#1F2937" strokeWidth="1.8" fill="none" />
                  <line x1="2" y1="22" x2="42" y2="22" stroke="#1F2937" strokeWidth="1.8" />
                  <line x1="5" y1="13" x2="39" y2="13" stroke="#1F2937" strokeWidth="1.5" />
                  <line x1="5" y1="31" x2="39" y2="31" stroke="#1F2937" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Card Container with border outline */}
              <div className="events-collage-card">
                <div className="events-collage-grid">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
                    alt="GDGC developer conference audience"
                    className="events-collage-img"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                    alt="Students building software during hands-on workshop"
                    className="events-collage-img"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                    alt="Campus study sprint with mentors and peers"
                    className="events-collage-img span-2"
                    loading="lazy"
                  />
                </div>
                <div className="events-collage-disclaimer">
                  Representative community session photographs & previews
                </div>
              </div>

              {/* Oblong Developer Badge < > */}
              <div className="events-accent-badge" aria-hidden="true">
                <span className="w-3.5 h-3.5 rounded-full bg-[#34A853]" />
                <span className="font-mono font-bold text-xs text-[#1F2937] tracking-tight">
                  <span className="text-[#4285F4]">&lt;</span>
                  <span className="text-[#EA4335]">/</span>
                  <span className="text-[#FBBC05]">&gt;</span>
                </span>
              </div>

              {/* Pink accent slashes `//` */}
              <div className="events-pink-slashes" aria-hidden="true">
                <span className="events-pink-slash" />
                <span className="events-pink-slash" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Sub-Hero Banner Bar (Green Arrow & Community Statement)
          ==================================================================== */}
      <section className="events-banner-bar">
        <div className="events-banner-inner">
          <div className="events-banner-left">
            <div className="events-banner-arrow" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12H20M20 12L13 5M20 12L13 19"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="events-banner-text">
              We empower student developers to learn by doing—fostering peer mentorship, hands-on coding, and real-world collaboration across Web, Cloud, AI, and Android tracks.
            </p>
          </div>

          <div className="events-banner-deco" aria-hidden="true">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full border border-slate-400 bg-white" />
              <span className="w-3 h-3 rounded-full border border-slate-400 bg-white" />
              <span className="w-3 h-3 rounded-full border border-slate-400 bg-white" />
            </div>
            <div className="flex gap-2 text-slate-400 text-[10px]">
              <span>⌒</span>
              <span>⌒</span>
              <span>⌒</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Community Impact Stats Capsule
          ==================================================================== */}
      <section className="events-stats-section" aria-label="Community Highlights">
        <div className="events-stats-grid">
          {communityImpactStats.map((stat, idx) => (
            <div key={idx} className="events-stat-card">
              <div className="events-stat-number">{stat.number}</div>
              <div className="events-stat-label">{stat.label}</div>
              <div className="events-stat-note">{stat.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          4. Featured Event Spotlight Capsule
          ==================================================================== */}
      <section className="events-featured-section">
        <div className="events-featured-card">
          <div className="events-featured-top-badge-row">
            <div className="events-badge-pill featured">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{featuredEvent.badge}</span>
            </div>

            <div className="events-status-indicator">
              <span className="events-status-dot" />
              <span>{featuredEvent.statusLabel}</span>
            </div>
          </div>

          <div className="events-featured-grid">
            {/* Left: Event Details & Metadata */}
            <div>
              <h2 className="events-featured-title">{featuredEvent.title}</h2>
              <p className="events-featured-tagline">{featuredEvent.tagline}</p>

              <div className="events-featured-meta-list">
                <div className="events-featured-meta-item">
                  <Calendar className="w-4 h-4 events-meta-icon" />
                  <span><strong>Schedule:</strong> {featuredEvent.schedule}</span>
                </div>
                <div className="events-featured-meta-item">
                  <MapPin className="w-4 h-4 events-meta-icon" />
                  <span><strong>Venue:</strong> {featuredEvent.location} ({featuredEvent.venueNote})</span>
                </div>
                <div className="events-featured-meta-item">
                  <Users className="w-4 h-4 events-meta-icon" />
                  <span><strong>Mentors:</strong> {featuredEvent.hosts}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <a
                  href={featuredEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="events-pill-btn-blue"
                >
                  <span>RSVP via Chapter Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-500 italic">
                  {featuredEvent.registrationNote}
                </span>
              </div>
            </div>

            {/* Right: Key Highlights Box */}
            <div className="events-highlights-box">
              <div className="events-highlights-title">
                <Sparkles className="w-4 h-4 text-[#FBBC05]" />
                <span>What We'll Explore</span>
              </div>

              <ul className="events-highlights-list">
                {featuredEvent.highlights.map((highlight, idx) => (
                  <li key={idx} className="events-highlight-item">
                    <CheckCircle2 className="w-4 h-4 events-check-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Track: {featuredEvent.categoryName}</span>
                <span>Open to All Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. Curly Brackets Quote Section
          ==================================================================== */}
      <section className="events-quote-section">
        <div className="events-quote-card">
          {/* Left: Outlined Curly Brackets with Community Quote */}
          <div className="events-quote-left">
            <div className="events-curly-bracket" aria-hidden="true">
              <svg width="34" height="72" viewBox="0 0 34 72" fill="none">
                <path
                  d="M30 4C20 4 12 10 12 20V26C12 32 4 36 4 36C4 36 12 40 12 46V52C12 62 20 68 30 68"
                  stroke="#FBBC05"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="events-quote-text">
              Code. Collaborate. Celebrate. Every session is designed to turn curiosity into{' '}
              <span className="events-quote-evolve-word">
                <span>i</span>
                <span>m</span>
                <span>p</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
              </span>.
            </p>

            <div className="events-curly-bracket" aria-hidden="true">
              <svg width="34" height="72" viewBox="0 0 34 72" fill="none">
                <path
                  d="M4 4C14 4 22 10 22 20V26C22 32 30 36 30 36C30 36 22 40 22 46V52C22 62 14 68 4 68"
                  stroke="#FBBC05"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right: Explanatory paragraph and Yellow Pill Button */}
          <div className="events-quote-right">
            <p className="events-quote-subtext">
              Connect with fellow peers at AIKTC, build open-source projects, learn directly from industry developers, and showcase your solutions on campus.
            </p>
            <a
              href={officialChapterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="events-btn-yellow"
            >
              <span>Explore Chapter Community</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. Interactive Category Filter Bar & Search
          ==================================================================== */}
      <section id="events-catalogue" className="events-filter-section">
        <div className="events-filter-header-row">
          <div className="events-section-title-wrap">
            <span className="events-section-badge-dot" />
            <h2 className="events-section-title">Explore Events & Programs</h2>
          </div>

          {/* Search Box */}
          <div className="events-search-box">
            <Search className="w-4 h-4 events-search-icon" />
            <input
              type="text"
              placeholder="Search by topic, track or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="events-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="events-filter-pills-wrap">
          {eventCategories.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`events-filter-pill ${isActive ? 'active' : ''}`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.name}</span>
                {count !== null && (
                  <span className="events-filter-pill-count">{count}</span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* ====================================================================
          7. Upcoming Events Grid
          ==================================================================== */}
      {activeCategory !== 'past' && (
        <section className="events-grid-section">
          {filteredUpcoming.length === 0 && activeCategory !== 'all' ? (
            <div className="events-empty-state">
              <div className="events-empty-state-title">No matching upcoming events found</div>
              <p className="events-empty-state-desc">
                Try adjusting your search query or check the Past Archive for completed sessions.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="events-reset-filter-btn"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="events-cards-grid">
              {filteredUpcoming.map((item) => (
                <div key={item.id} className="events-card">
                  {/* Google Colored Accent Line */}
                  <div className={`events-card-accent-bar ${item.accentColor}`} />

                  <div className="events-card-inner">
                    <div className="events-card-header-row">
                      <span className="events-category-chip">{item.categoryName}</span>
                      <span className="events-card-status-badge">{item.statusLabel}</span>
                    </div>

                    <h3 className="events-card-title">{item.title}</h3>
                    <p className="events-card-desc">{item.description}</p>

                    <div className="events-card-meta">
                      <div className="events-card-meta-line">
                        <Calendar className="w-3.5 h-3.5 text-[#4285F4]" />
                        <span>{item.schedule}</span>
                      </div>
                      <div className="events-card-meta-line">
                        <Clock className="w-3.5 h-3.5 text-[#FBBC05]" />
                        <span>{item.time}</span>
                      </div>
                      <div className="events-card-meta-line">
                        <MapPin className="w-3.5 h-3.5 text-[#34A853]" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="events-card-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="events-card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="events-card-footer">
                      <a
                        href={item.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="events-card-action-btn"
                      >
                        <span>Chapter Portal</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="events-card-rsvp-status-note">
                        {item.registrationNote}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ====================================================================
          8. Past Events Gallery (Visual Rich Collage & Recaps)
          ==================================================================== */}
      {(activeCategory === 'all' || activeCategory === 'past') && (
        <section className="events-past-section">
          <div className="events-past-title-wrap">
            <h2 className="events-past-headline">
              <History className="w-6 h-6 text-[#EA4335]" />
              <span>Past Community Sessions & Recaps</span>
            </h2>
            <p className="events-past-subtitle">
              A look back at hands-on learning bootcamps and student gatherings hosted by GDGC on Campus AIKTC.
            </p>
          </div>

          {filteredPast.length === 0 ? (
            <div className="events-empty-state">
              <div className="events-empty-state-title">No past events match your criteria</div>
              <p className="events-empty-state-desc">
                Clear your search query to view all community session recaps.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="events-reset-filter-btn"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="events-past-grid">
              {filteredPast.map((item) => (
                <div key={item.id} className="events-past-card">
                  {/* Photo with hover effect and representative preview disclaimer */}
                  <div className="events-past-img-wrap">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="events-past-img"
                      loading="lazy"
                    />
                    <div className="events-past-img-caption">
                      {item.imageDisclaimer}
                    </div>
                  </div>

                  <div className="events-past-body">
                    <div className="events-past-term-badge">{item.term} · {item.categoryType}</div>
                    <h3 className="events-past-card-title">{item.title}</h3>
                    <p className="events-past-desc">{item.description}</p>

                    <ul className="events-past-takeaways">
                      {item.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="events-past-takeaway-item">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="events-past-footer">
                      <div className="events-past-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="events-past-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={item.chapterRecapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="events-past-recap-link"
                      >
                        <span>Chapter Hub</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ====================================================================
          9. Host / Propose a Session CTA Capsule
          ==================================================================== */}
      <section className="events-host-cta-section">
        <div className="events-host-cta-capsule">
          <div>
            <div className="events-host-cta-badge">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBC05]" />
              <span>Community Driven</span>
            </div>
            <h2 className="events-host-cta-title">
              Have an idea or want to share a tech talk?
            </h2>
            <p className="events-host-cta-desc">
              GDGC on Campus AIKTC is built on peer learning. If you have built an exciting project, mastered a new framework, or want to host a hands-on workshop, we'd love to collaborate with you.
            </p>
          </div>

          <div className="events-host-cta-actions">
            <a
              href={officialChapterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="events-btn-cta-white"
            >
              <span>Connect on GDGC Chapter</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="events-host-cta-subtext">
              Anjuman-I-Islam Kalsekar Technical Campus Chapter Hub
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
