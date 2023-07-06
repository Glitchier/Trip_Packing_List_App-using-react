import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItems, onChecked, onClr }) {
  const [sortBy, setSortBy] = useState("input");

  let sortItems;

  if (sortBy === "input") {
    sortItems = items;
  }

  if (sortBy === "description") {
    sortItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  }

  if (sortBy === "packed") {
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <div className="listDiv">
        <ul>
          {sortItems.map((item) => (
            <Item
              item={item}
              onDeleteItems={onDeleteItems}
              onChecked={onChecked}
              onClr={onClr}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      {items.length > 0 ? (
        <div className="sortDiv">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button className="clrBtn" onClick={onClr}>
            Clear
          </button>
        </div>
      ) : null}
    </>
  );
}
