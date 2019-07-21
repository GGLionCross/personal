import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
const Navigation = () => (
  <Navbar bg="primary" variant="dark">
    <Nav>
      <Nav.Link onSelect={() => active("projects")} href="#projects">Projects</Nav.Link>
      <Nav.Link onSelect={() => active("skills")} href="#skills">Skills</Nav.Link>
      <Nav.Link onSelect={() => active("education")} href="#education">Education</Nav.Link>
    </Nav>
  </Navbar>
);

function active(page) {
  console.log("Active Page: ", page);
}
export default Navigation;