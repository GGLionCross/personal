import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import icon from '../../img/home_ucd.svg';
class HomeUCD extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }
  render() {
    return (
      <div className="proj-card">
        <img id="home-ucd"/>
        <div className="proj-desc">
          <div>
            <h1 className="font-bold font-32">Home Club</h1>
            <p>
              Designed a logo and mobile-friendly website for the mental health
              awareness club, Home, at UC Davis.</p>
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
                Home Club
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
  componentDidMount() {
    var element = document.getElementById("home-ucd");
    element ? element.src = icon : false;
  }
}
export default HomeUCD;