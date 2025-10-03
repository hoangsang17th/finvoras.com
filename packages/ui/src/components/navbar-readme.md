# Navbar Component

A highly customizable and responsive navbar component built for the @repo/ui package. This component provides a flexible navigation solution with support for custom logos, menu items, and CTA actions.

## Features

- 🎨 **Customizable Logo**: Pass any React component as logo
- 📱 **Responsive Design**: Adapts to mobile and desktop screens
- 🔗 **Smart Navigation**: Support for both regular links and fragment links for single-page sections
- 🎯 **CTA Actions**: Flexible system for adding call-to-action elements
- 📋 **Menu Items**: Easy configuration of navigation menu items
- 🌙 **Theme Support**: Works seamlessly with theme toggles and dark mode
- 🔄 **Mobile Sheet**: Beautiful slide-out navigation for mobile devices

## Installation

The component is available from the `@repo/ui` package:

```tsx
import { Navbar, type NavMenuItem, type NavbarCTAAction } from "@repo/ui";
```

## Basic Usage

```tsx
import { Navbar, Button } from "@repo/ui";
import Link from "next/link";

const MyNavbar = () => {
  return (
    <Navbar
      logo={<YourLogoComponent />}
      menuItems={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]}
      ctaActions={[
        {
          id: "cta-button",
          component: (
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          ),
        },
      ]}
    />
  );
};
```

## Props

### NavbarProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `ReactNode` | `undefined` | Custom logo component |
| `menuItems` | `NavMenuItem[]` | `[]` | Array of navigation menu items |
| `ctaActions` | `NavbarCTAAction[]` | `[]` | Array of call-to-action elements |
| `className` | `string` | `undefined` | Additional CSS classes for navbar |
| `containerClassName` | `string` | `undefined` | Additional CSS classes for container |
| `homePath` | `string` | `"/"` | Path to determine homepage for fragment links |

### NavMenuItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | Required | Display text for menu item |
| `href` | `string` | Required | URL or path for navigation |
| `fragmentId` | `string` | `undefined` | Fragment ID for homepage sections |
| `disabled` | `boolean` | `false` | Whether the menu item is disabled |

### NavbarCTAAction

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | Required | Unique identifier for the action |
| `component` | `ReactNode` | Required | React component to render |
| `showOnMobile` | `boolean` | `true` | Whether to show on mobile devices |
| `showOnDesktop` | `boolean` | `true` | Whether to show on desktop |

## Advanced Examples

### With Fragment Navigation

For single-page applications with section navigation:

```tsx
const menuItems = [
  { label: "Home", href: "/", fragmentId: "hero" },
  { label: "Features", href: "/", fragmentId: "features" },
  { label: "Pricing", href: "/", fragmentId: "pricing" },
  { label: "About", href: "/about" }, // Regular navigation
];

<Navbar
  menuItems={menuItems}
  homePath="/" // When on "/", fragment links will be used
/>
```

### Multiple CTA Actions

```tsx
const ctaActions = [
  {
    id: "theme-toggle",
    component: <ThemeToggle />,
    showOnMobile: true,
    showOnDesktop: true,
  },
  {
    id: "language-switcher",
    component: <LanguageSwitcher />,
    showOnMobile: false, // Hide on mobile
    showOnDesktop: true,
  },
  {
    id: "login",
    component: (
      <Button variant="outline" asChild>
        <Link href="/login">Sign In</Link>
      </Button>
    ),
    showOnMobile: true,
    showOnDesktop: true,
  },
  {
    id: "signup",
    component: (
      <Button asChild>
        <Link href="/signup">Get Started</Link>
      </Button>
    ),
    showOnMobile: true,
    showOnDesktop: true,
  },
];
```

### Custom Logo

```tsx
const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
    <span className="font-bold">Brand Name</span>
  </Link>
);

<Navbar logo={<Logo />} />
```

### Responsive Visibility

Control when CTA actions appear on different screen sizes:

```tsx
const ctaActions = [
  {
    id: "desktop-only-action",
    component: <ComplexDropdown />,
    showOnMobile: false, // Hidden on mobile
    showOnDesktop: true,
  },
  {
    id: "mobile-friendly-action",
    component: <SimpleButton />,
    showOnMobile: true,
    showOnDesktop: true,
  },
];
```

## Styling

The navbar uses Tailwind CSS classes and supports theme customization. Key classes:

- Fixed positioning with backdrop blur
- Responsive breakpoints (md:, sm:, xs:)
- Dark mode support
- Rounded design with border
- Z-index for proper layering

### Custom Styling

```tsx
<Navbar
  className="bg-red-500/20" // Custom navbar background
  containerClassName="px-8" // Custom container padding
  // ... other props
/>
```

## Dependencies

- `@repo/ui` components (Button, NavigationMenu, Sheet)
- `next/navigation` for usePathname
- `next/link` for navigation
- `lucide-react` for icons
- `@radix-ui/react-navigation-menu` (via @repo/ui)

## Notes

- The navbar is fixed positioned and takes up the top portion of the viewport
- Mobile navigation uses a slide-out sheet component
- Fragment navigation only works when on the specified `homePath`
- All CTA actions in mobile view are rendered with full width
- The component is fully accessible and keyboard navigable
