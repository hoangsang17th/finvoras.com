# Auto-Update Strategies for @finvoras/ui Package

## 🎯 Recommended Approach: NPM Registry + Semantic Versioning

### 1. Publish to NPM Registry

```bash
# Trong finvoras-ui
npm login
npm publish

# Hoặc private registry
npm publish --registry https://your-private-registry.com
```

### 2. Version Management Strategy

```json
// finvoras-ui/package.json
{
  "name": "@finvoras/ui",
  "version": "1.2.3", // Major.Minor.Patch
  "scripts": {
    "release:patch": "npm version patch && npm publish",
    "release:minor": "npm version minor && npm publish", 
    "release:major": "npm version major && npm publish"
  }
}
```

### 3. Auto-Update in Consumer Apps

```json
// profilecv/package.json hoặc saas-marketing/package.json
{
  "dependencies": {
    "@finvoras/ui": "^1.2.3",  // Auto-update minor & patch
    // "@finvoras/ui": "~1.2.3",  // Chỉ auto-update patch
    // "@finvoras/ui": "1.2.3",   // Fixed version
  }
}
```

### 4. CI/CD Workflow

```yaml
# .github/workflows/update-ui.yml
name: Update UI Dependencies
on:
  schedule:
    - cron: '0 9 * * 1' # Every Monday 9AM
  workflow_dispatch:

jobs:
  update-deps:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Update @finvoras/ui
        run: |
          npm update @finvoras/ui
          npm test
          
      - name: Create PR if updates
        uses: peter-evans/create-pull-request@v5
        with:
          title: 'chore: update @finvoras/ui dependencies'
          commit-message: 'chore: update @finvoras/ui to latest version'
```

## 🏗️ Alternative: Monorepo Structure

### Setup với Turborepo (Best for large teams)

```bash
# Project structure
finvoras-monorepo/
├── package.json
├── turbo.json
├── packages/
│   ├── ui/              # @finvoras/ui package
│   ├── finvoras-web/    # Original website
│   ├── profilecv/       # ProfileCV app
│   └── saas-marketing/  # SaaS Marketing app
└── apps/ (optional)
```

```json
// Root package.json
{
  "name": "finvoras-monorepo",
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "turbo": "^1.10.0"
  },
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "test": "turbo run test"
  }
}
```

```json
// packages/profilecv/package.json
{
  "name": "profilecv",
  "dependencies": {
    "@finvoras/ui": "workspace:*"  // Always latest from workspace
  }
}
```

**✅ Benefits:**

- Instant updates across all packages
- Shared dependencies
- Coordinated builds
- Easy development workflow

## 🔧 Quick Setup Scripts

### Auto-update script cho current setup

```bash
#!/bin/bash
# update-ui.sh

echo "🔄 Updating @finvoras/ui across all projects..."

# Build UI package
cd finvoras-ui
echo "📦 Building UI package..."
npm run build

# Update ProfileCV
cd ../profilecv
echo "🔄 Updating ProfileCV..."
npm update @finvoras/ui

# Update SaaS Marketing  
cd ../saas-marketing
echo "🔄 Updating SaaS Marketing..."
npm update @finvoras/ui

echo "✅ All projects updated!"
```

### Watch mode for development

```json
// finvoras-ui/package.json
{
  "scripts": {
    "dev": "tsup --watch",
    "dev:link": "npm run dev & npm link",
    "postbuild": "npm run notify-consumers"
  }
}
```

## 📊 Comparison Table

| Method | Auto-Update | Dev Experience | Production Ready | Team Friendly |
|--------|-------------|----------------|------------------|---------------|
| `file:../` | ❌ Manual | 🔵 Good | ❌ No | ❌ Poor |
| NPM Registry | ✅ Yes | 🟢 Excellent | ✅ Yes | ✅ Excellent |
| Monorepo | ✅ Instant | 🟢 Excellent | ✅ Yes | ✅ Excellent |
| Git Submodule | 🔵 Semi | 🔴 Complex | 🔵 OK | 🔴 Poor |

## 🎯 Recommended Migration Path

### Phase 1: Quick Fix (Current Setup)

- Tạo update script
- Use semantic versioning trong finvoras-ui

### Phase 2: NPM Registry (Recommended)

- Publish @finvoras/ui lên npmjs.com
- Setup CI/CD cho auto-publish
- Consumer apps dùng semantic versioning

### Phase 3: Monorepo (Enterprise)

- Migrate tất cả vào monorepo
- Setup Turborepo/Nx
- Shared tooling và dependencies

Bạn muốn tôi implement approach nào?
