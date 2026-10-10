import React, { useState, useMemo, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  eventCategories,
  upcomingEvents,
  pastEvents,
} from './events.js';
import './Events.css';

export const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const [touchStartX, setTouchStartX] = useState(null);

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

  // Safe active index clamped to current filtered results
  const safeActiveIndex = filteredUpcoming.length > 0 ? activeIndex % filteredUpcoming.length : 0;

  // Manual navigation handlers
  const handlePrev = (e) => {
    e?.currentTarget?.blur();
    if (filteredUpcoming.length <= 1) return;
    setActiveIndex((prev) => (prev - 1 + filteredUpcoming.length) % filteredUpcoming.length);
  };

  const handleNext = (e) => {
    e?.currentTarget?.blur();
    if (filteredUpcoming.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % filteredUpcoming.length);
  };

  const handleFocus = (e) => {
    try {
      if (e.target.matches(':focus-visible')) {
        setIsKeyboardFocused(true);
      }
    } catch {
      // fallback
    }
  };

  // Filtered Past Events
  const filteredPast = useMemo(() => {
    return pastEvents.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' ||
        activeCategory === 'past' ||
        (activeCategory === 'workshops' && (
          item.topicCategory === 'workshops' ||
          item.category === 'workshops' ||
          item.categoryType?.toLowerCase().includes('workshop') ||
          item.categoryType?.toLowerCase().includes('bootcamp')
        )) ||
        (activeCategory === 'study-jams' && (
          item.topicCategory === 'study-jams' ||
          item.category === 'study-jams' ||
          item.categoryType?.toLowerCase().includes('study jam')
        )) ||
        (activeCategory === 'hackathons' && (
          item.topicCategory === 'hackathons' ||
          item.category === 'hackathons' ||
          item.categoryType?.toLowerCase().includes('hackathon')
        ));

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        (item.takeaways && item.takeaways.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Category counts calculation
  const getCategoryCount = (catId) => {
    if (catId === 'all') return upcomingEvents.length + pastEvents.length;
    if (catId === 'upcoming') return upcomingEvents.length;
    if (catId === 'past') return pastEvents.length;
    if (catId === 'workshops') {
      const upcomingCount = upcomingEvents.filter((e) => e.category === 'workshops').length;
      const pastCount = pastEvents.filter(
        (e) =>
          e.topicCategory === 'workshops' ||
          e.category === 'workshops' ||
          e.categoryType?.toLowerCase().includes('workshop') ||
          e.categoryType?.toLowerCase().includes('bootcamp')
      ).length;
      return upcomingCount + pastCount;
    }
    if (catId === 'study-jams') {
      const upcomingCount = upcomingEvents.filter((e) => e.category === 'study-jams').length;
      const pastCount = pastEvents.filter(
        (e) =>
          e.topicCategory === 'study-jams' ||
          e.category === 'study-jams' ||
          e.categoryType?.toLowerCase().includes('study jam')
      ).length;
      return upcomingCount + pastCount;
    }
    if (catId === 'hackathons') {
      const upcomingCount = upcomingEvents.filter((e) => e.category === 'hackathons').length;
      const pastCount = pastEvents.filter(
        (e) =>
          e.topicCategory === 'hackathons' ||
          e.category === 'hackathons' ||
          e.categoryType?.toLowerCase().includes('hackathon')
      ).length;
      return upcomingCount + pastCount;
    }
    return null;
  };

  // Listen for prefers-reduced-motion changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Continuous auto-cycling through 3D depth positions
  // Continues automatically after manual navigation, pauses on hover/keyboard focus, respects reduced motion
  useEffect(() => {
    if (filteredUpcoming.length <= 1) return;
    if (isHovered || isKeyboardFocused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredUpcoming.length);
    }, 3600);

    return () => clearInterval(interval);
  }, [filteredUpcoming.length, activeIndex, isHovered, isKeyboardFocused, prefersReducedMotion]);

  // Keyboard navigation for the carousel
  const handleKeyDown = (e) => {
    if (filteredUpcoming.length <= 1) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'Tab') {
      setIsKeyboardFocused(true);
    }
  };

  // Blur handler to resume automatic movement when focus exits carousel
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsKeyboardFocused(false);
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null || filteredUpcoming.length <= 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  const hasNoResults =
    (activeCategory === 'past' && filteredPast.length === 0) ||
    (activeCategory !== 'past' && filteredUpcoming.length === 0 && filteredPast.length === 0);

  return (
    <div className="events-page">
      {/* ====================================================================
          1. Compact Header (Clean, Content-First)
          ==================================================================== */}
      <header className="events-header">
        <div className="events-header-top">
          <div className="events-badge-tag">
            <span className="events-badge-dot" />
            <span>GDGC AIKTC</span>
          </div>
          <span className="events-badge-chapter">Campus Chapter</span>
        </div>

        <h1 className="events-title">
          Events & Programs
        </h1>

        <p className="events-subtitle">
          Hands-on technical workshops, peer study sprints, and community gatherings in Navi Mumbai.
        </p>
      </header>

      {/* ====================================================================
          2. Compact Filters & Search Toolbar (Directly Below Heading)
          ==================================================================== */}
      <section className="events-toolbar-section" aria-label="Events Filter and Search">
        <div className="events-toolbar-container">
          {/* Category Filter Pills */}
          <div className="events-filter-pills-list">
            {eventCategories.map((cat) => {
              const count = getCategoryCount(cat.id);
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveIndex(0);
                  }}
                  className={`events-filter-pill ${isActive ? 'active' : ''}`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                  {count !== null && (
                    <span className="events-filter-count">{count}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="events-search-box">
            <Search className="w-4 h-4 events-search-icon" />
            <input
              type="text"
              placeholder="Search by topic or tech..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveIndex(0);
              }}
              className="events-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveIndex(0);
                }}
                className="events-search-clear-btn"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Empty State (When no events match filter / search)
          ==================================================================== */}
      {hasNoResults && (
        <section className="events-empty-section">
          <div className="events-empty-box">
            <h3 className="events-empty-title">No events matching your filter</h3>
            <p className="events-empty-desc">
              Try adjusting your search keywords or select "All Events" to view all chapter sessions.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setActiveIndex(0);
              }}
              className="events-reset-btn"
            >
              Reset Filters
            </button>
          </div>
        </section>
      )}

      {/* ====================================================================
          4. 3D Perspective Depth Carousel (Upcoming Events)
          ==================================================================== */}
      {activeCategory !== 'past' && filteredUpcoming.length > 0 && (
        <section className="events-section-container" aria-label="Upcoming Events 3D Carousel">
          <div className="events-section-label-row">
            <div className="events-section-label-left">
              <span className="events-section-label-dot blue" />
              <h2 className="events-section-heading">Upcoming & Active Sessions</h2>
            </div>
            {filteredUpcoming.length > 1 && (
              <span className="events-depth-count-indicator">
                {safeActiveIndex + 1} of {filteredUpcoming.length}
              </span>
            )}
          </div>

          {/* 3D Perspective Stage Container */}
          <div
            className="events-depth-stage-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsKeyboardFocused(false)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            tabIndex={0}
            role="region"
            aria-label="3D Depth Events Carousel. Use Left and Right arrow keys to navigate."
          >
            {/* Subtle black radial glow behind the carousel fading into white */}
            <div className="events-depth-glow" aria-hidden="true" />

            <div className="events-depth-stage">
              {filteredUpcoming.map((item, index) => {
                const total = filteredUpcoming.length;

                // Calculate wrapped relative offset from safeActiveIndex
                let offset = index - safeActiveIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;

                // Assign depth placement class
                let depthClass = 'depth-hidden';
                if (offset === 0) depthClass = 'depth-center';
                else if (offset === 1) depthClass = 'depth-right-1';
                else if (offset === -1) depthClass = 'depth-left-1';
                else if (offset === 2) depthClass = 'depth-right-2';
                else if (offset === -2) depthClass = 'depth-left-2';

                return (
                  <div
                    key={item.id}
                    className={`events-depth-card-slot ${depthClass}`}
                    onClick={() => {
                      if (!isCenter) setActiveIndex(index);
                    }}
                    style={{
                      cursor: !isCenter ? 'pointer' : 'default',
                    }}
                    aria-hidden={!isCenter}
                  >
                    <article className="event-card event-card--depth">
                      {/* Poster / Image Container */}
                      <div className="event-card-img-wrap">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="event-card-img"
                          loading="lazy"
                        />
                        {/* Badges over image */}
                        <div className="event-card-badges-row">
                          <span className="event-card-status-badge">
                            {item.statusLabel}
                          </span>
                          {item.isFeatured && (
                            <span className="event-card-featured-badge">
                              <Sparkles className="w-3 h-3 text-[#FBBC05]" />
                              <span>Featured</span>
                            </span>
                          )}
                        </div>
                        <span className="event-card-img-caption">
                          {item.imageDisclaimer}
                        </span>
                      </div>

                      {/* Google Accent Top Bar */}
                      <div className={`event-card-accent-bar ${item.accentColor}`} />

                      {/* Card Content */}
                      <div className="event-card-body">
                        <div className="event-card-top-info">
                          <span className="event-card-category-tag">{item.categoryName}</span>
                          <span className="event-card-audience-tag">{item.audience}</span>
                        </div>

                        <h3 className="event-card-title">{item.title}</h3>

                        <p className="event-card-description">{item.description}</p>

                        {/* Schedule & Venue Meta */}
                        <div className="event-card-meta-box">
                          <div className="event-card-meta-item">
                            <Calendar className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
                            <span>{item.schedule}</span>
                          </div>
                          {item.time && (
                            <div className="event-card-meta-item">
                              <Clock className="w-3.5 h-3.5 text-[#FBBC05] shrink-0" />
                              <span>{item.time}</span>
                            </div>
                          )}
                          <div className="event-card-meta-item">
                            <MapPin className="w-3.5 h-3.5 text-[#34A853] shrink-0" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="event-card-tags">
                          {item.tags.map((tag) => (
                            <span key={tag} className="event-card-tag">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer Action */}
                        <div className="event-card-footer">
                          <a
                            href={item.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="event-card-btn"
                            tabIndex={isCenter ? 0 : -1}
                            onClick={(e) => {
                              if (!isCenter) {
                                e.preventDefault();
                                setActiveIndex(index);
                              }
                            }}
                          >
                            <span>Chapter Hub</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                          <span className="event-card-note">
                            {item.registrationNote}
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>

            {/* Left and Right Subtle Step Buttons */}
            {filteredUpcoming.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="events-depth-nav-arrow left"
                  aria-label="Previous event card"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="events-depth-nav-arrow right"
                  aria-label="Next event card"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator for 3D Carousel */}
          {filteredUpcoming.length > 1 && (
            <div className="events-depth-dots-row" role="tablist" aria-label="Choose event card">
              {filteredUpcoming.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => {
                    e.currentTarget.blur();
                    setActiveIndex(idx);
                  }}
                  className={`events-depth-dot ${idx === safeActiveIndex ? 'active' : ''}`}
                  aria-label={`Jump to ${item.title}`}
                  role="tab"
                  aria-selected={idx === safeActiveIndex}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* ====================================================================
          5. Past Events Gallery (Straightforward Compact Static Grid)
          ==================================================================== */}
      {activeCategory !== 'upcoming' && filteredPast.length > 0 && (
        <section className="events-section-container past" aria-label="Past Events Archive">
          <div className="events-section-label-row">
            <div className="events-section-label-left">
              <span className="events-section-label-dot red" />
              <h2 className="events-section-heading">Past Sessions & Recaps</h2>
            </div>
          </div>

          <div className="events-cards-grid">
            {filteredPast.map((item) => (
              <article key={item.id} className="event-card past">
                {/* Poster / Session Photo */}
                <div className="event-card-img-wrap">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="event-card-img"
                    loading="lazy"
                  />
                  <div className="event-card-badges-row">
                    <span className="event-card-status-badge past">
                      Past Session
                    </span>
                  </div>
                  <span className="event-card-img-caption">
                    {item.imageDisclaimer}
                  </span>
                </div>

                <div className={`event-card-accent-bar ${item.accentColor}`} />

                <div className="event-card-body">
                  <div className="event-card-top-info">
                    <span className="event-card-category-tag">{item.categoryType}</span>
                    <span className="event-card-audience-tag">{item.term}</span>
                  </div>

                  <h3 className="event-card-title">{item.title}</h3>

                  <p className="event-card-description">{item.description}</p>

                  {/* Key Takeaways */}
                  <div className="event-card-takeaways">
                    <div className="event-card-takeaways-title">Session Highlights:</div>
                    <ul className="event-card-takeaways-list">
                      {item.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="event-card-takeaway-item">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="event-card-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="event-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="event-card-footer">
                    <a
                      href={item.chapterRecapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="event-card-btn secondary"
                    >
                      <span>View Chapter Recap</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;
