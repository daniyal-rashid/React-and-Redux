import React from "react";

const UserCard = (props) => {
  console.log(props.data);
  return (
    <div className="container">
      <img src={props.data.picture.large} alt="profilePic" />
      <h3>Name: {props.data.name.first}</h3>
      <p>Phone: {props.data.cell}</p>
      <p>
        Address: {props.data.location.city} , {props.data.location.country}
      </p>
    </div>
  );
};

export default UserCard;
