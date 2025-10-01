# Finvoras UI Package Setup Guide

## 📦 Cấu trúc Package đã tạo

```
shared-ui/
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript config
├── tsup.config.ts        # Build configuration  
├── tailwind.config.js    # Tailwind CSS config
├── README.md            # Documentation
└── src/
    ├── index.ts         # Main export file
    ├── styles.css       # Global styles
    ├── components/      # UI components (copied from finvoras-website)
    │   ├── button.tsx
    │   ├── input.tsx
    │   ├── badge.tsx
    │   ├── avatar.tsx
    │   ├── separator.tsx
    │   ├── tabs.tsx
    │   ├── tooltip.tsx
    │   ├── navigation-menu.tsx
    │   ├── marquee.tsx
    │   └── animated-grid-pattern.tsx
    └── lib/
        └── utils.ts     # Utility functions
```

## 🚀 Hướng dẫn Setup và Sử dụng

### 1. Install Dependencies (chạy trong shared-ui)

```bash
cd shared-ui

# Clean npm cache nếu có lỗi
npm cache clean --force

# Install dependencies  
npm install

# Build package
npm run build
```

### 2. Sử dụng trong Projects mới

#### Option A: Local Package (Development)

```bash
# Trong project ProfileCV hoặc SaaS Marketing
npm install file:../shared-ui
```

#### Option B: Publish to NPM Registry

```bash
# Trong shared-ui folder
npm publish
```

### 3. Import và sử dụng

```tsx
// Trong ProfileCV hoặc SaaS Marketing project
import { Button, Input, Badge, Marquee } from '@finvoras/ui'
import '@finvoras/ui/styles'

function App() {
  return (
    <div>
      <Button variant="default">Profile CV Button</Button>
      <Input placeholder="Enter your name" />
      <Badge variant="secondary">Pro</Badge>
      <Marquee>
        <span>Scrolling content for marketing</span>
      </Marquee>
    </div>
  )
}
```

## 🎨 Components Available

- **Button** - với variants: default, destructive, outline, secondary, ghost, link
- **Input** - Form inputs với validation
- **Badge** - Status badges với variants  
- **Avatar** - User profile pictures
- **Separator** - Horizontal/vertical dividers
- **Tabs** - Tabbed interfaces
- **Tooltip** - Contextual information
- **Navigation Menu** - Complex nav structures
- **Marquee** - Scrolling text animations
- **Animated Grid Pattern** - Background patterns

## 🔧 Customization

### Theming

Các components sử dụng CSS custom properties. Bạn có thể override:

```css
:root {
  --primary: 220 100% 50%;
  --secondary: 210 40% 96%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other variables */
}
```

### Tailwind Config

Projects sử dụng package cần config Tailwind để nhận dạng classes:

```js
// tailwind.config.js trong ProfileCV/SaaS Marketing
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@finvoras/ui/dist/**/*.{js,ts,jsx,tsx}", // Include package
  ],
  theme: {
    extend: {
      // Import theme từ package nếu cần
    },
  },
  plugins: [],
}
```

## 📱 Project Structure Suggestions

### ProfileCV Project

```
profilecv/
├── package.json
├── src/
│   ├── components/
│   │   ├── CV/              # CV specific components  
│   │   ├── Profile/         # Profile components
│   │   └── shared/          # Import từ @finvoras/ui
│   ├── pages/
│   └── styles/
└── tailwind.config.js
```

### SaaS Marketing Project  

```
saas-marketing/
├── package.json
├── src/
│   ├── components/
│   │   ├── Landing/         # Landing page components
│   │   ├── Dashboard/       # Dashboard components  
│   │   └── shared/          # Import từ @finvoras/ui
│   ├── pages/
│   └── styles/
└── tailwind.config.js
```

## ⚡ Benefits

1. **Consistency** - Cùng design system across projects
2. **Maintainability** - Update 1 nơi, apply everywhere
3. **Developer Experience** - TypeScript support, IntelliSense
4. **Performance** - Tree-shaking, optimized builds
5. **Scalability** - Dễ dàng thêm components mới

## 🔄 Workflow

1. **Develop** components trong `shared-ui`
2. **Build** package: `npm run build`  
3. **Update** version: `npm version patch/minor/major`
4. **Publish** or **Link** to projects
5. **Import** và sử dụng trong ProfileCV/SaaS Marketing

Bạn muốn tôi tiếp tục setup cụ thể cho project nào trước?
