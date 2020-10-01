import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./Login";
import About from "./About";
import Features from "./Features";
import "animate.css";

function Home() {
  useEffect(() => {
    document.documentElement.style.setProperty("--animate-duration", "3s");
  });

  return (
    <div className="parallax">
      <Container>
        <Row>
          <Col
            sm={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
            className="mt-5 animate__animated animate__fadeIn"
          >
            <Login />
          </Col>
          <Col
            sm={{ span: 12 }}
            md={{ span: 6, order: "last" }}
            lg={{ span: 6, order: "last" }}
            className="mt-5 animate__animated animate__fadeIn"
          >
            <About />
          </Col>
        </Row>
      </Container>
      <Container className="featuresCon">
        <Row>
          <Col
            sm={{ span: 12 }}
            md={{ span: 6, offset: 6 }}
            lg={{ span: 6, offset: 6 }}
            className="mt-5 animate__animated animate__fadeIn"
          >
            <Features />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
