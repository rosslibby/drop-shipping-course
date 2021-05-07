import React, { Component } from "react";
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";

export default class Video extends Component {
  render() {
    const { video } = this.props;

    return video !== null ? (
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <span>
                  <i className="fas fa-play-circle" /> Watch the video
                  explanation
                </span>
              </Card.Title>
              <a href={video} target="_blank">
                {video}
              </a>
              {/* <iframe width="560" height="315" src={video} /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    ) : null;
  }
}
