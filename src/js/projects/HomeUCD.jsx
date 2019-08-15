import React, { Component } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
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
      <Row>
        <Col>
          <p>I designed the following logo using the vector graphics program Inkscape.</p>
          <p>I also designed and built a mobile-friendly site for the club which can be viewed at</p>
          <Button variant="primary" href="https://gglioncross.github.io/HOME/" target="_blank">
            https://gglioncross.github.io/HOME/
          </Button>
        </Col>
        <img id="home-ucd" src={icon}/>
      </Row>
    );
  }
}
export default HomeUCD;