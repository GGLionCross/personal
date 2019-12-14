import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./js/App.jsx";
const root = document.getElementById("root");
root ? ReactDOM.render(<App/>, root) : false;