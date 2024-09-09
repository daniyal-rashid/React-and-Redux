import { useEffect, useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";
import { useWheather } from "./context/Wheather";

function App() {
  const wheather = useWheather();
  useEffect(() => {
    wheather.getCurrentLocationData();
  }, []);
  return (
    <div>
      <h1>Wheather API</h1>
      <Input />
      <Button onClick={wheather.fetchData} value="search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
