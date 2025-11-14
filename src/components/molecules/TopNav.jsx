import React from "react";
import { Navbar, Container } from "react-bootstrap";
import TopLogo from "../atoms/TopLogo";

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <TopLogo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default TopNav;
