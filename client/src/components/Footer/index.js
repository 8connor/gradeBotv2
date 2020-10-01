import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./index.css";

function Footer() {
  return (
    <div className="footer bg-dark">
        <Container>
          <Row className="justify-content-center text-light">
              <p>
                  gradeBot 2020
              </p>
          </Row>
        </Container>
    </div>
  );
}

export default Footer;
