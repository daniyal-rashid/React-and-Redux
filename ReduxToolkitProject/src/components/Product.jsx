import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/cartSlice";
import React from "react";

function Product(props) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem", display: "inline-block", margin: "1.5rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.productName}</Card.Title>
        <p className="fs-5">Rs: {props.price}</p>
        <Button
          variant="primary"
          onClick={(e) =>
            dispatch(addItem({ name: props.productName, price: props.price }))
          }
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
