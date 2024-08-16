import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaSignInAlt } from "react-icons/fa";

const CustomNavbar = () => {
  return (
    <container>
      <Navbar className="bg-danger text-white" expand="lg">
        <Navbar.Brand
          href="#"
          className="text-white"
          style={{ marginLeft: "50px" }}
        >
          Snapdeal
        </Navbar.Brand>

        {/*  Search Box */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Form inline className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
                style={{ width: "500px", height: "40px" }}
              />
              <Button
                variant="dark"
                className="text-white d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "40px" }}
              >
                <FaSearch className="mr-2" />
                Search
              </Button>
            </Form>
          </Nav>

          {/* Cart and Sign-in Icons  */}
          <Nav className="ml-auto d-flex align-items-center">
            <Nav.Link
              href="#cart"
              className="text-white d-flex align-items-center"
              style={{ marginRight: "20px" }} // Add margin right to the cart icon
            >
              <FaShoppingCart size={25} className="mr-2" />
              Cart
            </Nav.Link>
            <Nav.Link
              href="signin"
              className="text-white d-flex align-items-center "
              style={{ marginRight: "20px" }} // Add margin right to the signin icon
            >
              <FaSignInAlt size={25} className="mr-2" />
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </container>
  );
};

export default CustomNavbar;
