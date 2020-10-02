import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./Login";
import About from "./About";
import Features from "./Features";
import Parallax from "../Parallax";
import "animate.css";

function Home() {
  useEffect(() => {
    document.documentElement.style.setProperty("--animate-duration", "3s");
  });

  return (
    <>
      {/* This is a parallax at the top of home page. It has the about and login section inside of it. */}
      <Parallax>
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
      </Parallax>
      {/* This is a different container holding the features. It is separate from the parallax. */}
      <div className="featuresCon">
        <Features />
      </div>
    </>
  );
}

export default Home;
