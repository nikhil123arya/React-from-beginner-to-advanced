import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  // handleAddItems is passed as a prop to From

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    console.log(`id of deleted item : ${id}`);
    setItems(items => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  function handleClearList() {
    const conformed = window.confirm("Are you sure you want to delete all the elements from the cart.");

    if (conformed) setItems([]);
  }

  return <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems} />
    <PackingList
      items={items}
      onDeleteItem={handleDeleteItems}
      onToggleItem={handleToggleItem}
      onClearList={handleClearList}
    />
    <Stats items={items} />
  </div>
}

