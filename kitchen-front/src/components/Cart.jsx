import React from "react";
import { Button } from "react-bootstrap";

import NavBar from "./common/NavBar";
import sendOrder from "../services/sendOrder";

export default function Cart(props) {
  return (
    <div>
      <NavBar cartCount={props.cartCount} />
      <ul>
        {props.cart.map((item) => {
          //   console.log("item");
          return (
            <li>
              name is: {item.name}, count is {item.count}
            </li>
          );
        })}
      </ul>

      <Button
        className=" ml-5 mb-3"
        variant="info"
        onClick={() => sendOrder(props.cart)}
      >
        checkout
      </Button>
    </div>
  );
}
