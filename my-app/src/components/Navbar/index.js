import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { css } from 'glamor';
import "./index.css";


export class navbar extends Component {
  render() {
    return (
      <div>
          <Navbar collapseOnSelect expand="lg"
          variant="dark"
          style={navStyle}
          >
  <Navbar.Brand style={brandStyle} href="#home">Zac Seewald</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link
      bsPrefix="navbar"
      href="#features">Features</Nav.Link>
      <Nav.Link 
      bsPrefix="navbar"
      href="#pricing">Pricing</Nav.Link>
      <NavDropdown bsPrefix="dropdown-toggle" title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item 
        bsPrefix="dropdown-item"
        href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item 
        href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link bsPrefix="navbar" href="#deets">More deets</Nav.Link>
      <Nav.Link bsPrefix="navbar" eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

      </div>
    )
  }
}

export default navbar

const navStyle = {
  background: "#26C6C4",
  borderBottom: "2px solid #D54C47",
}
const brandStyle = {
  color: "white",
  fontSize: "30px",
  fontWeight: "bold",
}

