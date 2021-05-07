import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import Iframe from "./Iframe";
import Trophy from "./Trophy";

class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: props.completed,
      expanded: !props.completed,
      trophy: false
    };
  }

  completeStep(title) {
    const {
      step,
      user: { uid }
    } = this.props;
    const { completed, trophy } = this.state;

    this.setState(
      {
        expanded: completed,
        completed: !completed,
        trophy: !completed ? !trophy : trophy
      },
      () => {
        if (this.state.completed)
          window.location.hash = `#${title
            .split(" ")
            .join("-")
            .toLowerCase()}`;
      }
    );

    return this.props.completeStep(uid, step, !completed);
  }

  expand() {
    const { expanded } = this.state;

    this.setState({
      ...this.state,
      expanded: !expanded
    });
  }

  render() {
    const { content, lessonI, summary, title, video } = this.props;
    const { completed, expanded } = this.state;
    const completionCheck = completed ? (
      <span className="card__completion">
        <i className="fas fa-check" />
      </span>
    ) : null;
    const expandedIcon = expanded ? (
      <span className="card__expander" onClick={() => this.expand()}>
        <i className="fal fa-minus" />
      </span>
    ) : (
      <span className="card__expander" onClick={() => this.expand()}>
        <i className="fal fa-plus" />
      </span>
    );

    const videos = [];

    if (video) {
      video.split(",").forEach((vid, i) => {
        videos.push(
          <Iframe
            key={`${lessonI}_${i}`}
            video={vid}
            title={title}
            moduleNumber={lessonI + 1}
            part={i}
            parts={video.split(",").length}
          />
        );
      });
    }

    const trophy = this.state.trophy ? <Trophy module={lessonI + 1} /> : null;

    return (
      <Row className="step-position">
        <span
          id={title
            .split(" ")
            .join("-")
            .toLowerCase()}
          style={{ marginTop: "-60px" }}
        />
        <Col>
          {trophy}
          <Row>
            <Col>
              <Card className={!expanded ? "card--collapsed" : null}>
                <Card.Body>
                  {completionCheck}
                  <Card.Title>
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                  </Card.Title>
                  {expandedIcon}
                  <Card.Text>
                    <span dangerouslySetInnerHTML={{ __html: content }} />
                  </Card.Text>
                  {/* video */}
                  {videos}
                  {/* end video */}
                  <div className="lesson__actions">
                    <span
                      className={`lesson__action${
                        completed ? " lesson--completed" : ""
                      }`}
                      onClick={() => this.completeStep(title)}
                    >
                      <i className="fas fa-check" />{" "}
                      {completed ? "Mark as incomplete" : "Complete Lesson"}
                    </span>
                  </div>
                  <div
                    className="lesson__summary"
                    dangerouslySetInnerHTML={{ __html: summary }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr className="card__hr" />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(
  mapStateToProps,
  actions
)(Lesson);
