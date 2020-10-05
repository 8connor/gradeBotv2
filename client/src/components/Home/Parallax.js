import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Login from "../LoginCard";
import About from "./About";

function Parallax(props){
    return(
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
        </div>
    )
}

export default Parallax