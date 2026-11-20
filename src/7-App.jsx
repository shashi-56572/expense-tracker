import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";

const STORAGE_KEY = "expenses";

function loadExpenses() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

export default function App() {
  // All expenses live in one state array.
  const [expenses, setExpenses] = useState(loadExpenses);
  const [category, setCategory] = useState("All");

  // Save to the browser every time the list changes.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(expense) {
    setExpenses([expense, ...expenses]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  const visible =
    category === "All"
      ? expenses
      : expenses.filter((e) => e.category === category);

  const total = visible.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />

      <div className="filter">
        <label>
          Show:{" "}
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Study</option>
            <option>Other</option>
          </select>
        </label>
        <h2 className="total">Total: ₹{total.toFixed(2)}</h2>
      </div>

      <ExpenseList expenses={visible} onDelete={deleteExpense} />
    </div>
  );
}
