import React from "react"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Button } from "react-bootstrap"
import "../css/menu.css"
const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/inicio">Conferencias</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/proximas">Próximas presentaciones</Nav.Link>
          <Nav.Link href="/pasados">Eventos pasados</Nav.Link>
          <Button variant="outline-info" href="/contacto">
            Contacto
          </Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
