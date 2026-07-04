# Sharvani Lekkala - Software & AI Engineering Portfolio

Welcome to the repository for my professional portfolio. This project was built to showcase my expertise in Software Engineering and Artificial Intelligence, utilizing a highly modern, scalable, and premium web technology stack. 

The design follows an **"Editorial Tech"** aesthetic: combining the clean, rigid lines of engineering (inspired by a badminton court's bento-box grid) with elegant typography (Playfair Display) to create a formal, premium feel.

## 🚀 Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/) (Powered by Rolldown for lightning-fast builds)
- **Routing:** [React Router v6](https://reactrouter.com/) (Client-side routing for an SPA experience)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS for rapid, scalable styling)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Physics-based animations, specifically tuned for shuttlecock-like "hang and snap" effects)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** GitHub Pages via GitHub Actions

## 🎨 Design Philosophy

### The Signature "PCB Court" Background
The defining visual element of the portfolio is a layered, parallax background that seamlessly blends a badminton court schematic with printed circuit board (PCB) traces. 
- **Dual Meaning:** At a glance, it appears as an elegant, complex engineering blueprint. Upon closer inspection, the recognizable geometry of a badminton court emerges. This symbolizes the intersection of a career in Software Engineering with an identity as a State-Level Badminton Player.
- **Ambient Animation:** The background features three distinct depth layers that drift and rotate imperceptibly slowly. It responds dynamically to scroll and cursor movement using GPU-accelerated Framer Motion springs, adding depth without distracting from the content.

### Color Palette
- **Onyx (`#0A0A0A`):** A deep, rich black providing a modern dark-mode canvas.
- **Optic Green (`#10B981`):** A vibrant, highly visible accent color (reminiscent of synthetic court lines and circuit board traces) used for interactive elements and highlights.
- **Optic Yellow (`#FBBF24`):** Used exceedingly sparingly to mimic a shuttlecock cork.

### Typography
- **Headings (Playfair Display):** A high-contrast Serif font that brings an editorial, premium, and formal magazine-like quality to the site, breaking away from standard "tech" templates.
- **Body (Inter):** The industry standard for legible, crisp UI text.

## 📁 Project Structure

```text
├── .github/workflows/   # CI/CD pipelines (GitHub Actions for Pages deployment)
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── components/      # Reusable UI components (Hero, Navbar, ProjectCard)
│   ├── data/            # Local data layer (projects.ts, skills.ts) - Edit here to add content!
│   ├── hooks/           # Custom React hooks (e.g., useTheme)
│   ├── pages/           # Route-level views (Home, ProjectDetail)
│   ├── App.tsx          # Main application routing and layout
│   ├── index.css        # Global CSS, Tailwind directives, and custom animations
│   └── main.tsx         # React DOM entry point
├── index.html           # HTML entry point containing font imports and SEO meta tags
├── tailwind.config.cjs  # Tailwind configuration (custom colors, fonts, animations)
└── vite.config.ts       # Vite bundler configuration
```

## 🛠️ How to Add or Edit Content

This portfolio is designed to be easily maintained without needing to write HTML/CSS. All content is driven by local data files.

### 📝 Placeholders to Update
To make this portfolio yours, search for and replace the following placeholders in the code:
1. **`src/components/Hero.tsx`**
   - Replace `"https://github.com/placeholder"` with your GitHub profile URL.
   - Replace `"https://linkedin.com/in/placeholder"` with your LinkedIn profile URL.
   - Replace `"Sharvani Lekkala"` with your actual name.
2. **`src/pages/Home.tsx`**
   - Replace `"your.email@example.com"` with your email address (in the Contact section).
   - Replace `"+91 xxxxxxxxxx"` with your phone number.
3. **`src/data/projects.ts`**
   - Replace the dummy projects with your own. Ensure you update `repoUrl`, `demoUrl`, and images.
4. **`src/data/skills.ts`**
   - Replace the dummy skills with your actual technical stack.

### Adding a New Project
1. Open `src/data/projects.ts`
2. Copy an existing project object from the `projects` array.
3. Paste it and update the fields (`title`, `description`, `techStack`, `image`, etc.).
4. The project will automatically appear on the Home page and get its own dedicated case study page at `/projects/:id`.

### Updating Skills
1. Open `src/data/skills.ts`
2. Add new categories or append technologies to the `items` array.
3. They will automatically render in the "Technical Arsenal" section.

## 💻 Local Development

To run this project locally on your machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173`.

## 🚢 Deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

Whenever you push a change to the `main` branch, the `.github/workflows/deploy.yml` workflow will trigger, build the Vite app, and publish the `dist` directory to the `gh-pages` branch.
