# 🔄 Cách Update @finvoras/ui Package

## ✅ **TL;DR: Có, apps sẽ được cập nhật nhưng cần một số bước manual**

Với setup hiện tại (`file:../finvoras-ui`), việc update **KHÔNG** tự động 100% nhưng đã được tối ưu hóa với scripts tự động.

## 🚀 **Cách Update hoạt động:**

### **1. Khi có thay đổi trong finvoras-ui:**

```bash
# Option 1: Manual update từng bước
cd finvoras-ui
npm run build

cd ../profilecv  
npm update @finvoras/ui

cd ../saas-marketing
npm update @finvoras/ui
```

```bash
# Option 2: Dùng script tự động (Khuyến nghị)
./update-ui.sh
```

```bash
# Option 3: Dùng npm script với versioning
cd finvoras-ui
npm run release:patch  # Tự động build + update consumer apps
```

### **2. Development Mode với Watch:**

```bash
# Terminal 1: Watch mode cho UI package
./dev-watch.sh

# Terminal 2: Sau khi có thay đổi
cd finvoras-ui
npm run update-consumers
```

## 📊 **Workflow Summary:**

```
finvoras-ui thay đổi
       ↓
npm run build (auto trong script)
       ↓
npm update @finvoras/ui (tất cả consumer apps)
       ↓
Apps nhận được update mới ✅
```

## 🎯 **Best Practices:**

### **A. Semantic Versioning:**

```bash
# Bug fixes
npm run release:patch  # 1.0.0 → 1.0.1

# New features (backward compatible)  
npm run release:minor  # 1.0.1 → 1.1.0

# Breaking changes
npm run release:major  # 1.1.0 → 2.0.0
```

### **B. Development Workflow:**

```bash
# 1. Develop UI components
cd finvoras-ui
npm run dev  # Watch mode

# 2. Test changes
npm run build
npm run update-consumers

# 3. Version & release
npm run release:patch
```

### **C. Consumer App Setup:**

```json
// profilecv/package.json
{
  "dependencies": {
    "@finvoras/ui": "file:../finvoras-ui"
  },
  "scripts": {
    "update-ui": "npm update @finvoras/ui",
    "postinstall": "npm run update-ui"
  }
}
```

## 🔧 **Available Scripts:**

| Script | Mô tả | Khi nào dùng |
|--------|-------|--------------|
| `./update-ui.sh` | Update tất cả projects | Sau khi sửa UI |
| `./dev-watch.sh` | Development watch mode | Khi đang develop |
| `npm run release:patch` | Version bump + update | Ready to release |
| `npm run update-consumers` | Chỉ update apps | Quick sync |

## ⚡ **Quick Commands:**

```bash
# Update toàn bộ hệ thống
./update-ui.sh

# Development mode  
./dev-watch.sh

# Release new version
cd finvoras-ui && npm run release:patch
```

## 🌟 **Upgrade Options cho tương lai:**

### **1. NPM Registry (Recommended)**

- ✅ Auto-update thật sự  
- ✅ Version control tốt hơn
- ✅ CI/CD friendly
- ✅ Team collaboration

### **2. Monorepo với Turborepo**

- ✅ Instant updates
- ✅ Shared dependencies  
- ✅ Advanced tooling
- ✅ Enterprise-ready

### **3. Git Submodules**

- 🔵 Semi-automatic
- 🔴 Complex workflow
- 🔵 Version tracking

Bạn muốn tôi setup option nào cho project này?
