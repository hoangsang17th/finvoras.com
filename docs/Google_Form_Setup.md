# 🚀 Google Form Setup - Contact Form với reCAPTCHA

Hướng dẫn setup Google Form với 3 trường thông tin cơ bản (Email, Name, Message) và tích hợp reCAPTCHA để chống spam cho contact form trong portfolio.

---

## 📋 Yêu Cầu

### Trường Thông Tin Bắt Buộc

- **Email** - Text field, required
- **Name** - Text field, required  
- **Message** - Long text field, required

### Tính Năng Bảo Mật

- **reCAPTCHA v3** - Invisible CAPTCHA để chống spam
- **Form validation** - Client-side và server-side
- **Rate limiting** - Tránh spam submissions

---

## 🔧 Bước 1: Tạo Google Form (5 phút)

### 1.1 Tạo Form Mới

1. Vào [Google Forms](https://docs.google.com/forms)
2. Click **"Blank form"** hoặc **"+ Create"**
3. Đặt tên form: **"Portfolio Contact Form"**
4. Mô tả: **"Get in touch for collaboration opportunities"**

### 1.2 Thêm 3 Trường Thông Tin

**Trường 1: Name**

```
Question: Full Name *
Type: Short answer
Required: ✅ ON
Description: Your full name for proper introduction
```

**Trường 2: Email**

```
Question: Email Address *
Type: Short answer
Required: ✅ ON
Response validation: ✅ ON
  └── Regular expression
  └── Pattern: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
  └── Error message: Please enter a valid email address
Description: We'll use this to respond to your message
```

**Trường 3: Message**

```
Question: Message *
Type: Paragraph
Required: ✅ ON
Description: Tell us about your project, job opportunity, or collaboration idea
```

### 1.3 Cấu Hình Form Settings

1. Click **⚙️ Settings** (top right)
2. **General tab:**
   - ✅ Collect email addresses: **OFF** (chúng ta đã có field riêng)
   - ✅ Limit to 1 response: **OFF**
   - ✅ Edit after submit: **OFF**

3. **Presentation tab:**
   - ✅ Show progress bar: **ON**
   - ✅ Shuffle question order: **OFF**
   - Confirmation message: **"Thank you! We'll get back to you within 24 hours."**

---

## 🔐 Bước 2: Setup reCAPTCHA (10 phút)

### 2.1 Tạo reCAPTCHA Site Key

1. Vào [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Click **"Create"** (top right)
3. **Label:** `Portfolio Contact Form`
4. **reCAPTCHA type:** Select **"Score based (v3)"**
5. **Domains:**

   ```
   localhost
   phamhoangsang.finvoras.com
   finvoras.com
   ```

6. ✅ Accept terms and click **"Submit"**

### 2.2 Lấy Keys

Sau khi tạo, bạn sẽ có:

```
Site Key: 6Lc....... (public key - dùng trong frontend)
Secret Key: 6Lc....... (private key - dùng trong backend)
```

**⚠️ Quan trọng:** Chỉ Site Key được dùng trong frontend. Secret Key giữ bí mật!

### 2.3 Thêm reCAPTCHA vào Google Form

1. Trong Google Form, click **⚙️ Settings**
2. Chọn tab **"General"**
3. Tìm section **"Requires sign-in"**
4. ✅ Turn ON: **"Verify that respondents are human"**

---

## 📝 Bước 3: Lấy Form Configuration (5 phút)

### 3.1 Lấy Form ID

Từ URL của Google Form:

```
https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_FORM_ID_HERE/viewform
                                   ↑________________________↑
                                   Đây là Form ID
```

### 3.2 Lấy Entry IDs

1. Mở form ở chế độ **Preview** (👁️ icon)
2. **Right-click** → **"Inspect Element"** (F12)
3. Tìm các thẻ `<input>` và copy attribute `name`:

```html
<!-- Name field -->
<input name="entry.123456789" ...>

<!-- Email field -->  
<input name="entry.987654321" ...>

<!-- Message field -->
<textarea name="entry.555666777" ...>
```

**Entry IDs ví dụ:**

- Name: `entry.123456789`
- Email: `entry.987654321`
- Message: `entry.555666777`

---

## ⚙️ Bước 4: Cấu Hình Code (10 phút)

### 4.1 Update Environment Variables

Tạo file `.env.local` trong thư mục app tương ứng (hoặc copy từ `.env.local.example`):

**Cho phamhoangsang.finvoras.com:**

```bash
# apps/phamhoangsang.finvoras.com/.env.local
NEXT_PUBLIC_GOOGLE_FORM_ID=1FAIpQLSc_YOUR_FORM_ID_HERE
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc_YOUR_SITE_KEY_HERE
```

**Cho finvoras.com:**

```bash
# apps/finvoras.com/.env.local
NEXT_PUBLIC_GOOGLE_FORM_ID=1FAIpQLSc_YOUR_FORM_ID_HERE
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc_YOUR_SITE_KEY_HERE
```

### 4.2 Cấu hình Entry IDs (Bắt buộc)

**Cách 1: Tắo custom config (Khuyến nghị)**

```typescript
// Tạo config với entry IDs thực tế
import { createGoogleFormConfig } from "@repo/google-forms";

const formConfig = createGoogleFormConfig({
  fields: {
    name: "entry.123456789",    // Thay bằng entry ID thực tế từ Google Form
    email: "entry.987654321",   // Thay bằng entry ID thực tế từ Google Form  
    message: "entry.555666777", // Thay bằng entry ID thực tế từ Google Form
  }
});

// Sử dụng trong form submission
await submitToGoogleForm(formConfig, formData, { includeTracking: true });
```

**Cách 2: Sửa trực tiếp trong package (Nâng cao)**

Nếu bạn muốn tất cả apps sử dụng cùng config, sửa file:

```typescript
// packages/google-forms/src/index.ts
export function createGoogleFormConfig(overrides?: Partial<GoogleFormConfig>): GoogleFormConfig {
    return {
        formId: process.env.NEXT_PUBLIC_GOOGLE_FORM_ID || "YOUR_FORM_ID_HERE",
        recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || undefined,
        fields: {
            // THAY ĐỔI CÁC GIÁ TRỊ NÀY BẰNG ENTRY IDs THỰC TẾ
            name: "entry.123456789",      // ← Thay bằng entry ID từ bước 3.2
            email: "entry.987654321",     // ← Thay bằng entry ID từ bước 3.2
            message: "entry.555666777",   // ← Thay bằng entry ID từ bước 3.2
        },
        ...overrides,
    };
}
```

### 4.3 Thêm reCAPTCHA Script

reCAPTCHA script đã được tự động thêm vào layout files. Code sẽ tự động load script nếu `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` được set.

**Portfolio layout:**

```tsx
// apps/phamhoangsang.finvoras.com/app/layout.tsx
// reCAPTCHA script đã được thêm tự động
```

**Main site layout:**

```tsx
// apps/finvoras.com/app/layout.tsx  
// reCAPTCHA script đã được thêm tự động
```

**⚠️ Lưu ý quan trọng:** Các entry IDs phải được cập nhật thủ công vì mỗi Google Form sẽ có IDs khác nhau!

---

## 🧪 Bước 5: Test & Verify (5 phút)

### 5.1 Test Local Development

1. Chạy development server:

   ```bash
   cd apps/phamhoangsang.finvoras.com
   npm run dev
   ```

2. Mở `http://localhost:3000`
3. Điền contact form và submit
4. Kiểm tra **Google Form Responses** tab

### 5.2 Test Production

1. Deploy lên production
2. Test form trên domain thực tế
3. Verify reCAPTCHA hoạt động (score > 0.5)

### 5.3 Verify reCAPTCHA

1. Vào [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click vào site đã tạo
3. Check **"Analytics"** tab để xem:
   - Request count
   - Score distribution
   - Suspicious traffic

---

## 🔧 Troubleshooting

### Form Không Submit

**Nguyên nhân thường gặp:**

```
❌ Sai Form ID
❌ Sai Entry IDs  
❌ CORS policy (normal với Google Forms)
❌ reCAPTCHA site key sai
```

**Cách debug:**

```bash
# Check Console logs
1. F12 → Console tab
2. Look for errors
3. Check Network tab for form submission

# Test direct submission
1. Submit directly to Google Form
2. Check if data appears in Responses
```

### reCAPTCHA Không Hoạt Động

**Kiểm tra:**

```
✓ Site Key đúng chưa?
✓ Domain đã add vào reCAPTCHA admin chưa?
✓ Script load thành công chưa?
✓ Browser console có lỗi gì không?
```

**Debug reCAPTCHA:**

```javascript
// Test trong browser console
window.grecaptcha.execute('YOUR_SITE_KEY', {action: 'submit'})
  .then(token => console.log('Token:', token))
  .catch(err => console.error('reCAPTCHA Error:', err));
```

---

## 📊 Monitoring & Analytics

### Google Form Analytics

1. **Responses tab:** Xem tất cả submissions
2. **Summary tab:** Charts và statistics  
3. **Download responses:** Export to CSV/Excel

### reCAPTCHA Analytics

1. **Score distribution:** Xem human vs bot ratio
2. **Request volume:** Traffic patterns
3. **Actions:** Different form actions tracking

### Custom Analytics (Optional)

```typescript
// Track form submissions
const trackFormSubmission = () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: 'contact_form',
    });
  }
};
```

---

## 🚀 Production Checklist

Trước khi deploy:

- [ ] ✅ Test tất cả 3 fields required validation
- [ ] ✅ Test email format validation
- [ ] ✅ Test form submission thành công
- [ ] ✅ Check Google Form nhận được data
- [ ] ✅ Test reCAPTCHA score > 0.5
- [ ] ✅ Test trên mobile devices
- [ ] ✅ Test loading speed < 3 seconds
- [ ] ✅ Setup analytics tracking
- [ ] ✅ Test error handling
- [ ] ✅ Verify confirmation message

---

## 🎯 Best Practices

### Security

- ✅ Always validate inputs client & server side
- ✅ Use reCAPTCHA v3 (invisible, better UX)
- ✅ Rate limit submissions (max 5/hour/IP)
- ✅ Sanitize data before processing

### UX/UI

- ✅ Clear field labels và placeholders
- ✅ Real-time validation feedback
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Mobile-friendly design

### Performance

- ✅ Lazy load reCAPTCHA script
- ✅ Optimize form validation
- ✅ Minimize network requests
- ✅ Cache form configuration

---

## 📞 Support

Nếu gặp vấn đề:

1. **Check Documentation:** [Google Forms API](https://developers.google.com/forms)
2. **reCAPTCHA Support:** [reCAPTCHA Help](https://support.google.com/recaptcha)
3. **Project Issues:** Create issue trong GitHub repo

---

**🎉 Xong! Bây giờ bạn có contact form hoàn chỉnh với anti-spam protection.**

**Last Updated:** October 5, 2025
