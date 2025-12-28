// Modernized, mobile-first interactions
// Uses guarded initializers so missing DOM nodes do not break the page

(() => {
  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const on = (el, evt, cb, opts) => el && el.addEventListener(evt, cb, opts);
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  const throttle = (fn, wait = 150) => {
    let pending = false;
    let lastArgs;
    return (...args) => {
      lastArgs = args;
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        fn(...lastArgs);
      });
    };
  };

  const easeOutExpo = t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const scrollToY = top => {
    const behavior = prefersReduced.matches ? 'auto' : 'smooth';
    window.scrollTo({ top, behavior });
  };

  const initCounters = () => {
    const counters = qsa('.counter');
    if (!counters.length) return;

    const animate = entry => {
      const el = entry.target;
      const target = Number(el.dataset.target || 0);
      const duration = prefersReduced.matches ? 400 : 1200;
      const start = performance.now();

      const step = now => {
        const p = Math.min(1, (now - start) / duration);
        const value = Math.round(target * easeOutExpo(p));
        el.textContent = value.toLocaleString();
        if (p < 1) requestAnimationFrame(step);
      };

      step(start);
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(el => {
      el.textContent = '0';
      observer.observe(el);
    });
  };

  const initNav = () => {
    const hamburger = qs('#hamburger');
    const nav = qs('#nav');
    if (!hamburger || !nav) return;

    const toggle = () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.classList.toggle('no-scroll', nav.classList.contains('open'));
    };

    on(hamburger, 'click', e => {
      e.preventDefault();
      toggle();
    });

    qsa('a', nav).forEach(link => {
      on(link, 'click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  };

  const initSmoothScroll = () => {
    const links = qsa('a[href^="#"]');
    if (!links.length) return;
    const nav = qs('.navbar');

    links.forEach(link => {
      on(link, 'click', e => {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;
        const target = qs(id);
        if (!target) return;
        e.preventDefault();
        const offset = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - offset + 1;
        scrollToY(top);
      });
    });
  };

  const initNavbarTint = () => {
    const navbar = qs('.navbar');
    if (!navbar) return;
    const apply = throttle(() => {
      navbar.style.background = window.scrollY > 100 ? 'rgba(30, 60, 114, 0.98)' : 'rgba(30, 60, 114, 0.95)';
    }, 100);
    on(window, 'scroll', apply);
    apply();
  };

  const initReveal = () => {
    const targets = [...qsa('.card'), ...qsa('.timeline-item')];
    if (!targets.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(t => observer.observe(t));
  };

  const initParallax = () => {
    const bg = qs('.bg-animation');
    if (!bg || prefersReduced.matches) return;
    const update = () => {
      const scrolled = window.pageYOffset || 0;
      bg.style.transform = `translateY(${scrolled * 0.35}px)`;
    };
    on(window, 'scroll', throttle(update, 16));
    update();
  };

  const initStagger = () => {
    qsa('.card').forEach((el, i) => { el.style.animationDelay = `${i * 0.16}s`; });
    qsa('.timeline-item').forEach((el, i) => { el.style.transitionDelay = `${i * 0.12}s`; });
  };

  const initAlbum = () => {
    const pages = qsa('.album-page');
    const nextBtn = qs('#nextBtn');
    const prevBtn = qs('#prevBtn');
    if (!pages.length || !nextBtn || !prevBtn) return;

    let current = 0;
    let timer;

    const show = idx => {
      pages.forEach((p, i) => p.classList.toggle('active', i === idx));
    };

    const next = () => {
      current = (current + 1) % pages.length;
      show(current);
    };

    const prev = () => {
      current = (current - 1 + pages.length) % pages.length;
      show(current);
    };

    const start = () => { timer = setInterval(next, 3500); };
    const reset = () => { clearInterval(timer); start(); };

    on(nextBtn, 'click', () => { next(); reset(); });
    on(prevBtn, 'click', () => { prev(); reset(); });
    on(document, 'visibilitychange', () => { document.hidden ? clearInterval(timer) : start(); });
    show(current);
    start();
  };

  const initResourceModal = () => {
    const modal = qs('#resourceModal');
    const modalTitle = qs('#modalTitle');
    const modalText = qs('#modalText');
    const downloadBtn = qs('#downloadBtn');
    const closeBtns = qsa('.modal .close');
    const cards = qsa('.resource-card');
    if (!modal || !cards.length) return;

    const close = () => {
      modal.classList.remove('show');
      setTimeout(() => { modal.style.display = 'none'; }, 250);
    };

    cards.forEach(card => {
      on(card, 'click', () => {
        modal.style.display = 'flex';
        modal.classList.add('show');
        if (modalTitle) modalTitle.textContent = card.dataset.title || '';
        if (modalText) modalText.textContent = card.dataset.text || '';
        if (downloadBtn) downloadBtn.href = card.dataset.pdf || '#';
      });
    });

    closeBtns.forEach(btn => on(btn, 'click', close));
    on(window, 'click', e => { if (e.target === modal) close(); });
    on(window, 'keydown', e => { if (e.key === 'Escape') close(); });
  };

  const initGalleryModal = () => {
    const modal = qs('#galleryModal');
    const modalImg = qs('#galleryModalImg');
    const thumbs = qsa('.gallery-item img');
    if (!modal || !modalImg || !thumbs.length) return;

    const close = () => {
      modal.classList.remove('show');
      setTimeout(() => { modal.style.display = 'none'; }, 200);
    };

    thumbs.forEach(img => on(img, 'click', () => {
      modal.style.display = 'flex';
      modal.classList.add('show');
      modalImg.src = img.src;
      modalImg.alt = img.alt || 'Gallery image';
    }));

    on(modal, 'click', e => { if (e.target === modal) close(); });
    on(window, 'keydown', e => { if (e.key === 'Escape') close(); });
  };

  const teamLeads = [
    { name: 'Mr. Aman Antuley', role: 'Organizer', image: 'members/Aman.png', social: { github: 'https://github.com/amanantuley', linkedin: 'https://www.linkedin.com/in/aman-antuley-8974ab26a/' } },
    { name: 'Mr. Mueez Hajwani', role: 'Technical Lead', image: 'members/Mueez.png', social: { github: 'https://github.com/MueezHajwani', linkedin: 'https://www.linkedin.com/in/mueez-hajwani-8a80562b6/' } },
    { name: 'Ms. Afshaan Ansari', role: 'Media Lead', image: 'members/Afshan.png', social: { github: 'https://github.com/Afshan2004', linkedin: 'https://www.linkedin.com/in/afshan-ansari-128b522b5' } },
    { name: 'Ms. Afreen Imam', role: 'Marketing Lead', image: 'members/Afreen.png', social: { github: 'https://github.com/afreenAI', linkedin: 'https://www.linkedin.com/in/afreen-imam-b45449289/' } },
    { name: 'Mr. Ashish Chavhan', role: 'Documentation Lead', image: 'members/Aashish.png', social: { github: 'https://github.com/Aashish1984', linkedin: 'https://www.linkedin.com/in/aashish-chavan' } },
    { name: 'Mr. Alamin Mondal', role: 'Design Lead', image: 'members/Alamin.png', social: { github: 'https://github.com/AlaminM01', linkedin: 'https://www.linkedin.com/in/alaminmondal1/' } },
  ];

  const teamMembersData = {
    Technical: [
      { name: 'Mr. Abdul Kalsekar', role: 'Technical Member', image: 'members/Abdul Rahman Kalsekar.png', social: { github: 'https://github.com/arkalsekar', linkedin: 'https://linkedin.com/in/arkalsekar' } },
      { name: 'Mr. Huzaifa Ansari', role: 'Technical Member', image: 'members/Huzaifa.png', social: { github: 'https://github.com/HuzaifaAnsari07', linkedin: 'https://www.linkedin.com/in/ansari-huzaifa-a7a00b33a' } },
      { name: 'Ms. Iffah Sarang', role: 'Technical Member', image: 'members/Iffah.png', social: { github: 'https://github.com/Iffah-25', linkedin: 'https://www.linkedin.com/in/iffah-sarang-183830330/' } },
    ],
    Marketing: [
      { name: 'Ms. Iqra Khan', role: 'Marketing Member', image: 'members/Iqra.png', social: { github: 'https://github.com/Iqraakhan1234', linkedin: 'https://www.linkedin.com/in/iqraa-khan-27562b369' } },
      { name: 'Mr. Owais Soudagar', role: 'Media Member', image: 'members/Owais.png', social: { github: 'https://github.com/owaissoudagar26', linkedin: 'https://www.linkedin.com/in/owais-soudagar-476965352' } },
      { name: 'Mr. Hammad Sayed', role: 'Marketing Member', image: 'members/Hammad.png', social: { github: 'https://github.com/hammaadsayed', linkedin: 'https://www.linkedin.com/in/hammaad-sayed-722b92284/' } },
    ],
    Media: [
      { name: 'Ms. Daraksha Ansari', role: 'Media Member', image: 'members/Daraksha.png', social: { github: 'https://github.com/darakhshansari7', linkedin: 'https://www.linkedin.com/in/darakhsha-ansari-1b2718292' } },
      { name: 'Ms. Samiya Khan', role: 'Media Member', image: 'members/Samiya.png', social: { github: 'https://github.com/Samiyakhan456', linkedin: 'https://www.linkedin.com/in/saamiyaakhan' } },
      { name: 'Mr. Zain Pawle', role: 'Media Member', image: 'members/Zain.png', social: { github: 'https://github.com/Zayn329', linkedin: 'https://www.linkedin.com/in/zain-pawle-9aaa272ab' } },
    ],
    Design: [
      { name: 'Mr. Irfan Labbai', role: 'Design Member', image: 'members/Irfan.png', social: { github: 'https://github.com/LabbaiIrfan', linkedin: 'https://www.linkedin.com/in/labbai-irfan/' } },
      { name: 'Mr. Shaikh Mohd Affan', role: 'Design Member', image: 'members/Affan.png', social: { github: 'https://github.com/affanshaikh-dev', linkedin: 'https://www.linkedin.com/in/shaikh-affan' } },
      { name: 'Ms. Munazza Jaweed', role: 'Design Member', image: 'members/Munazza.png', social: { github: 'https://github.com/MunazzaJAG', linkedin: 'https://www.linkedin.com/in/munazza-jaweed-62a2a4368/' } },
    ],
    Documentation: [
      { name: 'Ms. Sadaf Ansari', role: 'Documentation Member', image: 'members/Sadaf.jpg', social: { github: 'https://github.com/sadafansari2006-09', linkedin: 'https://www.linkedin.com/in/sadaf-ansari-30267b36a/' } },
    ],
  };

  const buildSocial = (social = {}) => {
    const icons = [];
    if (social.github && social.github !== '#') {
      icons.push(`<a href="${social.github}" class="lead-social-btn" target="_blank" aria-label="GitHub">
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>`);
    }
    if (social.linkedin && social.linkedin !== '#') {
      icons.push(`<a href="${social.linkedin}" class="lead-social-btn" target="_blank" aria-label="LinkedIn">
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>`);
    }
    return icons.join('');
  };

  const initCarousel = () => {
    const track = qs('#carouselTrack');
    const dotsContainer = qs('#carouselDots');
    const leftArrow = qs('.nav-arrow.left');
    const rightArrow = qs('.nav-arrow.right');
    const memberName = qs('#memberName');
    const memberRole = qs('#memberRole');
    if (!track || !dotsContainer || !memberName || !memberRole) return;

    let current = 0;
    let animating = false;
    let timer;
    const delay = 3200;

    teamLeads.forEach((member, idx) => {
      const card = document.createElement('div');
      card.className = 'lead-card';
      card.dataset.index = idx;
      card.innerHTML = `
        <div class="lead-card-inner">
          <div class="lead-card-front"><img src="${member.image}" alt="${member.name}"></div>
          <div class="lead-card-back"><div class="lead-social-links">${buildSocial(member.social)}</div></div>
        </div>`;
      on(card, 'click', () => { stop(); update(idx); start(); });
      track.appendChild(card);
    });

    teamLeads.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot ${idx === 0 ? 'active' : ''}`;
      dot.dataset.index = idx;
      on(dot, 'click', () => { stop(); update(idx); start(); });
      dotsContainer.appendChild(dot);
    });

    const update = nextIdx => {
      if (animating) return;
      animating = true;
      current = (nextIdx + teamLeads.length) % teamLeads.length;
      const cards = qsa('.lead-card');
      const dots = qsa('.dot');

      cards.forEach((card, i) => {
        const offset = (i - current + teamLeads.length) % teamLeads.length;
        card.classList.remove('center', 'left-1', 'left-2', 'right-1', 'right-2', 'hidden');
        if (offset === 0) card.classList.add('center');
        else if (offset === 1) card.classList.add('right-1');
        else if (offset === 2) card.classList.add('right-2');
        else if (offset === teamLeads.length - 1) card.classList.add('left-1');
        else if (offset === teamLeads.length - 2) card.classList.add('left-2');
        else card.classList.add('hidden');
      });

      dots.forEach((d, i) => d.classList.toggle('active', i === current));

      memberName.style.opacity = '0';
      memberRole.style.opacity = '0';
      setTimeout(() => {
        memberName.textContent = teamLeads[current].name;
        memberRole.textContent = teamLeads[current].role;
        memberName.style.opacity = '1';
        memberRole.style.opacity = '1';
      }, 200);

      setTimeout(() => { animating = false; }, 650);
    };

    const start = () => { timer = setInterval(() => update(current + 1), delay); };
    const stop = () => { if (timer) clearInterval(timer); };

    on(leftArrow, 'click', () => { stop(); update(current - 1); start(); });
    on(rightArrow, 'click', () => { stop(); update(current + 1); start(); });

    let touchStartX = 0;
    on(track, 'touchstart', e => { touchStartX = e.changedTouches[0].screenX; });
    on(track, 'touchend', e => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        stop();
        diff > 0 ? update(current + 1) : update(current - 1);
        start();
      }
    });

    on(track, 'mouseenter', stop);
    on(track, 'mouseleave', start);

    on(document, 'visibilitychange', () => { document.hidden ? stop() : start(); });

    update(0);
    start();
  };

  const initTabs = () => {
    const tabsContainer = qs('#tabsContainer');
    if (!tabsContainer) return;
    const tabs = ['Technical', 'Marketing', 'Media', 'Design', 'Documentation'];
    let active = tabs[0];

    tabs.forEach(tab => {
      const btn = document.createElement('button');
      btn.className = `tab-button ${tab === active ? 'active' : ''}`;
      btn.textContent = tab;
      on(btn, 'click', () => {
        active = tab;
        qsa('.tab-button', tabsContainer).forEach(b => b.classList.toggle('active', b.textContent === tab));
        updateMembers();
      });
      tabsContainer.appendChild(btn);
    });

    const membersGrid = qs('#membersGrid');
    const updateMembers = () => {
      if (!membersGrid) return;
      membersGrid.innerHTML = '';
      (teamMembersData[active] || []).forEach((member, idx) => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.style.animationDelay = `${idx * 0.08}s`;
        card.innerHTML = `
          <div class="member-card-inner">
            <div class="member-card-front">
              <img src="${member.image}" alt="${member.name}" class="card-image">
              <h3 class="member-name">${member.name}</h3>
              <p class="member-role">${member.role}</p>
            </div>
            <div class="member-card-back">
              <div class="lead-social-links" style="gap: 1.5rem;">${buildSocial(member.social)}</div>
            </div>
          </div>`;
        membersGrid.appendChild(card);
      });
    };

    updateMembers();
  };

  const initExpandableCards = () => {
    const overlay = qs('#cardOverlay');
    const cards = qsa('.expandable-card');
    if (!cards.length || !overlay) return;

    const close = () => {
      qsa('.expandable-card.expanded').forEach(c => c.classList.remove('expanded'));
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    };

    cards.forEach(card => {
      on(card, 'click', e => {
        if (e.target.closest('.social-btn')) return;
        const isOpen = card.classList.contains('expanded');
        close();
        if (!isOpen) {
          card.classList.add('expanded');
          overlay.classList.add('active');
          document.body.classList.add('no-scroll');
        }
      });
    });

    on(overlay, 'click', close);
  };

  const initActiveNav = () => {
    const navLinks = qsa('nav ul li a');
    const sections = qsa('section[id]');
    if (!navLinks.length || !sections.length) return;

    const setActive = id => {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${id}` || (id === 'home' && (href === '#home' || href === '#')));
      });
    };

    navLinks.forEach(link => {
      on(link, 'click', e => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        const target = href === '#home' ? document.body : qs(href);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActive(href.replace('#', '') || 'home');
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { threshold: 0.45 });

    sections.forEach(sec => observer.observe(sec));
    setActive('home');
  };

  const initHeaderScroll = () => {
    const header = qs('header');
    if (!header) return;
    const toggle = throttle(() => header.classList.toggle('scrolled', window.scrollY > 50), 80);
    on(window, 'scroll', toggle);
    toggle();
  };

  const initCursorTrail = () => {
    const canvas = qs('#trail');
    if (!canvas || prefersReduced.matches) return;
    const ctx = canvas.getContext('2d');
    const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];
    const dots = [];
    let colorIndex = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    on(window, 'resize', resize);

    on(window, 'mousemove', e => {
      dots.push({ x: e.clientX, y: e.clientY, size: 8, alpha: 1, color: colors[colorIndex % colors.length] });
      colorIndex += 1;
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        ctx.globalAlpha = d.alpha;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
        d.alpha -= 0.02;
        d.size -= 0.12;
        if (d.alpha <= 0 || d.size <= 0) { dots.splice(i, 1); i -= 1; }
      }
      requestAnimationFrame(draw);
    };
    draw();
  };

  const initParticles = () => {
    if (typeof particlesJS !== 'function' || prefersReduced.matches) return;
    const container = qs('#particles-js');
    if (!container) return;
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#1a73e8' },
        shape: { type: 'circle' },
        opacity: { value: 1, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 120, color: '#1a73e8', opacity: 1, width: 1 },
        move: { enable: true, speed: 0.3, direction: 'none', out_mode: 'out' },
      },
      interactivity: { events: { onhover: { enable: true, mode: 'grab' }, resize: true } },
      retina_detect: true,
    });
  };

  const init = () => {
    initNav();
    initSmoothScroll();
    initNavbarTint();
    initCounters();
    initReveal();
    initParallax();
    initStagger();
    initAlbum();
    initResourceModal();
    initGalleryModal();
    initCarousel();
    initTabs();
    initExpandableCards();
    initActiveNav();
    initHeaderScroll();
    initCursorTrail();
    initParticles();
  };

  on(document, 'DOMContentLoaded', init);
})();
// FIXED JAVASCRIPT - Change 'active' to 'open'

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, setting up navigation...");

  // Counter Animation (keep your existing counter code)
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;
      const increment = target / 200; // speed factor
      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });

  // MOBILE NAVIGATION (FIXED TO USE 'open' CLASS)
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  console.log("Hamburger found:", hamburger);
  console.log("Nav found:", nav);

  if (hamburger && nav) {
    hamburger.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Hamburger clicked!");

      // Toggle hamburger animation
      hamburger.classList.toggle("active");

      // Toggle nav menu (use 'open' to match CSS)
      nav.classList.toggle("open");

      console.log("Nav has open class:", nav.classList.contains("open"));
    });

    // Close menu when clicking nav links
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        console.log("Nav link clicked, closing menu");
        hamburger.classList.remove("active");
        nav.classList.remove("open"); // Use 'open'
      });
    });
  } else {
    console.error("Hamburger or Nav element not found!");
  }
});

