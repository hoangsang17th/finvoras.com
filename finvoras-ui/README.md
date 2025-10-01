# @finvoras/ui

Finvoras Design System - A comprehensive UI component library for building modern React applications.

## Features

- 🎨 **Modern Design**: Beautiful, accessible components built with Radix UI and Tailwind CSS
- 🔧 **TypeScript**: Full TypeScript support with proper type definitions
- 📦 **Tree Shakeable**: Import only what you need
- 🎭 **Theme Support**: Built-in dark mode and customizable themes
- ⚡ **Performance**: Optimized for production use
- 📱 **Responsive**: Mobile-first design approach

## Installation

```bash
npm install @finvoras/ui
# or
yarn add @finvoras/ui
# or
pnpm add @finvoras/ui
```

## Usage

### Import Components

```tsx
import { Button, Input, Badge } from '@finvoras/ui'
import '@finvoras/ui/styles'

function App() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Input placeholder="Enter text..." />
      <Badge variant="secondary">New</Badge>
    </div>
  )
}
```

### Available Components

- **Button** - Versatile button component with multiple variants
- **Input** - Form input with validation support
- **Badge** - Small labels for status and categories
- **Avatar** - User profile pictures and placeholders
- **Separator** - Visual dividers
- **Sheet** - Sliding panels and drawers
- **Tabs** - Tabbed interfaces
- **Tooltip** - Contextual information overlays
- **Navigation Menu** - Complex navigation structures
- **Marquee** - Scrolling text and content
- **Animated Grid Pattern** - Animated background patterns

### Styling

The components use CSS custom properties for theming. Make sure to include the styles:

```tsx
import '@finvoras/ui/styles'
```

## Projects Using This Library

- **Finvoras** - Personal finance management platform
- **ProfileCV** - Professional CV and portfolio builder
- **SaaS Marketing** - Marketing automation platform

## Development

To contribute to this library:

```bash
# Clone the repository
git clone https://github.com/hoangsang17th/finvoras.com.git
cd finvoras.com/finvoras-ui

# Install dependencies
npm install

# Start development
npm run dev

# Build package
npm run build
```

## License

MIT © Finvoras Team
