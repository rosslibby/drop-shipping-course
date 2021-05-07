import React, { Component } from "react";

export default class Trophy extends Component {
  render() {
    const { module } = this.props;
    return (
      <div className="trophy">
        <span className="trophy__text">{module}</span>
      </div>
    );
  }
}
