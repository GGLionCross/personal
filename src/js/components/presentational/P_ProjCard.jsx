/*
Each project will be represented by a square card. This card will feature
either an image or a few words that best sum up the project. When hovered
over, another card will overlay our first card. This second card will hold the
project title, a small summary, and a 'Read More' button. When this button is
clicked, a much larger card will appear with much more details.
*/
import React from "react";
class P_ProjCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="proj-card">
        <div className="proj-card-title">
          <p>Hello there</p>
        </div>
      </div>
    );
  }
}
export default P_ProjCard;