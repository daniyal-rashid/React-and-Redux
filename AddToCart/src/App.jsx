import { useState } from "react";
import Items from "./components/Items";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div>
      <Items name="Laptop" price="10000" />
      <Items name="Mobile" price="5000" />
      <Items name="PS5" price="30000" />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
