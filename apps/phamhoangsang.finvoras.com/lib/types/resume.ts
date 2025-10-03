// Personal Information Types
export interface PersonalInfo {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    website?: string;
    avatar?: string;
    status: string;
    availability: boolean;
    resumeUrl?: string;
}

// Social Links Types
export interface SocialLinks {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
    resume?: string;
}

// Experience Types
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance";
    description: string[];
    technologies: string[];
    featured?: boolean;
}

// Skills Types
export interface Skill {
    name: string;
    level: number; // 0-100
}

export interface SkillCategory {
    title: string;
    icon: string;
    skills: Skill[];
}

// Project Types
export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    features: string[];
    liveUrl?: string;
    githubUrl?: string;
    status: "Live" | "In Development" | "Planned" | "Archived";
    year: string;
    featured?: boolean;
    category?: string;
}

// Statistics Types
export interface Statistic {
    label: string;
    value: string | number;
    description?: string;
}

// Education Types (optional)
export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    location: string;
    period: string;
    gpa?: string;
    achievements?: string[];
}

// Certification Types (optional)
export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    url?: string;
}

// Main Resume Data Type
export interface ResumeData {
    personalInfo: PersonalInfo;
    socialLinks: SocialLinks;
    statistics: Statistic[];
    experiences: Experience[];
    skillCategories: SkillCategory[];
    projects: Project[];
    education?: Education[];
    certifications?: Certification[];
    additionalSkills: string[];
}