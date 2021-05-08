import React, { useState, useEffect } from "react";

import Product from "./Product";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import getFoodList from "../../services/getFoodList";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function handleChange(event) {
  // console.log(event.currentTarget.value);
}

function handleSubmit(event) {
  // console.log("submitted", event.currentTarget.value);
  event.preventDefault();
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              placeholder="food name"
              onChange={handleChange}
            />
          </Col>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Modal>
  );
}

export default function Category(props) {
  const [products, setProducts] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    setProducts(getFoodList(props.name));
  }, [props.name]);

  // when the add button is clicked for the category, I should add the new product to the
  // frontend and send a post request to the backend, for now use products array as a dummy array

  // Qustion: how do I make a form window pop out when button clicked

  return (
    <div className="container-fluid table-dark">
      <div>
        <h1 className="d-inline">{props.name}</h1>
        <Button
          className=" ml-5 mb-3"
          variant="outline-primary"
          onClick={() => setModalShow(true)}
        >
          +
        </Button>
      </div>

      <div className="row flex-nowrap overflow-auto ">
        {products.map((p) => {
          var order = props.cart.find((item) => item.name === p);

          return (
            <div className="col mb-4" key={p}>
              {/* find out the order count for the current product */}
              <Product
                name={p}
                cart={props.cart}
                addToCart={props.addToCart}
                deleteFromCart={props.deleteFromCart}
                order={order}
              />
              <MyVerticallyCenteredModal show={modalShow} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
