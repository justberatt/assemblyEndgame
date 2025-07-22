# Assembly: Endgame

## Overview

**Assembly: Endgame** is a React-based word guessing game inspired by Hangman, but with a programming twist. Instead of losing body parts, each wrong guess eliminates a modern programming language—your goal is to save them all from being overtaken by Assembly! This project demonstrates interactive UI, accessibility, state management, and animation in a fun, engaging way.

---

## Features

- **Programming Theme:** Each wrong guess "eliminates" a programming language, visually represented with color and animation.
- **Confetti Animation:** Celebrate your win with a confetti burst.
- **Accessible UI:** ARIA live regions, keyboard navigation, and screen reader support.
- **Responsive Design:** Works well on desktop and mobile.
- **Visual Feedback:** Correct and incorrect guesses are highlighted; missed letters are revealed in red if you lose.
- **Farewell Messages:** Personalized messages for each eliminated language.
- **Easy Restart:** One-click "New Game" button resets the challenge.

---

## How to Play

1. Guess the hidden programming-related word by clicking letter buttons.
2. You have 8 attempts—each wrong guess eliminates a language.
3. Win by guessing all letters before all languages are lost.
4. Lose and Assembly takes over the programming world!

---

## Technical Highlights

- **React Functional Components & Hooks:** Clean, modern code structure.
- **State & Derived Values:** Efficient state management for game logic.
- **Conditional Rendering:** UI updates based on game state.
- **Dynamic Styling:** Uses `clsx` for conditional CSS classes.
- **Animations:** Confetti on win, color transitions for lost languages and missed letters.
- **Accessibility:** ARIA roles, live regions, and visually hidden status updates.

---

_Made with ❤️ by justberatt._
