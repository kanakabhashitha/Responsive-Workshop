import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "../Styles/gridSystemStyle.css";

function GridSystem(props) {
  return (
    <>
      <div className="gridTitle">Grid System</div>
      <Container>
        <Row md={2} className="firstRow  justify-content-md-center">
          <Col md={3} className="A">
            A
          </Col>
          <Col md={3} className="B">
            B
          </Col>
        </Row>

        <Row md={2} className="secondRow  justify-content-md-center ">
          <Col md={2} className="bg-warning">
            <Row className="C">C</Row>
            <Row className="D">D</Row>
          </Col>

          <Col md={4} className="thirdcol">
            <Row md={1} className="thirdRow">
              E
            </Row>

            <Row row={2} className="forthRow">
              <Col md={6} className="F">
                F
              </Col>
              <Col md={6} className="G">
                G
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GridSystem;
