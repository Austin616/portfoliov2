export const experienceData = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Meta",
    companyLogo: "/images/companies/meta.png",
    location: "Austin, TX",
    startDate: "2024-06",
    endDate: "2024-08",
    current: false,
    description: "Worked on the Instagram Reels recommendation system, improving user engagement metrics by 15%. Collaborated with cross-functional teams to implement machine learning models.",
    technologies: ["Python", "PyTorch", "React", "GraphQL", "Hack"],
    achievements: [
      "Improved recommendation accuracy by 12%",
      "Reduced model inference time by 25%",
      "Mentored 2 new interns on ML best practices",
      "Presented findings to senior leadership"
    ],
    type: "internship"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Austin Tech Startup",
    companyLogo: "/images/companies/startup.png",
    location: "Austin, TX",
    startDate: "2024-01",
    endDate: "2024-05",
    current: false,
    description: "Led development of a fintech application serving 10K+ users. Built scalable backend APIs and responsive frontend interfaces.",
    technologies: ["Node.js", "React", "PostgreSQL", "AWS", "Docker"],
    achievements: [
      "Architected microservices handling 1M+ requests/day",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Built real-time payment processing system",
      "Optimized database queries improving response time by 40%"
    ],
    type: "job"
  },
  {
    id: 3,
    title: "Teaching Assistant - CS 311",
    company: "UT Austin",
    companyLogo: "/images/companies/ut-austin.png",
    location: "Austin, TX",
    startDate: "2023-08",
    endDate: null,
    current: true,
    description: "Teaching Assistant for Computer Organization and Architecture. Hold office hours, grade assignments, and assist with lab sessions for 200+ students.",
    technologies: ["C", "Assembly", "Digital Logic", "Computer Architecture"],
    achievements: [
      "Maintained 4.8/5 student evaluation rating",
      "Created interactive learning materials",
      "Improved student pass rate by 15%",
      "Led weekly review sessions"
    ],
    type: "teaching"
  },
  {
    id: 4,
    title: "Web Development Intern",
    company: "Dell Technologies",
    companyLogo: "/images/companies/dell.png",
    location: "Round Rock, TX",
    startDate: "2023-06",
    endDate: "2023-08",
    current: false,
    description: "Developed internal tools and customer-facing web applications. Worked with senior developers to modernize legacy systems.",
    technologies: ["JavaScript", "Vue.js", "Spring Boot", "MySQL", "Jenkins"],
    achievements: [
      "Migrated 3 legacy applications to modern frameworks",
      "Reduced page load times by 50%",
      "Implemented automated testing suite",
      "Collaborated with UX team on design improvements"
    ],
    type: "internship"
  },
  {
    id: 5,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    companyLogo: "/images/companies/freelance.png",
    location: "Austin, TX",
    startDate: "2022-09",
    endDate: "2023-05",
    current: false,
    description: "Built custom websites and web applications for local businesses. Managed client relationships and project timelines.",
    technologies: ["React", "WordPress", "Shopify", "Firebase", "Stripe"],
    achievements: [
      "Completed 15+ client projects",
      "Generated $25K+ in revenue",
      "Maintained 100% client satisfaction rate",
      "Built e-commerce solutions processing $100K+ sales"
    ],
    type: "freelance"
  }
];

export const experienceTypes = {
  internship: { name: "Internships", color: "blue" },
  job: { name: "Full-time", color: "green" },
  teaching: { name: "Teaching", color: "purple" },
  freelance: { name: "Freelance", color: "orange" }
};

export const currentExperience = experienceData.filter(exp => exp.current);
export const pastExperience = experienceData.filter(exp => !exp.current);