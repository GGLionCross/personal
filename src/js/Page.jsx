import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav } from "react-bootstrap";
import Content from "./Content.jsx";
class Page extends Component {
  constructor() {
    super();
    this.state = {
      page: "Projects"
    }
  }
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Nav variant="pills" defaultActiveKey="#projects">
            <Nav.Link onSelect={() => this.setState({ page: "Projects"})} href="#projects">Projects</Nav.Link>
            <Nav.Link onSelect={() => this.setState({ page: "Skills"})} href="#skills">Skills</Nav.Link>
            <Nav.Link onSelect={() => this.setState({ page: "Education"})} href="#education">Education</Nav.Link>
          </Nav>
        </Navbar>
        <Content page={this.state.page}/>
      </div>
    );
  }
}
export default Page;
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Page/>, wrapper) : false;