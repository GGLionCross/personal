class NavMenu extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    if (this.props.active == "Projects") {
      return (
        <NavBar>
          <NavItem name="Projects" active/>
          <NavItem name="Education" siteObj={ this.props.siteObj }/>
        </NavBar>
      );
    }
    else if (this.props.active == "Education") {
      return (
        <NavBar>
          <NavItem name="Projects" siteObj={ this.props.siteObj }/>
          <NavItem name="Education" active/>
        </NavBar>
      );
    } 
  }
}

// #region Content code
class Projects extends React.Component {
  render () {
    return (
      <p>Projects</p>
    );
  }
}

class Education extends React.Component {
  render () {
    return (
      <p>Education</p>
    );
  }
}

class Content extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    if (this.props.active == "Projects") {
      return (<Projects></Projects>);
    }
    else if (this.props.active == "Education") {
      return (<Education></Education>);
    } 
  }
}

// #endregion Content code

class Site extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      page: "Projects"
    }
  }
  render () {
    return (
      <div>
        <NavMenu active={this.state.page} siteObj={ this }></NavMenu>
        <Content active={this.state.page}></Content>
      </div>
    );
  }
}

ReactDOM.render(<Site/>, document.getElementById('root'));