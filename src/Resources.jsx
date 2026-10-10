import React, { useState, useMemo } from 'react';
import { ArrowRight, ExternalLink, Search, X, Check, Award, Sparkles, Briefcase, Calendar, ShieldCheck, Cpu } from 'lucide-react';
import { categories, careerCertificates, benefits } from './resources.js';
import './Resources.css';
import FooterSection from './components/FooterSection';

// Global FooterSection placeholder preserved for component integrity

export const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Safe fallback list
  const certsList = Array.isArray(careerCertificates) ? careerCertificates : [];

  // Filtered certificates based on active category & search query
  const filteredCertificates = useMemo(() => {
    return certsList.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'all' || cert.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        cert.title.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        (cert.skills && cert.skills.some((skill) => skill.toLowerCase().includes(query))) ||
        (cert.readyForJobs && cert.readyForJobs.some((job) => job.toLowerCase().includes(query))) ||
        (cert.tools && cert.tools.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [certsList, selectedCategory, searchQuery]);

  return (
    <div className="resources-page">
      {/* Spacer to give room for fixed top navigation */}
      <div className="resources-navbar-spacer" aria-hidden="true" />

      {/* ====================================================================
          1. HERO SECTION (UNTOUCHED & PRESERVED)
          ==================================================================== */}
      <section className="resources-hero">
        <div className="resources-hero-grid">
          {/* Left Column: Heading, Decos, and Editorial Introduction */}
          <div className="resources-hero-left">
            {/* Top decorative row: Pill brackets, Evolve wordmark, Arrow, Wavy line, Asterisk */}
            <div className="resources-hero-top-deco">
              {/* < > Pill brackets in Coral/Pink-Red */}
              <div className="resources-bracket-pair" aria-hidden="true">
                <span className="resources-bracket-pill left" />
                <span className="resources-bracket-pill right" />
              </div>

              {/* Multicolor "Evolve" */}
              <div className="resources-wordmark-evolve">
                <span>E</span>
                <span>v</span>
                <span>o</span>
                <span>l</span>
                <span>v</span>
                <span>e</span>
              </div>

              {/* Hand-drawn style arrow */}
              <div className="resources-deco-arrow" aria-hidden="true">
                <svg width="34" height="18" viewBox="0 0 34 18" fill="none">
                  <path d="M1 9H31M31 9L23 2M31 9L23 16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Wavy line */}
              <div className="resources-deco-wavy" aria-hidden="true">
                <svg width="48" height="14" viewBox="0 0 48 14" fill="none">
                  <path d="M2 10C5 3 8 3 11 10C14 17 17 17 20 10C23 3 26 3 29 10C32 17 35 17 38 10C41 3 44 3 46 10" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* 8-pointed starburst / asterisk */}
              <div className="resources-deco-star" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="resources-hero-title">
              Growing Ideas<br />
              Building Solutions.
            </h1>

            {/* Supporting Intro Text */}
            <p className="resources-hero-subtitle">
              Google Developer Groups on Campus · AIKTC is the home of aspiring student developers, innovators, and problem-solvers in Navi Mumbai. Explore curated tracks, official codelabs, and hands-on roadmaps.
            </p>

            {/* CTA row with Blue Pill button and Triple Connected Circles */}
            <div className="resources-hero-cta-row">
              <a
                href="#career-certificates"
                className="resources-pill-btn-blue"
              >
                <span>Explore Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Connected Outline Circles `○○○` */}
              <div className="resources-triple-circles" aria-hidden="true">
                <span className="resources-circle-ring" />
                <span className="resources-circle-ring" />
                <span className="resources-circle-ring" />
              </div>
            </div>
          </div>

          {/* Right Column: Playful Editorial Collage with Reference Accents */}
          <div className="resources-hero-right">
            <div className="resources-collage-wrap">
              {/* Globe wireframe with Yellow accent */}
              <div className="resources-accent-globe" aria-hidden="true">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle cx="22" cy="22" r="20" fill="#FBBC05" fillOpacity="0.85" stroke="#1F2937" strokeWidth="2" />
                  <ellipse cx="22" cy="22" rx="10" ry="20" stroke="#1F2937" strokeWidth="1.8" fill="none" />
                  <line x1="2" y1="22" x2="42" y2="22" stroke="#1F2937" strokeWidth="1.8" />
                  <line x1="5" y1="13" x2="39" y2="13" stroke="#1F2937" strokeWidth="1.5" />
                  <line x1="5" y1="31" x2="39" y2="31" stroke="#1F2937" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Card Container with border outline */}
              <div className="resources-collage-card">
                <div className="resources-collage-grid">
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
                    alt="GDGC workshop participants collaborating"
                    className="resources-collage-img"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                    alt="Student engineers discussing tech"
                    className="resources-collage-img"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                    alt="GDGC AIKTC study jam sprint"
                    className="resources-collage-img span-2"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Oblong Developer Badge < > */}
              <div className="resources-accent-badge" aria-hidden="true">
                <span className="w-3.5 h-3.5 rounded-full bg-[#34A853]" />
                <span className="font-mono font-bold text-xs text-[#1F2937] tracking-tight">
                  <span className="text-[#4285F4]">&lt;</span>
                  <span className="text-[#EA4335]">/</span>
                  <span className="text-[#FBBC05]">&gt;</span>
                </span>
              </div>

              {/* Pink accent slashes `//` */}
              <div className="resources-pink-slashes" aria-hidden="true">
                <span className="resources-pink-slash" />
                <span className="resources-pink-slash" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. SUB-HERO BANNER BAR (UNTOUCHED & PRESERVED)
          ==================================================================== */}
      <section className="resources-banner-bar">
        <div className="resources-banner-inner">
          <div className="resources-banner-left">
            <div className="resources-banner-arrow" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20M20 12L13 5M20 12L13 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="resources-banner-text">
              We are a community that fosters growth, collaboration, and technological excellence—where ideas transform into impact and solutions shape the future.
            </p>
          </div>

          <div className="resources-banner-deco" aria-hidden="true">
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
          3. REFACTORED REGION (From circled quote section down to the footer):
             GOOGLE CAREER CERTIFICATES SECTION WITH GOOGLE WEBSITE HOVER EFFECT
          ==================================================================== */}
      <section id="career-certificates" className="resources-certs-section">
        {/* Section Header */}
        <div className="resources-certs-header">
          <div className="resources-certs-eyebrow">
            <Sparkles className="w-4 h-4 text-[#4285F4]" />
            <span>Grow with Google · Career & Skill Pathways</span>
          </div>
          <h2 className="resources-certs-title">
            Google Career Certificates & Learning Tracks
          </h2>
          <p className="resources-certs-intro">
            Get job-ready for in-demand roles with Google certificates. Learn at your own pace, gain practical skills with hands-on labs, and qualify for high-growth tech positions.
          </p>
        </div>

        {/* Category Filter Pills & Search Input Controls */}
        <div className="resources-controls-bar">
          {/* Category Filter Pills */}
          <div className="resources-cert-pills-list" role="tablist" aria-label="Resource Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`resources-cert-pill ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                <span className="resources-cert-pill-dot" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="resources-search-wrap">
            <Search className="resources-search-icon w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates, roles, skills..."
              className="resources-search-input"
              aria-label="Search resources and certificates"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="resources-search-clear"
                aria-label="Clear search input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Metadata */}
        <div className="resources-results-meta">
          <span className="resources-results-count">
            Showing {filteredCertificates.length}{' '}
            {filteredCertificates.length === 1 ? 'Certificate' : 'Certificates'}
          </span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-bold text-[#1A73E8] hover:underline"
            >
              Reset to All
            </button>
          )}
        </div>

        {/* Responsive Grid Layout with Google website styled cards & hover effects */}
        {filteredCertificates.length > 0 ? (
          <div className="resources-cert-grid">
            {filteredCertificates.map((cert) => (
              <article
                key={cert.id}
                className="resources-cert-card group"
                style={{ '--accent-color': cert.color || '#4285F4' }}
              >
                {/* Top Google color indicator line on hover */}
                <div
                  className="resources-card-top-accent"
                  style={{ backgroundColor: cert.color || '#4285F4' }}
                  aria-hidden="true"
                />

                <div className="resources-cert-top">
                  {/* Badge & Level Row */}
                  <div className="resources-cert-badge-row">
                    <span className="resources-cert-provider-pill">
                      <span
                        className="resources-cert-provider-dot"
                        style={{ backgroundColor: cert.color || '#4285F4' }}
                      />
                      <span>{cert.badge || 'Google Certificate'}</span>
                    </span>
                    <span className="resources-cert-level-pill">
                      {cert.level ? cert.level.split('·')[0].trim() : 'Beginner'}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="resources-cert-title">{cert.title}</h3>

                  {/* Duration strip */}
                  <div className="resources-cert-duration">
                    <Calendar className="w-3.5 h-3.5 text-[#5F6368]" />
                    <span>{cert.duration}</span>
                  </div>

                  {/* Short Tagline / Description */}
                  <p className="resources-cert-desc">{cert.description}</p>

                  {/* Primary CTA Button (Blue pill button redirecting directly to official Google URLs) */}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resources-cert-cta-btn"
                  >
                    <span>{cert.ctaText || 'Get Started'}</span>
                    <ExternalLink className="resources-cert-cta-icon" />
                  </a>
                </div>

                {/* Divider Line */}
                <div className="resources-cert-divider" aria-hidden="true" />

                {/* Card Bottom: Skills & Ready For Jobs */}
                <div className="resources-cert-bottom">
                  {/* "SKILLS YOU'LL LEARN" Section with 3 clean bullet points and checkmark icons */}
                  <div className="resources-skills-section">
                    <div className="resources-skills-label">
                      <Award className="w-3.5 h-3.5 text-[#1A73E8]" />
                      <span>Skills you'll learn</span>
                    </div>

                    <ul className="resources-skills-list">
                      {cert.skills &&
                        cert.skills.map((skill, idx) => (
                          <li key={idx} className="resources-skill-item">
                            <Check className="resources-skill-check" />
                            <span>{skill}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Jobs / Roles tag chips */}
                  {cert.readyForJobs && cert.readyForJobs.length > 0 && (
                    <div className="resources-jobs-section">
                      <div className="resources-jobs-label">
                        <Briefcase className="w-3.5 h-3.5 text-[#5F6368]" />
                        <span>Jobs you'll be ready for</span>
                      </div>
                      <div className="resources-jobs-chips">
                        {cert.readyForJobs.map((job, idx) => (
                          <span key={idx} className="resources-job-chip">
                            {job}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="resources-empty-state">
            <h3 className="resources-empty-title">No certificates found</h3>
            <p className="resources-empty-desc">
              We couldn't find any resources matching "{searchQuery}". Try searching for another topic or clear the search filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="resources-empty-btn"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Benefits Strip (Grow with Google Pillars) */}
        <div className="resources-benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="resources-benefit-card">
              <div className="resources-benefit-icon-wrap">
                {benefit.id === 'pace' ? (
                  <Calendar className="w-5 h-5 text-[#4285F4]" />
                ) : benefit.id === 'experts' ? (
                  <Cpu className="w-5 h-5 text-[#34A853]" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-[#EA4335]" />
                )}
              </div>
              <h4 className="resources-benefit-title">{benefit.title}</h4>
              <p className="resources-benefit-desc">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Grow with Google / Cloud Boost Footer Callout Banner */}
        <div className="resources-grow-banner">
          <div className="resources-grow-content">
            <span className="resources-grow-tag">
              <Check className="w-3.5 h-3.5" />
              <span>Official GDGC Chapter Partnership</span>
            </span>
            <h3 className="resources-grow-heading">
              Need free Google Cloud Skills Boost vouchers & credits?
            </h3>
            <p className="resources-grow-subtext">
              Active GDGC AIKTC chapter members receive free Google Cloud Skills Boost campaign vouchers, access to Qwiklabs credits, and mentorship from certified Cloud Architects and alumni.
            </p>
          </div>
          <div className="resources-grow-action">
            <a
              href="https://www.cloudskillsboost.google"
              target="_blank"
              rel="noopener noreferrer"
              className="resources-grow-btn"
            >
              <span>Explore Cloud Boost</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Global FooterSection preserved at the bottom */}
      <FooterSection />
    </div>
  );
};

export default Resources;
