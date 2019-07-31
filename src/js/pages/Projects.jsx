import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Krona from "../projects/Krona.jsx";
import HomeUCD from "../projects/HomeUCD.jsx";
class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <Row>
          <Krona/>
          <HomeUCD/>
        </Row>
      </div>
    );
  }
}
export default Projects;