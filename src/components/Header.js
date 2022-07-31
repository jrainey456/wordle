import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoonRain, faDroplet } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <FontAwesomeIcon icon={faCloudMoonRain} size="2x" />
          {"   "} Rainy Day Development
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
