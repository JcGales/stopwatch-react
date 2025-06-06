# ⏱️ Stopwatch App (React)

A simple and functional stopwatch app built using **React** and **React Hooks** like `useState`, `useEffect`, and `useRef`. This project is part of my learning journey to better understand React's core concepts.

## 🚀 Features

- Start, Stop, and Reset buttons
- Elapsed time display in `HH : MM : SS : MS` format
- Millisecond precision (updates every 10ms)
- Clean and simple UI
- Leading zero formatting using `padStart`

## 🛠️ Built With

- **React**
- **React Hooks**
  - `useState` – to manage stopwatch state
  - `useEffect` – to run the interval timer
  - `useRef` – to store the timer ID and start time across renders
- Optional styling: plain CSS or Tailwind (your choice)

## 📚 What I’m Learning

- Using `useRef` for non-re-rendered values (like intervals)
- Managing timers with `setInterval` and `clearInterval`
- Updating UI based on elapsed time
- Creating reusable formatting functions
