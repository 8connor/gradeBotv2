import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function HelpForm() {
  const handleFormSubmit = () => {};
  return (
    <Container className="mt-5">
      <Row>
        <Col
          sm={{ offset: 3, span: 6 }}
          md={{ offset: 3, span: 6 }}
          lg={{ offset: 3, span: 6 }}
        >
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Subject:</Form.Label>
              <Form.Control as="input" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Row className="justify-content-center">
              <Button type="submit">Submit</Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default HelpForm;
