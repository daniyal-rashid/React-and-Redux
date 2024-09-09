import { useState } from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import products from "./products.json";

function App() {
  return (
    <div>
      <Cart />
      {products.map((product) => (
        <Product {...product} />
      ))}
    </div>
  );
}

export default App;
