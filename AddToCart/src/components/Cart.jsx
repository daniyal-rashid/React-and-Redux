import React, { useContext } from "react";
import { useCart } from "../context/Cart";

const Cart = () => {
  const cart = useCart();
  let total = cart.items.reduce((a, b) => a + Number(b.price), 0);
  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - ${item.price}
          </li>
        ))}
      <h3>Total Bill: ${total}</h3>
    </div>
  );
};

export default Cart;
