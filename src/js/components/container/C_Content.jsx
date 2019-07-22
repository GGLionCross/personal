import React, { Component } from "react";
import ReactDOM from "react-dom";
import P_Proj from "../presentational/P_Proj.jsx";
import P_Skills from "../presentational/P_Skills.jsx";
import P_Edu from "../presentational/P_Edu.jsx";
class C_Content extends Component {
  constructor() {
    super();
  }
  render() {
    if (this.props.current == "Projects") return <P_Proj/>;
    if (this.props.current == "Skills") return <P_Skills/>;
    if (this.props.current == "Education") return <P_Edu/>;
    else return (
      <p>current isn't one of the options</p>
    );
  }
}
export default C_Content;