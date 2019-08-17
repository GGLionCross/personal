import React, { Component } from "react";
import { Row } from "react-bootstrap";
import MachineLearning from "../projects/MachineLearning.jsx";
import Krona from "../projects/Krona.jsx";
import HomeUCD from "../projects/HomeUCD.jsx";
class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <div className="flex-row">
          <MachineLearning/>
          <Krona/>
          <HomeUCD/>
        </div>
      </div>
    );
  }
}
export default Projects;