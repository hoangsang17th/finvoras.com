import { resumeData } from "../data/resume";
import { Experience, Project, SkillCategory, Statistic } from "../types/resume";

// Personal Info utilities
export const getPersonalInfo = () => resumeData.personalInfo;
export const getNavigation = () => {
    return [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];
};

export const formatPhoneNumber = (phone: string): string => {
    // Remove all non-digit characters except +
    const cleaned = phone.replace(/[^\d+]/g, '');

    // If it starts with +, format it accordingly
    if (cleaned.startsWith('+')) {
        return cleaned.replace(/(\+\d{1,3})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4');
    }

    // For US numbers without country code
    if (cleaned.length === 10) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }

    // Return original if can't format
    return phone;
};

export const getSocialLinks = () => resumeData.socialLinks;
export const getStatistics = () => resumeData.statistics;

// Experience utilities
export const getAllExperiences = (): Experience[] => resumeData.experiences;
export const getFeaturedExperiences = (): Experience[] =>
    resumeData.experiences.filter(exp => exp.featured);
export const getExperienceById = (id: string): Experience | undefined =>
    resumeData.experiences.find(exp => exp.id === id);

// Skills utilities
export const getAllSkillCategories = (): SkillCategory[] => resumeData.skillCategories;
export const getSkillsByCategory = (category: string): SkillCategory | undefined =>
    resumeData.skillCategories.find(cat => cat.title.toLowerCase() === category.toLowerCase());
export const getAdditionalSkills = (): string[] => resumeData.additionalSkills;

// Projects utilities
export const getAllProjects = (): Project[] => resumeData.projects;
export const getFeaturedProjects = (): Project[] =>
    resumeData.projects.filter(project => project.featured);
export const getProjectsByStatus = (status: Project["status"]): Project[] =>
    resumeData.projects.filter(project => project.status === status);
export const getProjectsByCategory = (category: string): Project[] =>
    resumeData.projects.filter(project => project.category?.toLowerCase() === category.toLowerCase());
export const getProjectById = (id: string): Project | undefined =>
    resumeData.projects.find(project => project.id === id);
export const getRecentProjects = (limit: number = 6): Project[] =>
    resumeData.projects
        .sort((a, b) => parseInt(b.year) - parseInt(a.year))
        .slice(0, limit);

// Education utilities (optional)
export const getEducation = () => resumeData.education || [];
export const getCertifications = () => resumeData.certifications || [];

// Search utilities
export const searchProjects = (query: string): Project[] => {
    const searchTerm = query.toLowerCase();
    return resumeData.projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
        project.category?.toLowerCase().includes(searchTerm)
    );
};

export const getProjectsByTechnology = (technology: string): Project[] => {
    return resumeData.projects.filter(project =>
        project.technologies.some(tech =>
            tech.toLowerCase().includes(technology.toLowerCase())
        )
    );
};

// Analytics utilities
export const getTotalYearsExperience = (): number => {
    // Calculate based on earliest start date to present
    const currentYear = new Date().getFullYear();
    const startYear = Math.min(...resumeData.experiences.map(exp => {
        const yearString = exp.period.split(' - ')[0];
        const year = yearString ? parseInt(yearString) : currentYear;
        return isNaN(year) ? currentYear : year;
    }));
    return currentYear - startYear;
};

export const getTechnologiesUsed = (): string[] => {
    const allTechs = new Set<string>();

    // Add from experiences
    resumeData.experiences.forEach(exp => {
        exp.technologies.forEach(tech => allTechs.add(tech));
    });

    // Add from projects
    resumeData.projects.forEach(project => {
        project.technologies.forEach(tech => allTechs.add(tech));
    });

    // Add from skills
    resumeData.skillCategories.forEach(category => {
        category.skills.forEach(skill => allTechs.add(skill.name));
    });

    return Array.from(allTechs).sort();
};

export const getSkillLevel = (skillName: string): number | undefined => {
    for (const category of resumeData.skillCategories) {
        const skill = category.skills.find(s =>
            s.name.toLowerCase() === skillName.toLowerCase()
        );
        if (skill) return skill.level;
    }
    return undefined;
};

// Quick access helpers
export const getContactInfo = () => ({
    email: resumeData.personalInfo.email,
    phone: resumeData.personalInfo.phone,
    location: resumeData.personalInfo.location,
    social: resumeData.socialLinks,
});

export const getQuickStats = () => ({
    experience: getTotalYearsExperience(),
    projects: resumeData.projects.length,
    technologies: getTechnologiesUsed().length,
    skills: resumeData.skillCategories.reduce((total, cat) => total + cat.skills.length, 0),
});