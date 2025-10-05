# 🚀 Advanced Features

Tính năng nâng cao cho Google Form integration.

---

## 📋 Table of Contents

- [reCAPTCHA v3](#recaptcha-v3)
- [File Upload](#file-upload)  
- [Tracking Fields](#tracking-fields)
- [Cloudflare Turnstile](#cloudflare-turnstile)

---

## 🔒 reCAPTCHA v3 {#recaptcha}

Invisible CAPTCHA để chống spam, không làm phiền user.

### Why reCAPTCHA v3?

- ✅ Invisible - không cần user interaction
- ✅ Score-based - 0.0 (bot) to 1.0 (human)
- ✅ Free - 1 million assessments/month
- ✅ Easy to integrate

### Setup Steps

**1. Register reCAPTCHA**

- Go to: <https://www.google.com/recaptcha/admin/create>
- Label: "Your Site Name"
- Type: **reCAPTCHA v3**
- Domains:

  ```
  finvoras.com
  phamhoangsang.finvoras.com
  localhost
  ```

- Submit

**2. Get Keys**

You'll receive:

- **Site Key** (public) - Use in frontend
- **Secret Key** (private) - Use in backend/Google Form

**3. Add Script to Layout**

```tsx
// apps/*/app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**4. Add Environment Variable**

Create `.env.local`:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
```

**5. Update Config**

```typescript
// lib/utils/google-forms.ts
export const CONTACT_FORM_CONFIG: GoogleFormConfig = {
  formId: "YOUR_FORM_ID",
  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  fields: {
    name: "entry.123456789",
    email: "entry.987654321",
    message: "entry.222222222",
    recaptcha: "entry.444444444",  // ← Add this
  },
};
```

**6. Add reCAPTCHA Field to Google Form**

1. Add **Short answer** question
2. Label: "reCAPTCHA Token"
3. NOT required
4. Get entry ID
5. Add to config (step 5)

### Done

Form now auto-submits reCAPTCHA token. Check Google Form responses to see tokens.

---

## 📎 File Upload {#file-upload}

### Current Status

- ✅ UI is ready (select 0-3 files, max 10MB each)
- ✅ Client-side validation
- ⚠️ **Files DON'T actually upload** (requires Google Drive API)

### Why Not Working?

Google Forms file upload requires:

1. Upload file to Google Drive first
2. Get Drive file ID
3. Submit file ID to form

This needs:

- Google Drive API
- OAuth authentication
- Backend/Cloud Functions
- Complex setup

### Options

#### Option 1: Remove File Upload (Simplest)

Delete file input from components:

```tsx
// Remove this block from contact forms:
<input type="file" ... />
```

#### Option 2: Use Third-Party Service

**Uploadcare** (Recommended)

```bash
npm install @uploadcare/react-widget
```

```tsx
import { Widget } from "@uploadcare/react-widget";

<Widget
  publicKey="your_public_key"
  onFileSelect={(file) => {
    // Get file URL
    const fileUrl = file.cdnUrl;
    // Submit URL to form instead of file
  }}
/>
```

**Other Services:**

- Cloudinary: <https://cloudinary.com/>
- Filestack: <https://www.filestack.com/>
- Dropbox: <https://www.dropbox.com/developers/chooser>

#### Option 3: Google Drive API (Complex)

See official docs:

- <https://developers.google.com/drive/api/guides/manage-uploads>

Requires backend - beyond scope of this simple integration.

### Recommendation

For most use cases: **Remove file upload** or **use Uploadcare**.

---

## 📊 Tracking Fields {#tracking}

Automatically capture analytics data with each submission.

### What Gets Tracked?

- **UTM Parameters:** source, medium, campaign
- **Referrer:** Previous page URL
- **User Agent:** Browser and OS info
- **Timestamp:** Exact submission time

### Already Enabled

Tracking is already working in your forms:

```typescript
const result = await submitToGoogleForm(
  CONTACT_FORM_CONFIG,
  submitData,
  { includeTracking: true }  // ← Already enabled
);
```

### Setup in Google Form

**1. Add Hidden Fields**

Add **Short answer** questions (NOT required):

- "UTM Source"
- "UTM Medium"
- "UTM Campaign"
- "Referrer"
- "User Agent"
- "Timestamp"

**2. Get Entry IDs**

Preview → Inspect → Get entry IDs

**3. Update Config**

```typescript
fields: {
  name: "entry.123456789",
  email: "entry.987654321",
  message: "entry.222222222",
  
  // Add tracking fields
  tracking_source: "entry.444444444",
  tracking_medium: "entry.555555555",
  tracking_campaign: "entry.666666666",
  tracking_referrer: "entry.777777777",
  tracking_userAgent: "entry.888888888",
  tracking_timestamp: "entry.999999999",
}
```

### Test Tracking

Visit your site with UTM parameters:

```
https://your-site.com/?utm_source=twitter&utm_medium=social&utm_campaign=launch
```

Submit form → Check Google Form responses → See tracking data!

### Use Cases

- **Marketing:** Track campaign effectiveness
- **Analytics:** See where traffic comes from
- **Debugging:** User agent helps identify browser issues
- **Timestamps:** Analyze submission patterns

---

## 🛡️ Cloudflare Turnstile {#cloudflare-turnstile}

Privacy-friendly alternative to reCAPTCHA.

### Why Turnstile?

- ✅ **Better privacy** - No tracking
- ✅ **Faster** - Lightweight
- ✅ **Free** - Forever
- ✅ **No CAPTCHAs** - Invisible
- ✅ **GDPR compliant**

### Setup

**1. Sign Up**

- <https://dash.cloudflare.com/sign-up>
- Go to **Turnstile**
- Add Site

**2. Add Script**

```tsx
<Script
  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
  strategy="lazyOnload"
/>
```

**3. Add Widget**

```tsx
<div
  className="cf-turnstile"
  data-sitekey="YOUR_SITE_KEY"
  data-callback="onSuccess"
/>
```

**4. Handle Token**

```tsx
window.onSuccess = (token: string) => {
  // Submit with form
};
```

**5. Same Google Form Setup**

Add hidden field for Turnstile token, same as reCAPTCHA.

---

## 🎯 Recommended Setup

### For MVP (Minimum Viable Product)

```
✅ Basic form (Name, Email, Message)
✅ Red asterisks
⚠️ Skip file upload
❌ No CAPTCHA (add later if spam becomes issue)
❌ No tracking (add later if needed)
```

### For Production

```
✅ Basic form
✅ reCAPTCHA v3 or Cloudflare Turnstile
✅ Tracking fields
⚠️ Skip file upload (or use Uploadcare)
✅ Email notifications
✅ Google Sheets integration
```

### For Enterprise

```
✅ Everything above
✅ File upload via third-party service
✅ Custom backend for validation
✅ CRM integration
✅ Advanced analytics
```

---

## 🔧 Troubleshooting

### reCAPTCHA Not Loading

- ✓ Check site key is correct
- ✓ Verify domain is registered
- ✓ Check browser console for errors
- ✓ Ensure script loads before form

### Files Not Uploading

**Expected!** This is normal without Google Drive API.

Solutions:

1. Remove file upload UI
2. Use third-party service
3. Implement Drive API (complex)

### Tracking Data Not Appearing

- ✓ Verify entry IDs are correct
- ✓ Check `includeTracking: true` is set
- ✓ Test with UTM parameters in URL
- ✓ Check Google Form has tracking fields

---

## 📚 Resources

- [reCAPTCHA v3 Docs](https://developers.google.com/recaptcha/docs/v3)
- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)
- [Google Drive API](https://developers.google.com/drive/api)
- [Uploadcare](https://uploadcare.com/docs/)
- [UTM Parameters](https://ga-dev-tools.web.app/campaign-url-builder/)

---

**Questions?** Check [SETUP_GUIDE.md](./SETUP_GUIDE.md) or open an issue!
