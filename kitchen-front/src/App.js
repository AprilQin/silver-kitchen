import "./App.css";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Cart from "./components/Cart";

import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  // Note 1: I added this cartCount to save time of computing the total counts in the cart
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    console.log("add item clicked", item);
    var i = cart.findIndex((p) => p.name === item);
    var newCart = [...cart];
    if (i === -1) {
      newCart.push({
        name: item,
        count: 1,
      });
    } else {
      newCart[i].count += 1;
    }
    setCartCount(cartCount + 1);
    setCart(newCart);
  };

  const deleteFromCart = (item) => {
    console.log("delete clicked", item);
    var i = cart.findIndex((p) => p.name === item);
    var newCart = [...cart];
    if (newCart[i].count > 1) {
      newCart[i].count--;
    } else {
      newCart.splice(i, 1);
    }
    setCartCount(cartCount - 1);
    setCart(newCart);
  };
  return (
    <div className="App">
      <div>
        {/* Switch is just like the switch keyword that it scans from top to bottom, and it 
        stops looking at the following choices once it find a match, so make sure you 
        list your routes from the most specific ones to the most generic ones */}
        <Switch>
          {/* use component attr if no props needed to pass to the component to be rendered
          if want to pass some props, use the render attr with an arrow function */}
          <Route
            path="/menu"
            render={(props) => (
              <Menu
                {...props}
                cart={cart}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                cartCount={cartCount}
              />
            )}
          />
          {/* <Route
            path="/orders"
            render={(props) => (
              <Home cart={cart} {...props} cartCount={cartCount} />
            )}
          /> */}

          <Route
            path="/cart"
            render={(props) => (
              <Cart cart={cart} {...props} cartCount={cartCount} />
            )}
          />
          <Route path="/" render={(props) => <Home cart={cart} {...props} />} />
          <Route />
        </Switch>
      </div>
    </div>
  );
}

export default App;
