import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
//import icon from '../../img/ImageNameGoesHere.png';

class ProjectCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }
  projectDisplay() {
    return (
      <p>Sample Display</p>
    );
  }
  projectTitle() {
    return (
      <h1 className="font-bold font-32">Sample Title</h1>
    );
  }
  projectSummary() {
    return (
      <p>Sample Summary</p>
    );
  }
  projectDescription() {
    return (
      <p>Sample Description</p>
    );
  }
  render() {
    return (
      <div className="proj-card">
        <div className="proj-disp">
          {this.projectDisplay()}
        </div>
        <div className="proj-desc">
          <div>
            {this.projectTitle()}
            {this.projectSummary()}
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
                {this.projectTitle()}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.projectDescription()}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
  componentDidMount() {
    //var element = document.getElementById('Image ID Goes Here');
    //element ? element.src = icon : false;
  }
}
export default ProjectCard;