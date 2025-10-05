"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './data/translations';
import type { Translations } from './types/translations';

type Locale = 'en' | 'vi';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Get locale from localStorage or browser preference
    const savedLocale = localStorage.getItem('locale') as Locale;
    const browserLocale = navigator.language.startsWith('vi') ? 'vi' : 'en';
    const initialLocale = savedLocale || browserLocale;
    setLocaleState(initialLocale);
    setIsHydrated(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // Always provide translations, default to 'en' if not hydrated yet
  const t = translations[locale] || translations['en'];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}