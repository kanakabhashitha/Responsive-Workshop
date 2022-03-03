import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "../Styles/gridSystemStyle.css";

function GridSystem(props) {
  return (
    <>
      <div className="gridTitle">Grid System</div>

      <Container className="mainContainer">
        <Row md={2} className="row-1">
          <Col xs={12} md={6} className="row-1-col-1">
            A
          </Col>
          <Col xs={12} md={6} className="row-1-col-2">
            B
          </Col>
        </Row>

        <Row md={2} className="row-2">
          <Col xs={12} md={4} className="row-2-col-1">
            <Row className="row-2-col-1-col-1">C</Row>
            <Row className="row-2-col-1-col-2">E</Row>
          </Col>

          <Col xs={12} md={8} className="row-2-col-2">
            <Row md={1} className="row-2-col-2-row-1">
              D
            </Row>

            <Row xs={12} md={2} className="row-2-col-2-row-2">
              <Col xs={6} md={6} className="row-2-col-2-row-2-col-1">
                F
              </Col>
              <Col xs={6} md={6} className="row-2-col-2-row-2-col-2">
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
