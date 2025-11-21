# AI Chatbot Troubleshooting Guide

## What I Just Fixed

I simplified the Gemini API integration to be more reliable:

1. ✅ Removed the `systemInstruction` parameter (which might not be supported in all versions)
2. ✅ Now prepends context to each message instead
3. ✅ Added better error logging with emojis for easy debugging
4. ✅ Added more specific error messages

## How to Test the Chatbot

### Step 1: Check Browser Console

1. Open your browser to http://localhost:5173/
2. Press F12 to open Developer Tools
3. Go to the "Console" tab
4. You should see: `✅ Gemini AI initialized successfully`

If you see `⚠️ Gemini API Key is missing`, then your `.env.local` file isn't being read.

### Step 2: Test the Chat

1. Click the blue floating button (bottom right with sparkle icon)
2. Type: "What are Carlo's skills?"
3. Press Enter or click Send

### Step 3: Check Console Logs

You should see:
- `📤 Sending message to Gemini: What are Carlo's skills?`
- `📥 Received response from Gemini`

If you see an error, it will tell you exactly what went wrong.

## Common Issues & Solutions

### Issue 1: "API Key is offline"
**Solution**: Your `.env.local` file isn't set up correctly.

Make sure you have a file named `.env.local` (with a dot at the start) in the `d:\code\Portfolio` folder with this content:
```
VITE_API_KEY=AIzaSyCfF_ayhBQB5kZwStZ2MZzgl94s-Zh_byo
```

After creating/editing the file, **restart the dev server**:
- Stop it (Ctrl+C in terminal)
- Run `npm run dev` again

### Issue 2: "API key error"
**Solution**: Your API key might be invalid or revoked.

1. Go to https://aistudio.google.com/app/apikey
2. Create a new API key
3. Update your `.env.local` file
4. Restart the dev server

### Issue 3: "API quota exceeded"
**Solution**: You've hit the free tier limit.

- Wait for the quota to reset (usually daily)
- Or upgrade your Google Cloud account

### Issue 4: "404 endpoint not found"
**Solution**: The API endpoint might have changed.

- Make sure you're using the latest version of `@google/generative-ai`
- Run: `npm install @google/generative-ai@latest`

### Issue 5: Chat opens but doesn't respond
**Solution**: Check the browser console for errors.

1. Open DevTools (F12)
2. Look for red error messages
3. The error message will tell you what's wrong

## Verify Your Setup

### Check 1: Is the .env.local file in the right place?
Run this in PowerShell from the Portfolio folder:
```powershell
Get-Content .env.local
```

You should see:
```
VITE_API_KEY=AIzaSyCfF_ayhBQB5kZwStZ2MZzgl94s-Zh_byo
```

### Check 2: Is the dev server reading the environment variable?
Add this console.log to see if the API key is being loaded:

In `geminiService.ts`, you can temporarily add:
```typescript
console.log("API Key loaded:", apiKey ? "✅ Yes" : "❌ No");
```

### Check 3: Test the API key directly
You can test if your API key works by making a direct request:

```javascript
// Open browser console and paste this:
fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCfF_ayhBQB5kZwStZ2MZzgl94s-Zh_byo', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: 'Hello' }] }]
  })
})
.then(r => r.json())
.then(d => console.log(d))
```

If this works, your API key is valid!

## What the Console Logs Mean

- `✅ Gemini AI initialized successfully` = Everything is set up correctly
- `⚠️ Gemini API Key is missing` = No API key found in .env.local
- `📤 Sending message to Gemini: [message]` = Your message is being sent
- `📥 Received response from Gemini` = Response received successfully
- `❌ Gemini API Error: [error]` = Something went wrong (check the error message)

## Still Not Working?

If you've tried everything above and it's still not working, please:

1. Share the exact error message from the browser console
2. Confirm that your `.env.local` file exists and has the API key
3. Confirm that you restarted the dev server after creating/editing `.env.local`

The most common issue is forgetting to restart the dev server after creating the `.env.local` file!
