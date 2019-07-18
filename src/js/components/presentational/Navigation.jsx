import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
const Navigation = () => (
  <Navbar bg="primary" variant="dark">
    <Nav>
      <Nav.Link onSelect={() => console.log("Active Page: Projects")} href="#projects">Projects</Nav.Link>
      <Nav.Link onSelect={() => console.log("Active Page: Skills")} href="#skills">Skills</Nav.Link>
      <Nav.Link onSelect={() => console.log("Active Page: Education")} href="#education">Education</Nav.Link>
    </Nav>
  </Navbar>
);
export default Navigation;