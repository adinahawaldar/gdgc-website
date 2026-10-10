import React, { useState } from 'react';
import { BookOpen, Sparkles, Cloud, Globe, Smartphone, Database, GitBranch, ExternalLink, Clock, ArrowRight } from 'lucide-react';
import { resourceCategories } from './resources.js';
import './resources.css';

export const Resources = () => {
    const [activeCategory, setActiveCategory] = useState(resourceCategories[0]?.id || '');

  const currentCategory = resourceCategories.find((c) => c.id === activeCategory) || resourceCategories[0];

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'ai-genai':
        return <Sparkles className="w-4 h-4 resources-pill-icon" />;
      case 'cloud':
        return <Cloud className="w-4 h-4 resources-pill-icon" />;
      case 'web-dev':
        return <Globe className="w-4 h-4 resources-pill-icon" />;
      case 'android':
        return <Smartphone className="w-4 h-4 resources-pill-icon" />;
      case 'firebase':
        return <Database className="w-4 h-4 resources-pill-icon" />;
      case 'git-github':
        return <GitBranch className="w-4 h-4 resources-pill-icon" />;
      default:
        return <BookOpen className="w-4 h-4 resources-pill-icon" />;
    }
  };

  return (
    <div className="resources-page">
      {/* Spacer to give room for fixed top navigation */}
      <div className="resources-navbar-spacer" aria-hidden="true" />

      {/* ====================================================================
          1. Hero Section (Matching Reference Top Section)
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
                href="#learning-tracks"
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
          2. Sub-Hero Banner Bar (Green Arrow & Impact Statement)
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
          3. Curly Brackets Quote Section
          ==================================================================== */}
      <section className="resources-quote-section">
        <div className="resources-quote-card">
          {/* Left: Outlined Curly Brackets with Editorial Quote */}
          <div className="resources-quote-left">
            {/* Left Curly Bracket SVG */}
            <div className="resources-curly-bracket" aria-hidden="true">
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

            <p className="resources-quote-text">
              Here, we don't just grow with technology—we{' '}
              <span className="resources-quote-evolve-word">
                <span>e</span>
                <span>v</span>
                <span>o</span>
                <span>l</span>
                <span>v</span>
                <span>e</span>
              </span>{' '}
              with it.
            </p>

            {/* Right Curly Bracket SVG */}
            <div className="resources-curly-bracket" aria-hidden="true">
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
          <div className="resources-quote-right">
            <p className="resources-quote-subtext">
              Develop leadership skills, gain recognition, expand your network, and collaborate with other passionate developers through Google Cloud and Android learning tracks.
            </p>
            <a
              href="https://www.cloudskillsboost.google"
              target="_blank"
              rel="noopener noreferrer"
              className="resources-btn-yellow"
            >
              <span>Learn more</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. Category Navigation Tabs (Pills)
          ==================================================================== */}
      <section id="learning-tracks" className="resources-tracks-nav-wrap">
        <div className="resources-tracks-title-row">
          <h2 className="resources-tracks-heading">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
            <span>Select Learning Track</span>
          </h2>
        </div>

        <div className="resources-track-pills-list">
          {resourceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`resources-track-pill ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ====================================================================
          5. Connected Vision / Track Capsule (Matching Reference "Vision" Motif)
          ==================================================================== */}
      <section className="resources-vision-capsule-wrap">
        <div className="resources-vision-capsule">
          {/* Left Circle: Developer Brackets Symbol in Google Colors */}
          <div className="resources-capsule-left-circle" aria-hidden="true">
            <div className="flex items-center gap-2">
              {/* Blue Bracket '<' */}
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                <path d="M19 4L5 16L19 28" stroke="#4285F4" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* Green Bracket '>' */}
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                <path d="M5 4L19 16L5 28" stroke="#34A853" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Center Content: Track description and goal */}
          <div className="resources-capsule-center-content">
            <h3 className="resources-capsule-center-title">
              {currentCategory.name} Track
            </h3>
            <p className="resources-capsule-center-desc">
              {currentCategory.description}
            </p>
          </div>

          {/* Right Circle: Vision / Track Level */}
          <div className="resources-capsule-right-circle">
            <span className="resources-capsule-badge-label">Curriculum</span>
            <span className="resources-capsule-badge-sub">Roadmap</span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. Main Curriculum Section: Numbered Steps & Codelabs Cards
          ==================================================================== */}
      <section className="resources-content-section">
        <div className="resources-content-grid">
          {/* Left Column: Numbered Step Capsule Rows (Step 1, 2, 3...) */}
          <div className="resources-steps-column">
            <div className="resources-section-title-row">
              <h3 className="resources-section-heading">
                <span>Step-by-Step Learning Path</span>
              </h3>
            </div>

            {currentCategory.learningPath.map((step, idx) => (
              <div key={step.step} className="resources-step-capsule">
                {/* Numbered Circle (Red, Yellow, Green, Blue, Slate) */}
                <div className={`resources-step-num-badge step-${(idx % 5) + 1}`}>
                  {step.step}
                </div>

                {/* Step Body */}
                <div className="resources-step-body">
                  <div className="resources-step-top-line">
                    <h4 className="resources-step-title">{step.title}</h4>
                    <span className={`resources-level-tag ${step.level}`}>
                      {step.level}
                    </span>
                  </div>

                  <p className="resources-step-desc">
                    {step.description}
                  </p>

                  <div className="resources-step-tags">
                    {step.topics.map((topic) => (
                      <span key={topic} className="resources-topic-pill">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Quotation Marks Deco `””` matching reference */}
            <div className="resources-deco-quotes" aria-hidden="true">
              <svg width="42" height="32" viewBox="0 0 42 32" fill="none">
                <path d="M12 6C6.5 6 3 10.5 3 16C3 22 7 26 12 26C16.5 26 20 22.5 20 18C20 12.5 16 6 12 6ZM32 6C26.5 6 23 10.5 23 16C23 22 27 26 32 26C36.5 26 40 22.5 40 18C40 12.5 36 6 32 6Z" stroke="#9CA3AF" strokeWidth="2.5" fill="none" />
              </svg>
              <span className="text-xs text-slate-500 font-medium italic">
                From beginner fundamentals to shipping production apps
              </span>
            </div>
          </div>

          {/* Right Column: Recommended Codelabs & Labs Cards */}
          <div className="resources-labs-column">
            <div className="resources-section-title-row">
              <h3 className="resources-section-heading">
                <span>Curated Codelabs</span>
              </h3>
            </div>

            {currentCategory.curatedLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resources-codelab-card"
              >
                <div className="resources-codelab-header">
                  <span className="resources-codelab-type">{item.type}</span>
                  <span className="resources-codelab-time">
                    <Clock className="w-3.5 h-3.5 text-[#FBBC05]" />
                    <span>{item.estimatedTime}</span>
                  </span>
                </div>

                <h4 className="resources-codelab-title">
                  <span>{item.title}</span>
                  <ExternalLink className="w-4 h-4 resources-codelab-arrow" />
                </h4>

                <p className="resources-codelab-desc">
                  {item.description}
                </p>
              </a>
            ))}

            {/* Google Cloud Credits Box */}
            <div className="resources-credits-box">
              <span className="resources-credits-badge">
                Free Google Cloud Credits
              </span>
              <h4 className="resources-credits-title">
                Google Cloud Skills Boost
              </h4>
              <p className="resources-credits-desc">
                GDGC AIKTC members get access to hands-on labs, Skill Boost campaign credits, and certification prep vouchers for GCP, GenAI & Kubernetes.
              </p>
              <a
                href="https://www.cloudskillsboost.google"
                target="_blank"
                rel="noopener noreferrer"
                className="resources-credits-link"
              >
                <span>Visit Cloud Skills Boost</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
