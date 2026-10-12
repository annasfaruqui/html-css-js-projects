# 🔢 Guess My Number!

A fun, interactive browser mini-game where players attempt to guess a randomly generated secret number between 1 and 20. This project serves as a practical demonstration of fundamental DOM manipulation, state handling, and event listeners in vanilla JavaScript.

---

## 🌐 Live Demo & Course Information

- **Live Demo:** _Not deployed (Run locally)_
- **Course:** [The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course) by **Jonas Schmedtmann**

---

## ✨ Features

- **Random Number Generation:** Generates a random integer between 1 and 20 using `Math.trunc(Math.random() * 20) + 1` for each game session.
- **Instant Dynamic Feedback:** Provides informative real-time feedback:
  - ⛔ _"No number!"_ if submitted empty.
  - 📈 _"Too high!"_ if the guess is above the secret number.
  - 📉 _"Too low!"_ if the guess is below the secret number.
  - 🎉 _"Correct Number!"_ when the player wins.
  - 😭 _"You lost the game!"_ if the score drops to 0.
- **Score & High Score Tracking:** Starting from 20, score decreases by 1 on every incorrect guess. The player's best score is persisted in the high score counter across games.
- **Dynamic Styling on Win/Loss:** The background dynamically turns vibrant green (`#60b347`) and reveals the hidden secret number with expanded dimensions upon winning.
- **Game Reset ("Again!" Button):** Allows resetting the board, score, input field, and styling while preserving the highest achieved score.

---

## 🛠️ Built With

- **HTML5:** Game layout and semantic structure
- **CSS3:** Custom styling, retro fonts (`Press Start 2P`), and responsive styling
- **JavaScript (ES6):** DOM query selectors, event handlers, and game state management

---

## 🚀 How to Run Locally

This is a pure static frontend project with no dependencies or build steps.

### Option 1: Live Server (Recommended)

1. Open the `guess-my-number` folder in **VS Code**.
2. Install the **Live Server** extension if needed.
3. Right-click on [`index.html`](index.html) and click **"Open with Live Server"**.
4. The game will launch at `http://127.0.0.1:5500/index.html`.

### Option 2: Direct Browser Open

1. Navigate to the `guess-my-number` folder in your file explorer.
2. Double-click [`index.html`](index.html) to open the game in any modern browser.

---

## 👨‍🏫 Acknowledgements & Credits

- This project was created as part of **[The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course)** taught by **Jonas Schmedtmann** on Udemy.
- Gratitude to **Jonas Schmedtmann** for the game design and DOM manipulation tutorial.
