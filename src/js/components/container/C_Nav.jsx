import React, { Component } from "react";
import ReactDOM from "react-dom";
import P_Nav from "../presentational/P_Nav.jsx";
class C_Nav extends Component {
  constructor() {
    super();
  }
  render() {
    return <P_Nav cPage={this.props.cPage}/>
  }
}
export default C_Nav;