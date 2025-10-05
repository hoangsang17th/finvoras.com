# @repo/i18n

A reusable internationalization (i18n) package for React applications.

## Features

- 🌍 Multi-language support
- 🔒 TypeScript type safety
- 💾 Persistent language preference
- 🎯 Browser language detection
- 🎨 Ready-to-use UI components
- 📦 Zero external dependencies (except React)

## Installation

```bash
npm install @repo/i18n
```

## Usage

### 1. Define your translations

```typescript
import { createTranslations } from '@repo/i18n';

interface MyTranslations {
  common: {
    welcome: string;
    goodbye: string;
  };
  navigation: {
    home: string;
    about: string;
  };
}

const translations = createTranslations<MyTranslations>({
  en: {
    common: {
      welcome: "Welcome",
      goodbye: "Goodbye"
    },
    navigation: {
      home: "Home",
      about: "About"
    }
  },
  vi: {
    common: {
      welcome: "Chào mừng",
      goodbye: "Tạm biệt"
    },
    navigation: {
      home: "Trang chủ",
      about: "Giới thiệu"
    }
  }
});
```

### 2. Setup Provider

```tsx
import { I18nProvider } from '@repo/i18n';

function App() {
  return (
    <I18nProvider 
      translations={translations}
      defaultLocale="en"
      supportedLocales={['en', 'vi']}
    >
      <YourApp />
    </I18nProvider>
  );
}
```

### 3. Use in components

```tsx
import { useI18n } from '@repo/i18n';

function MyComponent() {
  const { t, locale, setLocale } = useI18n<MyTranslations>();
  
  return (
    <div>
      <h1>{t.common.welcome}</h1>
      <nav>
        <a href="/">{t.navigation.home}</a>
        <a href="/about">{t.navigation.about}</a>
      </nav>
      <button onClick={() => setLocale(locale === 'en' ? 'vi' : 'en')}>
        Switch Language
      </button>
    </div>
  );
}
```

### 4. Language Switcher Component

```tsx
import { LanguageSwitcher } from '@repo/i18n';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
];

function Navigation() {
  return (
    <nav>
      {/* Other nav items */}
      <LanguageSwitcher 
        languages={languages}
        className="custom-switcher"
      />
    </nav>
  );
}
```

## API Reference

### `createTranslations<T>(translations)`

Creates a type-safe translations object.

### `I18nProvider`

Props:

- `translations`: Translation object created with `createTranslations`
- `defaultLocale`: Default language code
- `supportedLocales`: Array of supported language codes
- `storageKey?`: LocalStorage key (default: 'locale')
- `children`: React children

### `useI18n<T>()`

Hook that returns:

- `t`: Translation function
- `locale`: Current locale
- `setLocale`: Function to change locale
- `supportedLocales`: Array of supported locales

### `LanguageSwitcher`

Props:

- `languages`: Array of `{ code, name, flag }` objects
- `className?`: Custom CSS class
- `variant?`: 'dropdown' | 'buttons' (default: 'dropdown')

## Examples

See the `/examples` directory for complete examples:

- Basic usage
- Next.js integration
- Custom styling
- Multiple translation namespaces
