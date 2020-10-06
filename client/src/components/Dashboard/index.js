import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Averages from "./Averages";
import News from "./News";

function Dashboard() {
  return (
    <Container>
      <Row className="mt-5 animate__animated animate__fadeIn">
        <Averages />
        <News />
      </Row>
    </Container>
  );
}

export default Dashboard;
