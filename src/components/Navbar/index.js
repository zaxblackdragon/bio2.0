import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./index.css";

export class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" style={navStyle}>
          <Navbar.Brand style={brandStyle} href="/">
            Zac Seewald
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link bsPrefix="navbar" href="/">
              Home
              </Nav.Link>
              <Nav.Link bsPrefix="navbar" href="/res">
               About
              </Nav.Link>
              <Nav.Link bsPrefix="navbar" href="/contact">
                Contact
              </Nav.Link>
              <NavDropdown
                bsPrefix="dropdown-toggle"
                title="Apps"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item bsPrefix="dropdown-item" href="/app_info" target="_blank">
                  App Info
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" target="_blank">
                  ZooPocalypse
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" target="_blank">
                  JS Fun
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" target="_blank">
                  Calculator
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link bsPrefix="navbar" target="_blank" href="https://github.com/zaxblackdragon">
               Github
              </Nav.Link>
              <Nav.Link bsPrefix="navbar" eventKey={2} target="_blank" href="https://www.linkedin.com/in/zacseewald/">
                LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;

const navStyle = {
  background: "#26C6C4",
  borderBottom: "2px solid #D54C47"
};
const brandStyle = {
  color: "white",
  fontSize: "30px",
  fontWeight: "bold"
};
