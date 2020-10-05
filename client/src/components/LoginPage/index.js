import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Login from "../LoginCard";

function LoginPage() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Login />
      </Row>
    </Container>
  );
}

export default LoginPage;
