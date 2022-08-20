import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Chat from "../Chat/Chat";
import ItemListContainer from "../Items/ItemListContainer";

function NavBar() {
  return (
    <>
      <Navbar expand={false} bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#" className="justify-content-md-center">
            E-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <ItemListContainer />
      <Chat />
    </>
  );
}

export default NavBar;
