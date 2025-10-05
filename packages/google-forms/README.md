# @repo/google-forms

A shared utility package for Google Forms integration across the Finvoras.com project.

## Overview

This package provides a unified interface for submitting data to Google Forms with custom UI components, eliminating code duplication between the main website and portfolio site.

## Features

- ✅ **Simple Form Submission**: Direct submission to Google Forms without backend
- ✅ **reCAPTCHA v3 Integration**: Built-in spam protection
- ✅ **Tracking Support**: UTM parameters and user analytics
- ✅ **TypeScript Support**: Full type safety
- ✅ **Multiple Submit Methods**: Fetch API and iframe fallback
- ✅ **Environment Variables**: Easy configuration with Next.js env vars

## Installation

This package is automatically available in workspace apps. Import it using:

```typescript
import { 
  submitToGoogleForm, 
  createGoogleFormConfig,
  getRecaptchaToken,
  getTrackingData 
} from "@repo/google-forms";
```

## Quick Start

### 1. Set Environment Variables

Create `.env.local` in your app directory:

```bash
# Required: Your Google Form ID
NEXT_PUBLIC_GOOGLE_FORM_ID=1FAIpQLSc_YOUR_FORM_ID_HERE

# Optional: reCAPTCHA v3 Site Key  
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc_YOUR_SITE_KEY_HERE
```

### 2. Configure Entry IDs

⚠️ **CRITICAL**: You must update entry IDs for your specific Google Form:

```typescript
import { createGoogleFormConfig, submitToGoogleForm } from "@repo/google-forms";

// Create config with YOUR actual entry IDs
const formConfig = createGoogleFormConfig({
  fields: {
    name: "entry.123456789",    // ← Replace with YOUR entry ID
    email: "entry.987654321",   // ← Replace with YOUR entry ID
    message: "entry.555666777", // ← Replace with YOUR entry ID
  }
});

// Use in form submission
const result = await submitToGoogleForm(formConfig, formData, {
  includeTracking: true
});
```

### 3. Get Your Entry IDs

1. Open Google Form in preview mode
2. Right-click → Inspect Element (F12)  
3. Find input names: `entry.123456789`
4. Replace placeholder values above

> 💡 **See `example-config.ts` in this package for detailed instructions**

## Environment Variables

Set these in your app's `.env.local`:

```bash
# Required: Your Google Form ID
NEXT_PUBLIC_GOOGLE_FORM_ID=your_form_id_here

# Optional: reCAPTCHA v3 Site Key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_key_here
```

## API Reference

### Types

```typescript
interface GoogleFormConfig {
  formId: string;
  fields: { [key: string]: string };
  recaptchaSiteKey?: string;
}

interface FormData {
  [key: string]: string;
}

interface SubmitResult {
  success: boolean;
  error?: string;
}
```

### Functions

#### `submitToGoogleForm(config, data, options?)`

Primary method for form submission using Fetch API.

#### `submitToGoogleFormViaIframe(config, data)`

Alternative method using hidden iframe (more reliable for some browsers).

#### `createGoogleFormConfig(overrides?)`

Helper to create configuration using environment variables.

#### `getRecaptchaToken(siteKey)`

Get reCAPTCHA v3 token for spam protection.

#### `getTrackingData()`

Extract UTM parameters and browser information for analytics.

## Setup Guide

### 1. Create Google Form

1. Go to [Google Forms](https://docs.google.com/forms)
2. Create a new form with required fields:
   - **Name** (Short answer, required)
   - **Email** (Short answer, required, email validation)
   - **Message** (Paragraph, required)

### 2. Get Form ID and Entry IDs

**Get Form ID:**

1. Copy form URL: `https://docs.google.com/forms/d/e/1FAIpQLSc_YOUR_FORM_ID_HERE/viewform`
2. Extract the Form ID: `1FAIpQLSc_YOUR_FORM_ID_HERE`

**Get Entry IDs (CRITICAL STEP):**

1. Open form in preview mode
2. Right-click → Inspect Element (F12)
3. Find input names like `entry.123456789` for each field:

   ```html
   <!-- Name field -->
   <input name="entry.123456789" ...>
   
   <!-- Email field -->  
   <input name="entry.987654321" ...>
   
   <!-- Message field -->
   <textarea name="entry.555666777" ...>
   ```

4. **Note down these entry IDs - you'll need them in step 4!**

### 3. Configure reCAPTCHA (Optional)

1. Visit [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Create new site with reCAPTCHA v3
3. Add your domain(s): `localhost`, `yourdomain.com`
4. Copy Site Key to environment variables

### 4. Configure Your App

**Step 4.1: Environment Variables**

Create `.env.local` in your app directory:

```bash
# Required: Your Google Form ID from step 2
NEXT_PUBLIC_GOOGLE_FORM_ID=1FAIpQLSc_YOUR_FORM_ID_HERE

# Optional: reCAPTCHA v3 Site Key from step 3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc_YOUR_SITE_KEY_HERE
```

**Step 4.2: Configure Entry IDs (REQUIRED)**

You MUST update the entry IDs to match your Google Form. Choose one method:

**Method 1: Per-form custom config (Recommended)**

```typescript
import { createGoogleFormConfig, submitToGoogleForm } from "@repo/google-forms";

// Create config with your actual entry IDs
const formConfig = createGoogleFormConfig({
  fields: {
    name: "entry.123456789",    // ← Replace with YOUR entry ID from step 2
    email: "entry.987654321",   // ← Replace with YOUR entry ID from step 2
    message: "entry.555666777", // ← Replace with YOUR entry ID from step 2
  }
});

// Use in form submission
const result = await submitToGoogleForm(formConfig, formData, {
  includeTracking: true
});
```

**Method 2: Global config (Advanced)**

Edit the package source directly if all apps use the same form:

```typescript
// packages/google-forms/src/index.ts
// Update the default fields in createGoogleFormConfig function
fields: {
  name: "entry.YOUR_ACTUAL_NAME_ENTRY_ID",      // ← UPDATE THIS
  email: "entry.YOUR_ACTUAL_EMAIL_ENTRY_ID",     // ← UPDATE THIS
  message: "entry.YOUR_ACTUAL_MESSAGE_ENTRY_ID", // ← UPDATE THIS
}
```

## Used By

- `apps/finvoras.com` - Main website contact form
- `apps/phamhoangsang.finvoras.com` - Portfolio contact form

## Migration Notes

This package consolidates the previously duplicated `lib/utils/google-forms.ts` files from both apps, providing a single source of truth for Google Forms integration logic.
