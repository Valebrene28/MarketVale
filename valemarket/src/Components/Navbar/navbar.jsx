import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./navbar.css"

export const Navbar1 = () => {
  return (
    <>
    <Navbar id="bg-body-tertiary">
      <Container className="pero">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to={"/login"}>👤</Link>
          <Link to={"/cart"}>🛒</Link>
          
            <div className="whotext" ><p>About us</p></div>
            <div className="contactus"><p>Contact us</p></div>
          </Nav>
          <Link to={"/form"}><button class="button2">Add cake</button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navbar1;
