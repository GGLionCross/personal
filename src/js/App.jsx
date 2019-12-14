import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactSVG from "react-svg";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
export default class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <NavLink to="/" name="About"/>
          <NavLink to="/portfolio" name="Portfolio"/>
          <NavLink to="/" name="Item1"/>
        </nav>
        <Switch>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/">
            <About/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

const NavLink = (props) => {
  return (
    <div className="navlink">
      <ReactSVG
        src="https://raw.githubusercontent.com/GGLionCross/personal/master/src/img/navpointer.svg"
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error)
            return
          }
          console.log(svg)
        }}
        beforeInjection={svg => {
          svg.classList.add('svg-class-name')
        }}
        evalScripts="always"
        fallback={() => <span>Error!</span>}
        loading={() => <span>Loading</span>}
        renumerateIRIElements={false}
        wrapper="span"
        className="wrapper-pointer"
        //onMouseEnter={() => handlePointer(this, true)}
      />
      <Link to={props.to}>{props.name}</Link>
    </div>
  );
}