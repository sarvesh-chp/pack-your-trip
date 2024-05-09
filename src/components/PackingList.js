import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onPackedItem,
  onClearList,
}) {
  const [sort, setSort] = useState("input");
  // const [clearList, setClearList] = useState(false);

  let sortedItems;

  if (sort === "input") sortedItems = items;
  else if (sort === "description")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  else if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="midBlock">
      <div className="actions">
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={() => onClearList()}>CLEAR LIST</button>
      </div>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onPackedItem={onPackedItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
