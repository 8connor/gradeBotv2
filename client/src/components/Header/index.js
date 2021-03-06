import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./logo.png";

function Top() {
  return (
    <Navbar bg="dark" expand="lg" className="shadow">
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="text-light">Home</Nav.Link>
          <Nav.Link href="/#features" className="text-light">Features</Nav.Link>
          <Nav.Link href="/#about" className="text-light">About</Nav.Link>
          <Nav.Link href="/dashboard" className="text-light">**TEST** Dashboard</Nav.Link>
          <Nav.Link href="/help" className="text-light">Help</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login" className="text-light rounded bg-success shadow text-center">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Top;
