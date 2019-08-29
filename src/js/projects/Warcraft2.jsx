import React, { Component } from "react";
import ProjectCard from "../templates/ProjectCard.jsx";
import { Table, Button, Modal } from "react-bootstrap";
import display from "../../img/warcraft-2.png";
class Krona extends ProjectCard {
  projectDisplay() {
    return <img src={display}/>;
  }
  projectTitle() {
    return <h1 className="text-bold text-32">Warcraft 2</h1>;
  }
  projectSummary() {
    return (
      <div>
        <p>As a <span className="text-bold">programmer</span>, I assisted with graphical user interface (GUI), designing the minimap, sound menu, and networking menu.</p>
      </div>
    );
  }
  projectDescription() {
    return (
      <div id="krona-description">
        <Button variant="primary" href="https://github.com/GGLionCross/personal/blob/master/proj/Warcraft2.zip?raw=true">
          Test the game
        </Button>
      </div>
    );
  }
}
export default Warcraft2;