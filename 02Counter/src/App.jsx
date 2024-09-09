import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const incValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("can not increase value more than 20");
    }
  };

  const decValue = () => {
    if (counter === 0) {
      alert("can not decrease value less than 0");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>chai aur code</h1>
      <h2>Couter Project</h2>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incValue}>Increase Value {counter}</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Value {counter}</button>
      <br />
      <br />
      <strong>Footer: {counter} </strong>
    </>
  );
}

export default App;
