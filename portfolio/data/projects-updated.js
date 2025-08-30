export const projectsData = [
  {
    id: 1,
    title: 'UT Marketplace',
    description: 'A full-stack marketplace application for UT students to buy and sell items safely within the campus community.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Stripe', 'Socket.io'],
    category: 'Full-Stack',
    status: 'Live',
    year: '2024',
    image: '/images/projects/utmp.png',
    github: 'https://github.com/austin616/ut-marketplace',
    live: 'https://ut-marketplace.vercel.app',
    githubUrl: 'https://github.com/austin616/ut-marketplace',
    liveUrl: 'https://ut-marketplace.vercel.app',
    features: ['User Authentication', 'Real-time Chat', 'Payment Integration', 'Admin Dashboard'],
    featured: true,
    highlights: [
      "Built real-time chat system with Socket.io",
      "Integrated Stripe payment processing",
      "Implemented user authentication with JWT",
      "Deployed on Vercel with Supabase"
    ]
  },
  {
    id: 2,
    title: 'UT Dining App',
    description: 'React Native app helping UT students discover dining options, view menus, and track nutritional information.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
    category: 'Mobile',
    status: 'In Progress',
    year: '2025',
    image: '/images/projects/utdining.png',
    github: 'https://github.com/austin616/UT-Dining',
    live: 'https://apps.apple.com/us/app/ut-dining-ut-austin-food-app/id6743042002',
    githubUrl: 'https://github.com/austin616/UT-Dining',
    liveUrl: 'https://apps.apple.com/us/app/ut-dining-ut-austin-food-app/id6743042002',
    features: ['Menu Tracking', 'Nutrition Info', 'Location Services', 'Offline Support'],
    featured: true,
    highlights: [
      "Cross-platform mobile app development",
      "Real-time menu data integration",
      "Nutritional information tracking",
      "Campus location services"
    ]
  },
  {
    id: 3,
    title: 'Car Showcase',
    description: 'Modern car showcase platform featuring detailed vehicle information, advanced filtering, and rental booking functionality.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Supabase', 'Framer Motion'],
    category: 'Full-Stack',
    status: 'Live',
    year: '2024',
    image: '/images/projects/car-showcase.png',
    github: 'https://github.com/austin616/car-showcase',
    live: 'https://car-showcase.vercel.app',
    githubUrl: 'https://github.com/austin616/car-showcase',
    features: ['Vehicle Database', 'Advanced Filtering', 'Rental Booking', 'Payment Processing'],
    featured: true,
    highlights: [
      "Dynamic car catalog with advanced search",
      "Integrated Stripe payment system",
      "Real-time availability tracking",
      "Responsive design with smooth animations"
    ]
  },
  {
    id: 4,
    title: 'UT Marketplace App',
    description: 'A react native app for UT students to buy and sell items safely within the campus community. Based off the UT Marketplace website but in a mobile app.',
    technologies: ['React Native', 'Supabase', 'TypeScript', 'NativeWind', 'Expo'],
    category: 'Mobile',
    status: 'Completed',
    year: '2024',
    image: '/images/projects/utmpapp.png',
    github: 'https://github.com/austin616/UT-Marketplace-App',
    live: null,
    githubUrl: 'https://github.com/austin616/UT-Marketplace-App',
    liveUrl: null,
    features: ['Marketplace', 'Progress Tracking', 'Social Features', ],
    featured: false,
    highlights: [
      "The app is a marketplace for UT students to buy and sell items safely within the campus community.",
    ]
  },
  {
    id: 5,
    title: 'Exercise Catalog',
    description: 'Comprehensive exercise database with detailed instructions, muscle group targeting, and workout routines.',
    technologies: ['React', 'Python', 'SQLite', 'Material-UI'],
    category: 'Web App',
    status: 'Completed',
    year: '2025',
    image: '/images/projects/gymatlas.png',
    github: 'https://github.com/austin616/exercise-catalog',
    live: 'https://exercise-catalog.vercel.app/',
    githubUrl: 'https://github.com/austin616/exercise-catalog',
    liveUrl: 'https://exercise-catalog.vercel.app/',
    features: ['Exercise Database', 'Muscle Group Filter', 'Routine Builder', 'Progress Analytics'],
    featured: false,
    highlights: [
      "Comprehensive exercise database",
      "Advanced filtering and search",
      "Custom routine builder",
      "Progress analytics dashboard"
    ]
  },
  {
    id: 6,
    title: 'Portfolio',
    description: 'Modern portfolio website showcasing projects, skills, and fitness journey with dark/light theme support.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Lucide Icons'],
    category: 'Portfolio',
    status: 'Live',
    year: '2025',
    image: '/images/projects/portfolio.png',
    github: 'https://github.com/austin616/portfolio-v2',
    live: 'https://austintran.me',
    githubUrl: 'https://github.com/austin616/portfolio-v2',
    liveUrl: 'https://austintran.me',
    features: ['Responsive Design', 'Dark Mode', 'Smooth Animations', 'Modern UI'],
    featured: false,
    highlights: [
      "Modern design with Framer Motion",
      "Dark/light theme support",
      "Responsive across all devices",
      "Optimized performance"
    ]
  }
];

export const projectCategories = [
  {
    id: 'Full-Stack',
    name: 'Full-Stack Applications',
    description: 'End-to-end solutions with frontend, backend, and database integration',
    color: 'blue',
    count: projectsData.filter(p => p.category === 'Full-Stack').length
  },
  {
    id: 'Mobile',
    name: 'Mobile Applications',
    description: 'Cross-platform and native mobile apps for iOS and Android',
    color: 'green',
    count: projectsData.filter(p => p.category === 'Mobile').length
  },
  {
    id: 'Web App',
    name: 'Web Applications',
    description: 'Interactive web platforms with modern frontend technologies',
    color: 'purple',
    count: projectsData.filter(p => p.category === 'Web App').length
  },
  {
    id: 'Portfolio',
    name: 'Portfolio Projects',
    description: 'Showcase websites and personal branding projects',
    color: 'pink',
    count: projectsData.filter(p => p.category === 'Portfolio').length
  }
];

export const projectsPageData = {
  title: "Project Categories",
  titleKeywords: ['Project', 'Categories'],
  description: "A diverse portfolio showcasing full-stack web applications and mobile solutions. Each project demonstrates different technologies and problem-solving approaches.",
  descriptionKeywords: ['portfolio', 'full-stack', 'web applications', 'mobile', 'technologies', 'problem-solving'],
  ctaTitle: "Let's Build Something Together",
  ctaDescription: "Interested in collaborating or have a project in mind? I'd love to hear from you."
};

export const featuredProjects = projectsData.filter(project => project.featured);
export const getProjectsByCategory = (category) => {
  if (category === 'All') return projectsData;
  return projectsData.filter(project => project.category === category);
};
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};