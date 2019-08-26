import React, { Component } from "react";
import ProjectCard from "../templates/ProjectCard.jsx";
import { Table, Button, Modal } from "react-bootstrap";
import display from "../../img/krona.png";
class Warcraft2 extends ProjectCard {
  projectDisplay() {
    return <img src={display}/>;
  }
  projectTitle() {
    return <h1 className="text-bold text-32">Warcraft 2</h1>;
  }
}
export default Warcraft2;