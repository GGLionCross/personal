import React, { Component } from "react";
import ProjectCard from "../templates/ProjectCard.jsx";
import { Button, Modal } from "react-bootstrap";
import display from "../../img/machine-learning.png";
class MachineLearning extends ProjectCard {
  projectDisplay() {
    return <img src={display}/>;
  }
  projectTitle() {
    return <h1 className="font-bold font-32">Machine Learning</h1>;
  }
  projectSummary() {
    return (
      <div>
        <p>As a <span className="font-bold">programmer</span>, I was in charge of building an artificial neural network (ANN) and matrix testing it with various parameters to find the <em>optimal</em> set of parameters.</p> 
      </div>
    );
  }
  projectDescription() {
    return (
      <div id="machine-learning-description">
        
      </div>
    );
  }
}
export default MachineLearning;