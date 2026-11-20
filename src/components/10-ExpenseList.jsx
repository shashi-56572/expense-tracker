export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="empty">No expenses yet. Add one above.</p>;
  }

  return (
    <ul className="list">
      {expenses.map((e) => (
        <li key={e.id}>
          <div>
            <strong>{e.title}</strong>
            <small>
              {e.category} · {e.date}
            </small>
          </div>
          <span>₹{e.amount.toFixed(2)}</span>
          <button onClick={() => onDelete(e.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
