/*
Each project will be represented by a square card. This card will feature
either an image or a few words that best sum up the project. When hovered
over, another card will overlay our first card. This second card will hold the
project title, a small summary, and a 'Read More' button. When this button is
clicked, a much larger card will appear with much more details.
*/
import React, { Component } from "react";
//import ProjCardDisp from "./ProjCardDisp.jsx";
import { Button } from "react-bootstrap";
import ProjModal from "./ProjModal.jsx";
class ProjCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }
  render() {
    return (
      <div className="proj-card">

        <p>I am the card</p>
        <div className="proj-desc">
          <p>Hello there</p>
          <Button variant="primary" onClick={() => this.setState({ showModal: true })}>
            Read More
          </Button>
          <ProjModal
            show={this.state.showModal}
            onHide={() => this.setState({ showModal: false })}
            projCard={this}
          />
        </div>
      </div>
    );
  }
}
export default ProjCard;