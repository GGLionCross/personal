import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "../presentational/Navigation.jsx";
class NavContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navigation/>
      </div>
    );
  }
}
export default NavContainer;
const wrapper = document.getElementById("create-navigation");
wrapper ? ReactDOM.render(<NavContainer />, wrapper) : false;