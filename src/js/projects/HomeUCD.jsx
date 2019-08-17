import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import ProjectCard from "../templates/ProjectCard.jsx";
import display from "../../img/home_ucd.svg";
class HomeUCD extends ProjectCard {
  projectDisplay() {
    return <img src={display}/>;
  }
  projectTitle() {
    return <h1 className="font-bold font-32">Home Club</h1>;
  }
  projectSummary() {
    return (
      <div>
        <p>As a <span className="font-bold">graphic designer</span>, I was in charge of desiging the club logo.</p> 
        <p>As a <span className="font-bold">web designer/developer</span>, I was responsible for designing and developing the club website.</p>
      </div>
    );
  }
  projectDescription() {
    return (
      <div id="home-club-description" className="flex-row">
        <div className="flex-col">
          <p>I designed the following logo using the vector graphics program Inkscape.</p>
          <p>I also designed and built a mobile-friendly site for the club which can be viewed at</p>
          <Button variant="primary" href="https://gglioncross.github.io/HOME/" target="_blank">
            https://gglioncross.github.io/HOME/
          </Button>
        </div>
        <img src={display}/>
      </div>
    );
  }
}
export default HomeUCD;