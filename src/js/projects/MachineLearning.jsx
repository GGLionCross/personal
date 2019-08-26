import React, { Component } from "react";
import ProjectCard from "../templates/ProjectCard.jsx";
import { Table, Button, Modal } from "react-bootstrap";
import display from "../../img/machine-learning.png";
import exampleANN from "../../img/exampleANN.png";
class MachineLearning extends ProjectCard {
  projectDisplay() {
    return <img src={display}/>;
  }
  projectTitle() {
    return <h1 className="text-bold text-32">Machine Learning</h1>;
  }
  projectSummary() {
    return (
      <div>
        <p>As a <span className="text-bold">programmer</span>, I was in charge of building an artificial neural network (ANN) and matrix testing it with various parameters to find the <em>optimal</em> set of parameters.</p> 
      </div>
    );
  }
  projectDescription() {
    return (
      <div id="machine-learning-description">
        <p className="text-bold text-24 border-bottom">The Goal</p>
        <p>The goal was to utilize machine learning techniques to help determine the occupancy level of a building, specifically if it's empty, provided we have sufficient data.</p>
        <p className="text-bold text-24 border-bottom">The Reasoning</p>
        <p>Buildings account for 40% of all energy consumption in the US, according to the U.S. Energy Information Administration (<a href="https://www.eia.gov/tools/faqs/faq.php?id=86&t=1" target="_blank">https://www.eia.gov/tools/faqs/faq.php?id=86&t=1</a>). Many commercial buildings consume lots of energy while completely <span style={{ color: "red" }}>vacant</span>. Why? Because there is a lack of true <span style={{ color: "lightgreen" }}>vacancy detection</span>.</p>
        <p className="text-bold text-24 border-bottom">The Data</p>
        <p>We received and processed data from the Student Community Center (SCC) using a Python script to help test our theory. The data was taken between the dates 06-01-2018 and 11-08-18 at noon.</p>
        <p className="text-bold text-24 text-center">Data Set Features</p>
        <Table variant="dark" striped bordered>
          <thead>
            <tr>
              <th className="text-bold">Feature</th>
              <th className="text-bold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>AP Connection Count</th>
              <th>Number of connections summed across all WiFi network access points for the building</th>
            </tr>
            <tr>
              <th>Electricity Demand kBTU/h</th>
              <th>Building-wide electricity demand in kBTU per hour</th>
            </tr>
            <tr>
              <th>Max CO<sub>2</sub> Delta</th>
              <th>Maximum CO<sub>2</sub> relative to outside CO<sub>2</sub></th>
            </tr>
            <tr>
              <th>RM 1002 CO<sub>2</sub> Delta</th>
              <th>RM 1002 CO<sub>2</sub> relative to outside CO<sub>2</sub></th>
            </tr>
            <tr>
              <th>RM 1003 CO<sub>2</sub> Delta</th>
              <th>RM 1003 CO<sub>2</sub> relative to outside CO<sub>2</sub></th>
            </tr>
            <tr>
              <th>...19 Other Rooms...</th>
              <th>...19 Other Descriptions...</th>
            </tr>
            <tr>
              <th>RM 2401 CO<sub>2</sub> Delta</th>
              <th>RM 2401 CO<sub>2</sub> relative to outside CO<sub>2</sub></th>
            </tr>
            <tr>
              <th>Outside CO<sub>2</sub> Average</th>
              <th>Outside CO<sub>2</sub> averaged between two sources</th>
            </tr>
            <tr>
              <th>Day of the week</th>
              <th>The day of the week upon which the measurement took place</th>
            </tr>
            <tr>
              <th>Occupied</th>
              <th>Whether or not the SCC was occupied</th>
            </tr>
          </tbody>
        </Table>
        <p className="text-bold text-24 border-bottom">My Responsibilities</p>
        <ul>
          <li>Research ways to implement an artificial neural network (ANN) using Python with the help of TensorFlow and the Keras API</li>
          <li>
            <p>
              An artificial neural network is an attempt to replicate how our brain learns. First, there are <span style={{ color: "yellow" }}>inputs</span> which take in data similar to how our brain takes in experiences. Then, there are connections (via weights) to what are called <span style={{ color: "lightgreen" }}>nodes</span>. If you follow these nodes far enough, you begin to reach the <span style={{ color: "red" }}>outputs</span>. Outputs are basically akin to how our brain interprets information. For example, you show a baby enough pictures of trees (inputs) and you tell them that they are trees, the baby will begin to recognize what trees look like (outputs).
            </p>
            <p>
              Each node in between the inputs and outputs gets activated by what is called an <span style={{ color: "cyan" }}>activation function</span>. Basically, if a node receives a certain number of weights as input, it will activate, propagating the signal to the next node in the network.
            </p>
            <p>
              We are working with a <span style={{ color: "cyan" }}>feedforward artificial neural network</span>, which is basically an ANN, except the outputs propagate to the inputs updating their weights. This is similar to how the connections in our brain strengthen, allowing us to recognize past experiences.
            </p>
            <p>
              The <span style={{ color: "cyan" }}>batch size</span> of our ANN is basically the number of data samples used for every cycle of training. Lowering the batch size improves our accuracy but also increases training time since it takes longer to get through all the data.
            </p>
            <p>
              The <span style={{ color: "cyan" }}>learning rate</span> (a value from 0 to 1) determines how fast our ANN adapts. If the learning rate is too high, it will cause very divergent behavior from our ANN. This is similar to how a child who learns things extremely fast isn't an accurate model of the majority of children.
            </p>
          </li>
          <li>Train and test our ANN with different parameters. (The optimal parameters, giving us a testing accuracy of 90%, are highlighted in <span style={{ color: "orange" }}>orange</span>!)</li>
          <ul>
            <li>Activation functions: <span style={{ color: "orange" }}>tanh</span>, sigmoid, elu, softplus, relu</li>
            <li># of hidden layers: 1, <span style={{ color: "orange" }}>2</span>, 3</li>
            <li># of nodes per hidden layer: 3, 6, 9, <span style={{ color: "orange" }}>12</span></li>
            <li>Batch size: <span style={{ color: "orange" }}>32</span></li>
            <li>Learning rates: 0.001, 0.005, 0.01, <span style={{ color: "orange" }}>0.05</span>, 0.1</li>
          </ul>
        </ul>
        <img src={exampleANN}/>
      </div>
    );
  }
}
export default MachineLearning;