import React from "react";

import NavBar from "./common/NavBar";
import Category from "./common/Category";

export default function Menu(props) {
  return (
    <div>
      {/* {window.innerWidth} * {window.innerHeight} */}
      <NavBar cartCount={props.cartCount} />
      <Category
        name="meat"
        cart={props.cart}
        addToCart={props.addToCart}
        deleteFromCart={props.deleteFromCart}
      />
      <Category
        name="vege"
        cart={props.cart}
        addToCart={props.addToCart}
        deleteFromCart={props.deleteFromCart}
      />
      <Category
        name="apetizer"
        cart={props.cart}
        addToCart={props.addToCart}
        deleteFromCart={props.deleteFromCart}
      />
      <Category
        name="soup"
        cart={props.cart}
        addToCart={props.addToCart}
        deleteFromCart={props.deleteFromCart}
      />
    </div>
  );
}
