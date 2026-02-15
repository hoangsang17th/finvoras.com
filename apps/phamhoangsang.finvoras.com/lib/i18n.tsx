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


import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { uiTranslations } from './data/ui-translations';
import { getLocalizedResumeData } from './data/resume';
import { ResumeData, UITranslations } from './types/resume';

// Custom hook that provides portfolio-specific data structure
export function useI18n() {
    const { locale, setLocale: sharedSetLocale, t } = useSharedI18n<any>();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const setLocale = (newLocale: Locale) => {
        sharedSetLocale(newLocale);
        const path = pathname || '/';
        const segments = path.split('/').filter(Boolean);
        const hasLocalePrefix = segments.length > 0 && (segments[0] === 'en' || segments[0] === 'vi');
        const sectionPaths = new Set(['about', 'projects', 'experience', 'skills', 'contact']);

        if (hasLocalePrefix) {
            segments[0] = newLocale;
        } else {
            segments.unshift(newLocale);
        }

        const nextPath = `/${segments.join('/')}`;
        const query = searchParams?.toString();
        const url = query ? `${nextPath}?${query}` : nextPath;

        // Preserve scroll position only for root page; section pages will auto-scroll.
        const currentSection = hasLocalePrefix ? segments[1] : segments[0];
        if (!currentSection || !sectionPaths.has(currentSection)) {
            try {
                sessionStorage.setItem('scroll-restore', String(window.scrollY));
            } catch {
                // ignore storage errors
            }
        }

        router.push(url, { scroll: false });
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
