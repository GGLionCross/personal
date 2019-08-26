import React, { Component } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import ProjectCard from "../templates/ProjectCard.jsx";
import display from "../../img/home_ucd.svg";
class HomeUCD extends ProjectCard {
  projectDisplay() {
    return <img src={display}/>;
  }
  projectTitle() {
    return <h1 className="text-bold text-32">Home Club</h1>;
  }
  projectSummary() {
    return (
      <div>
        <p>As a <span className="text-bold">graphic designer</span>, I was in charge of desiging the club logo.</p> 
        <p>As a <span className="text-bold">web designer/developer</span>, I was responsible for designing and developing the club website.</p>
      </div>
    );
  }
  projectDescription() {
    return (
      <Row id="home-club-description">
        <Col>
          <p>I designed the following logo using the vector graphics program Inkscape.</p>
          <p>The slogan for the club is "Where Friends Become Family", and the club was started on principles of discussing the reality of mental illness. It comes in many forms, and nearly all people suffering don't realize they are even going through it. Depression is very common that even the people you would expect to never experience it, actually do.</p>
          <p>I also designed and built a mobile-friendly site for the club which can be viewed at</p>
          <Button variant="primary" href="https://gglioncross.github.io/HOME/" target="_blank">
            https://gglioncross.github.io/HOME/
          </Button>
        </Col>
        <img src={display}/>
      </Row>
    );
  }
}
export default HomeUCD;