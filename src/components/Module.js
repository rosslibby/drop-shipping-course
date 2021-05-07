import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default class Module extends Component {
  render() {
    const { description, number, title, updated } = this.props;

    return (
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} xs={12}>
              <h5>{title}</h5>
              <p>
                <small>
                  Module {number} | Updated {updated}
                </small>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <p>{description}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
