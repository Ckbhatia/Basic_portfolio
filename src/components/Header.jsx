import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

export default function Header() {
  return (
    <Div className="navbar-main-container">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/">
          {/* TODO: Add owner name dynamically */}
          <h1 className="navbar-main-heading-text">
            chetan's <span className="header-portfolio-text">portfolio</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Div>
  );
}

const Div = styled.div`
  margin: 0 2rem;
  .navbar-main-heading-text {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    letter-spacing: 0.01rem;
    font-weight: 700;
    .header-portfolio-text {
      color: #c4a627;
    }
  }

  .navbar-toggler {
    background-color: #fafafc;
    border-color: transparent;
    border-radius: 5px;
  }

  .nav-link {
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .btn-outline-success {
    color: #3b3e4d;
    border: none;
    outline: 0;
    &:hover {
      color: darkgrey;
      background-color: transparent;
    }
    &:focus {
      background-color: transparent;
      // RESET
      box-shadow: 0 0 0;
    }
  }
`;
