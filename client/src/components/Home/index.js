import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./Login.js";
import About from "./About.js";
import "animate.css";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col
          sm={{ span: 12, offset: 0 }}
          md={{ span: 6, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
          className="animate__animated animate__fadeIn"
        >
          <Login />
        </Col>
        <Col
          sm={{ span: 12 }}
          md={{ span: 6, order: "last" }}
          lg={{ span: 6, order: "last" }}
          className="animate__animated animate__fadeIn"
        >
          <About />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
