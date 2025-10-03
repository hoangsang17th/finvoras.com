import { ResumeData } from "../types/resume";

// Dữ liệu cá nhân có thể thay đổi ngôn ngữ
const personalContent = {
    en: {
        title: "Full Stack Developer & UI/UX Designer",
        bio: "Passionate full-stack developer with 5+ years of experience creating beautiful, functional web applications. I love turning complex problems into simple, elegant solutions.",
        status: "Available for freelance work"
    },
    vi: {
        title: "Full Stack Developer & UI/UX Designer",
        bio: "Lập trình viên full-stack đam mê với hơn 5 năm kinh nghiệm tạo ra các ứng dụng web đẹp và hiệu quả. Tôi thích biến những vấn đề phức tạp thành các giải pháp đơn giản và tinh tế.",
        status: "Sẵn sàng nhận freelance"
    }
};

const statisticsContent = {
    en: [
        { label: "Years Experience", value: "3+", description: "Professional software development" },
        { label: "Projects Completed", value: "20+", description: "Successful project deliveries" },
        { label: "Technologies Used", value: "10+", description: "Modern tech stack" },
        { label: "Commitment", value: "100%", description: "Dedication to quality" },
    ],
    vi: [
        { label: "Năm Kinh Nghiệm", value: "3+", description: "Phát triển phần mềm chuyên nghiệp" },
        { label: "Dự Án Hoàn Thành", value: "20+", description: "Giao hàng dự án thành công" },
        { label: "Công Nghệ Sử Dụng", value: "10+", description: "Stack công nghệ hiện đại" },
        { label: "Cam Kết", value: "100%", description: "Cống hiến cho chất lượng" },
    ]
};

// Dữ liệu tĩnh không cần đa ngôn ngữ (hoặc ít thay đổi)
export const staticResumeData = {
    personalInfo: {
        name: "Hoang Sang",
        location: "Ho Chi Minh City, Vietnam",
        email: "contact@hoangsang.dev",
        phone: "+84 123 456 789",
        website: "https://phamhoangsang.finvoras.com",
        avatar: "/avatar.jpg",
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

    experiences: [
        {
            id: "exp-1",
            title: "Senior Software Engineer",
            company: "Tech Solutions Inc.",
            location: "Ho Chi Minh City, Vietnam",
            period: "2023 - Present",
            type: "Full-time" as const,
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
            type: "Full-time" as const,
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
            type: "Full-time" as const,
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
            type: "Full-time" as const,
            description: [
                "Developed websites using HTML, CSS, and JavaScript",
                "Learned React.js and modern development practices",
                "Assisted senior developers in project delivery",
                "Gained experience in version control and team collaboration"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git"],
        }
    ],

    skillCategories: [
        {
            title: "Frontend",
            icon: "🎨",
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 88 },
                { name: "TypeScript", level: 85 },
                { name: "JavaScript", level: 92 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "Tailwind CSS", level: 88 },
                { name: "SASS/SCSS", level: 85 }
            ]
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: [
                { name: "Node.js", level: 88 },
                { name: "Express.js", level: 85 },
                { name: "Python", level: 80 },
                { name: "PHP", level: 75 },
                { name: "RESTful APIs", level: 90 },
                { name: "GraphQL", level: 78 },
                { name: "Microservices", level: 82 },
                { name: "Authentication", level: 85 }
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
            status: "Live" as const,
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
            status: "Live" as const,
            year: "2023",
            featured: true,
            category: "Dashboard"
        },
        {
            id: "proj-3",
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
            image: "/projects/taskapp.jpg",
            technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Material-UI"],
            features: [
                "Real-time collaboration",
                "Task assignment and tracking",
                "Team communication tools",
                "Progress visualization"
            ],
            liveUrl: "https://taskapp-demo.com",
            githubUrl: "https://github.com/hoangsang17th/task-management",
            status: "Live" as const,
            year: "2023",
            featured: false,
            category: "Web Application"
        }
    ],

    additionalSkills: [
        "Problem Solving",
        "Team Leadership",
        "Project Management",
        "UI/UX Design",
        "Technical Writing",
        "Code Review",
        "Mentoring",
        "Agile/Scrum"
    ]
};

// Function để lấy data theo ngôn ngữ
export const getLocalizedResumeData = (locale: 'en' | 'vi'): ResumeData => {
    return {
        personalInfo: {
            ...staticResumeData.personalInfo,
            title: personalContent[locale].title,
            bio: personalContent[locale].bio,
            status: personalContent[locale].status
        },
        socialLinks: staticResumeData.socialLinks,
        statistics: statisticsContent[locale],
        experiences: staticResumeData.experiences,
        skillCategories: staticResumeData.skillCategories,
        projects: staticResumeData.projects,
        additionalSkills: staticResumeData.additionalSkills
    };
};

// Export default cho backward compatibility
export const resumeData = getLocalizedResumeData('en');