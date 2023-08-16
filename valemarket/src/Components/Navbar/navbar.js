import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar1 = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="pero">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to={"/login"}>👤</Link>
          <Link to={"/cart"}>🛒</Link>
            
          </Nav>
          <input type="text"placeholder="Search"></input>
          <button>🔎</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navbar1;
