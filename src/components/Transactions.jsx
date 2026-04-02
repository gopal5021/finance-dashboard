import { useState } from "react";

function Transactions({
  transactions,
  setTransactions,
  role,
  filter,
  setFilter,
  search,
  setSearch,
  sort,
  setSort,
}) {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });
  const [editId, setEditId] = useState(null);

  const add = () => {
    if (!form.date || !form.amount || !form.category || form.amount <= 0)
      return;
    const newData = [
      ...transactions,
      { ...form, id: Date.now(), amount: Number(form.amount) },
    ];
    setTransactions(newData);
    localStorage.setItem("tx", JSON.stringify(newData));
    setForm({ date: "", amount: "", category: "", type: "expense" });
  };

  const remove = (id) => {
    const newData = transactions.filter((t) => t.id !== id);
    setTransactions(newData);
    localStorage.setItem("tx", JSON.stringify(newData));
  };

  const startEdit = (t) => {
    setForm(t);
    setEditId(t.id);
  };

  const update = () => {
    if (!form.date || !form.amount || !form.category || form.amount <= 0)
      return;
    const newData = transactions.map((t) =>
      t.id === editId
        ? { ...form, id: editId, amount: Number(form.amount) }
        : t,
    );
    setTransactions(newData);
    localStorage.setItem("tx", JSON.stringify(newData));
    setForm({ date: "", amount: "", category: "", type: "expense" });
    setEditId(null);
  };

  let list = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter((t) => t.category.toLowerCase().includes(search.toLowerCase()));

  if (sort === "latest")
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (sort === "oldest")
    list.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (sort === "high") list.sort((a, b) => b.amount - a.amount);
  if (sort === "low") list.sort((a, b) => a.amount - b.amount);

  return (
    <div>
      <h2>Transactions</h2>

      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="high">Amount High</option>
        <option value="low">Amount Low</option>
      </select>

      {role === "admin" && (
        <div className="form-row">
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <input
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          {editId ? (
            <button className="primary" onClick={update}>
              Update
            </button>
          ) : (
            <button className="primary" onClick={add}>
              Add
            </button>
          )}
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {list.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty">
                No transactions found
              </td>
            </tr>
          ) : (
            list.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>₹{t.amount}</td>
                <td>{t.category}</td>
                <td>{t.type}</td>

                {role === "admin" && (
                  <td>
                    <div className="action-btns">
                      <button className="edit" onClick={() => startEdit(t)}>
                        Edit
                      </button>
                      <button className="delete" onClick={() => remove(t.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
