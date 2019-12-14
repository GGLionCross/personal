import React, { Component } from "react";

/*
Skill specs are a combination of skill columns and rows
*/
export class SkillSpec extends Component {
  render() {
    return (
      <div className="skill-spec">
        <p className="spec-name">{this.props.name}</p>
        {this.props.children}
      </div>
    );
  }
}

export class SkillCol extends Component {
  render() {
    return (
      <div className="skill-col">
        {this.props.children}
      </div>
    );
  }
}

export class SkillRow extends Component {
  render() {
    return (
      <div className="skill-row">
        {this.props.children}
      </div>
    );
  }
}

export class SkillImage extends Component {
  render() {
    if (this.props.learned) {
      return (
        <div className="skill-image learned">
          <img src={this.props.src}/>
        </div>
      );
    }
    return (
      <div className="skill-image">
        <img src={this.props.src}/>
      </div>
    );
  }
}