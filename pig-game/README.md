# 🎲 Pig Game — 2-Player Dice Game

Pig Game is a two-player turn-based dice game built in the browser. Players race to reach a total score of 100 points by rolling a die, banking temporary round points, and avoiding the dreaded number 1 roll that wipes out their current round's tally.

---

## 🌐 Live Demo & Course Information

- **Live Demo:** _Not deployed (Run locally)_
- **Course:** [The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course) by **Jonas Schmedtmann**

---

## 📜 Game Rules

1. The game has 2 players, taking turns playing rounds.
2. In each turn, a player rolls the die as many times as they want:
   - Each rolled value is added to the player's **Current Score**.
   - If the player rolls a **1**, their entire current round score is lost, and the turn automatically passes to the other player!
3. The player can choose to **"Hold"**, adding their current score to their **Total Global Score**, and ending their turn.
4. The first player to reach **100 points** (or the target threshold) in their global score wins the game!

---

## ✨ Features

- **Dynamic Dice Rolling:** Generates a random number from 1 to 6 on each roll and dynamically updates the rendered dice image (`dice-1.png` through `dice-6.png`).
- **Active Player State Switching:** Smooth visual cues (background card brightness and active indicators) showing whose turn it is.
- **Hold Score Functionality:** Safely adds accumulated temporary round points to the player's permanent score tally.
- **Winner Detection & Game Locking:** Upon reaching the winning score, the game dynamically styles the winning player card in dark slate, displays a victory badge, hides the dice, and disables further roll/hold actions.
- **New Game Reset:** Quickly resets all player scores, current tallies, active classes, and internal JavaScript state without refreshing the browser.

---

## 🛠️ Built With

- **HTML5:** Semantic game board layout
- **CSS3:** Glassmorphic card styling, linear gradients, and responsive layout
- **JavaScript (ES6):** State machine, condition checks, and DOM manipulation

---

## 🚀 How to Run Locally

This is a pure static frontend game with no installation or build steps.

### Option 1: Live Server (Recommended)

1. Open the `pig-game` folder in **VS Code**.
2. Install the **Live Server** extension if you haven't already.
3. Right-click [`index.html`](index.html) and click **"Open with Live Server"**.
4. The game will launch at `http://127.0.0.1:5500/index.html`.

### Option 2: Direct Browser Open

1. Navigate to the `pig-game` directory in your file explorer.
2. Double-click [`index.html`](index.html) (or drag & drop it into any web browser).

---

## 👨‍🏫 Acknowledgements & Credits

- This project was created as part of **[The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course)** taught by **Jonas Schmedtmann** on Udemy.
- Thanks to **Jonas Schmedtmann** for the game design, visual assets, and JavaScript DOM instruction.
