import React from "react";
import { Col, Row } from "react-bootstrap";

const Step = ({ lessons, numModules }) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>{lessons}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Step;
