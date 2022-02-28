import React from "react";

import "../Styles/NavbarOffcanvasStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUsersGear,
  faAddressBook,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";

import {
  Offcanvas,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavbarOffcanvas(props) {
  return (
    <>
      <div className=" NavbarOffcanvasTitle">Navbar Offcanvas</div>

      <Navbar bg="primary" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faAtom} size="2x" color="#FFFF" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <FontAwesomeIcon icon={faAtom} size="2x" color="#418fe7" />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                  <FontAwesomeIcon icon={faHouseChimney} />
                  <span> Home</span>
                </Nav.Link>

                <Nav.Link href="#action2">
                  {" "}
                  <FontAwesomeIcon icon={faUsersGear} />
                  <span> About Us</span>
                </Nav.Link>

                <Nav.Link href="#action2">
                  <FontAwesomeIcon icon={faAddressBook} />
                  <span> Contact Us</span>
                </Nav.Link>

                <NavDropdown title="Category" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3" className="text-primary">
                    Category Item 1
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4" className="text-primary">
                    Category Item 2
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" className="text-primary">
                    Category Item 3
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 text-primary"
                  aria-label="Search"
                />
                <Button variant="outline-success text-primary">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarOffcanvas;
