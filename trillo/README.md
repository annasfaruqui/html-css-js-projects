# ✈️ Trillo — Your All-in-One Booking App

Trillo is a luxury hotel and travel booking web application interface. This project is a comprehensive masterclass dedicated to mastering modern layout design using **CSS Flexbox**, SVG icon sprite systems, and Sass.

---

## 🌐 Live Demo & Course Information

- **Live Demo:** [https://trillo-annasfaruqui.netlify.app/](https://trillo-annasfaruqui.netlify.app/)
- **Course:** [Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass) by **Jonas Schmedtmann**

---

## ✨ Features

- **100% Flexbox Layout:** Engineered entirely with modern CSS Flexbox — covering the master container, header, search bar, user notifications, sidebar navigation, hotel overview, detail pane, and booking call-to-action.
- **SVG Sprite Icon Integration:** Uses an external SVG sprite sheet (`img/sprite.svg`) referenced through `<svg class="icon"><use xlink:href="..."></svg>` for sharp, lightweight, and scalable vector icons.
- **Animated Sidebar Navigation:** Lateral hover animations where the active highlight background expands smoothly horizontally and vertically on hover using pseudo-elements and CSS transitions.
- **Header Bar with Search & User Nav:**
  - Animated search input that expands upon focus.
  - Notification badges for bookmarks and messages.
  - User profile avatar and username indicator.
- **Hotel Overview & Detail View:**
  - Hotel star rating and location pin with link.
  - User rating badge with total votes and average score (8.6).
  - 3-photo preview gallery of the hotel.
  - Key amenity bullet points formatted in a multi-column flex list.
  - Social proof avatar cluster showing friends who previously stayed there.
- **User Review Cards:** Testimonial cards featuring user quotes, user photos, publication dates, and individual ratings.
- **Call to Action (CTA):** Booking section with animated button effects ("Only 4 rooms left!").

---

## 🛠️ Built With

- **HTML5:** Clean semantic markup
- **CSS Flexbox:** Flexible box layout standard
- **Sass (SCSS):** Modular SCSS variables, mixins, and components
- **SVG Sprite Sheet:** Scalable vector graphics for all UI icons
- **Tooling:** Node-sass, PostCSS, Autoprefixer, live-server

---

## 🚀 How to Run Locally

### Option 1: Live Server or Browser (Zero Setup)

Pre-compiled production CSS is already available in [`css/style.css`](css/style.css):

1. Open the `trillo` folder in **VS Code**.
2. Right-click [`index.html`](index.html) and select **"Open with Live Server"** (or simply double-click [`index.html`](index.html) in your file explorer).

### Option 2: Sass Development Workflow (With npm)

If you wish to edit SCSS files and have them auto-compiled:

1. Ensure [Node.js](https://nodejs.org/) is installed.
2. Open terminal in the `trillo` folder:
   ```bash
   cd trillo
   npm install
   ```
3. Start the live-server and Sass watcher:
   ```bash
   npm start
   ```
4. Build the final minified stylesheet:
   ```bash
   npm run build:css
   ```

---

## 👨‍🏫 Acknowledgements & Credits

- This project was designed and built as part of **[Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass)** taught by **Jonas Schmedtmann** on Udemy.
- Special thanks to **Jonas Schmedtmann** for the UI/UX design, SVG sprite assets, and flexbox curriculum.
