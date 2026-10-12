# 🍴 Forkify — Modern Recipe Search & Management App

Forkify is a full-featured recipe application that interfaces with the Forkify REST API to search over 1,000,000 recipes, adjust ingredient quantities dynamically based on servings, bookmark favorite recipes, and upload your own custom recipes. The project is architected using the Model-View-Controller (MVC) pattern and bundled with Parcel.

---

## 🌐 Live Demo & Course Information

- **Live Demo:** [https://forkify-annasfaruqui.netlify.app](https://forkify-annasfaruqui.netlify.app)
- **Course:** [The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course) by **Jonas Schmedtmann**

---

## ✨ Features

- **Recipe Search & Pagination:** Search from over 1,000,000 recipes with clean paginated results (10 results per page) and previous/next page navigation.
- **Dynamic Servings Adjustment:** Dynamically increase or decrease serving sizes (+/-) with automatic proportional calculation of all ingredient quantities using `fracty` (formats amounts into fractions like `1/2`).
- **Recipe Bookmarking:** Save favorite recipes into local bookmarks with instant synchronization to `localStorage`, accessible across browser sessions.
- **Custom Recipe Upload:** Add custom user-created recipes via a modal form with payload validation, sending data to the Forkify API with a personal developer key.
- **Hash-based Routing:** Changes in the URL hash (`#id`) automatically trigger recipe loading and render state updates.
- **MVC Architecture:** Strict separation of concerns into Model (`model.js`), Views (`recipeView.js`, `searchView.js`, `resultsView.js`, `bookmarksView.js`, `addRecipeView.js`, `paginationView.js`), and Controller (`controller.js`) using the Publisher-Subscriber pattern.
- **Modern Tooling & Polyfills:** Bundled with Parcel 2, utilizing `core-js` and `regenerator-runtime` for comprehensive ES6+ feature polyfilling.

---

## 🛠️ Built With

- **JavaScript (ES6+):** Modern async/await, classes, modules, and MVC architecture
- **SCSS / Sass:** Modular stylesheets and responsive layouts
- **Parcel 2:** Zero-config build tool and development server
- **External API:** [Forkify API v2](https://forkify-api.herokuapp.com/v2)
- **Libraries:** `fracty`, `core-js`, `regenerator-runtime`

---

## 🚀 How to Run Locally

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Startup

1. Open your terminal and navigate to the `forkify` directory:
   ```bash
   cd forkify
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Start the Parcel development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:1234` (or the URL displayed in your terminal).

### Production Build

To create an optimized production bundle:

```bash
npm run build
```

---

## 👨‍🏫 Acknowledgements & Credits

- This project was designed and built as part of **[The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course)** taught by **Jonas Schmedtmann** on Udemy.
- All UI designs, API endpoints, and architectural concepts were designed and provided by **Jonas Schmedtmann**.
