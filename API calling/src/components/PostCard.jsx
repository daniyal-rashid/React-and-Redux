import React from "react";

const Posts = (props) => {
  return (
    <div className="container">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
};

export default Posts;
