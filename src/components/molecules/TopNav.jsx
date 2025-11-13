import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import TopLogo from "../atoms/TopLogo";

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg">
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
