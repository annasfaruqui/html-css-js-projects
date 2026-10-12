# 🗺️ Mapty — Map Your Workouts

Mapty is a fitness tracking web application that allows users to record and map their running and cycling workouts with exact geographical coordinates. Utilizing the browser's Geolocation API and the Leaflet interactive mapping library, workouts are pinned directly on the map, calculated for metrics like pace or speed, and persisted in `localStorage`.

---

## 🌐 Live Demo & Course Information

- **Live Demo:** _Not deployed (Run locally)_
- **Course:** [The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course) by **Jonas Schmedtmann**

---

## ✨ Features

- **Geolocation Detection:** Automatically detects the user's current geographic location using the HTML5 Geolocation API (`navigator.geolocation.getCurrentPosition`) to center the map.
- **Interactive Leaflet Map:** Click anywhere on the map to trigger a responsive workout input form at that exact coordinate pin.
- **Running & Cycling Workout Types:**
  - **Running:** Tracks distance, duration, and cadence; automatically computes pace (`min/km`).
  - **Cycling:** Tracks distance, duration, and elevation gain; automatically computes speed (`km/h`).
- **Sidebar Activity Feed:** Workouts are rendered in an activity feed with color-coded borders (green for running, orange for cycling), formatted dates, and detailed workout statistics.
- **Pan to Marker:** Clicking any logged workout card in the sidebar automatically animates and centers the map view to that pin with a smooth pan animation (`map.setView`).
- **Persistent Storage:** All logged workouts are automatically serialized and stored in browser `localStorage`, persisting across page reloads.
- **Object-Oriented Architecture (OOP):** Built using ES6 classes and inheritance:
  - Base class `Workout`
  - Child classes `Running` and `Cycling`
  - Controller class `App` managing the application workflow and event handlers

---

## 🛠️ Built With

- **HTML5 & CSS3:** Responsive UI layout with custom modern styling
- **JavaScript (ES6+):** Object-oriented programming (Classes, Inheritance, Private class fields/methods)
- **[Leaflet.js](https://leafletjs.com/):** Open-source JavaScript interactive mapping library
- **OpenStreetMap:** Map tile layer provider
- **Web APIs:** Geolocation API, LocalStorage API

---

## 🚀 How to Run Locally

> [!IMPORTANT]
> Because modern web browsers restrict access to the **Geolocation API** when using the `file://` protocol, running Mapty via a local HTTP server (such as VS Code Live Server) is **required** for map initialization.

### Option 1: Live Server in VS Code (Recommended)

1. Open the `mapty` folder in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on [`index.html`](index.html) and select **"Open with Live Server"**.
4. Allow browser location access when prompted so the map can detect your current location.

### Option 2: Any Local HTTP Server

If you have Node.js installed, you can also run:

```bash
npx serve .
# or
npx http-server .
```

Then visit `http://localhost:3000` or `http://localhost:8080`.

---

## 👨‍🏫 Acknowledgements & Credits

- This project was created as part of **[The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course)** taught by **Jonas Schmedtmann** on Udemy.
- Thank you to **Jonas Schmedtmann** for the application architecture design and guidance on Leaflet & OOP in JavaScript.
