# 🚀 Frontend Projects Portfolio (HTML, CSS & JavaScript)

A curated collection of **9 frontend web projects** showcasing modern web development techniques — ranging from interactive browser mini-games and complex single-page JavaScript applications (MVC) to responsive production landing pages and advanced CSS layouts (CSS Grid, Flexbox, Sass).

All projects in this repository were built by **Annas Faruqui** following the comprehensive web development and frontend mastercourses taught by **Jonas Schmedtmann** on Udemy.

---

## 📂 Projects Overview

|   #    | Project                                | Category                       | Tech Stack                     | Live Demo                                                | Source Code                             |
| :----: | :------------------------------------- | :----------------------------- | :----------------------------- | :------------------------------------------------------- | :-------------------------------------- |
| **01** | [Bankist](#1-bankist)                  | Interactive Landing Page       | HTML5, CSS3, Vanilla JS        | _Local Only_                                             | [`/bankist`](./bankist)                 |
| **02** | [Forkify](#2-forkify)                  | Recipe Web Application         | Vanilla JS (MVC), Sass, Parcel | [Live Site ↗](https://forkify-annasfaruqui.netlify.app)  | [`/forkify`](./forkify)                 |
| **03** | [Guess My Number!](#3-guess-my-number) | Browser Mini-Game              | HTML5, CSS3, Vanilla JS        | _Local Only_                                             | [`/guess-my-number`](./guess-my-number) |
| **04** | [Mapty](#4-mapty)                      | Geo-Workout Tracker            | Vanilla JS (OOP), Leaflet.js   | _Local Only_                                             | [`/mapty`](./mapty)                     |
| **05** | [Natours](#5-natours)                  | Outdoor Tour Landing Page      | HTML5, Advanced Sass, PostCSS  | [Live Site ↗](https://natours-annasfaruqui.netlify.app)  | [`/natours`](./natours)                 |
| **06** | [Nexter](#6-nexter)                    | Real Estate Landing Page       | HTML5, Sass, CSS Grid          | [Live Site ↗](https://nexter-annasfaruqui.netlify.app/)  | [`/nexter`](./nexter)                   |
| **07** | [Omnifood](#7-omnifood)                | Food Subscription Landing Page | Semantic HTML5, CSS3, JS       | [Live Site ↗](https://omnifood-annasfaruqui.netlify.app) | [`/omnifood`](./omnifood)               |
| **08** | [Pig Game](#8-pig-game)                | 2-Player Dice Game             | HTML5, CSS3, Vanilla JS        | _Local Only_                                             | [`/pig-game`](./pig-game)               |
| **09** | [Trillo](#9-trillo)                    | Travel Booking UI              | HTML5, Sass, Flexbox, SVG      | [Live Site ↗](https://trillo-annasfaruqui.netlify.app/)  | [`/trillo`](./trillo)                   |

---

## 📖 Detailed Project Summaries

### 1. Bankist

- **Directory:** [`/bankist`](./bankist)
- **Live Demo:** _Not deployed (Available to run locally)_
- **Description:** A minimalist marketing landing page for a fictional modern bank. Focuses on advanced DOM manipulation and modern browser APIs.
- **Key Features:**
  - Modal window for account creation with overlay and escape key support.
  - Smooth scrolling navigation.
  - Sticky header navigation powered by the **Intersection Observer API**.
  - Dynamic tabbed component for operations and features.
  - Performance-optimized lazy-loading images with blur-up transitions.
  - Interactive testimonial carousel / slider with keyboard arrow navigation.

---

### 2. Forkify

- **Directory:** [`/forkify`](./forkify)
- **Live Demo:** [https://forkify-annasfaruqui.netlify.app](https://forkify-annasfaruqui.netlify.app)
- **Description:** A full-featured recipe search and management application interfacing with the Forkify REST API (1,000,000+ recipes), architected using the Model-View-Controller (MVC) design pattern.
- **Key Features:**
  - Asynchronous recipe search with paginated results.
  - Real-time serving size adjustments (+/-) with proportional ingredient fraction formatting via `fracty`.
  - Local recipe bookmarking persisted in `localStorage`.
  - Custom recipe upload modal with input validation sending data to the Forkify API.
  - Hash-based routing (`#id`) to seamlessly load and share specific recipes.
  - Bundled and optimized using Parcel 2 with ES6+ polyfilling (`core-js`, `regenerator-runtime`).

---

### 3. Guess My Number!

- **Directory:** [`/guess-my-number`](./guess-my-number)
- **Live Demo:** _Not deployed (Available to run locally)_
- **Description:** An interactive retro-styled browser guessing game demonstrating core DOM manipulation, event listeners, and game state logic in vanilla JavaScript.
- **Key Features:**
  - Pseudo-random secret number generator (1–20).
  - Real-time conditional feedback (_"Too high!"_, _"Too low!"_, _"Correct Number!"_).
  - Score countdown and persistent high score tracking across rounds.
  - Dynamic UI state updates and victory styling on win.
  - "Again!" reset button to replay without page reloading.

---

### 4. Mapty

- **Directory:** [`/mapty`](./mapty)
- **Live Demo:** _Not deployed (Available to run locally)_
- **Description:** A workout logging application that maps workouts directly onto an interactive map using the HTML5 Geolocation API and the Leaflet.js mapping library.
- **Key Features:**
  - Automatic geolocation detection to center the map on the user's current coordinates.
  - Click anywhere on the map to trigger a workout creation form.
  - Supports Running (pace & cadence) and Cycling (speed & elevation gain).
  - Object-Oriented Programming (OOP) architecture with ES6 classes (`Workout`, `Running`, `Cycling`, and `App`).
  - Pan-to-marker animation when clicking any workout entry in the sidebar.
  - Full data persistence across browser reloads using `localStorage`.

---

### 5. Natours

- **Directory:** [`/natours`](./natours)
- **Live Demo:** [https://natours-annasfaruqui.netlify.app](https://natours-annasfaruqui.netlify.app)
- **Description:** A landing page for an outdoor adventure tour agency, built to showcase advanced CSS3 animations, 3D transformations, and scalable Sass architecture.
- **Key Features:**
  - Pure CSS fullscreen circular navigation menu powered by the checkbox hack.
  - 3D rotating tour cards with flip perspective.
  - Polygonal clip-path hero banner and background video testimonial section.
  - Modular 7-1 Sass architecture pattern with mixins, functions, and variables.
  - BEM (Block-Element-Modifier) naming methodology.
  - Automated build workflow using Node-sass, PostCSS, and Autoprefixer.

---

### 6. Nexter

- **Directory:** [`/nexter`](./nexter)
- **Live Demo:** [https://nexter-annasfaruqui.netlify.app/](https://nexter-annasfaruqui.netlify.app/)
- **Description:** A luxury real estate agency portal built as a deep dive into modern **CSS Grid** layout design.
- **Key Features:**
  - Complete page layout orchestrated via complex 8-row, 8-column CSS Grid.
  - Advanced grid techniques: `minmax()`, `repeat(auto-fit, ...)`, and named grid lines.
  - Top realtors section, feature cards, and property listings with SVG icons.
  - Dense photo mosaic gallery spanning multiple row/column tracks.
  - Fully responsive across viewport sizes without extensive media queries.

---

### 7. Omnifood

- **Directory:** [`/omnifood`](./omnifood)
- **Live Demo:** [https://omnifood-annasfaruqui.netlify.app](https://omnifood-annasfaruqui.netlify.app)
- **Description:** A production-ready, fully responsive landing page for an AI-powered healthy meal delivery subscription service.
- **Key Features:**
  - Mobile-first responsive web design with fine-tuned breakpoints for mobile, tablet, and desktop.
  - Sticky header navigation using the Intersection Observer API.
  - Mobile slide-out hamburger navigation menu.
  - Interactive meal cards with diet badges, nutritional values, and customer reviews collage.
  - Tiered pricing tables and custom lead capture CTA contact form.
  - PWA-ready with Web App Manifest and custom touch icons.

---

### 8. Pig Game

- **Directory:** [`/pig-game`](./pig-game)
- **Live Demo:** _Not deployed (Available to run locally)_
- **Description:** A digital two-player turn-based dice game demonstrating game state machines, active player toggles, and dynamic DOM updates.
- **Key Features:**
  - Random dice rolling with real-time dice face image switching (`dice-1.png` - `dice-6.png`).
  - Turn logic: accumulate points in current round, or lose round points if rolling a 1.
  - "Hold" action to commit temporary score to permanent global score.
  - Win condition detection (100 points) with victory styling and action locking.
  - "New Game" reset functionality to restart without page refresh.

---

### 9. Trillo

- **Directory:** [`/trillo`](./trillo)
- **Live Demo:** [https://trillo-annasfaruqui.netlify.app/](https://trillo-annasfaruqui.netlify.app/)
- **Description:** A hotel booking and flight reservation interface engineered as a comprehensive masterclass in **CSS Flexbox** and SVG sprites.
- **Key Features:**
  - 100% Flexbox layout architecture across header, sidebar, main content, and detail panes.
  - External SVG sprite system for vector icons (`<svg><use xlink:href="..."></svg>`).
  - Lateral expanding hover animations on sidebar navigation items.
  - Hotel photo gallery, user rating statistics, amenities flex list, and friend recommendation avatar cluster.
  - Customer testimonial review cards and booking CTA section.

---

## 💻 How to Run These Projects Locally

### 1. Static / Vanilla Projects (No Build Step Required)

_Projects:_ `bankist`, `guess-my-number`, `mapty`, `omnifood`, `pig-game`

- **Using VS Code Live Server (Recommended):**
  1. Open the project folder in VS Code.
  2. Right-click on `index.html` and select **"Open with Live Server"**.
  3. _(Note: For **Mapty**, running via a local server such as Live Server is required so the browser grants Geolocation permissions)._
- **Direct Browser Open:**
  1. Simply navigate to the folder in your file explorer.
  2. Double-click `index.html` (or drag & drop it into Chrome, Edge, Safari, or Firefox).

### 2. Sass & Tooling Projects (With npm Scripts)

_Projects:_ `forkify`, `natours`, `nexter`, `trillo`

- _Note:_ All projects already contain pre-compiled CSS/assets, so you can also view them immediately by opening their `index.html` file using Live Server!
- **To run the full development / build workflow:**

  ```bash
  # Navigate to the project directory
  cd <project-folder>

  # Install dependencies
  npm install

  # Start development server & watchers
  npm start
  ```

---

## 👨‍🏫 Acknowledgements & Credits

All projects in this repository were created by **Annas Faruqui** as part of the web development and frontend curriculum created by instructor **Jonas Schmedtmann**.

A massive thank you to **Jonas Schmedtmann** for his masterfully crafted courses, exceptional design assets, clear architectural explanations, and passion for clean, modern code.

### Courses Referenced:

1. **[The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course)**
   - _Projects:_ Bankist, Forkify, Mapty, Pig Game, Guess My Number!
2. **[Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass)**
   - _Projects:_ Natours, Nexter, Trillo
3. **[Build Responsive Real-World Websites with HTML and CSS](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3)**
   - _Projects:_ Omnifood
