import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Silver Kitchen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/menu">
            <Nav.Link>Menu</Nav.Link>
          </LinkContainer>

          {/* <LinkContainer to="/history">
            <Nav.Link>Orders</Nav.Link>
          </LinkContainer> */}

          <LinkContainer to="/cart">
            <Nav.Link>{"Cart " + props.cartCount}</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
