import React from "react";

import BootstrapCard from "../components/BootstrapCard";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/BootstrapCardGroupStyle.css";

function BootstrapCardGroup(props) {
  return (
    <>
      <div className="bootsrapCardTitle">Bootstrap Card</div>

      <Container className="mainContainer">
        <Row className="row-1" xs={1} md={4}>
          <Col className="col-1" xs={12} md={3}>
            <BootstrapCard
              title={"Introduction to Python Programming"}
              description={
                "Introduction to programming with the Python language."
              }
              image={require("../asset/python_programming.jpg")}
            />
          </Col>

          <Col className="col-2" xs={12} md={3}>
            <BootstrapCard
              title={"Practical Machine Lerning with Python"}
              description={
                "Learn basics of machine learning concepts with Python."
              }
              image={require("../asset/ML_new.png")}
            />
          </Col>

          <Col className="col-3" xs={12} md={3}>
            <BootstrapCard
              title={"Full Stack WebApplication Development"}
              description={
                "Learn concepts to build modern full stack web applications."
              }
              image={require("../asset/web_development_new.png")}
            />
          </Col>

          <Col className="col-4" xs={12} md={3}>
            <BootstrapCard
              title={"Modern Cloud-Based Application Deveopment"}
              description={
                "Start building of modern applications in the cloud."
              }
              image={require("../asset/cloudcomputing_new.png")}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BootstrapCardGroup;
