import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import icon from '../../img/ImageNameGoesHere.png';
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
        <p>Project Card Display Goes Here</p>
        <div className="proj-desc">
          <div>
            <h1 className="font-bold font-32">Project Title</h1>
            <p>Small Project Summary Goes Here</p>
          </div>
          <Button variant="primary" onClick={() => this.setState({ showModal: true })}>
            More
          </Button>
          <Modal
            show={this.state.showModal}
            onHide={() => this.setState({ showModal: false })}
            size="xl"
            restoreFocus={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className="font-bold font-32">
                Modal Title Goes Here
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Project Card Full Description Goes Here
              </p>
              <Button variant="primary" href={} download>
                Download Links Look Like This
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
  componentDidMount() {
    var element = document.getElementById('Image ID Goes Here');
    element ? element.src = icon : false;
  }
}
export default ProjCard;