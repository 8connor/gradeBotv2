import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div className="footer bg-dark">
        <Container className="mt-3">
          <Row className="justify-content-center text-light">
              <p>
                  gradeBotv2 2020
              </p>
          </Row>
        </Container>
    </div>
  );
}

export default Footer;
