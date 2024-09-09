import React from "react";
import { useWheather } from "../context/Wheather";

const Card = () => {
  const wheather = useWheather();
  return (
    <div>
      <img src={wheather.data?.current?.condition?.icon} alt="img" />
      <h2>{wheather.data?.current?.temp_c} C</h2>
      <h3>
        {wheather.data?.location?.name}, {wheather.data?.location?.region},{" "}
        {wheather.data?.location?.country}
      </h3>
    </div>
  );
};

export default Card;
