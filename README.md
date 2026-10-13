# The Velora Studios — Official Creative Studio Website

Welcome to **The Velora Studios** (`thevelorastudios.com`), a modern, high-performance creative and digital engineering studio web platform built with **React**, **Vite**, and styled with an editorial design system optimized for **Cloudflare Pages**.

---

## 🚀 Quick Start (Run Locally)

### 1. Prerequisites
- **Node.js**: v18+ (verified on v26+)
- **npm**: v9+ (verified on v11+)

### 2. Installation
```bash
# Navigate to the project directory
cd velora-studios

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled, minified production assets will be generated in the `dist/` directory.

---

## 📁 Project Architecture

```
velora-studios/
├── public/
│   ├── favicon.svg          # Bespoke luxury monogram logo favicon
│   └── og-image.png         # Social graph sharing image
├── src/
│   ├── assets/              # Static SVG and media assets
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed glassmorphism navbar & mobile drawer
│   │   ├── Hero.jsx         # Hero section, stats bar & status ticker
│   │   ├── About.jsx        # Studio manifesto, 3 core pillars & leadership quote
│   │   ├── Services.jsx     # Interactive 4-discipline switcher & deliverables
│   │   ├── Portfolio.jsx    # Filterable project gallery & case study triggers
│   │   ├── Process.jsx      # 4-stage methodology roadmap & FAQ accordion
│   │   ├── Contact.jsx      # Client-side form with validation & direct channels
│   │   ├── Footer.jsx       # Global links, social icons, and Cloudflare badge
│   │   └── Modal.jsx        # Project case study, Privacy Policy & Terms modal
│   ├── data/
│   │   └── studioData.js    # Single source of truth for all content & placeholders
│   ├── App.jsx              # Main application shell & state orchestration
│   ├── App.css              # Component layout grid & visual styling
│   ├── index.css            # Design system, CSS variables & typography
│   └── main.jsx             # React 19 root entrypoint
├── index.html               # Semantic HTML5, Google Fonts & SEO meta tags
├── package.json             # Scripts & dependencies (Lucide icons, React 19, Vite)
└── vite.config.js           # Vite build configuration
```

---

## ✏️ Customizing Placeholders Before Launch

All studio copy, metrics, and project details are centralized in [`src/data/studioData.js`](src/data/studioData.js). Search for `[Placeholder: ...]` to customize:

- **Studio Contact Information**: Email, official studio phone number, and studio locations.
- **Studio Metrics & Honors**: Total projects delivered, client locations, and verified awards.
- **Case Studies**: Replace placeholder client names and metrics with your real portfolio projects.
- **Team Leadership**: Add names and bios for your Creative Director, Lead Engineer, or Partners.

---

## 📬 Connecting the Contact Form to Email

The inquiry form in [`src/components/Contact.jsx`](src/components/Contact.jsx) features complete client-side validation, error handling, and animated confirmation states.

To receive emails directly when clients submit the form:
1. **Option A — Cloudflare Workers (Recommended for Cloudflare)**:
   Create a small Cloudflare Worker that accepts `POST /api/contact` and forwards the data via **Resend** or **SendGrid**.
2. **Option B — Formspree / Web3Forms / Formcarry**:
   Sign up at [Formspree.io](https://formspree.io) or [Web3Forms.com](https://web3forms.com), obtain your endpoint URL, and update the form submission action.

---

## 🌐 Deploying to Cloudflare Pages & Connecting `thevelorastudios.com`

### 1. Push to GitHub
```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/velora-studios.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Cloudflare Pages
1. Go to the **Cloudflare Dashboard** → **Workers & Pages**.
2. Click **Create application** → **Pages** → **Connect to Git**.
3. Select your `velora-studios` repository.
4. Set Build Settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**.

### 3. Connect Custom Domain
1. In your Cloudflare Pages project, click **Custom domains** → **Set up a domain**.
2. Enter `thevelorastudios.com` and follow the automated DNS verification.
3. Repeat for `www.thevelorastudios.com`.
