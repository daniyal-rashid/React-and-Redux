import { useState } from "react";
import "./App.css";
import "./index.css";
import Card from "./components/Card";

function App() {
  const obj1 = {
    username: "Anna",
    btnText: "Click Here",
  };

  return (
    <>
      <h1 className="bg-green-400 mx-20 my-5  text-center font-bold text-3xl">
        Tailwind CSS
      </h1>
      <Card username={obj1.username} btnText={obj1.btnText} />
      <Card username="Elsa" btnText="Visit Profile" />
    </>
  );
}

export default App;
