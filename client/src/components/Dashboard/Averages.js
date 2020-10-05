import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Averages() {
  return (
    <Container>
      <Row className="mt-5">
        <Col
          sm={{ span: 6, offset: 3 }}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 6, offset: 3 }}
        >
            <div>
                Averages
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Averages;
