# Expense Tracker

**Live Demo:** https://shashi-expense-tracker.netlify.app

A simple expense tracker built with **React**. Add your daily expenses, filter them by category, see the running total, and delete entries. Data is saved in the browser (`localStorage`), so it stays after a refresh.

## Features

- Add an expense with a title, amount and category
- Delete an expense
- Filter by category (Food, Travel, Study, Other)
- Total updates automatically for the selected category
- Data persists in `localStorage`
- Basic input validation (empty title or zero amount is ignored)

## Tech Stack

- React 18 (functional components, `useState`, `useEffect`)
- Vite
- Plain CSS

## Project Structure

```
src/
  main.jsx                  # entry point
  App.jsx                   # state, filter, total
  App.css                   # styles
  components/
    ExpenseForm.jsx         # form to add an expense
    ExpenseList.jsx         # list of expenses with delete button
```

## How to Run

```bash
git clone https://github.com/shashi-56572/expense-tracker.git
cd expense-tracker
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## What I Learned

- Splitting UI into components and passing data with props
- Lifting state up (`App` owns the expenses, children call functions passed down)
- Using `useEffect` to sync state with `localStorage`
- Filtering and summing arrays with `filter` and `reduce`

## Possible Improvements

- Edit an existing expense
- Monthly summary chart
- Backend with Node.js + MongoDB instead of `localStorage`

## Author

Shashi Chouhan, B.Tech CSE (Oriental College of Technology, Bhopal)
