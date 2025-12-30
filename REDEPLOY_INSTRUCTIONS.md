# How to Redeploy Google Apps Script After Code Changes

When you update your Google Apps Script code, you **must redeploy** for the changes to take effect. The old deployment is still running the old code.

## Step-by-Step Redeployment Instructions

### Option 1: Update Existing Deployment (Recommended)

1. **Open Google Apps Script Editor**
   - Go to your Google Sheet
   - Click **Extensions** > **Apps Script**

2. **Verify Your Code is Updated**
   - Make sure the new code is pasted (with `insertRowBefore(2)` and the new column order)
   - Click the **Save** icon (💾) or press `Cmd+S` (Mac) / `Ctrl+S` (Windows)

3. **Deploy Updated Version**
   - Click **Deploy** > **Manage deployments** (or click the gear icon next to "Deploy")
   - You'll see your existing deployment listed
   - Click the **pencil/edit icon** (✏️) next to your deployment

4. **Create New Version**
   - Under "Version", select **New version**
   - Update the description if you want (e.g., "Updated to insert rows at top with IST timestamp")
   - Click **Deploy**

5. **Important**: 
   - The Web App URL **stays the same** - you don't need to change anything in your `.env.local` file
   - The new version will be active immediately

### Option 2: Create a New Deployment (Alternative)

If Option 1 doesn't work:

1. **Open Google Apps Script Editor**
   - Go to your Google Sheet
   - Click **Extensions** > **Apps Script**

2. **Save Your Code**
   - Make sure all changes are saved
   - Click **Save** icon

3. **Create New Deployment**
   - Click **Deploy** > **New deployment**
   - Click the gear icon (⚙️) next to "Select type"
   - Choose **Web app**

4. **Configure Deployment**
   - **Description**: "Partner Form Handler v2" (or any name)
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone**
   - Click **Deploy**

5. **Copy the New URL**
   - A new Web App URL will be generated
   - **Copy this URL**
   - Update your `.env.local` file:
     ```env
     NEXT_PUBLIC_SCRIPT_URL_SHEET=https://script.google.com/macros/s/NEW_SCRIPT_ID/exec
     ```
   - **Also update it in your production environment** (Vercel/Netlify/etc.)

6. **Restart Your Dev Server**
   ```bash
   npm run dev
   ```

## Verify the Changes Work

1. **Test in Google Apps Script First** (Optional but Recommended)
   - In the Apps Script editor, select the `testPost` function from the dropdown
   - Click the **Run** button (▶️)
   - Authorize if prompted
   - Check your Google Sheet - a test row should appear at **row 2** (right after headers)
   - The timestamp should be in Indian format (DD/MM/YYYY HH:MM:SS IST)

2. **Test via Your Form**
   - Submit a test entry through your website form
   - Check your Google Sheet
   - The entry should:
     - Appear at **row 2** (top, after headers)
     - Have columns in this order: **Timestamp, Name, Phone, Email, City, Business Type**
     - Show timestamp in Indian format: **DD/MM/YYYY HH:MM:SS IST**

## Common Issues

### "Changes still not working"
- **Solution**: Make sure you clicked "New version" in the deployment, not just saved the code
- Try clearing browser cache and testing again

### "Getting old data format"
- **Solution**: The old deployment is still active. Make sure to select "New version" when editing the deployment

### "Permission errors"
- **Solution**: You may need to re-authorize. Delete the old deployment and create a new one

### "URL changed"
- **Solution**: If you created a new deployment, update `NEXT_PUBLIC_SCRIPT_URL_SHEET` in both:
  - `.env.local` (for local dev)
  - Production environment variables (Vercel/Netlify/etc.)

## Quick Checklist

- [ ] Code updated and saved in Apps Script editor
- [ ] Deployment updated with "New version" selected
- [ ] Web App URL copied (if new deployment)
- [ ] Environment variable updated (if URL changed)
- [ ] Tested with testPost function
- [ ] Tested with actual form submission
- [ ] Verified data appears at row 2 with correct format

