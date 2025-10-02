# Finvoras Website - Development Guide

## 📋 Tổng quan dự án

Website Finvoras là một landing page hiện đại được xây dựng với Next.js 15, TailwindCSS và Shadcn UI, tập trung vào quản lý tài chính cá nhân.

### 🎯 Mục tiêu chính:
- Giới thiệu ứng dụng Finvoras
- Cung cấp hệ thống đăng nhập/đăng ký
- Blog giáo dục tài chính cho SEO
- UI/UX nhất quán với brand Finvoras

## 🏗 Cấu trúc dự án

```
finvoras-website/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth routes group
│   │   ├── layout.tsx           # Auth layout
│   │   ├── login/page.tsx       # Login page
│   │   └── register/page.tsx    # Register page
│   ├── blog/                    # Blog system
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post detail
│   ├── demo/page.tsx           # Brand colors demo
│   ├── auth-demo/page.tsx      # Auth forms demo
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── components/                  # Reusable components
│   ├── auth/                   # Authentication components
│   │   ├── login-form.tsx      # Login form
│   │   └── register-form.tsx   # Register form
│   ├── blog/                   # Blog components
│   │   └── blog-card.tsx       # Blog post card
│   ├── layout/                 # Layout components
│   │   └── page-layout.tsx     # Page wrapper
│   ├── navbar/                 # Navigation components
│   ├── ui/                     # Base UI components (Shadcn)
│   └── [components].tsx        # Landing page components
├── lib/                        # Utilities
│   ├── api/                    # API integration
│   ├── data/                   # Mock data
│   ├── types/                  # TypeScript types
│   └── utils.ts                # Helper functions
└── public/                     # Static assets
```

## 🎨 Design System

### Brand Colors
Finvoras sử dụng hệ thống màu sắc đồng bộ giữa website và mobile app:

```typescript
// Primary Brand Colors
brand-primary: #FFA500    // Main orange
brand-success: #58CB24    // Green for success
brand-red: #FF222E        // Red for errors
brand-blue: #4096FF       // Blue for info
brand-yellow: #FAC714     // Yellow for warnings
```

### Component Variants
```typescript
// Button variants
<Button variant="brand">Primary</Button>
<Button variant="brand-outline">Outline</Button>
<Button variant="brand-ghost">Ghost</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
```

## 🚀 Tính năng chính

### 1. Authentication System
- **Login Form**: Email/password với validation
- **Register Form**: Full name, email, password, confirm password + terms
- **Brand styling**: Consistent với Finvoras brand
- **Error handling**: Hiển thị lỗi user-friendly
- **Loading states**: UX mượt mà

### 2. Blog System
- **Blog Listing**: Pagination, categories, search
- **Blog Detail**: Dynamic routing với slug
- **SEO Optimized**: Meta tags, structured data
- **Mock Data**: Ready để kết nối với CMS/API

### 3. Landing Page
- **Hero Section**: Call-to-action chính
- **Features**: Tính năng ứng dụng
- **Pricing**: Các gói dịch vụ
- **Testimonials**: Đánh giá người dùng
- **FAQ**: Câu hỏi thường gặp

## 🔧 Cài đặt và chạy

```bash
# Clone repository
git clone https://github.com/hoangsang17th/finvoras.com.git
cd finvoras.com/finvoras-website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

Website được tối ưu cho:
- **Mobile**: 375px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🔗 Integration với Backend

### Option 1: NestJS Backend

```typescript
// lib/api/auth.ts
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const authApi = {
  login: async (credentials: LoginRequest) => {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  },
  
  register: async (data: RegisterRequest) => {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
  }
};
```

### Option 2: Firebase Integration

```typescript
// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your config
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// lib/api/auth.ts
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const authApi = {
  login: async ({ email, password }: LoginRequest) => {
    return signInWithEmailAndPassword(auth, email, password);
  },
  
  register: async ({ email, password }: RegisterRequest) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
};
```

## 📊 SEO Optimization

### Meta Tags
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Finvoras - Smart Personal Finance Management",
  description: "Take control of your finances with Finvoras...",
  openGraph: {
    title: "Finvoras - Smart Personal Finance Management",
    description: "Take control of your finances...",
    images: ["/preview.png"],
  },
};
```

### Structured Data
```javascript
// For blog posts
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2024-01-01",
  "image": "https://finvoras.com/blog/image.jpg"
}
```

## 🎯 Best Practices

### 1. Folder Structure
- **Group related components**: Auth components trong `/auth`
- **Separate UI from logic**: Business logic trong `/lib`
- **Consistent naming**: kebab-case cho files, PascalCase cho components

### 2. Styling Guidelines
- **Use Tailwind utilities**: Tránh custom CSS khi có thể
- **Consistent spacing**: Sử dụng Tailwind spacing scale
- **Brand colors**: Luôn dùng brand color classes

### 3. Performance
- **Image optimization**: Sử dụng Next.js Image component
- **Code splitting**: Dynamic imports cho components lớn
- **Caching**: ISR cho blog posts

### 4. Accessibility
- **Semantic HTML**: Đúng thẻ HTML cho đúng mục đích
- **Keyboard navigation**: Tab order hợp lý
- **Screen readers**: Proper ARIA labels

## 🧪 Testing

### Unit Tests
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
```

### E2E Tests
```bash
# Install Playwright
npx playwright install

# Run E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_API_BASE=https://api.finvoras.com
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
DATABASE_URL=your_database_url
```

## 📈 Analytics & Monitoring

### Google Analytics
```typescript
// lib/analytics.ts
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

### Error Monitoring
```bash
# Sentry setup
npm install @sentry/nextjs

# sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
});
```

## 🔧 Customization Guide

### Thêm trang mới
1. Tạo file trong `/app`
2. Export default React component
3. Thêm link trong navigation

### Thêm component mới
1. Tạo file trong `/components`
2. Sử dụng brand colors
3. Export component

### Cập nhật blog data
1. Modify `/lib/data/blog.ts`
2. Hoặc kết nối với CMS API

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Follow code style guidelines
4. Add tests for new features
5. Submit pull request

## 📞 Support

- **Documentation**: [README.md](./README.md)
- **Issues**: GitHub Issues
- **Email**: support@finvoras.com

---

*Được tạo bởi Finvoras Team - Tháng 10, 2025*