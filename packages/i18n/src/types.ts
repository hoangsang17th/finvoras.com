export interface I18nConfig<T = Record<string, any>> {
  defaultLocale: string;
  supportedLocales: string[];
  storageKey?: string;
  translations: Record<string, T>;
}

export interface LanguageOption {
  code: string;
  name: string;
  flag?: string;
}

export interface I18nContextType<T = Record<string, any>> {
  locale: string;
  setLocale: (locale: string) => void;
  t: T;
  supportedLocales: string[];
}

export interface I18nProviderProps<T = Record<string, any>> {
  children: React.ReactNode;
  translations: Record<string, T>;
  defaultLocale: string;
  supportedLocales: string[];
  storageKey?: string;
}

export interface LanguageSwitcherProps {
  languages: LanguageOption[];
  className?: string;
  variant?: 'dropdown' | 'buttons' | 'switcher';
  showFlag?: boolean;
  showName?: boolean;
}