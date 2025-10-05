"use client";

// Portfolio i18n implementation using shared i18n system
import React from 'react';
import { I18nProvider as SharedI18nProvider, useI18n as useSharedI18n } from '@repo/i18n';
import { portfolioTranslations, type UITranslations, type ResumeData } from './translations';

type Locale = 'en' | 'vi';

// Transform portfolio translations to shared i18n format
const transformedTranslations = {
    en: {
        ...portfolioTranslations.en!.ui,
        resumeData: portfolioTranslations.en!.getLocalizedResumeData('en')
    },
    vi: {
        ...portfolioTranslations.vi!.ui,
        resumeData: portfolioTranslations.vi!.getLocalizedResumeData('vi')
    }
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
    return (
        <SharedI18nProvider
            translations={transformedTranslations}
            defaultLocale="en"
            supportedLocales={['en', 'vi']}
            storageKey="portfolio-locale"
        >
            {children}
        </SharedI18nProvider>
    );
}

// Custom hook that provides portfolio-specific data structure
export function useI18n() {
    const { locale, setLocale, t } = useSharedI18n<any>();

    return {
        locale: locale as Locale,
        setLocale,
        ui: t as UITranslations,
        resumeData: t.resumeData as ResumeData
    };
}

// Compatibility alias for existing code
export const useLanguage = useI18n;