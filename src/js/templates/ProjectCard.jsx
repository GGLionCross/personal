import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import chevron from "../../img/double-chevron-up.svg";

class ProjectCard extends Component {
  constructor() {
    super();
    this.state = {
      showSummary: "project-summary-container",
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
  showSummary() {
    this.setState({ showSummary: "project-summary-container show-project-summary" });
  }
  hideSummary() {
    this.setState({ showSummary: "project-summary-container" });
  }
  render() {
    return (
      <div className="project-card">
        <div className="project-display" onClick={() => this.showSummary()}>
          {this.projectDisplay()}
        </div>
        <div className={this.state.showSummary}>
          <div className="project-summary-content">
            <div onClick={() => this.hideSummary()}>
              {this.projectTitle()}
              {this.projectSummary()}
            </div>
            <div className="round-tab-container" onClick={() => this.showSummary()}>
              <div className="round-tab flex-col">
                <img src={chevron}/>
              </div>
            </div>
            <Button variant="primary" onClick={() => this.setState({ showModal: true })}>
              More
            </Button>
            <Modal
              show={this.state.showModal}
              onHide={() => this.setState({ showModal: false })}
              size="lg"
              restoreFocus={false}
            >
              <Modal.Header closeButton>
                <Modal.Title className="font-bold font-32">
                  {this.projectTitle()}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="project-description">
                  {this.projectDescription()}
                </div>
              </Modal.Body>
            </Modal>
          </div>
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