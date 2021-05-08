import React from "react";
import Banner from "./Banner";
import NavBar from "./common/NavBar";

export default function Home(props) {
  return (
    <div>
      <NavBar cartCount={props.cart.length} />
      <Banner />
    </div>
  );
}
