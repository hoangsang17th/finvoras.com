import { PersonalInfo, Skill, Project, Experience, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Hoàng Sang",
  title: "Full Stack Developer",
  description: "Passionate developer with expertise in React, Next.js, and Node.js. I love creating beautiful and functional web applications that solve real-world problems.",
  email: "hoangsang@example.com",
  phone: "+84 123 456 789",
  location: "Ho Chi Minh City, Vietnam",
  linkedin: "https://linkedin.com/in/hoangsang",
  github: "https://github.com/hoangsang17th",
  website: "https://hoangsang.dev"
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: "Expert" },
  { name: "Next.js", category: "Frontend", level: "Advanced" },
  { name: "TypeScript", category: "Frontend", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  { name: "Vue.js", category: "Frontend", level: "Intermediate" },

  // Backend
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "Express.js", category: "Backend", level: "Advanced" },
  { name: "Python", category: "Backend", level: "Intermediate" },
  { name: "NestJS", category: "Backend", level: "Intermediate" },

  // Database
  { name: "MongoDB", category: "Database", level: "Advanced" },
  { name: "PostgreSQL", category: "Database", level: "Intermediate" },
  { name: "Redis", category: "Database", level: "Intermediate" },

  // DevOps & Tools
  { name: "Docker", category: "DevOps", level: "Intermediate" },
  { name: "AWS", category: "DevOps", level: "Intermediate" },
  { name: "Git", category: "Tools", level: "Advanced" },
  { name: "VS Code", category: "Tools", level: "Expert" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Finvoras UI Library",
    description: "A comprehensive React UI component library built with TypeScript, Tailwind CSS, and Radix UI. Features modern design, accessibility, and full TypeScript support.",
    image: "/projects/finvoras-ui.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/hoangsang17th/finvoras-ui",
    featured: true
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js, featuring responsive design, smooth animations, and optimized performance.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demo: "https://hoangsang.dev",
    featured: true
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
    image: "/projects/ecommerce.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/hoangsang17th/ecommerce",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Startup",
    position: "Senior Full Stack Developer",
    period: "2023 - Present",
    description: [
      "Led development of React-based web applications serving 10k+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with cross-functional teams to deliver features on time"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
  },
  {
    id: "2",
    company: "Digital Agency",
    position: "Frontend Developer",
    period: "2021 - 2023",
    description: [
      "Developed responsive websites for various clients",
      "Optimized application performance and SEO",
      "Integrated third-party APIs and services",
      "Maintained and updated existing codebases"
    ],
    technologies: ["React", "Vue.js", "JavaScript", "CSS", "WordPress"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Technology",
    degree: "Bachelor of Computer Science",
    period: "2018 - 2022",
    description: "Focused on software engineering, data structures, and algorithms"
  }
];