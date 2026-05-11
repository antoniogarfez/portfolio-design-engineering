# Antonio García Fernández — Portfolio Website

**Industrial Design Engineer | A Coruña, Spain**  
Live site: `https://YOUR_USERNAME.github.io/portfolio/`

---

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Homepage with hero + selected works
├── work.html           ← All projects listing
├── about.html          ← About me + skills
├── cv.html             ← Full curriculum vitae
├── contact.html        ← Contact form + info
├── css/
│   └── style.css       ← All styles (one file)
├── js/
│   └── main.js         ← Cursor, animations, interactions
├── images/             ← ALL images go here (see list below)
├── files/
│   └── CV_AntonioGarciaFernandez.pdf   ← Your downloadable CV
└── projects/
    ├── proraptor.html
    ├── containers.html
    ├── wastebin.html
    ├── thermal.html
    ├── navantia.html
    ├── masks.html
    ├── modules.html
    ├── relief.html
    ├── line-plane.html
    └── amphibian-bike.html
```

---

## 🚀 Step-by-Step: GitHub Pages Deployment

### Step 1 — Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name it: `portfolio` (or your preferred name)
4. Set to **Public**
5. Do NOT initialise with README (you already have files)
6. Click **Create repository**

### Step 2 — Clone & Open in VS Code

```bash
# In your terminal:
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
code .
```

### Step 3 — Copy Files Into the Repo

Copy all the portfolio files from this zip into the cloned folder.

### Step 4 — Add Your Images

Place your images in the `images/` folder with these exact names:

| Filename | Description |
|---|---|
| `proraptor-hero.jpg` | Proraptor front dramatic shot |
| `proraptor-front.jpg` | Proraptor front view render |
| `proraptor-side.jpg` | Proraptor side view render |
| `proraptor-water1.jpg` | Proraptor on water scene |
| `proraptor-water2.jpg` | Proraptor hydrofoil mode |
| `proraptor-night.jpg` | Proraptor night city scene |
| `portrait.jpg` | Your portrait photo (from CV) |
| `containers-thumb.jpg` | Container 3D render |
| `containers-street.jpg` | Container in street context |
| `wastebin-thumb.jpg` | Waste bin 3D render |
| `wastebin-street.jpg` | Waste bin in context |
| `thermal-thumb.jpg` | Thermal emitter render |
| `thermal-room.jpg` | Thermal emitter in room |
| `navantia-thumb.jpg` | Navantia USV 3D model |
| `navantia-parts.jpg` | Navantia sectioning diagram |
| `masks-thumb.jpg` | 3D masks render |
| `masks-physical.jpg` | Physical mask prototype |
| `modules-thumb.jpg` | Modules 3D render |
| `modules-physical.jpg` | Physical module sculpture |
| `relief-thumb.jpg` | Relief 3D model |
| `relief-physical.jpg` | Relief physical maquette |
| `lineplane-thumb.jpg` | Point-line-plane final composition |
| `lineplane-detail.jpg` | Detail of composition |
| `bike-thumb.jpg` | Amphibian bike 3D render |
| `bike-detail.jpg` | Bike technical drawing |

**Image tips:**
- Export from Blender/Rhinoceros as JPG, 1920×1080 minimum
- Compress with [Squoosh](https://squoosh.app) or [TinyJPG](https://tinyjpg.com)
- Target: under 300KB per image for fast loading

### Step 5 — Add Your CV PDF

Place your CV PDF at: `files/CV_AntonioGarciaFernandez.pdf`

### Step 6 — Commit and Push

```bash
git add .
git commit -m "Initial portfolio launch"
git push origin main
```

### Step 7 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select: `main` branch, `/ (root)` folder
4. Click **Save**
5. Wait ~60 seconds
6. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## ✏️ How to Update the Site

### Adding a New Project

1. Create `projects/new-project.html` (copy any existing project page as template)
2. Add the project card to `work.html` and `index.html` (Selected Works section)
3. Add images to `images/`
4. Commit and push

### Updating Text

All content is directly in the HTML files. Open in VS Code, edit, save, commit, push.

### Changing Colours

Open `css/style.css` and edit the CSS variables at the top:

```css
:root {
  --accent: #F4951D;  /* Change this to change the orange accent */
  --bg:     #080808;  /* Main background */
}
```

### Activating the Contact Form

Replace the button onclick with Formspree (free):
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint URL
3. In `contact.html`, add `action="https://formspree.io/f/YOUR_ID"` to the form tag

---

## 🎨 Design System

- **Font Headings:** Michroma (Google Fonts)
- **Font Body:** Rajdhani (Google Fonts)
- **Font Code/Labels:** JetBrains Mono (Google Fonts)
- **Accent Color:** `#F4951D` (Proraptor Orange)
- **Background:** `#080808` (Deep Black)
- **Grid:** 12-column CSS Grid

---

## 📞 Contact

Antonio García Fernández  
tonideume@gmail.com  
+34 604 003 381
