"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import type { I18nContextType, I18nProviderProps } from './types';
import { detectBrowserLanguage, getSavedLocale, saveLocale } from './utils';

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider<T = Record<string, any>>({
  children,
  translations,
  defaultLocale,
  supportedLocales,
  storageKey = 'locale'
}: I18nProviderProps<T>) {
  const [locale, setLocaleState] = useState<string>(defaultLocale);

  useEffect(() => {
    // Get locale from localStorage or browser preference
    const savedLocale = getSavedLocale(storageKey);
    const browserLocale = detectBrowserLanguage(supportedLocales);

    const initialLocale = savedLocale && supportedLocales.includes(savedLocale)
      ? savedLocale
      : browserLocale;

    setLocaleState(initialLocale);
  }, [supportedLocales, storageKey]);

  const setLocale = (newLocale: string) => {
    if (!supportedLocales.includes(newLocale)) {
      console.warn(`Locale "${newLocale}" is not supported. Supported locales: ${supportedLocales.join(', ')}`);
      return;
    }

    if (newLocale === locale) return;

    setLocaleState(newLocale);
    saveLocale(newLocale, storageKey);
  };

  const t = translations[locale] || translations[defaultLocale] || {} as T;

  const value: I18nContextType<T> = {
    locale,
    setLocale,
    t,
    supportedLocales
  };

  return (
    <I18nContext.Provider value={value as I18nContextType}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n<T = Record<string, any>>(): I18nContextType<T> {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context as I18nContextType<T>;
}