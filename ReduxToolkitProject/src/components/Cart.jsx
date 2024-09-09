import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state);
  const total = items.cart.reduce((a, b) => a + b.price, 0);
  return (
    <div className="bg-info">
      <h3 className="py-4 text-center">
        Total Item : {items.cart.length} - Rs: {total}
      </h3>
    </div>
  );
}

export default Cart;
