# 🌲 Natours — Exciting Tours for Adventurous People

Natours is a landing page for an outdoor adventure tour company. It was built to showcase advanced CSS3 and Sass techniques, including the 7-1 Sass pattern, BEM methodology, pure CSS animations, 3D rotating cards, and automated CSS build pipelines.

---

## 🌐 Live Demo & Course Information

- **Live Demo:** [https://natours-annasfaruqui.netlify.app](https://natours-annasfaruqui.netlify.app)
- **Course:** [Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass) by **Jonas Schmedtmann**

---

## ✨ Features

- **Pure CSS Navigation:** Fullscreen circular navigation overlay triggered without JavaScript using the CSS **checkbox hack** (`:checked` pseudo-class and sibling selectors).
- **3D Rotating Tour Cards:** Interactive tour cards that flip 180° along the Y-axis using `perspective`, `transform: rotateY()`, and `backface-visibility: hidden` to reveal booking details and pricing.
- **Polygonal Clip-Path Hero:** Hero header styled using modern `clip-path: polygon()` angled cuts and gradient overlays with `background-blend-mode`.
- **Background Video Section:** Embedded ambient background video with an overlay filter for customer testimonial stories.
- **Custom Form Elements:** Fully custom-styled radio buttons and floating input label animations (`:placeholder-shown`).
- **Advanced 7-1 Sass Architecture:** Modular SCSS folder structure:
  - `base/` (reset, typography, animations, utilities)
  - `components/` (buttons, cards, forms, composition, popups)
  - `layout/` (grid system, header, footer, navigation)
- **Responsive Typography & Media Queries:** Responsive design managed with custom SCSS mixins using `em` breakpoints and root `rem` scaling.

---

## 🛠️ Built With

- **HTML5:** Semantic markup
- **Sass (SCSS):** Variables, mixins, functions, and modular 7-1 architecture
- **BEM Methodology:** Block-Element-Modifier CSS naming conventions
- **Tooling:** Node-sass, PostCSS, Autoprefixer, Concat, and live-server

---

## 🚀 How to Run Locally

### Option 1: Live Server or Browser (Zero Setup)

Because compiled production CSS is already provided in [`css/style.css`](css/style.css), no build step is strictly required to view the website:

1. Open the `natours` folder in **VS Code**.
2. Right-click [`index.html`](index.html) and choose **"Open with Live Server"** (or simply double-click [`index.html`](index.html) in your file explorer).

### Option 2: Sass Development Workflow (With npm)

If you wish to modify SCSS files and run the auto-compilation pipeline:

1. Ensure [Node.js](https://nodejs.org/) is installed.
2. Open your terminal in the `natours` folder:
   ```bash
   cd natours
   npm install
   ```
3. Start the live-server and Sass watcher concurrently:
   ```bash
   npm start
   ```
4. To build and minify the final CSS bundle:
   ```bash
   npm run build:css
   ```

---

## 👨‍🏫 Acknowledgements & Credits

- This project was created as part of **[Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass)** by **Jonas Schmedtmann** on Udemy.
- All graphic design assets, imagery, and CSS architecture principles were designed and provided by **Jonas Schmedtmann**.
