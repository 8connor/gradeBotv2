import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3300";

const socket = socketIOClient(ENDPOINT);

function Chat() {
  socket.on("chat message", function (msg) {
    console.log(msg);

    let div = document.querySelector("#chatSection");

    // compose DOM nodes
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < 1; i++) {
      let p = document.createElement("p");
      p.textContent = msg;
      fragment.appendChild(p);
    }

    // append the fragment to the DOM tree
    div.appendChild(fragment);
  });

  const handleEmit = async (e) => {
    await socket.emit(
      "chat message",
      document.getElementById("chatInput").value
    );

    document.getElementById("chatInput").value = "";
  };

  
  const options = {
    minHeight: "200px",
    overflowY: "scroll",
    maxHeight: "200px",
  };

  return (
    <Container className="mt-4 ml-1">
      <Row className="justify-content-center">
        <Col
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 0 }}
        >
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Chat</Card.Title>
              <article
                className="bg-light rounded"
                id="chatSection"
                style={options}
              ></article>
              <InputGroup size="md mt-2">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-md">
                    type here:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="medium"
                  aria-describedby="inputGroup-sizing-md"
                  id="chatInput"
                />
                <Button
                  type="button"
                  className="ml-4"
                  onClick={(e) => handleEmit(e)}
                >
                  Submit
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
