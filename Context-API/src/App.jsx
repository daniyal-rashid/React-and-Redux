import { useContext } from "react";
import Counter from "./components/Counter";
import { CounterContext } from "./context/Counter";
import "./App.css";

function App() {
  const CounterState = useContext(CounterContext);
  return (
    <div className="container">
      <h1>Count is {CounterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
