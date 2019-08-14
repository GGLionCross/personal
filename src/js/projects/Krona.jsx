import React, { Component } from "react";
import ProjectCard from "../templates/ProjectCard.jsx";
import { Row, Button, Modal } from "react-bootstrap";
import icon from '../../img/krona.png';
import kronaDL from '../../proj/Krona_v0.5.8_exe.zip';
class Krona extends ProjectCard {
  projectDisplay() {
    return <img src={icon}/>;
  }
  projectTitle() {
    return <h1 className="font-bold font-32">Krona</h1>;
  }
  projectSummary() {
    return (
      <p>Developed in GameMaker Studio 2 with their custom language (GML),I was responsible for the player's mechanics as well as enemy AI.</p>
    );
  }
  projectDescription() {
    return (
      <div>
        <p className="font-bold font-24">
          Controls:
        </p>
        <Row>
          <li>Movement: Left/Right Arrow Keys</li>
          <li>Jump: Space</li>
          <li>Crouch(Toggle): C</li>
          <li>Hold Crate: V</li>
          <li>Melee Attack: Z</li>
          <li>Ranged Attack: X</li>
          <li>Use Boost: Alt</li>
        </Row>
        <Button variant="primary" href={kronaDL} download>
          Try the game out for yourself
        </Button>
        <p>
          The project was meant to be a fantasy 2d sidescroll adventure. We
          planned the story to revolve around a time-travelling heroine who
          would have to stand up to a dystopian society with a corrupt
          government, a shady organization, while overcoming personal loss.
          However, we only finished the tutorial and a few cutscenes before
          other priorities caused the team to stop progressing.
        </p>
        <p>
          I was responsible for programming the player mechanics such as:
          running, jumping, crouching, wall jumping, pulling and pushing
          crates, melee and ranged attacking, and dealing and receiving
          damage and knockback. Something you may note about wall jumping,
          I made it so the player would require two walls to scale a wall
          completely (they can't jump off the same wall in a row more than
          once). The one unique combat mechanic we added was that Krona
          would use energy to fire her lasers and would recover energy by
          punching enemies.
        </p>
        <p>
          I was also responsible for programming the general enemy AI,
          making them detect the player (using raycasting and trig),
          follow and attack the player, stop chasing the player (if
          they get too far), and jumping if they detect a wall while
          chasing/patrolling.
        </p>
        <p>
          As an additional feature, I added boosts to the game which buff
          the player's stats such as: damage, armor, movement speed, or
          provide health or energy regeneration.
        </p>
        <p>
          I managed these tasks by using the tools provided by GameMaker
          Studio 2, utilizing internal state machines, and messing around
          with different heights and speeds.
        </p>
        <p>
          Unfortunately, since the project is unpolished, the controls
          are not displayed in the tutorial, so I will lay out all the
          controls here:
        </p>
        <ul className="font-bold font-24">
          <li>Movement: Left/Right Arrow Keys</li>
          <li>Jump: Space</li>
          <li>Crouch(Toggle): C</li>
          <li>Hold Crate: V</li>
          <li>Melee Attack: Z</li>
          <li>Ranged Attack: X</li>
          <li>Use Boost: Alt</li>
        </ul>
      </div>
    );
  }
}
export default Krona;