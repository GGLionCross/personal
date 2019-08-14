import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import ProjectCard from "../templates/ProjectCard.jsx";
import icon from '../../img/home_ucd.svg';
class HomeUCD extends ProjectCard {
  projectDisplay() {
    return <img src={icon}/>;
  }
  projectTitle() {
    return <h1 className="font-bold font-32">Home Club</h1>;
  }
  projectSummary() {
    return <p>Designed a logo and mobile-friendly website for the mental health awareness club, Home, at UC Davis.</p>;
  }
  projectDescription() {
    return (
      <p>
        Project Card Full Description Goes Here
      </p>
    );
  }
}
export default HomeUCD;