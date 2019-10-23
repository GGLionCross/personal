import React, { Component } from "react";
import ProjectCard from "../templates/ProjectCard.jsx";
import { Row, Button, Modal } from "react-bootstrap";
import display from "../../img/warcraft-2.png";
import sound from "../../img/wc2sound.png";
import minimap from "../../img/wc2minimap.png";
class Warcraft2 extends ProjectCard {
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
      <div id="wc2-description">
        <Row>
          <p>I was charged with creating the sound menu. For this task, I had to restructure some of the code, because everyone's sound object wasn't organized so it was difficult to access. After restructuring, I accessed them all from a single SoundOptions file, and used a bit of math in order to get the Master Volume option to properly work.</p>
          <img src={sound}/>
        </Row>
        <Button variant="primary" href="https://github.com/GGLionCross/personal/blob/master/proj/Warcraft2.zip?raw=true">
          Test the game
        </Button>
        <Row>
          <img src={minimap}/>
          <p>I also was tasked with drawing the minimap to the screen. First, I made a copy of the map data and altered it by creating a white box around the camera's current location and coloring units green, yellow, or red depending on the team the unit is on. Afterwards, I scaled it down and drew it to the side of the viewport where the other buttons will be positioned. And voila! You have a minimap, or at least, how I thought about implementing it.</p>
        </Row>
      </div>
    );
  }
}
export default Warcraft2;