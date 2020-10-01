import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./Login.js";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col
          sm={{ span: 12, offset: 0 }}
          md={{ span: 6, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
        >
          <Login />
        </Col>
        <Col
          sm={{ span: 12}}
          md={{ span: 6, order: "last"}}
          lg={{ span: 6, order: "last"}}
        >
          <section className="bg-dark text-light">
            <span>About us</span>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
