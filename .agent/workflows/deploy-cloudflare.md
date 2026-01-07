---
description: Deploy phamhoangsang lên Cloudflare Pages
---

# Deploy phamhoangsang.finvoras.com lên Cloudflare Pages

Có 2 phương pháp chính để deploy Next.js app lên Cloudflare Pages:

## Phương pháp 1: Deploy qua GitHub (Khuyến nghị - Đơn giản nhất)

### Bước 1: Push code lên GitHub
Đảm bảo code của bạn đã được push lên GitHub repository.

### Bước 2: Kết nối với Cloudflare Pages
1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Chọn **Workers & Pages** từ sidebar
3. Click **Create application** > **Pages** > **Connect to Git**
4. Chọn GitHub repository của bạn
5. Click **Begin setup**

### Bước 3: Cấu hình Build Settings
Trong trang cấu hình, điền các thông tin sau:

- **Project name**: `phamhoangsang` (hoặc tên bạn muốn)
- **Production branch**: `main` (hoặc branch chính của bạn)
- **Framework preset**: `Next.js`
- **Build command**: `cd apps/phamhoangsang.finvoras.com && npm run build` hoặc `pnpm --filter phamhoangsang.finvoras.com build`
- **Build output directory**: `apps/phamhoangsang.finvoras.com/.next`
- **Root directory**: `/` (để trống hoặc chọn root)

### Bước 4: Environment Variables (nếu cần)
Nếu app của bạn cần environment variables, thêm chúng vào phần **Environment variables**.

### Bước 5: Deploy
Click **Save and Deploy**. Cloudflare sẽ tự động build và deploy app của bạn.

---

## Phương pháp 2: Deploy với @cloudflare/next-on-pages (Advanced)

Phương pháp này cho phép deploy Next.js app với Cloudflare Workers/Pages adapter.

### Bước 1: Cài đặt dependencies

```bash
pnpm add -D @cloudflare/next-on-pages wrangler --filter phamhoangsang.finvoras.com
```

### Bước 2: Cập nhật next.config.js

Thêm cấu hình cho Cloudflare:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            root: "../../",
        },
    },
    // Thêm cấu hình cho Cloudflare
    output: 'export', // Nếu muốn static export
    // HOẶC
    // Không cần output: 'export' nếu dùng edge runtime
};

export default nextConfig;
```

### Bước 3: Tạo wrangler.toml

Tạo file `wrangler.toml` trong thư mục `apps/phamhoangsang.finvoras.com/`:

```toml
name = "phamhoangsang"
compatibility_date = "2024-01-01"
pages_build_output_dir = ".vercel/output/static"
```

### Bước 4: Cập nhật package.json scripts

Thêm scripts vào `apps/phamhoangsang.finvoras.com/package.json`:

```json
{
  "scripts": {
    "dev": "next dev --turbopack --port 12002",
    "build": "next build",
    "pages:build": "npx @cloudflare/next-on-pages",
    "preview": "npm run pages:build && wrangler pages dev",
    "deploy": "npm run pages:build && wrangler pages deploy",
    "start": "next start",
    "lint": "next lint --max-warnings 0",
    "check-types": "tsc --noEmit"
  }
}
```

### Bước 5: Build và Deploy

```bash
# Di chuyển vào thư mục app
cd apps/phamhoangsang.finvoras.com

# Build cho Cloudflare
pnpm pages:build

# Deploy lên Cloudflare Pages
pnpm deploy
```

Lần đầu tiên chạy `pnpm deploy`, Wrangler sẽ yêu cầu bạn đăng nhập vào Cloudflare.

---

## Phương pháp 3: Static Export (Đơn giản nhất cho static sites)

Nếu website của bạn không cần server-side rendering, bạn có thể export thành static HTML.

### Bước 1: Cập nhật next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            root: "../../",
        },
    },
    output: 'export',
    images: {
        unoptimized: true, // Cloudflare Pages không hỗ trợ Next.js Image Optimization
    },
};

export default nextConfig;
```

### Bước 2: Build static files

```bash
cd apps/phamhoangsang.finvoras.com
pnpm build
```

Sau khi build, static files sẽ được tạo trong thư mục `out/`.

### Bước 3: Deploy với Wrangler

```bash
# Cài đặt wrangler globally (nếu chưa có)
pnpm add -g wrangler

# Deploy thư mục out
npx wrangler pages deploy out --project-name=phamhoangsang
```

---

## Lưu ý quan trọng

1. **Monorepo Setup**: Vì bạn đang dùng monorepo với pnpm workspace, đảm bảo Cloudflare có thể access tất cả dependencies từ `packages/`.

2. **Environment Variables**: Nếu app cần env vars, thêm chúng vào Cloudflare Pages settings.

3. **Custom Domain**: Sau khi deploy, bạn có thể thêm custom domain trong Cloudflare Pages settings.

4. **Build Cache**: Cloudflare Pages tự động cache dependencies để tăng tốc độ build.

5. **Turbo**: Nếu dùng Turborepo, có thể cần cấu hình thêm cho remote caching.

---

## Troubleshooting

### Lỗi build trong monorepo
Nếu gặp lỗi không tìm thấy workspace packages (`@repo/ui`, `@repo/i18n`, etc.), thử:
- Đảm bảo build command chạy từ root: `pnpm --filter phamhoangsang.finvoras.com build`
- Hoặc set root directory đúng trong Cloudflare Pages settings

### Lỗi với Next.js Image
Nếu dùng static export, phải set `images.unoptimized: true` trong next.config.js.

### Lỗi với server components
Nếu dùng Server Components, không thể dùng static export. Phải dùng phương pháp 2 với @cloudflare/next-on-pages.
