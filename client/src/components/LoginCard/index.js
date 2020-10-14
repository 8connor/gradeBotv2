import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Row from "react-bootstrap/Row";

function Login() {
  
  const handleLogin = () => {
    const loginObj = {
      username: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    Axios.post("/api/login", loginObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title className="text-center">Login</Card.Title>
        <Row className="justify-content-center">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Username:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              id="email"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Password:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              id="password"
            />
          </InputGroup>
          <Button onClick={handleLogin}>submit</Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Login;