// SMOOTH SCROLLING START
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
// SMOOTH SCROLLING END

// NAVBAR SCROLL EFFECT START
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(30, 60, 114, 0.98)";
  } else {
    navbar.style.background = "rgba(30, 60, 114, 0.95)";
  }
});
// NAVBAR SCROLL EFFECT END

// BUTTON CLICK HANDLERS START
// BUTTON CLICK HANDLERS END
// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

// Observe cards
document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});

// Observe timeline items
document.querySelectorAll(".timeline-item").forEach(item => {
  observer.observe(item);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Parallax effect for background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".bg-animation");
  const speed = scrolled * 0.5;
  parallax.style.transform = `translateY(${speed}px)`;
});

// Add staggered animation delay to cards
document.querySelectorAll(".card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});

// Add staggered animation delay to timeline items
document.querySelectorAll(".timeline-item").forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.2}s`;
});

// Album flipbook functionality
const pages = document.querySelectorAll(".album-page");
let currentPage = 0;
let autoTurnInterval;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove("active");
    if (i === index) page.classList.add("active");
  });
}

// Next page
function nextPage() {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
}

// Prev page
function prevPage() {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(currentPage);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  nextPage();
  resetAutoTurn();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  prevPage();
  resetAutoTurn();
});

// Auto turn every 3s
function startAutoTurn() {
  autoTurnInterval = setInterval(nextPage, 3000);
}

function resetAutoTurn() {
  clearInterval(autoTurnInterval);
  startAutoTurn();
}

// Initialize first page
showPage(currentPage);
startAutoTurn();

const modal = document.getElementById("resourceModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const downloadBtn = document.getElementById("downloadBtn");
const closeBtns = document.querySelectorAll(".modal .close");

document.querySelectorAll(".resource-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.classList.add("show");
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.text;
    downloadBtn.href = card.dataset.pdf;
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.target.closest(".modal").classList.remove("show");
    setTimeout(() => {
      e.target.closest(".modal").style.display = "none";
    }, 300);
  });
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("show");
    setTimeout(() => {
      e.target.style.display = "none";
    }, 300);
  }
});

const galleryModal = document.getElementById("galleryModal");
const galleryModalImg = document.getElementById("galleryModalImg");

document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", () => {
    galleryModal.style.display = "flex";
    galleryModal.classList.add("show");
    galleryModalImg.src = img.src;
  });
});

// Team data with real information and social links
const teamMembers = [
  {
    name: "Mr. Aman Antuley",
    role: "Organizer",
    image: "members\\Aman.png",
    social: {
      github: "https://github.com/amanantuley",
      linkedin: "https://www.linkedin.com/in/aman-antuley-8974ab26a/",
    },
  },
  {
    name: "Mr. Mueez Hajwani",
    role: "Technical Lead",
    image: "members\\Mueez.png",
    social: {
      github: "https://github.com/MueezHajwani",
      linkedin: "https://www.linkedin.com/in/mueez-hajwani-8a80562b6/",
    },
  },
  {
    name: "Ms. Afshaan Ansari",
    role: "Media Lead",
    image: "members\\Afshan.png",
    social: {
      github: "https://github.com/Afshan2004",
      linkedin: "https://www.linkedin.com/in/afshan-ansari-128b522b5",
    },
  },
  {
    name: "Ms. Afreen Imam",
    role: "Marketing Lead",
    image: "members\\Afreen.png",
    social: {
      github: "https://github.com/afreenAI",
      linkedin: "https://www.linkedin.com/in/afreen-imam-b45449289/",
    },
  },
  {
    name: "Mr. Ashish Chavhan",
    role: "Documentation Lead",
    image: "members\\Aashish.png",
    social: {
      github: "https://github.com/Aashish1984",
      linkedin: "https://www.linkedin.com/in/aashish-chavan",
    },
  },
  {
    name: "Mr. Alamin Mondal",
    role: "Design Lead",
    image: "members\\Alamin.png",
    social: {
      github: "https://github.com/AlaminM01",
      linkedin: "https://www.linkedin.com/in/alaminmondal1/",
    },
  },
];

const teamMembersData = {
  Technical: [
    {
      name: "Mr. Abdul Kalsekar",
      role: "Technical Member",
      image: "members\\Abdul Rahman Kalsekar.png",
      social: {
        github: "https://github.com/arkalsekar",
        linkedin: "https://linkedin.com/in/arkalsekar",
      },
    },
    {
      name: "Mr. Huzaifa Ansari",
      role: "Technical Member",
      image: "members\\Huzaifa.png",
      social: {
        github: "https://github.com/HuzaifaAnsari07",
        linkedin: "https://www.linkedin.com/in/ansari-huzaifa-a7a00b33a",
      },
    },
    {
      name: "Ms. Iffah Sarang",
      role: "Technical Member",
      image: "members\\Iffah.png",
      social: {
        github: "https://github.com/Iffah-25",
        linkedin: "https://www.linkedin.com/in/iffah-sarang-183830330/",
      },
    },
  ],
  Marketing: [
    {
      name: "Ms. Iqra Khan",
      role: "Marketing Member",
      image: "members\\Iqra.png",
      social: {
        github: "https://github.com/Iqraakhan1234",
        linkedin: "https://www.linkedin.com/in/iqraa-khan-27562b369",
      },
    },
    {
      name: "Mr. Owais Soudagar",
      role: "Media Member",
      image: "members\\Owais.png",
      social: {
        github: "https://github.com/owaissoudagar26",
        linkedin: "https://www.linkedin.com/in/owais-soudagar-476965352",
      },
    },
    {
      name: "Mr. Hammad Sayed",
      role: "Marketing Member",
      image: "members\\Hammad.png",
      social: {
        github: "https://github.com/hammaadsayed",
        linkedin: "https://www.linkedin.com/in/hammaad-sayed-722b92284/",
      },
    },
  ],
  Media: [
    {
      name: "Ms. Daraksha Ansari",
      role: "Media Member",
      image: "members\\Daraksha.png",
      social: {
        github: "https://github.com/darakhshansari7",
        linkedin: "https://www.linkedin.com/in/darakhsha-ansari-1b2718292",
      },
    },
    {
      name: "Ms. Samiya Khan",
      role: "Media Member",
      image: "members\\Samiya.png",
      social: {
        github: "https://github.com/Samiyakhan456",
        linkedin: "https://www.linkedin.com/in/saamiyaakhan",
      },
    },
    {
      name: "Mr. Zain Pawle",
      role: "Media Member",
      image: "members\\Zain.png",
      social: {
        github: "https://github.com/Zayn329",
        linkedin: "https://www.linkedin.com/in/zain-pawle-9aaa272ab",
      },
    },
  ],
  Design: [
    {
      name: "Mr. Irfan Labbai",
      role: "Design Member",
      image: "members\\Irfan.png",
      social: {
        github: "https://github.com/LabbaiIrfan",
        linkedin: "https://www.linkedin.com/in/labbai-irfan/",
      },
    },
    {
      name: "Mr. Shaikh Mohd Affan",
      role: "Design Member",
      image: "members\\Affan.png",
      social: {
        github: "https://github.com/affanshaikh-dev",
        linkedin: "https://www.linkedin.com/in/shaikh-affan",
      },
    },
    {
      name: "Ms. Munazza Jaweed",
      role: "Design Member",
      image: "members\\Munazza.png",
      social: {
        github: "https://github.com/MunazzaJAG",
        linkedin: "https://www.linkedin.com/in/munazza-jaweed-62a2a4368/",
      },
    },
  ],
  Documentation: [
    {
      name: "Ms. Sadaf Ansari",
      role: "Documentation Member",
      image: "members\\Sadaf.jpg",
      social: {
        github: "https://github.com/sadafansari2006-09",
        linkedin: "https://www.linkedin.com/in/sadaf-ansari-30267b36a/",
      },
    },
  ],
};

// State variables
let currentIndex = 0;
let isAnimating = false;
let activeTab = "Technical";
let selectedMember = null;
let autoPlayInterval = null;
let autoPlayDelay = 3000; // 3 seconds between transitions

// DOM elements
const carouselTrack = document.getElementById("carouselTrack");
const tabsContainer = document.getElementById("tabsContainer");
const membersGrid = document.getElementById("membersGrid");
const modalOverlay = document.getElementById("modalOverlay");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");
const memberName = document.getElementById("memberName");
const memberRole = document.getElementById("memberRole");
const carouselDots = document.getElementById("carouselDots");
const modalClose = document.getElementById("modalClose");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const cardOverlay = document.getElementById("cardOverlay");

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  initializeCarousel();
  initializeTabs();
  initializeMembers();
  initializeExpandableCards();

  // Start auto-play
  startAutoPlay();

  // Event listeners for carousel
  leftArrow.addEventListener("click", () => {
    stopAutoPlay();
    updateCarousel(currentIndex - 1);
    startAutoPlay();
  });

  rightArrow.addEventListener("click", () => {
    stopAutoPlay();
    updateCarousel(currentIndex + 1);
    startAutoPlay();
  });

  // Modal event listeners
  modalClose.addEventListener("click", closeMemberModal);
  modalCloseBtn.addEventListener("click", closeMemberModal);

  // Close modal when clicking overlay
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeMemberModal();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") {
      stopAutoPlay();
      updateCarousel(currentIndex - 1);
      startAutoPlay();
    } else if (e.key === "ArrowRight") {
      stopAutoPlay();
      updateCarousel(currentIndex + 1);
      startAutoPlay();
    }
  });

  // Touch navigation
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      stopAutoPlay();
      if (diff > 0) {
        updateCarousel(currentIndex + 1);
      } else {
        updateCarousel(currentIndex - 1);
      }
      startAutoPlay();
    }
  }

  // Pause auto-play on hover
  carouselTrack.addEventListener("mouseenter", stopAutoPlay);
  carouselTrack.addEventListener("mouseleave", startAutoPlay);
});

// Carousel functions
function initializeCarousel() {
  // Create carousel cards
  teamMembers.forEach((member, index) => {
    const card = document.createElement("div");
    card.className = "lead-card";
    card.setAttribute("data-index", index);

    card.innerHTML = `
      <div class="lead-card-inner">
        <div class="lead-card-front">
          <img src="${member.image}" alt="${member.name}">
        </div>
        <div class="lead-card-back">
          <div class="lead-social-links">
            ${member.social.github && member.social.github !== "#"
        ? `
              <a href="${member.social.github}" class="lead-social-btn" onclick="event.stopPropagation()" target="_blank">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            `
        : ""
      }
            ${member.social.linkedin && member.social.linkedin !== "#"
        ? `
              <a href="${member.social.linkedin}" class="lead-social-btn" onclick="event.stopPropagation()" target="_blank">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            `
        : ""
      }
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      stopAutoPlay();
      updateCarousel(index);
      startAutoPlay();
    });
    carouselTrack.appendChild(card);
  });

  // Create dots
  teamMembers.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = `dot ${index === 0 ? "active" : ""}`;
    dot.setAttribute("data-index", index);
    dot.addEventListener("click", () => {
      stopAutoPlay();
      updateCarousel(index);
      startAutoPlay();
    });
    carouselDots.appendChild(dot);
  });

  updateCarousel(0);
}

