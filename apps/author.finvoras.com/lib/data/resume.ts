import {
    ResumeData,
    PersonalInfo,
    SocialLinks,
    Experience,
    Skill,
    Project,
    Statistic
} from "../types/resume";

export const resumeData: ResumeData = {
    personalInfo: {
        name: "Hoang Sang",
        title: "Full Stack Developer & UI/UX Designer",
        bio: "Passionate full-stack developer with 5+ years of experience creating beautiful, functional web applications. I love turning complex problems into simple, elegant solutions.",
        location: "Ho Chi Minh City, Vietnam",
        email: "contact@hoangsang.dev",
        phone: "+84 123 456 789",
        website: "https://author.finvoras.com",
        avatar: "/avatar.jpg",
        status: "Available for freelance work",
        availability: true,
        resumeUrl: "/resume.pdf"
    },

    socialLinks: {
        github: "https://github.com/hoangsang17th",
        linkedin: "https://linkedin.com/in/hoangsang",
        twitter: "https://twitter.com/hoangsang",
        email: "contact@example.com",
        resume: "/resume.pdf",
    },

    statistics: [
        { label: "Years Experience", value: "3+", description: "Professional software development" },
        { label: "Projects Completed", value: "20+", description: "Successful project deliveries" },
        { label: "Technologies Used", value: "10+", description: "Modern tech stack" },
        { label: "Commitment", value: "100%", description: "Dedication to quality" },
    ],

    experiences: [
        {
            id: "exp-1",
            title: "Senior Software Engineer",
            company: "Tech Solutions Inc.",
            location: "Ho Chi Minh City, Vietnam",
            period: "2023 - Present",
            type: "Full-time",
            description: [
                "Led development of microservices architecture serving 100k+ users",
                "Implemented CI/CD pipelines reducing deployment time by 60%",
                "Mentored junior developers and conducted code reviews",
                "Collaborated with cross-functional teams to deliver high-quality products"
            ],
            technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
            featured: true,
        },
        {
            id: "exp-2",
            title: "Full-Stack Developer",
            company: "Digital Agency Co.",
            location: "Ho Chi Minh City, Vietnam",
            period: "2022 - 2023",
            type: "Full-time",
            description: [
                "Developed responsive web applications using React and Next.js",
                "Built RESTful APIs with Node.js and Express.js",
                "Integrated third-party services and payment gateways",
                "Optimized application performance and SEO"
            ],
            technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Vercel"],
            featured: true,
        },
        {
            id: "exp-3",
            title: "Frontend Developer",
            company: "Startup Hub",
            location: "Ho Chi Minh City, Vietnam",
            period: "2021 - 2022",
            type: "Full-time",
            description: [
                "Created modern user interfaces with React and TypeScript",
                "Implemented responsive designs and cross-browser compatibility",
                "Worked closely with UX/UI designers to bring designs to life",
                "Participated in agile development processes"
            ],
            technologies: ["React", "TypeScript", "SASS", "Material-UI", "Git", "Figma"],
        },
        {
            id: "exp-4",
            title: "Junior Web Developer",
            company: "Local Web Agency",
            location: "Ho Chi Minh City, Vietnam",
            period: "2020 - 2021",
            type: "Full-time",
            description: [
                "Developed websites using HTML, CSS, and JavaScript",
                "Learned React.js and modern development practices",
                "Assisted senior developers in project delivery",
                "Gained experience in version control and team collaboration"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress", "Git"],
        },
    ],

    skillCategories: [
        {
            title: "Frontend",
            icon: "🎨",
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "TypeScript", level: 88 },
                { name: "JavaScript", level: 92 },
                { name: "HTML/CSS", level: 95 },
                { name: "Tailwind CSS", level: 85 },
                { name: "SASS/SCSS", level: 80 },
                { name: "Responsive Design", level: 90 }
            ]
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: [
                { name: "Node.js", level: 88 },
                { name: "Express.js", level: 85 },
                { name: "Python", level: 75 },
                { name: "REST APIs", level: 90 },
                { name: "GraphQL", level: 70 },
                { name: "Microservices", level: 80 },
                { name: "Authentication", level: 85 },
                { name: "API Design", level: 88 }
            ]
        },
        {
            title: "Database",
            icon: "🗄️",
            skills: [
                { name: "PostgreSQL", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "MySQL", level: 75 },
                { name: "Redis", level: 70 },
                { name: "Database Design", level: 82 },
                { name: "Query Optimization", level: 75 },
                { name: "Data Modeling", level: 80 },
                { name: "NoSQL", level: 78 }
            ]
        },
        {
            title: "DevOps & Tools",
            icon: "🚀",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 80 },
                { name: "AWS", level: 75 },
                { name: "CI/CD", level: 82 },
                { name: "Linux", level: 78 },
                { name: "Nginx", level: 70 },
                { name: "Monitoring", level: 72 },
                { name: "Testing", level: 85 }
            ]
        }
    ],

    projects: [
        {
            id: "proj-1",
            title: "Finvoras - Personal Finance Platform",
            description: "A comprehensive personal finance management platform helping users track expenses, manage budgets, and build wealth with personalized insights.",
            image: "/projects/finvoras.jpg",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
            features: [
                "Expense tracking and categorization",
                "Budget planning and management",
                "Financial insights and analytics",
                "Educational content and resources"
            ],
            liveUrl: "https://finvoras.com",
            githubUrl: "https://github.com/hoangsang17th/finvoras",
            status: "Live",
            year: "2024",
            featured: true,
            category: "Web Application"
        },
        {
            id: "proj-2",
            title: "E-Commerce Dashboard",
            description: "Admin dashboard for e-commerce platform with real-time analytics, inventory management, and sales tracking.",
            image: "/projects/dashboard.jpg",
            technologies: ["React", "TypeScript", "Chart.js", "Express.js", "MongoDB"],
            features: [
                "Real-time sales analytics",
                "Inventory management system",
                "Customer data visualization",
                "Revenue tracking and reporting"
            ],
            liveUrl: "https://dashboard-demo.com",
            githubUrl: "https://github.com/hoangsang17th/ecommerce-dashboard",
            status: "Live",
            year: "2023",
            featured: true,
            category: "Dashboard"
        },
        {
            id: "proj-3",
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking.",
            image: "/projects/taskapp.jpg",
            technologies: ["React", "Socket.io", "Node.js", "Express.js", "MongoDB"],
            features: [
                "Real-time collaboration",
                "Project and task organization",
                "Team member management",
                "Progress tracking and reporting"
            ],
            liveUrl: "https://taskapp-demo.com",
            githubUrl: "https://github.com/hoangsang17th/task-management",
            status: "Live",
            year: "2023",
            category: "Web Application"
        },
        {
            id: "proj-4",
            title: "Weather Forecast App",
            description: "Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
            image: "/projects/weather.jpg",
            technologies: ["React", "TypeScript", "Weather API", "Mapbox", "Tailwind CSS"],
            features: [
                "Current weather conditions",
                "7-day weather forecast",
                "Interactive weather maps",
                "Location-based alerts"
            ],
            liveUrl: "https://weather-app-demo.com",
            githubUrl: "https://github.com/hoangsang17th/weather-app",
            status: "Live",
            year: "2022",
            category: "Mobile App"
        },
        {
            id: "proj-5",
            title: "AI Chat Application",
            description: "Intelligent chat application powered by AI with natural language processing and context-aware responses.",
            image: "/projects/ai-chat.jpg",
            technologies: ["Next.js", "OpenAI API", "TypeScript", "Prisma", "PostgreSQL"],
            features: [
                "AI-powered conversations",
                "Context-aware responses",
                "Chat history management",
                "Customizable AI personas"
            ],
            githubUrl: "https://github.com/hoangsang17th/ai-chat",
            status: "In Development",
            year: "2024",
            featured: true,
            category: "AI Application"
        },
        {
            id: "proj-6",
            title: "Portfolio Website",
            description: "Personal portfolio website showcasing projects, skills, and professional experience with modern design.",
            image: "/projects/portfolio.jpg",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            features: [
                "Responsive design",
                "Dark/light mode toggle",
                "Smooth animations",
                "SEO optimized"
            ],
            liveUrl: "https://author.finvoras.com",
            githubUrl: "https://github.com/hoangsang17th/portfolio",
            status: "Live",
            year: "2024",
            category: "Portfolio"
        }
    ],

    additionalSkills: [
        "Agile/Scrum", "Project Management", "Team Leadership", "Code Review",
        "Performance Optimization", "Security", "UI/UX Design", "Problem Solving",
        "Communication", "Mentoring", "Technical Writing", "Open Source"
    ],

    education: [
        {
            id: "edu-1",
            institution: "Ho Chi Minh City University of Technology",
            degree: "Bachelor of Science",
            field: "Computer Science",
            location: "Ho Chi Minh City, Vietnam",
            period: "2016 - 2020",
            gpa: "3.8/4.0",
            achievements: [
                "Graduated with honors",
                "President of Computer Science Club",
                "Winner of Programming Contest 2019"
            ]
        }
    ],

    certifications: [
        {
            id: "cert-1",
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2023",
            credentialId: "AWS-12345",
            url: "https://aws.amazon.com/certification/"
        },
        {
            id: "cert-2",
            name: "React Developer Certification",
            issuer: "Meta",
            date: "2022",
            credentialId: "META-67890",
            url: "https://developers.facebook.com/certification/"
        }
    ]
};