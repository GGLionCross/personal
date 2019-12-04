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
          <ReactSVG
            src="../img/triangle.svg"
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error)
                return
              }
              console.log(svg)
            }}
            beforeInjection={svg => {
              svg.classList.add('svg-class-name')
              svg.setAttribute('style', 'width: 200px')
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
            renumerateIRIElements={false}
            wrapper="span"
            className="wrapper-class-name"
            onClick={() => {
              console.log('wrapper onClick')
            }}
          />
          <Link to="/">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/">Item1</Link>
          <Link to="/">Item2</Link>
          <Link to="/">Item3</Link>
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