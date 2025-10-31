// FIXED JAVASCRIPT - Change 'active' to 'open'
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up navigation...');
    
    // Counter Animation (keep your existing counter code)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
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
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    console.log('Hamburger found:', hamburger);
    console.log('Nav found:', nav);

    if (hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hamburger clicked!');
            
            // Toggle hamburger animation
            hamburger.classList.toggle('active');
            
            // Toggle nav menu (use 'open' to match CSS)
            nav.classList.toggle('open');
            
            console.log('Nav has open class:', nav.classList.contains('open'));
        });

        // Close menu when clicking nav links
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Nav link clicked, closing menu');
                hamburger.classList.remove('active');
                nav.classList.remove('open'); // Use 'open'
            });
        });

    } else {
        console.error('Hamburger or Nav element not found!');
    }
});


// SMOOTH SCROLLING START
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// SMOOTH SCROLLING END

// NAVBAR SCROLL EFFECT START
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(30, 60, 114, 0.98)';
    } else {
        navbar.style.background = 'rgba(30, 60, 114, 0.95)';
    }
});
// NAVBAR SCROLL EFFECT END

// BUTTON CLICK HANDLERS START
// BUTTON CLICK HANDLERS END
// Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    // Observe cards
    document.querySelectorAll('.card').forEach(card => {
      observer.observe(card);
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Parallax effect for background
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.bg-animation');
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    });

    // Add staggered animation delay to cards
    document.querySelectorAll('.card').forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });

    // Add staggered animation delay to timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
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
        modal.classList.add('show');
        modalTitle.textContent = card.dataset.title;
        modalText.textContent = card.dataset.text;
        downloadBtn.href = card.dataset.pdf;
      });
    });

    closeBtns.forEach(btn => {
      btn.addEventListener("click", e => {
        e.target.closest(".modal").classList.remove('show');
        setTimeout(() => { e.target.closest(".modal").style.display = "none"; }, 300);
      });
    });

    window.addEventListener("click", e => {
      if (e.target.classList.contains("modal")) {
        e.target.classList.remove('show');
        setTimeout(() => { e.target.style.display = "none"; }, 300);
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
    social: { github: "https://github.com/amanantuley", linkedin: "https://www.linkedin.com/in/aman-antuley-8974ab26a/" }
  },
  { 
    name: "Mr. Mueez Hajwani", 
    role: "Technical Lead",
    image: "members\\Mueez.png",
    social: { github: "https://github.com/MueezHajwani", linkedin: "https://www.linkedin.com/in/mueez-hajwani-8a80562b6/" }
  },
  { 
    name: "Ms. Afshaan Ansari", 
    role: "Media Lead",
    image: "members\\Afshan.png",
    social: { github: "https://github.com/Afshan2004", linkedin: "https://www.linkedin.com/in/afshan-ansari-128b522b5" }
  },
  { 
    name: "Ms. Afreen Imam", 
    role: "Marketing Lead",
    image: "members\\Afreen.png",
    social: { github: "https://github.com/afreenAI", linkedin: "https://www.linkedin.com/in/afreen-imam-b45449289/" }
  },
  { 
    name: "Mr. Ashish Chavhan", 
    role: "Documentation Lead",
    image: "members\\Aashish.png",
    social: { github: "https://github.com/Aashish1984", linkedin: "https://www.linkedin.com/in/aashish-chavan" }
  },
  { 
    name: "Mr. Alamin Mondal", 
    role: "Design Lead",
    image: "members\\Alamin.png",
    social: { github: "https://github.com/AlaminM01", linkedin: "https://www.linkedin.com/in/alaminmondal1/" }
  }
];

const teamMembersData = {
  Technical: [
    {
      name: "Mr. Abdul Kalsekar",
      role: "Technical Member",
      image: "members\\Abdul Rahman Kalsekar.png",
      social: { github: "https://github.com/arkalsekar", linkedin: "https://linkedin.com/in/arkalsekar" }
    },
    {
      name: "Mr. Huzaifa Ansari",
      role: "Technical Member",
      image: "members\\Huzaifa.png",
      social: { github: "https://github.com/HuzaifaAnsari07", linkedin: "https://www.linkedin.com/in/ansari-huzaifa-a7a00b33a" }
    },
    {
      name: "Ms. Iffah Sarang",
      role: "Technical Member",
      image: "members\\Iffah.png",
      social: { github: "https://github.com/Iffah-25", linkedin: "https://www.linkedin.com/in/iffah-sarang-183830330/" }
    }
  ],
  Marketing: [
    {
      name: "Ms. Iqra Khan",
      role: "Marketing Member",
      image: "members\\Iqra.png",
      social: { github: "https://github.com/Iqraakhan1234", linkedin: "https://www.linkedin.com/in/iqraa-khan-27562b369" }
    },
    {
      name: "Mr. Owais Soudagar",
      role: "Media Member",
      image: "members\\Owais.png",
      social: { github: "https://github.com/owaissoudagar26", linkedin: "https://www.linkedin.com/in/owais-soudagar-476965352" }
    },
    {
      name: "Mr. Hammad Sayed",
      role: "Marketing Member",
      image: "members\\Hammad.png",
      social: { github: "https://github.com/hammaadsayed", linkedin: "https://www.linkedin.com/in/hammaad-sayed-722b92284/" }
    }
  ],
  Media: [
    {
      name: "Ms. Daraksha Ansari",
      role: "Media Member",
      image: "members\\Daraksha.png",
      social: { github: "https://github.com/darakhshansari7", linkedin: "https://www.linkedin.com/in/darakhsha-ansari-1b2718292" }
    },
    {
      name: "Ms. Samiya Khan",
      role: "Media Member",
      image: "members\\Samiya.png",
      social: { github: "https://github.com/Samiyakhan456", linkedin: "https://www.linkedin.com/in/saamiyaakhan" }
    },
    {
      name: "Mr. Zain Pawle",
      role: "Media Member",
      image: "members\\Zain.png",
      social: { github: "https://github.com/Zayn329", linkedin: "https://www.linkedin.com/in/zain-pawle-9aaa272ab" }
    }
  ],
  Design: [
    {
      name: "Mr. Irfan Labbai",
      role: "Design Member",
      image: "members\\Irfan.png",
      social: { github: "https://github.com/LabbaiIrfan", linkedin: "https://www.linkedin.com/in/labbai-irfan/" }
    },
    {
      name: "Mr. Shaikh Mohd Affan",
      role: "Design Member",
      image: "members\\Affan.png",
      social: { github: "https://github.com/affanshaikh-dev", linkedin: "https://www.linkedin.com/in/shaikh-affan" }
    },
    {
      name: "Ms. Munazza Jaweed",
      role: "Design Member",
      image: "members\\Munazza.png",
      social: { github: "https://github.com/MunazzaJAG", linkedin: "https://www.linkedin.com/in/munazza-jaweed-62a2a4368/" }
    }
  ],
  Documentation: [
    {
      name: "Ms. Sadaf Ansari",
      role: "Documentation Member",
      image: "members\\Sadaf.jpg",
      social: { github: "https://github.com/sadafansari2006-09", linkedin: "https://www.linkedin.com/in/sadaf-ansari-30267b36a/" }
    }
  ]
};

// State variables
let currentIndex = 0;
let isAnimating = false;
let activeTab = 'Technical';
let selectedMember = null;
let autoPlayInterval = null;
let autoPlayDelay = 3000; // 3 seconds between transitions

// DOM elements
const carouselTrack = document.getElementById('carouselTrack');
const tabsContainer = document.getElementById('tabsContainer');
const membersGrid = document.getElementById('membersGrid');
const modalOverlay = document.getElementById('modalOverlay');
const leftArrow = document.querySelector('.nav-arrow.left');
const rightArrow = document.querySelector('.nav-arrow.right');
const memberName = document.getElementById('memberName');
const memberRole = document.getElementById('memberRole');
const carouselDots = document.getElementById('carouselDots');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const cardOverlay = document.getElementById('cardOverlay');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  initializeCarousel();
  initializeTabs();
  initializeMembers();
  initializeExpandableCards();
  
  // Start auto-play
  startAutoPlay();
  
  // Event listeners for carousel
  leftArrow.addEventListener('click', () => {
    stopAutoPlay();
    updateCarousel(currentIndex - 1);
    startAutoPlay();
  });
  
  rightArrow.addEventListener('click', () => {
    stopAutoPlay();
    updateCarousel(currentIndex + 1);
    startAutoPlay();
  });
  
  // Modal event listeners
  modalClose.addEventListener('click', closeMemberModal);
  modalCloseBtn.addEventListener('click', closeMemberModal);
  
  // Close modal when clicking overlay
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeMemberModal();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      stopAutoPlay();
      updateCarousel(currentIndex - 1);
      startAutoPlay();
    } else if (e.key === 'ArrowRight') {
      stopAutoPlay();
      updateCarousel(currentIndex + 1);
      startAutoPlay();
    }
  });

  // Touch navigation
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
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
  carouselTrack.addEventListener('mouseenter', stopAutoPlay);
  carouselTrack.addEventListener('mouseleave', startAutoPlay);
});

