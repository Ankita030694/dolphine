# Google Sheets Form Submission Setup Guide

This guide will help you set up direct form submissions to Google Sheets without needing a database.

## Step-by-Step Setup

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Partner Form Submissions"
4. In Row 1, add these headers in this exact order (one per column):
   - **Timestamp**
   - **Name**
   - **Phone**
   - **Email**
   - **City**
   - **Business Type**

**Note:** New entries will be inserted at the top (row 2), right after the headers. The timestamp will be automatically converted to Indian Standard Time (IST) format (DD/MM/YYYY HH:MM:SS IST).

### 2. Create Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any default code
3. Copy the code from `google-apps-script.js` file in this project
4. Paste it into the Apps Script editor

### 3. Get Your Sheet ID (Optional but Recommended)

If you want to specify a specific sheet ID:

1. Look at your Google Sheet URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```
2. Copy the `YOUR_SHEET_ID_HERE` part
3. In the Apps Script, replace:
   ```javascript
   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
   ```
   with:
   ```javascript
   var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID_HERE').getActiveSheet();
   ```

### 4. Deploy as Web App

1. In the Apps Script editor, click **Deploy** > **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Set the following:
   - **Description**: "Partner Form Submission Handler" (or any name)
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (important for public forms)
5. Click **Deploy**
6. Click **Authorize access** when prompted
   - Choose your Google account
   - Click **Advanced** > **Go to [Project Name] (unsafe)** (if shown)
   - Click **Allow**
7. **Copy the Web App URL** that appears (looks like: `https://script.google.com/macros/s/...`)

### 5. Configure Environment Variable

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add your Google Apps Script Web App URL:

```env
NEXT_PUBLIC_SCRIPT_URL_SHEET=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Important:** The `NEXT_PUBLIC_` prefix is required for client-side components to access the variable.

**Important:** Make sure to use the `/exec` endpoint, not `/dev`

3. Restart your Next.js development server for changes to take effect:
   ```bash
   npm run dev
   ```

### 6. For Production (Vercel/Netlify/etc.)

Add the same environment variable in your hosting platform:

**Vercel:**
1. Go to your project settings
2. Navigate to Environment Variables
3. Add `NEXT_PUBLIC_SCRIPT_URL_SHEET` with your Web App URL
4. Make sure to select **all environments** (Production, Preview, Development)
5. Click Save
6. Redeploy your application for changes to take effect

**Netlify:**
1. Go to Site settings > Environment variables
2. Add `NEXT_PUBLIC_SCRIPT_URL_SHEET` with your Web App URL
3. Redeploy your site

## Testing

1. Fill out the form on your website
2. Submit it
3. Check your Google Sheet - you should see a new row **at the top** (row 2, right after headers) with the submitted data
4. Verify the timestamp is in Indian format (DD/MM/YYYY HH:MM:SS IST)
5. Each new submission will push previous entries down, keeping the newest at the top

## Troubleshooting

### Form shows error but data isn't saved
- Check that your Google Apps Script is deployed with "Anyone" access
- Verify the Web App URL in your `.env.local` file
- Check the Apps Script execution logs (View > Execution transcript)

### CORS errors
- This is normal with `no-cors` mode. The data will still be sent to Google Sheets
- If you need response handling, you'll need to use a Next.js API route as a proxy

### Permission denied
- Make sure you clicked "Allow" during authorization
- Re-deploy the script and authorize again if needed

## Security Notes

- The Google Apps Script URL will be visible in your client-side code
- Anyone can submit data to this endpoint
- Consider adding basic validation in the Apps Script
- For production, you may want to add rate limiting or a simple API key

## Alternative: Using a Next.js API Route (Optional)

If you want more control or need to hide the Google Script URL, you can create a Next.js API route:

1. Create `src/app/api/submit/route.ts`
2. Use the same fetch logic but call your API route instead
3. The API route then calls Google Apps Script server-side

Would you like me to set this up for you?

