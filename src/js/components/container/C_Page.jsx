import React, { Component } from "react";
import ReactDOM from "react-dom";
import C_Nav from "./C_Nav.jsx";
import C_Content from "./C_Content.jsx";
class C_Page extends Component {
  constructor() {
    super();
    this.state = {
      content: "Projects"
    }
  }
  render() {
    return (
      <div>
        <C_Nav cPage={this}/>
        <C_Content current={this.state.content}/>
      </div>
    );
  }
}
export default C_Page;
const wrapper = document.getElementById("create-page");
wrapper ? ReactDOM.render(<C_Page/>, wrapper) : false;