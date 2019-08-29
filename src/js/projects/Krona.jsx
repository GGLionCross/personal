import React, { Component } from "react";
import ProjectCard from "../templates/ProjectCard.jsx";
import { Table, Button, Modal } from "react-bootstrap";
import display from "../../img/krona.png";
import kronaDesign from "../../img/krona_design.svg";
import lilyDesign from "../../img/lily_design.svg";
//import kronaDL from "";
class Krona extends ProjectCard {
  projectDisplay() {
    return <img src={display}/>;
  }
  projectTitle() {
    return <h1 className="text-bold text-32">Krona</h1>;
  }
  projectSummary() {
    return (
      <div>
        <p>As a <span className="text-bold">programmer</span>, I was in charge of developing player mechanics as well as enemy AI.</p>
      </div>
    );
  }
  projectDescription() {
    return (
      <div id="krona-description">
        <p className="text-bold text-24">Keybindings:</p>
        <Table variant="dark" striped bordered>
          <thead>
            <tr>
              <th className="text-bold">Action</th>
              <th className="text-bold">Key</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Run Left</th>
              <th>Left Arrow</th>
            </tr>
            <tr>
              <th>Run Right</th>
              <th>Right Arrow</th>
            </tr>
            <tr>
              <th>Jump</th>
              <th>Space</th>
            </tr>
            <tr>
              <th>Crouch (Toggle)</th>
              <th>C</th>
            </tr>
            <tr>
              <th>Push/Pull Crates</th>
              <th>V, then Left/Right</th>
            </tr>
            <tr>
              <th>Melee Attack (Restores 1 Energy)</th>
              <th>Z</th>
            </tr>
            <tr>
              <th>Ranged Attack (Consumes 1 Energy)</th>
              <th>X</th>
            </tr>
            <tr>
              <th>Use Boost Item</th>
              <th>Alt</th>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary">
          Test the game
        </Button>
        <p className="text-bold text-24 border-bottom">Player Mechanics</p>
        <p>I was responsible for programming how the player could move and interact with the environment. I set the various speeds, gravity, and controls for running, jumping, crouching, attacking, pushing/pulling crates, and using boost items picked up on the floor.</p>
        <p className="text-bold text-24 border-bottom">Enemy AI</p>
        <p>I also programmed the enemy to follow players for as long as they held sight of them. If the enemy were to encounter a tile of type wall or a pit, they would first try jumping over the obstacle. If they were in attack range of the enemy for their attack, they would attack. If the player broke line of sight with the enemy, the enemy would run to the player's last seen coordinates.</p>
        <p className="text-bold text-24 border-bottom">Boosts</p>
        <p>I designed small circular bouncing boost items that would generate of a random type (red, blue, purple, green, and yellow). The player could activate the held boost by pressing 'ALT'. The red boost provided a damage buff. The blue boost provided an armor buff. The purple boost provided a speed buff. The green boost restored health. The yellow boost restored energy.</p>
        <p className="text-bold text-24 border-bottom">The Story</p>
        <p>
          The story would take place in the future and revolve around a corrupt government, shady corporation, and a time-travelling girl. Due to dire circumstances, the father of the girl (Krona) reveals that he had experimented on her as a child, implanting a chip into her head that would give her the power to travel through time. In order to escape certain demise, the father proposes that she uses her newfound ability to prevent power from transfering to the wrong people.
        </p>
        <p className="text-bold text-24 border-bottom">Some Characters</p>
        <p>I envisioned Krona having <span style={{ color: "lightgreen" }}>bright green</span> hair because, for some reason, I associate that color with time travel.</p>
        <img src={kronaDesign}/>
        <p>Lily is one of the first people Krona meets when she travels to the past. They become fast friends as they both try to identify the mystery of the secret society that desires ultimate power.</p>
        <img src={lilyDesign}/>
        <p>I drew these both on paper, then tried digitizing it on Inkscape, when I really should have used raster graphics.</p>
      </div>
    );
  }
}
export default Krona;