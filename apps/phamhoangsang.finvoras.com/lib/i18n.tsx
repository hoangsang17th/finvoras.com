"use client";

// Portfolio i18n implementation using shared i18n system

import {  useI18n as useSharedI18n } from '@repo/i18n';

type Locale = 'en' | 'vi';

// Transform portfolio translations to shared i18n format
export const transformedTranslations = {
    en: {
        ...uiTranslations.en,
        resumeData: getLocalizedResumeData('en')
    },
    vi: {
        ...uiTranslations.vi,
        resumeData: getLocalizedResumeData('vi')
    }
};


import { useRouter } from 'next/navigation';
import { uiTranslations } from './data/ui-translations';
import { getLocalizedResumeData } from './data/resume';
import { ResumeData, UITranslations } from './types/resume';

// Custom hook that provides portfolio-specific data structure
export function useI18n() {
    const { locale, setLocale: sharedSetLocale, t } = useSharedI18n<any>();
    const router = useRouter();

    const setLocale = (newLocale: Locale) => {
        sharedSetLocale(newLocale);
        // router.refresh() tells Next.js to re-fetch Server Components (including Metadata)
        // without a full page reload or losing client state.
        router.refresh();
    };

    return {
        locale: locale as Locale,
        setLocale,
        ui: t as UITranslations,
        resumeData: t.resumeData as ResumeData
    };
}

// Compatibility alias for existing code
export const useLanguage = useI18n;