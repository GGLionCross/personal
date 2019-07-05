class NavItem extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    if (this.props.active) {
      return (
        <button className="nav-item-active">
          <p>{ this.props.name }</p>
          <div></div>
        </button>
      );
    }
    else {
      return (
        <button className="nav-item" onClick={() => this.props.siteObj.setState({ page: this.props.name })}>
          <p>{ this.props.name }</p>
        </button>
      );
    }
  }
}

class NavBar extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <div className="nav-bar">
        { this.props.children }
      </div>
    );
  }
}