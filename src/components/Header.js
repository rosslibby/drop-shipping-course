import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import blueprint from "../blueprint.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
      expanded: false
    };
  }

  componentDidMount() {
    const {
      user: { uid }
    } = this.props;
    this.props.getSteps(uid);
    this.props.getProgress(uid);
  }

  render() {
    const { children, signOut, progress } = this.props;
    const { expanded } = this.state;

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={blueprint} className="logo" />
        </Navbar.Brand>
        <div className="navbar-items">
          <div className="score">{progress ? progress.progress : 0}</div>
          <div
            className="navbar-button"
            onClick={() => {
              this.setState({
                ...this.state,
                expanded: !expanded
              });
            }}
          >
            <span className="navbar-button__item" />
            <span className="navbar-button__item" />
          </div>
        </div>
        <Nav className={expanded ? "mr-auto navbar--expanded" : "mr-auto"}>
          {children.map((child, i) => (
            <span className="nav-link" key={`nav_${i}`}>
              {child}
            </span>
          ))}
        </Nav>
        <br />
        <span className="nav-link">{signOut}</span>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ progress, steps, user }) => {
  return {
    progress,
    steps,
    user
  };
};

export default connect(
  mapStateToProps,
  actions
)(Header);
