import React, { Component } from "react";
import ReactDOM from "react-dom";
import Content from "./Content.jsx";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "./components/Nav.jsx";
class Site extends Component {
  constructor() {
    super();
    this.state = {
      page: "Projects"
    }
  }
  render() {
    return (
      <div>
        <Content page={this.state.page}/>
      </div>
    );
  }
}
export default Site;
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Site/>, wrapper) : false;