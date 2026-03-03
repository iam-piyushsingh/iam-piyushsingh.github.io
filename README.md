# Piyush Singh — Portfolio Website

A professional portfolio website for Piyush Singh, Class 9 CBSE student & 3× Science Fair 1st Prize winner.

## 🚀 How to Deploy on GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click the **+** icon → **New repository**.
3. Name it exactly: `piyush.jkpatelnx.in` *(or any name you prefer)*.
4. Set it to **Public**.
5. Click **Create repository**.

### Step 2 — Upload Files
**Option A — GitHub Web (easiest):**
1. Open your new repository.
2. Click **Add file → Upload files**.
3. Drag and drop ALL files from this folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/` folder (with all `.png` files inside)
4. Click **Commit changes**.

**Option B — Git CLI:**
```bash
cd /Users/jitendra/ai/piyush.jkpatelnx.in
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/piyush.jkpatelnx.in.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repository, go to **Settings → Pages**.
2. Under **Source**, select branch: **main**, folder: **/ (root)**.
3. Click **Save**.
4. Wait ~1 minute. Your site will be live at:
   `https://YOUR_USERNAME.github.io/piyush.jkpatelnx.in/`

> 💡 **Tip:** If you use a custom domain like `piyush.jkpatelnx.in`, add it in Settings → Pages → Custom domain.

## 📁 File Structure
```
piyush.jkpatelnx.in/
├── index.html       ← Main page
├── styles.css       ← Styling
├── script.js        ← Animations & interactivity
├── README.md        ← This file
└── images/
    ├── profile.png
    ├── alarm1.png   ← Anti-sleep alarm project
    ├── alarm2.png
    ├── alarm3.png
    ├── lpg1.png     ← LPG gas detector project
    ├── lpg2.png
    ├── lpg3.png
    ├── solar1.png   ← Solar tracker project
    ├── solar2.png
    └── solar3.png
```
