import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  Form,
  Dropdown,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import products from "./products";

const Shoping = () => {
  return (
    <Container fluid className="p-3" style={{ backgroundColor: "#f8f9fa" }}>
      <Row>
        {/* Sidebar Component */}
        <Col
          xs={12}
          md={4}
          className="bg-light sidebar p-3"
          style={{ backgroundColor: "#e9ecef" }}
        >
          <h4>Sports Section</h4>
          <Nav className="flex-column sidebar-sticky">
            <Nav.Item>
              <Nav.Link href="#">Men's Sports Fashion</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Men's Sports Footwear</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Sports Shoes for Men</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Training Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Basketball Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Cricket Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Football Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Hiking Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Indoor Court Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Running Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Tennis Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Badminton Shoes</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={8}>
          {/* Heading and Search Bar */}
          <Row className="mb-4 align-items-center">
            <Col xs={12} md={6}>
              <h5>Sports Shoes for Men (7058 Items)</h5>
            </Col>
            <Col xs={12} md={4}>
              <Form.Control type="text" placeholder="Search by category..." />
            </Col>
            <Col xs={12} md={2} className="text-md-right mt-3 mt-md-0">
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  Sort by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Price: Low to High</Dropdown.Item>
                  <Dropdown.Item href="#">Price: High to Low</Dropdown.Item>
                  <Dropdown.Item href="#">Newest Arrivals</Dropdown.Item>
                  <Dropdown.Item href="#">Best Sellers</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          {/* Products Grid */}
          <Row>
            {products.map((product, index) => (
              <Col
                xs={12}
                sm={6}
                lg={3}
                key={index}
                className="mb-4"
                style={{
                  transition: "transform 0.2s ease-in-out", // Add transition
                }}
                onMouseEnter={
                  (e) => (e.currentTarget.style.transform = "scale(1.01)") // Scale up on hover
                }
                onMouseLeave={
                  (e) => (e.currentTarget.style.transform = "scale(1)") // Reset scale on mouse leave
                }
              >
                <Card style={{ height: "100%", width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text>{product.rating}</Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">
                      <FaShoppingCart /> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Shoping;
