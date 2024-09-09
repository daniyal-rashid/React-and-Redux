import { useState } from "react";

import Counter from "./compoments/Counter";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux tutorial</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Counter />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;
