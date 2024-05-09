import { useState } from "react";

export default function Form({ onAddItems }) {
  let dropDownOptions = [...Array(20).keys()].map((x) => x + 1);

  const [desc, setDesc] = useState("");
  const [qty, setQty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newItem = { qty, desc, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDesc("");
    setQty(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <div className="form-items">
        <select onChange={(e) => setQty(Number(e.target.value))} value={qty}>
          {dropDownOptions.map((num) => (
            <option key={num} value={num}>
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
        <button type="submit">ADD</button>
      </div>
    </form>
  );
}
