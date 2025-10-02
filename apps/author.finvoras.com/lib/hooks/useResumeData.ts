"use client";

import { useState, useEffect } from "react";
import {
    getPersonalInfo,
    getSocialLinks,
    getStatistics,
    getAllExperiences,
    getFeaturedExperiences,
    getAllSkillCategories,
    getAllProjects,
    getFeaturedProjects,
    getContactInfo,
    getQuickStats
} from "../utils/resume-data";
import type { PersonalInfo, SocialLinks, Experience, SkillCategory, Project, Statistic } from "../types/resume";

// Hook for personal information
export const usePersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

    useEffect(() => {
        setPersonalInfo(getPersonalInfo());
    }, []);

    return personalInfo;
};

// Hook for social links
export const useSocialLinks = () => {
    const [socialLinks, setSocialLinks] = useState<SocialLinks | null>(null);

    useEffect(() => {
        setSocialLinks(getSocialLinks());
    }, []);

    return socialLinks;
};

// Hook for statistics
export const useStatistics = () => {
    const [statistics, setStatistics] = useState<Statistic[]>([]);

    useEffect(() => {
        setStatistics(getStatistics());
    }, []);

    return statistics;
};

// Hook for experiences
export const useExperiences = (featuredOnly: boolean = false) => {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        const data = featuredOnly ? getFeaturedExperiences() : getAllExperiences();
        setExperiences(data);
    }, [featuredOnly]);

    return experiences;
};

// Hook for skills
export const useSkills = () => {
    const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);

    useEffect(() => {
        setSkillCategories(getAllSkillCategories());
    }, []);

    return skillCategories;
};

// Hook for projects
export const useProjects = (featuredOnly: boolean = false) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const data = featuredOnly ? getFeaturedProjects() : getAllProjects();
        setProjects(data);
    }, [featuredOnly]);

    return projects;
};

// Hook for contact information
export const useContactInfo = () => {
    const [contactInfo, setContactInfo] = useState<any>(null);

    useEffect(() => {
        setContactInfo(getContactInfo());
    }, []);

    return contactInfo;
};

// Hook for quick stats
export const useQuickStats = () => {
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        setStats(getQuickStats());
    }, []);

    return stats;
};

// Combined hook for all resume data
export const useResumeData = () => {
    const personalInfo = usePersonalInfo();
    const socialLinks = useSocialLinks();
    const statistics = useStatistics();
    const experiences = useExperiences();
    const skills = useSkills();
    const projects = useProjects();
    const contactInfo = useContactInfo();
    const quickStats = useQuickStats();

    return {
        personalInfo,
        socialLinks,
        statistics,
        experiences,
        skills,
        projects,
        contactInfo,
        quickStats,
        isLoading: !personalInfo || !socialLinks // Simple loading state
    };
};