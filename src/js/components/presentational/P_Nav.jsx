import React from "react";
import { Navbar, Nav } from "react-bootstrap";
class P_Nav extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Nav defaultActiveKey="#Projects">
          <Nav.Link onSelect={() => this.props.cPage.setState({ content: "Projects"})} href="#projects">Projects</Nav.Link>
          <Nav.Link onSelect={() => this.props.cPage.setState({ content: "Skills"})} href="#skills">Skills</Nav.Link>
          <Nav.Link onSelect={() => this.props.cPage.setState({ content: "Education"})} href="#education">Education</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
export default P_Nav;