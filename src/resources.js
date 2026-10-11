
export const resourceCategories = [
  {
    id: 'ai-genai',
    name: 'AI & GenAI',
    icon: 'Sparkles',
    description: 'Master foundation models, prompt engineering, multimodal architectures, and Google Gemini SDKs.',
    color: 'blue',
    learningPath: [
      {
        level: 'Beginner',
        step: 1,
        title: 'Python & Math for Modern AI',
        description: 'Understand linear algebra fundamentals, NumPy, Pandas, and data preparation basics.',
        topics: ['Python Syntax', 'NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning']
      },
      {
        level: 'Intermediate',
        step: 2,
        title: 'Machine Learning & Neural Nets',
        description: 'Explore supervised learning, classification, and neural network foundations with TensorFlow & Keras.',
        topics: ['Scikit-Learn', 'TensorFlow Basics', 'Gradient Descent', 'CNN & Vision']
      },
      {
        level: 'Advanced',
        step: 3,
        title: 'Generative AI & Gemini API',
        description: 'Build production multimodal agents using Gemini 2.5 Flash, structured JSON output, tool calling, and RAG.',
        topics: ['Gemini SDK', 'Vertex AI', 'Vector DBs & Embeddings', 'Function Calling', 'Google AI Studio']
      }
    ],
    curatedLinks: [
      {
        title: 'Google AI Studio Quickstart: Gemini Multimodal',
        level: 'Beginner',
        type: 'Interactive Sandbox',
        description: 'Official Google web workspace for rapid prototyping and testing prompts with Gemini 2.5 and 3.0 models.',
        url: 'https://aistudio.google.com',
        estimatedTime: '30 mins'
      },
      {
        title: 'Building AI Agents with Gemini & Function Calling',
        level: 'Intermediate',
        type: 'Codelab',
        description: 'Step-by-step tutorial on binding external REST APIs and database queries to Gemini models using schema parameters.',
        url: 'https://developers.google.com',
        estimatedTime: '1.5 hours'
      },
      {
        title: 'End-to-End Multimodal RAG with Vertex AI Search',
        level: 'Advanced',
        type: 'Documentation',
        description: 'Learn enterprise indexing over multi-page PDF documents and images with cosine similarity search.',
        url: 'https://cloud.google.com/vertex-ai',
        estimatedTime: '2 hours'
      }
    ]
  },
  {
    id: 'cloud',
    name: 'Google Cloud',
    icon: 'Cloud',
    description: 'Deploy serverless microservices, manage container clusters with GKE, and master GCP architecture.',
    color: 'blue',
    learningPath: [
      {
        level: 'Beginner',
        step: 1,
        title: 'Cloud Foundations & IAM Security',
        description: 'Learn cloud computing concepts, Google Cloud Console, billing accounts, regions, and IAM roles.',
        topics: ['Compute Basics', 'IAM Roles', 'VPC Networks', 'Cloud Storage']
      },
      {
        level: 'Intermediate',
        step: 2,
        title: 'Containerization & Serverless Deployment',
        description: 'Containerize applications with Docker, publish images to Artifact Registry, and run with Cloud Run.',
        topics: ['Dockerfiles', 'Cloud Run', 'Cloud Functions', 'Cloud SQL']
      },
      {
        level: 'Advanced',
        step: 3,
        title: 'Orchestration & DevOps Infrastructure',
        description: 'Scale microservices with Google Kubernetes Engine (GKE), Terraform IaC, and automated Cloud Build CI/CD.',
        topics: ['GKE Clusters', 'Terraform', 'Cloud Monitoring', 'Secret Manager']
      }
    ],
    curatedLinks: [
      {
        title: 'Google Cloud Skill Boost: Cloud Digital Leader Track',
        level: 'Beginner',
        type: 'Video Course',
        description: 'Free interactive labs and badges for students to master GCP core compute and storage concepts.',
        url: 'https://www.cloudskillsboost.google',
        estimatedTime: '4 hours'
      },
      {
        title: 'Serverless Node.js Microservice on Cloud Run',
        level: 'Intermediate',
        type: 'Codelab',
        description: 'Build, containerize, and deploy a REST API with custom domain and automatic HTTPS certificates.',
        url: 'https://codelabs.developers.google.com',
        estimatedTime: '1 hour'
      }
    ]
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    icon: 'Globe',
    description: 'Modern frontend engineering with React 19, TypeScript, Next.js, and performant styling systems.',
    color: 'yellow',
    learningPath: [
      {
        level: 'Beginner',
        step: 1,
        title: 'Modern JavaScript & DOM Fundamentals',
        description: 'Core ES6+ features, asynchronous async/await, closures, and responsive CSS layout techniques.',
        topics: ['ES6 Syntax', 'Flexbox & CSS Grid', 'Async/Await', 'Fetch API']
      },
      {
        level: 'Intermediate',
        step: 2,
        title: 'Component Architecture & TypeScript',
        description: 'Build component trees in React, handle declarative state with hooks, and type code strictly.',
        topics: ['React Hooks', 'TypeScript Generics', 'Tailwind CSS', 'State Management']
      },
      {
        level: 'Advanced',
        step: 3,
        title: 'Full-Stack Frameworks & Web Vitals',
        description: 'Server Components, dynamic routing, edge rendering, and optimizing Largest Contentful Paint (LCP).',
        topics: ['Next.js App Router', 'Web Performance', 'Core Web Vitals', 'SSR / SSG']
      }
    ],
    curatedLinks: [
      {
        title: 'Web.dev: Learn Performance & Accessibility',
        level: 'Beginner',
        type: 'Documentation',
        description: "Google's authoritative guide on crafting accessible, 100-score Lighthouse web applications.",
        url: 'https://web.dev',
        estimatedTime: '2 hours'
      },
      {
        title: 'React 19 & Next.js Comprehensive Guide',
        level: 'Intermediate',
        type: 'Codelab',
        description: 'Hands-on code patterns for server actions, optimistic UI updates, and streaming Suspense boundaries.',
        url: 'https://react.dev',
        estimatedTime: '3 hours'
      }
    ]
  },
  {
    id: 'android',
    name: 'Android Development',
    icon: 'Smartphone',
    description: 'Native mobile app development using Kotlin, Jetpack Compose, Material Design 3, and Coroutines.',
    color: 'green',
    learningPath: [
      {
        level: 'Beginner',
        step: 1,
        title: 'Kotlin Fundamentals',
        description: 'Null safety, lambdas, data classes, extension functions, and object-oriented paradigms in Kotlin.',
        topics: ['Kotlin Basics', 'Null Safety', 'Collections', 'Object Orientation']
      },
      {
        level: 'Intermediate',
        step: 2,
        title: 'Jetpack Compose UI',
        description: 'Build declarative user interfaces, manage state hoisting, and apply Material You theming.',
        topics: ['Compose Layouts', 'State Hoisting', 'Material 3', 'Navigation Compose']
      },
      {
        level: 'Advanced',
        step: 3,
        title: 'Modern Android Architecture',
        description: 'MVVM pattern, Room database, Coroutines & Flow, and dependency injection with Hilt.',
        topics: ['Coroutines & Flow', 'Room Persistence', 'Hilt DI', 'WorkManager']
      }
    ],
    curatedLinks: [
      {
        title: 'Android Basics with Compose',
        level: 'Beginner',
        type: 'Video Course',
        description: 'Official Google training course for students starting native mobile development without prior experience.',
        url: 'https://developer.android.com/courses/android-basics-compose/course',
        estimatedTime: '5 hours'
      }
    ]
  },
  {
    id: 'firebase',
    name: 'Firebase',
    icon: 'Database',
    description: 'Real-time database, Authentication, Cloud Functions, and Firebase Hosting for swift application delivery.',
    color: 'red',
    learningPath: [
      {
        level: 'Beginner',
        step: 1,
        title: 'Authentication & Firestore CRUD',
        description: 'Configure Firebase Console, enable Google Sign-In, and read/write NoSQL documents.',
        topics: ['Firebase Console', 'Auth Providers', 'Firestore Collections', 'Security Rules']
      },
      {
        level: 'Intermediate',
        step: 2,
        title: 'Real-time Listeners & Cloud Storage',
        description: 'Synchronize live feeds across active users and upload user media assets to Cloud Storage.',
        topics: ['onSnapshot', 'Batch Writes', 'Storage Buckets', 'Indexing']
      },
      {
        level: 'Advanced',
        step: 3,
        title: 'Cloud Functions & Remote Config',
        description: 'Deploy serverless triggers on Firestore writes and execute A/B testing dynamically.',
        topics: ['Cloud Functions v2', 'Webhook Triggers', 'FCM Push Notifications', 'Performance Monitoring']
      }
    ],
    curatedLinks: [
      {
        title: 'Firebase Web Codelab: FriendlyChat Realtime App',
        level: 'Beginner',
        type: 'Codelab',
        description: 'Build a multi-user real-time chat application with auth, database, and cloud messaging in under an hour.',
        url: 'https://firebase.google.com/codelabs',
        estimatedTime: '1 hour'
      }
    ]
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    icon: 'GitBranch',
    description: 'Version control mastery, collaborative open-source workflows, branching strategies, and GitHub Actions CI.',
    color: 'yellow',
    learningPath: [
      {
        level: 'Beginner',
        step: 1,
        title: 'Git Versioning Basics',
        description: 'Initialize repos, staging, committing, git diff, log inspection, and pushing to remote repositories.',
        topics: ['git init & status', 'git add & commit', 'git push/pull', 'Remote Origin']
      },
      {
        level: 'Intermediate',
        step: 2,
        title: 'Branches, Merging & Pull Requests',
        description: 'Feature branching, resolving merge conflicts, crafting pristine PR descriptions, and code reviews.',
        topics: ['git branch & checkout', 'Conflict Resolution', 'PR Workflows', 'Rebase vs Merge']
      },
      {
        level: 'Advanced',
        step: 3,
        title: 'GitHub Actions & Open-Source Maintenance',
        description: 'Automate linting, unit testing, release tagging, and package publishing on every git commit.',
        topics: ['GitHub Workflows', 'CI/CD YAML', 'Semantic Versioning', 'OSS Licensing']
      }
    ],
    curatedLinks: [
      {
        title: 'GitHub Skills: First Day on GitHub',
        level: 'Beginner',
        type: 'Interactive Sandbox',
        description: 'Interactive bot-guided repository that teaches branch creation and merge workflows directly on GitHub.',
        url: 'https://skills.github.com',
        estimatedTime: '45 mins'
      }
    ]
  }
];