function updateCarousel(newIndex) {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (newIndex + teamMembers.length) % teamMembers.length;

  const cards = document.querySelectorAll(".lead-card");
  const dots = document.querySelectorAll(".dot");

  cards.forEach((card, i) => {
    const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;

    card.classList.remove("center", "left-1", "left-2", "right-1", "right-2", "hidden");

    if (offset === 0) {
      card.classList.add("center");
    } else if (offset === 1) {
      card.classList.add("right-1");
    } else if (offset === 2) {
      card.classList.add("right-2");
    } else if (offset === teamMembers.length - 1) {
      card.classList.add("left-1");
    } else if (offset === teamMembers.length - 2) {
      card.classList.add("left-2");
    } else {
      card.classList.add("hidden");
    }
  });

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });

  // Update member info with fade animation
  memberName.style.opacity = "0";
  memberRole.style.opacity = "0";

  setTimeout(() => {
    memberName.textContent = teamMembers[currentIndex].name;
    memberRole.textContent = teamMembers[currentIndex].role;
    memberName.style.opacity = "1";
    memberRole.style.opacity = "1";
  }, 300);

  setTimeout(() => {
    isAnimating = false;
  }, 800);
}

// Auto-play functions
function startAutoPlay() {
  stopAutoPlay(); // Clear any existing interval
  autoPlayInterval = setInterval(() => {
    updateCarousel(currentIndex + 1);
  }, autoPlayDelay);
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
}

