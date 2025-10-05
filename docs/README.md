# 📚 Documentation# 📚 Documentation



Tài liệu hướng dẫn cho dự án Finvoras.comHướng dẫn tích hợp Google Form với Custom UI cho Contact Forms.



---## 📖 Guides



## 🎯 Guides Chính### Quick Start (5 phút)

👉 **[QUICK_START.md](./QUICK_START.md)** - Bắt đầu nhanh trong 5 phút

### 1. 🎨 Portfolio Strategy

👉 **[PORTFOLIO_GUIDELINE.md](./PORTFOLIO_GUIDELINE.md)** ### Chi tiết

- Chiến lược làm portfolio ấn tượng trong mắt nhà tuyển dụng- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Hướng dẫn setup đầy đủ từng bước

- Tâm lý recruiter và cách tối ưu- **[ADVANCED_FEATURES.md](./ADVANCED_FEATURES.md)** - reCAPTCHA, File Upload, Tracking

- 30-day transformation plan

- Red flags vs Green flags## 🎯 Overview



### 2. 📝 Google Form Setup  Google Form integration với custom UI để:

👉 **[Google_Form_Setup.md](./Google_Form_Setup.md)**- ✅ Tiết kiệm chi phí backend (miễn phí)

- Setup contact form với 3 trường: Email, Name, Message (required)- ✅ UI/UX đồng nhất với website

- Tích hợp reCAPTCHA v3 chống spam- ✅ Dễ setup và maintain

- Hướng dẫn từng bước từ tạo form đến deploy

- Troubleshooting và best practices### ✨ Features

- ✅ **Contact Form:** Name, Email, Message với validation

---- ✅ **📎 File Attachments:** Upload 0-3 files, max 10MB each

  - Supports: images, PDF, DOC, DOCX, TXT

## 🔧 Technical References  - Client-side validation (size, count, type)

  - ⚠️ **Note:** UI ready, actual upload requires Google Drive API

### Advanced Features- ✅ **Anti-spam:** reCAPTCHA v3 support (infrastructure ready)

👉 **[ADVANCED_FEATURES.md](./ADVANCED_FEATURES.md)**- ✅ **Analytics:** Hidden tracking fields (UTM, referrer, etc.)

- File upload với Google Drive API- ✅ **UX:** Success/Error states, loading indicators, mobile responsive

- Advanced tracking và analytics

- Cloudflare Turnstile alternative### Cần làm để hoàn thành:

1. Tạo Google Form (3 fields: Name, Email, Message)

### Project History2. Lấy Form ID và Entry IDs

👉 **[CHANGELOG.md](./CHANGELOG.md)**3. Update config trong `lib/utils/google-forms.ts`

- Version history và updates4. (Optional) Setup reCAPTCHA

- Breaking changes5. (Optional) Add tracking fields

- Migration guides

## 🔗 Quick Links

---

- [Setup Google Form](#setup-google-form)

## 🚀 Quick Start- [Get Entry IDs](#get-entry-ids)

- [Configure Code](#configure-code)

1. **Portfolio optimization:** Đọc `PORTFOLIO_GUIDELINE.md`- [Setup reCAPTCHA](./ADVANCED_FEATURES.md#recaptcha)

2. **Contact form setup:** Follow `Google_Form_Setup.md`  - [File Upload](./ADVANCED_FEATURES.md#file-upload)

3. **Advanced features:** Check `ADVANCED_FEATURES.md` nếu cần

---

---

## Setup Google Form

## 📁 File Structure

### 1. Tạo Form

```1. Vào https://docs.google.com/forms

docs/2. Tạo Blank Form

├── README.md                 ← You are here3. Thêm 3 fields:

├── PORTFOLIO_GUIDELINE.md    ← Portfolio strategy     - **Name** (Short answer, Required)

├── Google_Form_Setup.md      ← Form setup guide   - **Email** (Short answer, Required, Email validation)

├── ADVANCED_FEATURES.md      ← Technical features   - **Message** (Paragraph, Required)

└── CHANGELOG.md              ← Project history

```### 2. Get Form ID

1. Click **Send** > Tab **Link**

---2. Copy URL: `https://docs.google.com/forms/d/e/FORM_ID/viewform`

3. Lấy phần `FORM_ID`

**Happy coding!** 🚀
### 3. Get Entry IDs
1. Click **Preview** (icon mắt)
2. Right-click field > **Inspect**
3. Tìm `<input name="entry.123456789">`
4. Lặp lại cho tất cả fields

---

## Configure Code

Update file `lib/utils/google-forms.ts`:

```typescript
export const CONTACT_FORM_CONFIG: GoogleFormConfig = {
  formId: "YOUR_FORM_ID_HERE",
  
  fields: {
    name: "entry.123456789",      // Replace
    email: "entry.987654321",     // Replace
    message: "entry.222222222",   // Replace
  },
};
```

---

## Test

```bash
pnpm dev
```

Submit form và check Google Form Responses!

---

## Need More?

- **Full Setup Guide:** [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Advanced Features:** [ADVANCED_FEATURES.md](./ADVANCED_FEATURES.md)
  - reCAPTCHA v3 setup
  - File upload configuration  
  - Tracking fields
  - Cloudflare Turnstile

---

## File Structure

```
apps/
├── phamhoangsang.finvoras.com/
│   ├── components/
│   │   └── contact.tsx              ← Contact form
│   └── lib/utils/
│       └── google-forms.ts          ← Config here
│
└── finvoras.com/
    ├── components/
    │   └── contact-form.tsx         ← Contact form
    └── lib/utils/
        └── google-forms.ts          ← Config here
```

---

**Ready to go!** 🚀
