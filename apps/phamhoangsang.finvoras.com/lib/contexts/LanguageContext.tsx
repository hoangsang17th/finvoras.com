"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { uiTranslations } from '../data/ui-translations';
import { getLocalizedResumeData } from '../data/resume';
import type { UITranslations, ResumeData } from '../types/resume';

type Locale = 'en' | 'vi';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  ui: UITranslations;
  resumeData: ResumeData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    // Get locale from cookie or browser preference
    const savedLocale = Cookies.get('locale') as Locale;
    const browserLocale = navigator.language.startsWith('vi') ? 'vi' : 'en';
    const initialLocale = savedLocale || browserLocale;
    setLocaleState(initialLocale);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    Cookies.set('locale', newLocale, { expires: 365 });
  };

  const ui = uiTranslations[locale];
  const resumeData = getLocalizedResumeData(locale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, ui, resumeData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}