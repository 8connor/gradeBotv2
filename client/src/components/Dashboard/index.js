import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Averages from "./Averages";
import News from "./News";
import Chat from "./Chat"

function Dashboard() {
  return (
    <Container>
      <Row className="mt-5 mb-5 animate__animated animate__fadeIn justify-content-center">
        <Averages />
        <News />
        <Chat />
      </Row>
    </Container>
  );
}

export default Dashboard;
