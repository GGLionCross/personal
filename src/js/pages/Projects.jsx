import React, { Component } from "react";
import { Row } from "react-bootstrap";
import MachineLearning from "../projects/MachineLearning.jsx";
import Krona from "../projects/Krona.jsx";
import HomeUCD from "../projects/HomeUCD.jsx";
class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <Row>
          <MachineLearning/>
          <Krona/>
          <HomeUCD/>
        </Row>
      </div>
    );
  }
}
export default Projects;