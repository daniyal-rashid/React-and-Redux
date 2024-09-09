import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid white",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      <h1>{value}</h1>
    </div>
  );
};

export default Square;
