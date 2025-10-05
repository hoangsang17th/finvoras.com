# Hệ Thống Translation Finvoras

## Tổng quan

Hệ thống translation này được thiết kế để hỗ trợ đa ngôn ngữ (English và Tiếng Việt) cho trang web Finvoras. Hệ thống được xây dựng dựa trên React Context API với TypeScript để đảm bảo type safety.

## Cấu trúc

```
lib/
├── contexts/
│   └── LanguageContext.tsx     # React Context cho language state
├── data/
│   └── translations.ts         # Tất cả translations
├── types/
│   └── translations.ts         # TypeScript interfaces
└── components/
    └── language-switcher.tsx   # Component để switch ngôn ngữ
```

## Cách sử dụng

### 1. Setup Provider

Trong `app/layout.tsx`, wrap ứng dụng với `LanguageProvider`:

```tsx
import { LanguageProvider } from "@/lib/contexts/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {/* Các providers khác */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
```

### 2. Sử dụng trong Component

```tsx
"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function MyComponent() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.description}</p>
      <button onClick={() => setLocale(locale === 'en' ? 'vi' : 'en')}>
        Switch Language
      </button>
    </div>
  );
}
```

### 3. Language Switcher Component

Sử dụng component có sẵn:

```tsx
import LanguageSwitcher from "@/components/language-switcher";

export default function Navbar() {
  return (
    <nav>
      {/* Các items khác */}
      <LanguageSwitcher />
    </nav>
  );
}
```

## Thêm Translation Mới

### 1. Cập nhật Type Definition

Trong `lib/types/translations.ts`, thêm các fields mới:

```typescript
export interface Translations {
  // Existing fields...
  newSection: {
    title: string;
    description: string;
  };
}
```

### 2. Thêm Translations

Trong `lib/data/translations.ts`, thêm translations cho cả 2 ngôn ngữ:

```typescript
export const translations: Record<"en" | "vi", Translations> = {
  en: {
    // Existing translations...
    newSection: {
      title: "New Section Title",
      description: "Section description in English",
    },
  },
  vi: {
    // Existing translations...
    newSection: {
      title: "Tiêu Đề Phần Mới",
      description: "Mô tả phần này bằng tiếng Việt",
    },
  },
};
```

## Tính năng

### ✅ Đã Triển Khai
- React Context API cho state management
- TypeScript type safety
- LocalStorage persistence
- Browser language detection
- Language switcher component
- Translation cho Navbar
- Translation cho Hero section

### 🚧 Kế Hoạch Triển Khai
- Translator cho tất cả components còn lại:
  - Features section
  - Pricing section
  - Testimonials
  - FAQ
  - Footer
  - Auth forms (Login/Register)
  - Contact form
  - Blog components
  - About page

### 🔄 Có Thể Nâng Cấp
- Cookie persistence (thay vì localStorage)
- Lazy loading translations
- Pluralization support
- Date/number formatting theo locale
- RTL language support
- Translation validation tool

## Best Practices

1. **Consistency**: Luôn dùng `t.section.key` pattern
2. **Type Safety**: Không bỏ qua TypeScript warnings
3. **Naming**: Sử dụng tên key có ý nghĩa và nhất quán
4. **Fallbacks**: Luôn có English text làm fallback
5. **Context**: Giữ context nhỏ gọn, chỉ chứa cần thiết

## Ví dụ Thực Tế

### Navbar với Translation
```tsx
const { t } = useLanguage();

const menuItems = [
  { label: t.nav.home, href: "/" },
  { label: t.nav.pricing, href: "/pricing" },
  { label: t.nav.blog, href: "/blog" },
  { label: t.nav.about, href: "/about" },
];
```

### Form với Translation
```tsx
const { t } = useLanguage();

return (
  <form>
    <label>{t.auth.login.email}</label>
    <input placeholder={t.auth.login.emailPlaceholder} />
    
    <label>{t.auth.login.password}</label>
    <input placeholder={t.auth.login.passwordPlaceholder} />
    
    <button>{t.auth.login.loginButton}</button>
  </form>
);
```

## Migration Guide

Để migrate component hiện tại sang sử dụng translation:

1. Thêm `"use client"` nếu component chưa có
2. Import `useLanguage` hook
3. Replace hardcoded text với `t.section.key`
4. Test cả English và Vietnamese
5. Đảm bảo UI không bị break với text dài hơn

## Troubleshooting

### Component không re-render khi switch language
- Đảm bảo component được wrap trong `LanguageProvider`
- Kiểm tra component có sử dụng `useLanguage()` hook không

### TypeScript errors
- Kiểm tra key trong translations có match với type definition không
- Đảm bảo cả English và Vietnamese đều có đầy đủ keys

### Language không persist
- Kiểm tra localStorage có available không
- Xem browser có block localStorage không

## Performance

- Context chỉ re-render khi language thay đổi
- Translations được load một lần khi app start
- Language switcher component nhỏ gọn và responsive
- Type checking ở build time, không impact runtime

---

Hệ thống này sẵn sàng scale cho nhiều ngôn ngữ khác và dễ dàng maintain!