import { useState } from "react";

export function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [qnt, setQnt] = useState(1);

  function handleAdd(e) {
    e.preventDefault();

    if (!desc) return;

    const newItem = { desc, qnt, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDesc("");
    setQnt(1);
  }

  return (
    <form className="formDiv" onSubmit={handleAdd}>
      <p>What do you need for your trips ?</p>
      <select value={qnt} onChange={(e) => setQnt(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button className="addBtn">Add</button>
    </form>
  );
}
