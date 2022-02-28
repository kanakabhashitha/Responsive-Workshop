import React from "react";

import "../Styles/ReponsiveNavBarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUsersGear,
  faAddressBook,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function ResponsiveBehaviorNavBar(props) {
  return (
    <>
      <div className=" ResponsiveBehaviorNavBarTitel">
        Responsive Behavior NavBar
      </div>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faAtom} size="2x" color="#FFFF" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-uppercase "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-light">
                <FontAwesomeIcon icon={faHouseChimney} color="#FFFF" />
                <span> Home</span>
              </Nav.Link>

              <Nav.Link href="#action2" className="text-light">
                {" "}
                <FontAwesomeIcon icon={faUsersGear} color="#FFFF" />
                <span> About Us</span>
              </Nav.Link>

              <Nav.Link href="#action2" className="text-light">
                <FontAwesomeIcon icon={faAddressBook} />
                <span> Contact Us</span>
              </Nav.Link>

              <NavDropdown title="Category" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Category Item 1
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Category Item 2
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Category Item 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success text-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ResponsiveBehaviorNavBar;
