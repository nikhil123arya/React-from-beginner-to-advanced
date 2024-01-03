import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className='header'>
      <h1 style={style}>
        Madhogiri Pizzeria co.
      </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creatie dishes to choose from. All from our stone oven , all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) =>
              <Pizza pizzaObj={pizza} key={pizza.name} />
            )}
          </ul>
        </>
      ) : (
        <p>WE're still working on our menu please visit later !!</p>
      )}



      {/* <Pizza
        name="pizza salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={10}
      />  
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={15}
    />*/}
    </main>
  );
}

function Pizza(props) {
  console.log(props);

  // if (props.pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out' : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.soldOut ? "SOLD" : props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (!isOpen) return (<p>-- CLOSED --</p>);

  return (
    <footer className='footer'>

      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          WE're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )
      }

    </footer >
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>
        WE're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className='btn'>Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);