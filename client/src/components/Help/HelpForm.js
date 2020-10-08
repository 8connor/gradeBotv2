import React, { useState, useEffect } from "react";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function HelpForm() {
  const [error, setError] = useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let message = {
      email: document.getElementById("email").value,
      title: document.getElementById("subject").value,
      contents: document.getElementById("message").value,
    };

    await Axios.post("/api/sendContact", message)
      .then((data) => {
        console.log(data);

        if (data.data.errors) {
          setError(true);
        } else {
          setError(false);
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="mt-5 animate__animated animate__fadeIn">
      <Row>
        <Col
          sm={{ offset: 3, span: 6 }}
          md={{ offset: 3, span: 6 }}
          lg={{ offset: 3, span: 6 }}
        >
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                id="email"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Subject:</Form.Label>
              <Form.Control as="input" id="subject" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows="3" id="message" />
            </Form.Group>
            <Row className="justify-content-center">
              <Button type="submit" onClick={(e) => handleFormSubmit(e)}>
                Submit
              </Button>
            </Row>
            <Row className="justify-content-center mt-1">
              {error && <p className="text-danger">Message failed to send</p>}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default HelpForm;
