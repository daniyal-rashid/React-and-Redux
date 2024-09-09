import React from "react";
import { useWheather } from "../context/Wheather";

const Input = () => {
  const wheather = useWheather();
  return (
    <input
      type="text"
      placeholder="Search here"
      value={wheather.searchCity}
      onChange={(e) => wheather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
