/**
 * Google Career Certificates & Grow with Google Data
 * Complete catalog of Google Career Certificates, Cloud pathways & Developer tracks
 */

export const categories = [
  { id: 'all', name: 'All Certificates' },
  { id: 'ai', name: 'AI & Machine Learning' },
  { id: 'cloud', name: 'Cloud & Infrastructure' },
  { id: 'data', name: 'Data & Analytics' },
  { id: 'dev', name: 'Software & Android' },
  { id: 'cybersecurity', name: 'Cybersecurity & IT' },
  { id: 'management', name: 'Management & UX' }
];

export const careerCertificates = [
  {
    id: 'ai-professional',
    title: 'Google AI Professional',
    category: 'ai',
    badge: 'Google Certificate',
    level: 'Beginner to Intermediate',
    duration: '3–6 months · 100% Online',
    description: 'Learn to collaborate with Google AI models, master prompt engineering, and practice building automated agents to solve real-world problems.',
    url: 'https://grow.google/certificates/ai-essentials/',
    ctaText: 'Get started on Coursera',
    skills: [
      'Mastering expert prompting for confident AI use',
      'Multimodal reasoning with Gemini & Vertex AI',
      'Chaining workflows and building action-oriented agents'
    ],
    readyForJobs: ['AI Solutions Specialist', 'Prompt Engineer', 'Automation Consultant'],
    tools: ['Gemini 1.5 Pro', 'Google AI Studio', 'Vertex AI', 'Python'],
    color: '#4285F4' // Google Blue
  },
  {
    id: 'data-analytics',
    title: 'Google Data Analytics',
    category: 'data',
    badge: 'Google Certificate',
    level: 'Beginner · No degree required',
    duration: '3–6 months · Flexible hours',
    description: 'Data analysts collect, organize, and visualize data to uncover trends and patterns that empower strategic business decisions.',
    url: 'https://grow.google/certificates/data-analytics/',
    ctaText: 'Get started on Coursera',
    skills: [
      'Data cleaning, transformation & structured analysis',
      'Database queries with SQL & statistical computing with R',
      'Interactive dashboard creation in Tableau & Looker'
    ],
    readyForJobs: ['Junior Data Analyst', 'Operations Analyst', 'Business Systems Analyst'],
    tools: ['SQL', 'R Studio', 'Spreadsheets', 'Tableau'],
    color: '#34A853' // Google Green
  },
  {
    id: 'cloud-architect',
    title: 'Google Cloud Solutions Architect',
    category: 'cloud',
    badge: 'Google Cloud',
    level: 'Intermediate to Advanced',
    duration: '3–6 months · Hands-on labs',
    description: 'Design dynamic, fault-tolerant, highly scalable infrastructure and microservices architectures using Google Cloud Platform.',
    url: 'https://cloud.google.com/learn/certification/cloud-architect',
    ctaText: 'Get started on Google Cloud',
    skills: [
      'Multi-region high availability & disaster recovery setup',
      'Container orchestration with GKE & Cloud Run',
      'Cloud security, IAM policies & Infrastructure as Code'
    ],
    readyForJobs: ['Cloud Solutions Architect', 'DevOps Engineer', 'Cloud Infrastructure Lead'],
    tools: ['GCP Console', 'Google Kubernetes Engine', 'Terraform', 'BigQuery'],
    color: '#4285F4' // Google Blue
  },
  {
    id: 'cybersecurity',
    title: 'Google Cybersecurity',
    category: 'cybersecurity',
    badge: 'Google Certificate',
    level: 'Beginner · Hands-on projects',
    duration: '3–6 months · Self-paced',
    description: 'Protect computer networks, cloud infrastructure, endpoints, and data from outside intrusions, malware threats, and cyber vulnerabilities.',
    url: 'https://grow.google/certificates/cybersecurity/',
    ctaText: 'Get started on Coursera',
    skills: [
      'Core defensive security, threat modeling & incident response',
      'Hands-on network traffic analysis with Linux & Wireshark',
      'Security event management with SIEM & Python automation'
    ],
    readyForJobs: ['Cybersecurity Analyst', 'SOC Level 1 Analyst', 'Information Security Specialist'],
    tools: ['Linux', 'SQL', 'Python', 'Wireshark', 'Splunk'],
    color: '#EA4335' // Google Red
  },
  {
    id: 'advanced-data-analytics',
    title: 'Google Advanced Data Analytics',
    category: 'data',
    badge: 'Google Certificate',
    level: 'Intermediate · Python focused',
    duration: '3–6 months · 100% Online',
    description: 'Advance your data career with deep statistical modeling, exploratory data analysis, and predictive machine learning algorithms in Python.',
    url: 'https://grow.google/certificates/advanced-data-analytics/',
    ctaText: 'Get started on Coursera',
    skills: [
      'Hypothesis testing, regression & statistical evaluation',
      'Predictive machine learning pipelines with Scikit-learn',
      'Exploratory analysis on massive datasets in Jupyter'
    ],
    readyForJobs: ['Senior Data Analyst', 'Junior Data Scientist', 'Machine Learning Analyst'],
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Tableau'],
    color: '#FBBC05' // Google Yellow
  },
  {
    id: 'android-developer',
    title: 'Android Native with Jetpack Compose',
    category: 'dev',
    badge: 'Android Developers',
    level: 'Beginner to Intermediate',
    duration: '2–4 months · Code-along',
    description: 'Build modern, beautiful, and fluid native Android applications using Kotlin and the declarative Jetpack Compose UI toolkit.',
    url: 'https://developer.android.com/courses/android-basics-compose/course',
    ctaText: 'Get started on Android',
    skills: [
      'Modern idiomatic Kotlin & coroutine async operations',
      'Declarative UI state management with Jetpack Compose',
      'Room local database, Retrofit networking & Material 3'
    ],
    readyForJobs: ['Android Developer', 'Mobile Software Engineer', 'Kotlin Mobile Dev'],
    tools: ['Android Studio', 'Kotlin', 'Jetpack Compose', 'Material 3'],
    color: '#34A853' // Google Green
  },
  {
    id: 'it-automation-python',
    title: 'Google IT Automation with Python',
    category: 'dev',
    badge: 'Google Certificate',
    level: 'Beginner to Intermediate',
    duration: '3–6 months · 100% Online',
    description: 'Learn how to program in Python and use automation scripting to manage operating systems, automate cloud servers, and control Git repositories.',
    url: 'https://grow.google/certificates/it-automation/',
    ctaText: 'Get started on Coursera',
    skills: [
      'Automating repetitive IT tasks with clean Python scripts',
      'Version control and team collaboration with Git and GitHub',
      'Configuration management and cloud computing at scale'
    ],
    readyForJobs: ['Systems Administrator', 'IT Support Engineer II', 'DevOps Automation Junior'],
    tools: ['Python', 'Git', 'GitHub', 'Bash / Linux', 'Puppet'],
    color: '#4285F4' // Google Blue
  },
  {
    id: 'business-intelligence',
    title: 'Google Business Intelligence',
    category: 'data',
    badge: 'Google Certificate',
    level: 'Intermediate · Career track',
    duration: '2–4 months · Self-paced',
    description: 'Build robust data models and automated end-to-end data pipelines that transform enterprise metrics into high-impact interactive dashboards.',
    url: 'https://grow.google/certificates/business-intelligence/',
    ctaText: 'Get started on Coursera',
    skills: [
      'Designing relational schemas & multi-source data models',
      'Writing performant SQL joins, subqueries & ETL pipelines',
      'Creating executive dashboards with Looker Studio & Tableau'
    ],
    readyForJobs: ['BI Analyst', 'Business Intelligence Engineer', 'Reporting Specialist'],
    tools: ['BigQuery', 'SQL', 'Looker Studio', 'Tableau'],
    color: '#FBBC05' // Google Yellow
  },
  {
    id: 'cloud-digital-leader',
    title: 'Google Cloud Digital Leader',
    category: 'cloud',
    badge: 'Google Cloud',
    level: 'Foundational · Open to all',
    duration: '1–2 months · Fast track',
    description: 'Understand cloud capabilities, digital transformation strategies, and how Google Cloud products power modern enterprise workloads.',
    url: 'https://cloud.google.com/learn/certification/cloud-digital-leader',
    ctaText: 'Get started on Google Cloud',
    skills: [
      'Core cloud concepts: IaaS, PaaS, SaaS & serverless',
      'Cost optimization, security governance & compliance',
      'Modernizing applications with Vertex AI & BigQuery'
    ],
    readyForJobs: ['Associate Cloud Consultant', 'Tech Sales Specialist', 'Project Analyst'],
    tools: ['Google Cloud Console', 'Cloud Billing', 'Compute Engine'],
    color: '#4285F4' // Google Blue
  },
  {
    id: 'ux-design',
    title: 'Google UX Design',
    category: 'management',
    badge: 'Google Certificate',
    level: 'Beginner · Portfolio builder',
    duration: '3–6 months · Highly practical',
    description: 'Conduct user research, design wireframes, build high-fidelity interactive prototypes in Figma, and build a professional design portfolio.',
    url: 'https://grow.google/certificates/ux-design/',
    ctaText: 'Get started on Coursera',
    skills: [
      'Empathizing with users, crafting personas & journey maps',
      'Low & high-fidelity interactive prototyping in Figma',
      'Conducting usability studies & implementing user feedback'
    ],
    readyForJobs: ['UX Designer', 'UI Designer', 'Product Designer', 'Interaction Designer'],
    tools: ['Figma', 'Adobe XD', 'Miro', 'Google Forms'],
    color: '#EA4335' // Google Red
  },
  {
    id: 'project-management',
    title: 'Google Project Management',
    category: 'management',
    badge: 'Google Certificate',
    level: 'Beginner · Hands-on cases',
    duration: '3–6 months · 100% Online',
    description: 'Learn how to lead cross-functional projects, run effective sprint meetings, manage budgets and timelines, and apply Agile frameworks.',
    url: 'https://grow.google/certificates/project-management/',
    ctaText: 'Get started on Coursera',
    skills: [
      'Scrum rituals, sprint backlogs & Agile ceremonies',
      'Risk management, milestone tracking & stakeholder comms',
      'Project management software & document documentation'
    ],
    readyForJobs: ['Project Coordinator', 'Scrum Master', 'Associate Project Manager'],
    tools: ['Asana', 'Jira', 'Google Workspace', 'Spreadsheets'],
    color: '#34A853' // Google Green
  },
  {
    id: 'it-support',
    title: 'Google IT Support',
    category: 'cybersecurity',
    badge: 'Google Certificate',
    level: 'Beginner · Industry standard',
    duration: '3–6 months · Lab simulations',
    description: 'Gain hands-on troubleshooting skills in operating systems, networking protocols, system administration, and device security.',
    url: 'https://grow.google/certificates/it-support/',
    ctaText: 'Get started on Coursera',
    skills: [
      'TCP/IP networking, DNS, routing & subnetting fundamentals',
      'Command line navigation in Linux, Windows PowerShell',
      'System administration, Active Directory & cloud backups'
    ],
    readyForJobs: ['IT Support Specialist', 'Help Desk Technician', 'Desktop Support Tech'],
    tools: ['Linux CLI', 'PowerShell', 'TCP/IP', 'Virtual Machines'],
    color: '#EA4335' // Google Red
  }
];

export const foundationalCertificates = careerCertificates;

export const benefits = [
  {
    id: 'pace',
    icon: 'calendar',
    title: 'Learn on your own time, at your own pace',
    description: 'Complete your certificate in 3–6 months with around 10 hours of flexible study time per week.'
  },
  {
    id: 'experts',
    icon: 'gear',
    title: 'Curriculum designed by Google experts',
    description: 'Learn directly from senior Google engineers and specialists with real-world industry experience.'
  },
  {
    id: 'job-ready',
    icon: 'path',
    title: 'Gain job-ready skills employers look for',
    description: 'Build real-world portfolio projects and access exclusive employer consortiums hiring Google certificate grads.'
  }
];

export default {
  categories,
  careerCertificates,
  foundationalCertificates,
  benefits
};
