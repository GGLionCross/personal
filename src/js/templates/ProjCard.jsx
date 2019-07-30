import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
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
          <p>Small Project Summary Goes Here</p>
          <Button variant="primary" onClick={() => this.setState({ showModal: true })}>
            Button Text or Image Goes Here
          </Button>
          <Modal
            show={this.state.showModal}
            onHide={() => this.setState({ showModal: false })}
            size="lg"
            centered
            restoreFocus={false}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Modal Title Goes Here
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Project Card Full Description Goes Here
              </p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}
export default ProjCard;