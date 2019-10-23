import React, { Component } from "react";
import { Row } from "react-bootstrap";

// Project Presentations
import HomeUCD from "../projects/HomeUCD.jsx";
import Krona from "../projects/Krona.jsx";
import MachineLearning from "../projects/MachineLearning.jsx";
import Warcraft2 from "../projects/Warcraft2.jsx";
class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <div class="page-intro-container">
          <div class="page-intro">
            <h1>Projects</h1>
            <p>This page highlights all the projects I've been involved in and had a positive impact on.</p>
          </div>
        </div>
        <Row>
          <MachineLearning/>
          <Warcraft2/>
          <Krona/>
          <HomeUCD/>
        </Row>
      </div>
    );
  }
}
export default Projects;