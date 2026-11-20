import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    if (!title.trim() || Number(amount) <= 0) return; // basic validation

    onAdd({
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      category,
      date: new Date().toLocaleDateString(),
    });

    setTitle("");
    setAmount("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="What did you spend on?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Study</option>
        <option>Other</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
