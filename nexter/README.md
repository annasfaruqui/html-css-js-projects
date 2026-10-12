# 🏡 Nexter — Luxury Real Estate Landing Page

Nexter is a modern landing page for a premier luxury real estate agency. This project is a comprehensive masterclass in building complex, modern web layouts purely using **CSS Grid** and Sass.

---

## 🌐 Live Demo & Course Information

- **Live Demo:** [https://nexter-annasfaruqui.netlify.app/](https://nexter-annasfaruqui.netlify.app/)
- **Course:** [Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass/) by **Jonas Schmedtmann**

---

## ✨ Features

- **Comprehensive CSS Grid Architecture:** The entire layout is structured using an 8-row, 8-column CSS Grid without traditional float hacks or complex nested flex wrappers.
- **Modern Grid Functions & Techniques:**
  - Dynamic sizing using `minmax()` and `fr` units.
  - Responsive columns utilizing `repeat(auto-fit, minmax(...))` without requiring tons of media queries.
  - Explicit line-based placement with named grid lines (`[sidebar-start]`, `[full-start]`, `[col-start]`, etc.).
- **Realtors & Header Sections:** Integrated sidebar navigation button, header hero branding, and top-selling realtors gallery.
- **Property Listing Cards:** Detailed real estate cards showcasing property photos, location, room counts, area dimensions, price tags, and CTA buttons styled with SVG icons.
- **Dense Photo Mosaic Gallery:** A 14-image showcase gallery utilizing `grid-row` and `grid-column` span allocations to assemble a harmonious, asymmetrical photo collage.
- **Sass Structure:** Clean separation of variables, mixins, typography, and component styling.

---

## 🛠️ Built With

- **HTML5:** Clean semantic structure
- **CSS Grid & Flexbox:** Modern CSS layout standards
- **Sass (SCSS):** Modular stylesheets, mixins, and variables
- **Tooling:** Node-sass, PostCSS, Autoprefixer, and live-server

---

## 🚀 How to Run Locally

### Option 1: Live Server or Browser (Zero Setup)

Since compiled CSS is already provided in [`css/style.css`](css/style.css), no build tooling is necessary to preview the project:

1. Open the `nexter` folder in **VS Code**.
2. Right-click [`index.html`](index.html) and select **"Open with Live Server"** (or double-click [`index.html`](index.html) in your file explorer).

### Option 2: Development Workflow (With npm)

If you wish to edit SCSS source files and auto-compile them:

1. Ensure [Node.js](https://nodejs.org/) is installed.
2. Open terminal in the `nexter` directory:
   ```bash
   cd nexter
   npm install
   ```
3. Start the live-server and Sass watcher:
   ```bash
   npm start
   ```
4. Build the final compressed stylesheet:
   ```bash
   npm run build:css
   ```

---

## 👨‍🏫 Acknowledgements & Credits

- This project was created as part of **[Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass/)** taught by **Jonas Schmedtmann** on Udemy.
- Gratitude to **Jonas Schmedtmann** for the UI design, image assets, and thorough exploration of modern CSS Grid.
