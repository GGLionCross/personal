import React, { Component } from "react";
import { SteppedLineTo } from "react-lineto";
import TestDisplay from "../../img/krona.png";
import { SkillSpec, SkillCol, SkillRow, SkillImage } from "../components/SkillTree.jsx";
export default class About extends Component {
  render() {
    return (
      <div>
        <SkillSpec name="FRONT-END">
          <SkillRow>
            <SkillCol>
              <SkillRow>
                <SkillImage src={TestDisplay} learned={true}/>
              </SkillRow>
              <SkillRow>
                <SkillImage src={TestDisplay} learned={false}/>
                <SkillImage src={TestDisplay} learned={false}/>
              </SkillRow>
            </SkillCol>
            <SkillCol>
              <SkillRow>
                <SkillImage src={TestDisplay} learned={true}/>
              </SkillRow>
              <SkillRow>
                <SkillImage src={TestDisplay} learned={false}/>
              </SkillRow>
            </SkillCol>
          </SkillRow>
        </SkillSpec>
        <div className="div1"></div>
        <div className="div2"></div>
        <SteppedLineTo from="div1" to="div2" orientation="v"/>
      </div>
    );
  }
}