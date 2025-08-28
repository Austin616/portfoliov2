export const projectsData = [
  {
    id: 1,
    title: "UT Marketplace",
    description: "A full-stack marketplace application for UT students to buy and sell items. Features real-time chat, user authentication, and payment integration.",
    image: "/images/projects/ut-marketplace.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe"],
    githubUrl: "https://github.com/austintran/ut-marketplace",
    liveUrl: "https://ut-marketplace.vercel.app",
    featured: true,
    category: "web",
    highlights: [
      "Built real-time chat system with Socket.io",
      "Integrated Stripe payment processing",
      "Implemented user authentication with JWT",
      "Deployed on Vercel with MongoDB Atlas"
    ]
  },
  {
    id: 2,
    title: "HookEm Fitness",
    description: "Mobile fitness app for UT students with workout tracking, nutrition logging, and social features. Built with React Native and Firebase.",
    image: "/images/projects/hookem-fitness.jpg",
    technologies: ["React Native", "Firebase", "Expo", "AsyncStorage"],
    githubUrl: "https://github.com/austintran/hookem-fitness",
    liveUrl: "https://expo.dev/@austintran/hookem-fitness",
    featured: true,
    category: "mobile",
    highlights: [
      "Cross-platform mobile app development",
      "Firebase real-time database integration",
      "Custom workout tracking algorithms",
      "Social features with friend connections"
    ]
  },
  {
    id: 3,
    title: "Squad Up",
    description: "Team collaboration platform with gamification elements. Features points, badges, leaderboards, and custom challenges for organizations.",
    image: "/images/projects/squadup.jpg",
    technologies: ["Next.js", "Supabase", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/austintran/squadup",
    liveUrl: "https://squadup.vercel.app",
    featured: true,
    category: "web",
    highlights: [
      "Modern UI with Framer Motion animations",
      "Supabase backend integration",
      "Real-time leaderboards and notifications",
      "Custom gamification system"
    ]
  },
  {
    id: 4,
    title: "AI Study Buddy",
    description: "AI-powered study assistant that generates quizzes, flashcards, and study schedules based on course materials.",
    image: "/images/projects/ai-study-buddy.jpg",
    technologies: ["Python", "OpenAI API", "FastAPI", "React", "PostgreSQL"],
    githubUrl: "https://github.com/austintran/ai-study-buddy",
    liveUrl: "https://ai-study-buddy.herokuapp.com",
    featured: false,
    category: "ai",
    highlights: [
      "OpenAI GPT integration for content generation",
      "FastAPI backend with PostgreSQL",
      "Intelligent study schedule optimization",
      "PDF and document parsing capabilities"
    ]
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with detailed forecasts, interactive maps, and location-based recommendations.",
    image: "/images/projects/weather-dashboard.jpg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Mapbox"],
    githubUrl: "https://github.com/austintran/weather-dashboard",
    liveUrl: "https://weather-dashboard-at.netlify.app",
    featured: false,
    category: "web",
    highlights: [
      "Interactive weather maps with Mapbox",
      "Beautiful data visualizations with Chart.js",
      "Location-based activity recommendations",
      "PWA with offline capabilities"
    ]
  },
  {
    id: 6,
    title: "Longhorn Network",
    description: "Social networking app for UT students to connect based on classes, interests, and activities.",
    image: "/images/projects/longhorn-network.jpg",
    technologies: ["React", "GraphQL", "Apollo", "MongoDB", "Express"],
    githubUrl: "https://github.com/austintran/longhorn-network",
    liveUrl: null,
    featured: false,
    category: "web",
    highlights: [
      "GraphQL API with Apollo Server",
      "Advanced user matching algorithms",
      "Real-time messaging system",
      "Course and schedule integration"
    ]
  }
];

export const projectCategories = [
  { id: "all", name: "All Projects", count: projectsData.length },
  { id: "web", name: "Web Apps", count: projectsData.filter(p => p.category === "web").length },
  { id: "mobile", name: "Mobile Apps", count: projectsData.filter(p => p.category === "mobile").length },
  { id: "ai", name: "AI/ML", count: projectsData.filter(p => p.category === "ai").length }
];

export const featuredProjects = projectsData.filter(project => project.featured);