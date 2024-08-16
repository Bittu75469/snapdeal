// src/SideNavbar.js
import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SideNavbar = () => {
  return (
    <div className="d-flex">
      <div
        className="text-white p-4"
        style={{ width: "250px", height: "100vh" }}
      >
        <h4>My Sidebar</h4>
        <Nav className="flex-column">
          <Nav.Link href="#home" className="text-black">
            Home
          </Nav.Link>
          <Nav.Link href="#features" className="text-black">
            Features
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-black">
            Pricing
          </Nav.Link>
          <Nav.Link href="#about" className="text-black">
            About
          </Nav.Link>
        </Nav>
      </div>
      <div className="flex-fill p-4">{/* Main content goes here */}</div>
    </div>
  );
};

export default SideNavbar;