// Carousel functions
function initializeCarousel() {
  // Create carousel cards
  teamMembers.forEach((member, index) => {
    const card = document.createElement('div');
    card.className = 'lead-card';
    card.setAttribute('data-index', index);
    
    card.innerHTML = `
      <div class="lead-card-inner">
        <div class="lead-card-front">
          <img src="${member.image}" alt="${member.name}">
        </div>
        <div class="lead-card-back">
          <div class="lead-social-links">
            ${member.social.github && member.social.github !== '#' ? `
              <a href="${member.social.github}" class="lead-social-btn" onclick="event.stopPropagation()" target="_blank">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            ` : ''}
            ${member.social.linkedin && member.social.linkedin !== '#' ? `
              <a href="${member.social.linkedin}" class="lead-social-btn" onclick="event.stopPropagation()" target="_blank">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      stopAutoPlay();
      updateCarousel(index);
      startAutoPlay();
    });
    carouselTrack.appendChild(card);
  });
  
  // Create dots
  teamMembers.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('data-index', index);
    dot.addEventListener('click', () => {
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

  const cards = document.querySelectorAll('.lead-card');
  const dots = document.querySelectorAll('.dot');

  cards.forEach((card, i) => {
    const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;

    card.classList.remove('center', 'left-1', 'left-2', 'right-1', 'right-2', 'hidden');

    if (offset === 0) {
      card.classList.add('center');
    } else if (offset === 1) {
      card.classList.add('right-1');
    } else if (offset === 2) {
      card.classList.add('right-2');
    } else if (offset === teamMembers.length - 1) {
      card.classList.add('left-1');
    } else if (offset === teamMembers.length - 2) {
      card.classList.add('left-2');
    } else {
      card.classList.add('hidden');
    }
  });

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });

  // Update member info with fade animation
  memberName.style.opacity = '0';
  memberRole.style.opacity = '0';

  setTimeout(() => {
    memberName.textContent = teamMembers[currentIndex].name;
    memberRole.textContent = teamMembers[currentIndex].role;
    memberName.style.opacity = '1';
    memberRole.style.opacity = '1';
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
  const tabs = ['Technical', 'Marketing', 'Media', 'Design', 'Documentation'];
  
  tabs.forEach(tab => {
    const button = document.createElement('button');
    button.className = `tab-button ${tab === activeTab ? 'active' : ''}`;
    button.textContent = tab;
    button.onclick = () => setActiveTab(tab);
    tabsContainer.appendChild(button);
  });
}

function setActiveTab(tab) {
  activeTab = tab;
  
  // Update tab buttons
  tabsContainer.querySelectorAll('.tab-button').forEach(button => {
    button.classList.toggle('active', button.textContent === tab);
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
  membersGrid.innerHTML = '';
  
  members.forEach((member, index) => {
    const memberCard = createMemberCard(member, index);
    membersGrid.appendChild(memberCard);
  });
}

function createMemberCard(member, index) {
  const card = document.createElement('div');
  card.className = 'member-card';
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
          ${member.social.github && member.social.github !== '#' ? `
            <a href="${member.social.github}" class="lead-social-btn" target="_blank">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          ` : ''}
          ${member.social.linkedin && member.social.linkedin !== '#' ? `
            <a href="${member.social.linkedin}" class="lead-social-btn" target="_blank">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          ` : ''}
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
  document.getElementById('modalImage').src = member.image;
  document.getElementById('modalImage').alt = member.name;
  document.getElementById('modalName').textContent = member.name;
  document.getElementById('modalRole').textContent = member.role;
  
  // Update social links
  const socialContainer = document.getElementById('modalSocial');
  socialContainer.innerHTML = '';
  
  if (member.social.github && member.social.github !== '#') {
    const githubLink = document.createElement('a');
    githubLink.href = member.social.github;
    githubLink.target = '_blank';
    githubLink.style.color = '#9ca3af';
    githubLink.style.transition = 'color 0.3s ease';
    githubLink.innerHTML = `
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    `;
    githubLink.addEventListener('mouseover', () => githubLink.style.color = 'white');
    githubLink.addEventListener('mouseout', () => githubLink.style.color = '#9ca3af');
    socialContainer.appendChild(githubLink);
  }
  
  if (member.social.linkedin && member.social.linkedin !== '#') {
    const linkedinLink = document.createElement('a');
    linkedinLink.href = member.social.linkedin;
    linkedinLink.target = '_blank';
    linkedinLink.style.color = '#9ca3af';
    linkedinLink.style.transition = 'color 0.3s ease';
    linkedinLink.innerHTML = `
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    `;
    linkedinLink.addEventListener('mouseover', () => linkedinLink.style.color = 'white');
    linkedinLink.addEventListener('mouseout', () => linkedinLink.style.color = '#9ca3af');
    socialContainer.appendChild(linkedinLink);
  }
  
  // Show modal
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMemberModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
  selectedMember = null;
}

// Initialize expandable cards functionality
function initializeExpandableCards() {
  const expandableCards = document.querySelectorAll('.expandable-card');
  
  expandableCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.closest('.social-btn')) return;
      
      const wasExpanded = this.classList.contains('expanded');
      
      document.querySelectorAll('.expandable-card.expanded').forEach(c => {
        c.classList.remove('expanded');
      });
      
      if (!wasExpanded) {
        this.classList.add('expanded');
        cardOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        cardOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
  
  cardOverlay.addEventListener('click', function() {
    document.querySelectorAll('.expandable-card.expanded').forEach(card => {
      card.classList.remove('expanded');
    });
    cardOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
}
// Active section tracking with smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section[id]');

  // Handle click events
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default first
      
      // Remove active class from ALL links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      console.log('Active class added to:', this.textContent); // Debug log
      console.log('Target href:', this.getAttribute('href')); // Debug href
      
      // Smooth scroll to section
      const targetId = this.getAttribute('href');
      
      if (targetId === '#home' || targetId === '#') {
        // Scroll to top for home
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else if (targetId && targetId.startsWith('#')) {
        // Scroll to specific section
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          console.error('Section not found:', targetId);
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
  const homeLink = document.querySelector('nav ul li:nth-child(1) a');
  if (homeLink) {
    homeLink.classList.add('active');
    console.log('Initial active set to Home');
  }
});
