/**
 * GDGC AIKTC - Official Events & Community Programs Data
 * Google Developer Groups on Campus · Anjuman-I-Islam Kalsekar Technical Campus
 */

export const officialChapterUrl =
  'https://gdg.community.dev/gdg-on-campus-anjuman-i-islam-kalsekar-technical-campus-navi-mumbai-india/';

export const eventCategories = [
  { id: 'all', name: 'All Events', icon: 'Sparkles' },
  { id: 'upcoming', name: 'Upcoming', icon: 'Calendar' },
  { id: 'workshops', name: 'Workshops', icon: 'Layers' },
  { id: 'study-jams', name: 'Study Jams', icon: 'BookOpen' },
  { id: 'hackathons', name: 'Hackathons', icon: 'Code2' },
  { id: 'past', name: 'Past Archive', icon: 'History' },
];

export const featuredEvent = {
  id: 'fe-2026-solution-challenge',
  badge: 'Flagship Event',
  title: 'Google Solution Challenge & GenAI Study Jam',
  tagline: 'Build real-world solutions addressing UN Sustainable Development Goals using Gemini API & Google Cloud.',
  category: 'study-jams',
  categoryName: 'Study Jam & Sprint',
  accentColor: 'blue',
  status: 'upcoming',
  statusLabel: 'Chapter RSVP Open',
  schedule: 'Upcoming Season · Spring 2026',
  time: 'Schedule & Timing via Chapter Hub',
  location: 'AIKTC Campus / Google Meet (Hybrid)',
  venueNote: 'Main Seminar Hall & Virtual Live Stream',
  hosts: 'GDGC AIKTC Core Team & Domain Mentors',
  highlights: [
    'Hands-on intro to Google Gemini API & Multimodal Models',
    'UN 17 Sustainable Development Goals problem tracks',
    'Team building & project ideation sprint',
    'Official Google Cloud credits and digital badge eligibility',
  ],
  registrationUrl: officialChapterUrl,
  registrationNote: 'RSVP directly on the official GDGC Chapter portal.',
};

export const upcomingEvents = [
  {
    id: 'ev-web-modern-fullstack',
    title: 'Modern Web Jam: React 19, Vite & Tailwind CSS',
    category: 'workshops',
    categoryName: 'Hands-on Workshop',
    accentColor: 'blue',
    status: 'upcoming',
    statusLabel: 'Announcing Soon',
    schedule: 'Spring Season · Date TBA',
    time: '2-Hour Hands-on Session',
    location: 'Computer Lab 3, AIKTC Campus',
    description:
      'Learn how modern frontend engineering works in 2026. Build performant single-page apps with React 19 hooks, Vite bundler, and atomic Tailwind styling.',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'Frontend'],
    audience: 'Open to All Branches & Skill Levels',
    registrationUrl: officialChapterUrl,
    hasRegistrationLink: false,
    registrationNote: 'Dates and seat booking releasing soon on Chapter portal.',
  },
  {
    id: 'ev-cloud-practitioner-sprint',
    title: 'Google Cloud Study Jam: Cloud Run & Serverless 101',
    category: 'study-jams',
    categoryName: 'Cloud Study Jam',
    accentColor: 'green',
    status: 'upcoming',
    statusLabel: 'Announcing Soon',
    schedule: 'Upcoming Weekend Track',
    time: 'Virtual Hands-on Sprint',
    location: 'Google Meet / Online',
    description:
      'Deploy your first containerized microservice without managing servers. Explore Cloud Run, Artifact Registry, and Google Cloud Skill Boost pathways.',
    tags: ['Google Cloud', 'Cloud Run', 'Docker', 'DevOps'],
    audience: 'Beginners to Intermediate',
    registrationUrl: officialChapterUrl,
    hasRegistrationLink: false,
    registrationNote: 'RSVP will open via official GDGC chapter mailers.',
  },
  {
    id: 'ev-android-compose-camp',
    title: 'Android Compose Camp: Declarative UIs in Kotlin',
    category: 'workshops',
    categoryName: 'Mobile Dev Workshop',
    accentColor: 'yellow',
    status: 'upcoming',
    statusLabel: 'Upcoming',
    schedule: 'Mid-Semester Workshop',
    time: 'Half-Day Boot Camp',
    location: 'AIKTC Tech Center',
    description:
      'Step away from legacy XML layouts. Experience modern Android development with Jetpack Compose, Material 3, and state management in Kotlin.',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Mobile'],
    audience: 'Curious developers & Android enthusiasts',
    registrationUrl: officialChapterUrl,
    hasRegistrationLink: false,
    registrationNote: 'Prerequisites & setup guide published on Chapter page.',
  },
  {
    id: 'ev-ai-hackathon-prep',
    title: 'Solution Sprint: Ideation to MVP Hackathon Prep',
    category: 'hackathons',
    categoryName: 'Hackathon Sprint',
    accentColor: 'red',
    status: 'upcoming',
    statusLabel: 'Planning Phase',
    schedule: 'Pre-Hackathon Briefing',
    time: 'Interactive Workshop',
    location: 'AIKTC Seminar Hall',
    description:
      'How do winning hackathon teams brainstorm, scope their minimum viable product, and deliver compelling 3-minute demos to judges? A collaborative ideation lab.',
    tags: ['Ideation', 'Prototyping', 'Pitching', 'Solution Challenge'],
    audience: 'Hackathon participants & builders',
    registrationUrl: officialChapterUrl,
    hasRegistrationLink: false,
    registrationNote: 'Team formation details announced via chapter community.',
  },
];

