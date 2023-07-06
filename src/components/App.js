import { useState } from "react";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClr() {
    const confirm = window.confirm(
      "Are you sure you want to delete all the items ?"
    );
    if (confirm) setItems([]);
  }

  return (
    <div className="centerDiv">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onChecked={handleChecked}
        onClr={handleClr}
      />
      <Stats items={items} />
    </div>
  );
}
