import { Globe, Code2, Smartphone, Database, Cloud, Wrench } from 'lucide-react';

export const skillCategories = [
  {
    id: 'programming',
    name: 'Programming Languages',
    description: 'Programming languages and tools that I use across all projects',
    icon: Globe,
    color: 'blue',
    items: [
      {
        title: 'Python',
        description: 'High-level interpreted language known for its simplicity and readability. Excellent for data analysis, machine learning, automation, and web development.',
        link: 'https://python.org',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
        title: 'Java',
        description: 'Object-oriented, platform-independent language that runs on the Java Virtual Machine. Popular for enterprise applications and Android development.',
        link: 'https://java.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
      },
      {
        title: 'C++',
        description: 'Low-level systems programming language with object-oriented features. Offers fine control over memory and hardware for performance-critical applications.',
        link: 'https://cplusplus.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
      },
      {
        title: 'C',
        description: 'Foundational procedural programming language that provides direct hardware access. Essential for system programming and embedded development.',
        link: 'https://c.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
      },
      {
        title: 'JavaScript',
        description: 'Dynamic scripting language that powers interactive web experiences. Runs in browsers and on servers, enabling full-stack development.',
        link: 'https://javascript.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      },
      {
        title: 'TypeScript',
        description: 'JavaScript superset that adds static type checking. Enhances code reliability and developer productivity in large-scale applications.',
        link: 'https://typescriptlang.org',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      {
        title: 'HTML',
        description: 'Markup language that structures web content. Defines the semantic foundation and layout of web pages using tags and elements.',
        link: 'https://html.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      {
        title: 'CSS',
        description: 'Stylesheet language that controls visual presentation of web pages. Handles layout, colors, fonts, and responsive design.',
        link: 'https://css.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      },
      {
        title: 'SQL',
        description: 'Declarative language for managing relational databases. Used for querying, updating, and manipulating structured data efficiently.',
        link: 'https://sql.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Modern web development with React ecosystem and responsive design',
    icon: Globe,
    color: 'blue',
    items: [
      {
        title: 'React & Next.js',
        description: 'Advanced React patterns, SSR, and modern hooks. Built 10+ production apps with Next.js 13+ features.',
        link: 'https://react.dev',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        title: 'TypeScript & JavaScript',
        description: 'Type-safe development with advanced TypeScript patterns. ES6+ features and modern JS paradigms.',
        link: 'https://www.typescriptlang.org',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      {
        title: 'Tailwind CSS & Styling',
        description: 'Utility-first CSS framework mastery. Custom design systems and responsive layouts.',
        link: 'https://tailwindcss.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
      },
      {
        title: 'Framer Motion',
        description: 'Advanced animations and micro-interactions. Creating smooth, performant UI animations.',
        link: 'https://www.framer.com/motion',
        icon: 'https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png'
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Systems',
    description: 'Scalable server-side development and API architecture',
    icon: Code2,
    color: 'purple',
    items: [
      {
        title: 'Node.js & Express',
        description: 'RESTful APIs, middleware architecture, and scalable backend systems with Express.js.',
        link: 'https://nodejs.org',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
        title: 'Python & Flask',
        description: 'High-performance APIs with Flask. Data processing and automation scripts.',
        link: 'https://flask.palletsprojects.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
        title: 'Next.js',
        description: 'Next.js is a framework for building server-side rendered React applications.',
        link: 'https://nextjs.org',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Cross-platform mobile apps with native performance',
    icon: Smartphone,
    color: 'green',
    items: [
      {
        title: 'React Native',
        description: 'Cross-platform mobile development. Navigation, state management, and native modules.',
        link: 'https://reactnative.dev',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        title: 'Expo Development',
        description: 'Rapid mobile app development with Expo SDK. OTA updates and deployment.',
        link: 'https://expo.dev',
        icon: 'https://images.seeklogo.com/logo-png/45/1/expo-go-app-logo-png_seeklogo-457073.png'
      },
      {
        title: 'iOS Development',
        description: 'Native iOS development with Swift. UIKit and SwiftUI experience.',
        link: 'https://developer.apple.com/swift',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
      },
      {
        title: 'NativeWind',
        description: 'NativeWind is a library that allows you to write styles in JavaScript and apply them to your components.',
        link: 'https://nativewind.dev',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
      }
    ]
  },
  {
    id: 'database',
    name: 'Database & Storage',
    description: 'Data modeling, optimization, and scalable storage solutions',
    icon: Database,
    color: 'orange',
    items: [
      {
        title: 'PostgreSQL',
        description: 'Advanced SQL queries, indexing, and database optimization. Complex relational designs.',
        link: 'https://postgresql.org',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
      {
        title: 'MongoDB',
        description: 'Document-based databases, aggregation pipelines, and schema design.',
        link: 'https://mongodb.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      {
        title: 'Supabase',
        description: 'Supabase is a modern, open-source database that allows you to build web and mobile applications without managing infrastructure.',
        link: 'https://supabase.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg'
      },
      {
        title: 'Firebase',
        description: 'Firebase is a backend as a service that allows you to build web and mobile applications without managing infrastructure.',
        link: 'https://firebase.google.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
      },
      {
        title: 'SQLite',
        description: 'SQLite is a relational database management system that allows you to build web and mobile applications without managing infrastructure.',
        link: 'https://sqlite.org',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'
      },
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Infrastructure, deployment, and scalable cloud solutions',
    icon: Cloud,
    color: 'cyan',
    items: [
      {
        title: 'AWS Services',
        description: 'EC2, S3, RDS, Lambda serverless functions. Infrastructure as Code with CDK.',
        link: 'https://aws.amazon.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
      },
      {
        title: 'Vercel & Deployment',
        description: 'Seamless deployment pipelines, edge functions, and performance optimization.',
        link: 'https://vercel.com',
        icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png'
      },
      {
        title: 'Docker & Containers',
        description: 'Containerization, multi-stage builds, and orchestration with Docker Compose.',
        link: 'https://docker.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      {
        title: 'CI/CD Pipelines',
        description: 'Automated testing and deployment with GitHub Actions. Quality gates and workflows.',
        link: 'https://github.com/features/actions',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    description: 'Development tools, version control, and productivity systems',
    icon: Wrench,
    color: 'pink',
    items: [
      {
        title: 'Git & Version Control',
        description: 'Advanced Git workflows, branching strategies, and collaborative development.',
        link: 'https://git-scm.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      },
      {
        title: 'VS Code & IDEs',
        description: 'Customized development environment, extensions, and productivity workflows.',
        link: 'https://code.visualstudio.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
      },
      {
        title: 'Figma & Design',
        description: 'UI/UX design, prototyping, and design system creation. Developer handoff processes.',
        link: 'https://figma.com',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
      },
      {
        title: 'Testing & Quality',
        description: 'Unit testing with Jest, integration testing, and quality assurance practices.',
        link: 'https://jestjs.io',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
      },
      {
        title: 'Chrome Extensions',
        description: 'Building browser extensions using the Chrome Extension API. Creating tools and utilities that enhance web browsing experience.',
        link: 'https://developer.chrome.com/docs/extensions',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg'
      }
    ]
  }
];

export const skillsPageData = {
  title: "Skill Categories",
  titleKeywords: ['Skill', 'Categories'],
  description: "Organized by technology stack and development focus areas. Here's my technical expertise across the full development lifecycle.",
  descriptionKeywords: ['technology', 'stack', 'development', 'technical', 'expertise', 'lifecycle'],
  ctaText: "Let's build something amazing together! 🚀",
  ctaKeywords: []
};

export const getSkillsCategories = () => skillCategories;

export const getSkillsByCategory = (categoryId) => {
  if (categoryId === 'all') return skillCategories;
  return skillCategories.filter(cat => cat.id === categoryId);
};

export const getAllSkills = () => {
  return skillCategories.flatMap(cat => cat.items);
};

export const getSkillsStats = () => {
  const allItems = getAllSkills();
  const avgLevel = Math.round(allItems.reduce((sum, item) => sum + item.level, 0) / allItems.length);
  return {
    totalSkills: allItems.length,
    categories: skillCategories.length,
    avgProficiency: avgLevel
  };
};