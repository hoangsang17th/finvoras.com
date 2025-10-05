// Portfolio translations using temporary implementation
import type { UITranslations, ResumeData } from './types/resume';

export interface PortfolioTranslations {
    ui: UITranslations;
    // We'll use the existing resume data structure
    getLocalizedResumeData: (locale: 'en' | 'vi') => ResumeData;
}

// Re-export existing translations with new structure
import { uiTranslations } from './data/ui-translations';
import { getLocalizedResumeData } from './data/resume';

export const portfolioTranslations: Record<string, PortfolioTranslations> = {
    en: {
        ui: uiTranslations.en,
        getLocalizedResumeData: (locale) => getLocalizedResumeData(locale),
    },
    vi: {
        ui: uiTranslations.vi,
        getLocalizedResumeData: (locale) => getLocalizedResumeData(locale),
    },
};

export type { UITranslations, ResumeData };