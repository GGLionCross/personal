import React, { Component } from "react";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Education from "./pages/Education.jsx";
class Content extends Component {
  constructor() {
    super();
  }
  render() {
    if (this.props.page == "Projects") return <Projects/>;
    if (this.props.page == "Skills") return <Skills/>;
    if (this.props.page == "Education") return <Education/>;
    else return <p>current isn't one of the options</p>;
  }
}
export default Content;