// Tabs functions
function initializeTabs() {
  const tabs = ["Technical", "Marketing", "Media", "Design", "Documentation"];

  tabs.forEach(tab => {
    const button = document.createElement("button");
    button.className = `tab-button ${tab === activeTab ? "active" : ""}`;
    button.textContent = tab;
    button.onclick = () => setActiveTab(tab);
    tabsContainer.appendChild(button);
  });
}

function setActiveTab(tab) {
  activeTab = tab;

  // Update tab buttons
  tabsContainer.querySelectorAll(".tab-button").forEach(button => {
    button.classList.toggle("active", button.textContent === tab);
  });

  // Update members grid
  updateMembersGrid();
}

// Members functions
function initializeMembers() {
  updateMembersGrid();
}

function updateMembersGrid() {
  const members = teamMembersData[activeTab] || [];
  membersGrid.innerHTML = "";

  members.forEach((member, index) => {
    const memberCard = createMemberCard(member, index);
    membersGrid.appendChild(memberCard);
  });
}

function createMemberCard(member, index) {
  const card = document.createElement("div");
  card.className = "member-card";
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <div class="member-card-inner">
      <div class="member-card-front">
        <img src="${member.image}" alt="${member.name}" class="card-image">
        <h3 class="member-name">${member.name}</h3>
        <p class="member-role">${member.role}</p>
      </div>
      <div class="member-card-back">
        <div class="lead-social-links" style="gap: 2rem;">
          ${member.social.github && member.social.github !== "#"
      ? `
            <a href="${member.social.github}" class="lead-social-btn" target="_blank">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          `
      : ""
    }
          ${member.social.linkedin && member.social.linkedin !== "#"
      ? `
            <a href="${member.social.linkedin}" class="lead-social-btn" target="_blank">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          `
      : ""
    }
        </div>
      </div>
    </div>
  `;

  return card;
}

// Modal functions
function openMemberModal(member) {
  selectedMember = member;

  // Update modal content
  document.getElementById("modalImage").src = member.image;
  document.getElementById("modalImage").alt = member.name;
  document.getElementById("modalName").textContent = member.name;
  document.getElementById("modalRole").textContent = member.role;

  // Update social links
  const socialContainer = document.getElementById("modalSocial");
  socialContainer.innerHTML = "";

  if (member.social.github && member.social.github !== "#") {
    const githubLink = document.createElement("a");
    githubLink.href = member.social.github;
    githubLink.target = "_blank";
    githubLink.style.color = "#9ca3af";
    githubLink.style.transition = "color 0.3s ease";
    githubLink.innerHTML = `
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    `;
    githubLink.addEventListener("mouseover", () => (githubLink.style.color = "white"));
    githubLink.addEventListener("mouseout", () => (githubLink.style.color = "#9ca3af"));
    socialContainer.appendChild(githubLink);
  }

  if (member.social.linkedin && member.social.linkedin !== "#") {
    const linkedinLink = document.createElement("a");
    linkedinLink.href = member.social.linkedin;
    linkedinLink.target = "_blank";
    linkedinLink.style.color = "#9ca3af";
    linkedinLink.style.transition = "color 0.3s ease";
    linkedinLink.innerHTML = `
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    `;
    linkedinLink.addEventListener("mouseover", () => (linkedinLink.style.color = "white"));
    linkedinLink.addEventListener("mouseout", () => (linkedinLink.style.color = "#9ca3af"));
    socialContainer.appendChild(linkedinLink);
  }

  // Show modal
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMemberModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
  selectedMember = null;
}

// Initialize expandable cards functionality
function initializeExpandableCards() {
  const expandableCards = document.querySelectorAll(".expandable-card");

  expandableCards.forEach(card => {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".social-btn")) return;

      const wasExpanded = this.classList.contains("expanded");

      document.querySelectorAll(".expandable-card.expanded").forEach(c => {
        c.classList.remove("expanded");
      });

      if (!wasExpanded) {
        this.classList.add("expanded");
        cardOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      } else {
        cardOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  cardOverlay.addEventListener("click", function () {
    document.querySelectorAll(".expandable-card.expanded").forEach(card => {
      card.classList.remove("expanded");
    });
    cardOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}
// Active section tracking with smooth scroll
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section[id]");

  // Handle click events
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default first

      // Remove active class from ALL links
      navLinks.forEach(l => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      console.log("Active class added to:", this.textContent); // Debug log
      console.log("Target href:", this.getAttribute("href")); // Debug href

      // Smooth scroll to section
      const targetId = this.getAttribute("href");

      if (targetId === "#home" || targetId === "#") {
        // Scroll to top for home
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (targetId && targetId.startsWith("#")) {
        // Scroll to specific section
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          console.error("Section not found:", targetId);
        }
      }
    });
  });

  // OPTIONAL: Track scroll position and update active link automatically
  // Comment this out if you only want manual clicking to change active state
  /*
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      
      if (window.pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      
      if (current && href === '#' + current) {
        link.classList.add('active');
      } else if (!current && (href === '#home' || href === '#')) {
        link.classList.add('active');
      }
    });
  });
  */

  // Set initial active state (Home)
  const homeLink = document.querySelector("nav ul li:nth-child(1) a");
  if (homeLink) {
    homeLink.classList.add("active");
    console.log("Initial active set to Home");
  }
});
// Add to your existing JavaScript
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  // Add to your existing JavaScript
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});




// Cursor Animation
const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const colors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"]; // Google colors
let colorIndex = 0;
const dots = [];

window.addEventListener("mousemove", (e) => {
  dots.push({
    x: e.clientX,
    y: e.clientY,
    size: 8,
    alpha: 1,
    color: colors[colorIndex % colors.length]
  });
  colorIndex++;
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < dots.length; i++) {
    const d = dots[i];
    ctx.globalAlpha = d.alpha;
    ctx.fillStyle = d.color;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
    ctx.fill();

    d.alpha -= 0.02;
    d.size -= 0.1;
    if (d.alpha <= 0 || d.size <= 0) {
      dots.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(draw);
}
draw();

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#1a73e8"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#1a73e8",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    }
  },
  retina_detect: true
});



// Loader Animation
window.addEventListener("load", function () {
    let loader = document.getElementById("loader-overlay");
    loader.style.display = "flex";

    setTimeout(() => loader.style.display = "none", 5500);

});

