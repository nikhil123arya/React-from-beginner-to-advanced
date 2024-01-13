import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems} />
    <PakingList items={items} />
    <Stats />
  </div>
}

function Logo() {
  return <h1>Far Away</h1>
}

function Form({ onAddItems }) {

  const [discription, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!discription) return;

    const newItem = { discription, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDiscription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num =>
          <option value={num} key={num}>
            {num}
          </option>
        )}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={discription}
        onChange={(e) => setDiscription(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

function PakingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) =>
          <Item item={item} key={item.id} />)}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.discription}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list , and you already packed x</em>
    </footer>
  )
}