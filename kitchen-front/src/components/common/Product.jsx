import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Product(props) {
  let buttons = (
    <Button
      className="rounded-circle "
      variant="info"
      onClick={() => props.addToCart(props.name)}
    >
      +
    </Button>
  );
  if (props.order) {
    buttons = (
      <div>
        <Button
          className="rounded-circle d-inline mr-2"
          variant="info"
          onClick={() => props.addToCart(props.name)}
        >
          +
        </Button>
        <p className="text-primary d-inline mr-2">{props.order.count}</p>
        <Button
          className="rounded-circle d-inline mr-2"
          variant="info"
          onClick={() => props.deleteFromCart(props.name)}
        >
          -
        </Button>
      </div>
    );
  }
  return (
    <div>
      {/* method 1: put your images in public folder and you can access it directly
            method 2: put your images in src/images folder, you would need to import it first */}
      {/* <img src='/images/photo1.jpg' width='200px' alt=""/>
            <p>xxx</p> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title className="text-dark">{props.name}</Card.Title>
          {buttons}
        </Card.Body>
      </Card>
    </div>
  );
}