export const pastEvents = [
  {
    id: 'past-info-session-2025',
    title: 'GDGC AIKTC Chapter Kickoff & Orientation',
    term: 'Chapter Inaugural Session',
    category: 'past',
    categoryType: 'Community Orientation',
    accentColor: 'blue',
    description:
      'Introduction to Google Developer Groups on Campus at AIKTC. Overview of upcoming technical tracks, open source initiatives, and developer opportunities for students.',
    takeaways: [
      'Introduced Chapter core team and domain leads',
      'Walked through Google Cloud, Android, and Web roadmaps',
      'Community Q&A and networking session',
    ],
    tags: ['Orientation', 'Community', 'Google For Developers'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Technology community members listening to a speaker in an auditorium',
    imageDisclaimer: 'Representative community session preview',
    chapterRecapUrl: officialChapterUrl,
  },
  {
    id: 'past-git-github-workshop',
    title: 'Git & GitHub Hands-on: Zero to First Open-Source PR',
    term: 'Fall Technical Bootcamp',
    category: 'past',
    categoryType: 'Hands-on Bootcamp',
    accentColor: 'green',
    description:
      'Students learned local version control, branch workflows, merge conflict resolution, and published their first open-source contributions.',
    takeaways: [
      'Configured Git CLI and SSH keys',
      'Mastered feature-branch workflows and rebasing basics',
      'Simulated team pull requests and peer code review',
    ],
    tags: ['Git', 'GitHub', 'Open Source', 'Collaboration'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Students coding on laptops during an interactive workshop',
    imageDisclaimer: 'Representative community session preview',
    chapterRecapUrl: officialChapterUrl,
  },
  {
    id: 'past-cloud-study-jam-genai',
    title: 'Google Cloud GenAI Foundations Study Jam',
    term: 'Hands-on Sprint Session',
    category: 'past',
    categoryType: 'Study Jam',
    accentColor: 'yellow',
    description:
      'Guided cohort through Google Cloud Skills Boost labs, earning skill badges in Prompt Design in Vertex AI and Gemini APIs.',
    takeaways: [
      'Explored Google Cloud Console and Vertex AI Studio',
      'Completed interactive labs and earned skill badges',
      'Built prompt prototypes with zero-shot and few-shot techniques',
    ],
    tags: ['Google Cloud', 'Generative AI', 'Vertex AI', 'Skill Badges'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Team of student developers discussing technical designs',
    imageDisclaimer: 'Representative community session preview',
    chapterRecapUrl: officialChapterUrl,
  },
  {
    id: 'past-solution-showcase',
    title: 'Student Project Showcase & Lightning Talks',
    term: 'Community Demo Day',
    category: 'past',
    categoryType: 'Showcase',
    accentColor: 'red',
    description:
      'Campus innovators presented semester projects built with Flutter, Firebase, and Web technologies to peers and mentors for live feedback.',
    takeaways: [
      'Live demos of student-built web and mobile applications',
      'Constructive technical critique and architecture tips',
      'Cross-departmental collaboration and peer connections',
    ],
    tags: ['Showcase', 'Lightning Talks', 'Student Builders'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Developers collaborating around a workstation',
    imageDisclaimer: 'Representative community session preview',
    chapterRecapUrl: officialChapterUrl,
  },
];

export const communityImpactStats = [
  { number: '4+', label: 'Learning Tracks', note: 'Web, Cloud, Android & AI' },
  { number: '100%', label: 'Student-Driven', note: 'AIKTC Campus Community' },
  { number: 'Free', label: 'Access to All', note: 'No-cost peer workshops' },
  { number: 'Global', label: 'Network', note: 'Connected with Google Developer Ecosystem' },
];
