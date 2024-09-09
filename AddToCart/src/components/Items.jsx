import React, { useContext } from "react";
import { useCart } from "../context/Cart";

const Items = (props) => {
  const cart = useCart();
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Price: {props.price}</h3>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Items;
