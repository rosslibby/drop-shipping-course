import React, { Component } from "react";

export default class Iframe extends Component {
  constructor() {
    super();

    this.state = {
      shown: false
    };
  }
  __onClick() {
    this.setState({ shown: true });
  }

  render() {
    const { moduleNumber, part, parts, title, video } = this.props;
    const { shown } = this.state;

    const iframe = (
      <iframe
        title={video}
        className="video"
        src={`${video}?autoplay=1&rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );

    const theTitle = (
      <span className="video__title">
        <span>
          <i className="far fa-play" />{" "}
          <span
            dangerouslySetInnerHTML={{ __html: title }}
            id={`module-${moduleNumber}`}
          />
        </span>
        <span className="video__module-number">
          Module {moduleNumber}
          {parts > 1 ? ` (Part ${part + 1})` : null}
        </span>
      </span>
    );

    return (
      <div
        className={`video${part > 0 ? " video--multi" : ""}`}
        onClick={() => this.__onClick()}
      >
        <div className="video__wrapper">{shown ? iframe : theTitle}</div>
      </div>
    );
  }
}
