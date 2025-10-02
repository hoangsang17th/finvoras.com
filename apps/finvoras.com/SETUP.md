# Finvoras Website Setup Guide

## Project Overview

Finvoras is a personal finance management app website built with:

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **Authentication** - Login/Register system
- **Blog System** - Financial education content

## Project Structure

```
finvoras-website/
├── app/
│   ├── (auth)/                # Authentication pages
│   │   ├── login/page.tsx     # Login page
│   │   ├── register/page.tsx  # Register page
│   │   └── layout.tsx         # Auth layout
│   ├── blog/                  # Blog system
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/page.tsx   # Single blog post
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── auth/                # Auth components
│   │   ├── login-form.tsx
│   │   └── register-form.tsx
│   ├── blog/                # Blog components
│   │   └── blog-card.tsx
│   ├── navbar/              # Navigation
│   ├── ui/                  # Shadcn UI components
│   └── [other-components]
├── lib/
│   ├── api/                 # API integration
│   │   └── auth.ts
│   ├── data/                # Mock data
│   │   └── blog.ts
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   └── utils.ts             # Utilities
└── public/                  # Static assets
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Update `.env.local` with your configuration:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_NAME=Finvoras
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### 🔐 Authentication System

- **Login**: `/login` - User login with email/password
- **Register**: `/register` - User registration with validation
- **API Integration**: Ready for backend connection
- **Token Management**: Automatic token storage and refresh

### 📰 Blog System

- **Blog Listing**: `/blog` - All blog posts with categories
- **Single Post**: `/blog/[slug]` - Individual blog post view
- **Mock Data**: 6 sample financial education articles
- **Categories**: Personal Finance, Credit & Debt, Investing, Income & Career

### 🎨 UI Components

- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme switching
- **Shadcn UI**: Professional component library
- **Form Validation**: Client-side validation with error states

## Backend Integration

### Required API Endpoints

The frontend expects these endpoints from your NestJS backend:

```typescript
// Authentication
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
POST /api/auth/refresh

// Blog (Future)
GET /api/blog/posts
GET /api/blog/posts/:slug
GET /api/blog/categories
```

### API Response Format

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}
```

### Authentication Flow

1. User submits login/register form
2. Frontend calls API with credentials
3. Backend returns user data + JWT token
4. Frontend stores token in localStorage
5. Token is automatically included in subsequent requests

## Customization

### 1. Update Branding

- Logo: `components/navbar/logo.tsx`
- Colors: `tailwind.config.ts` and `app/globals.css`
- Content: Update hero section in `app/page.tsx`

### 2. Blog Content

- Replace mock data in `lib/data/blog.ts`
- Connect to your CMS or database
- Add more blog categories as needed

### 3. Add New Pages

```bash
# Create new page
mkdir app/new-page
touch app/new-page/page.tsx
```

### 4. Add New Components

```bash
# Create new component
touch components/new-component.tsx
```

## Deployment

### 1. Build for Production

```bash
npm run build
```

### 2. Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### 3. Environment Variables

Set these in your deployment platform:

- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`

## Development Tips

### 1. Adding New UI Components

Use Shadcn CLI to add components:

```bash
npx shadcn-ui@latest add [component-name]
```

### 2. TypeScript Types

Define types in `lib/types/index.ts` for better type safety.

### 3. API Integration

Use the existing API client in `lib/api/auth.ts` as a template for other endpoints.

### 4. Styling

- Use Tailwind CSS classes
- Follow existing component patterns
- Maintain consistent spacing and colors

## Troubleshooting

### Common Issues

1. **TypeScript Errors**: Make sure all dependencies are installed
2. **API Connection**: Check API URL in environment variables
3. **Styling Issues**: Verify Tailwind CSS is properly configured
4. **Build Errors**: Run `npm run lint` to check for issues

### Getting Help

- Check the console for error messages
- Verify API endpoints are working
- Ensure environment variables are set correctly
- Review the component implementations for examples

## Next Steps

1. **Connect to Backend**: Implement actual API endpoints
2. **Add Dashboard**: Create user dashboard after login
3. **Content Management**: Set up CMS for blog posts
4. **Analytics**: Add Google Analytics or similar
5. **SEO**: Implement meta tags and structured data
6. **Testing**: Add unit and integration tests

## Contributing

1. Create feature branch from `main`
2. Make changes following existing patterns
3. Test thoroughly
4. Submit pull request with description

---

**Built with ❤️ for Finvoras**
