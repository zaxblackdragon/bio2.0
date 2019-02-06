import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import gitLogo from '../../images/githubLogo.png';
import linkedInLogo from '../../images/linkedinLogo.png';
import "./index.css";

export class navbar extends Component {
  render() {
    return (
      <div style={{ position: "fixed", width: "100vw", zIndex: "1200",  }}>
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
              <Nav.Link bsPrefix="navbar" href="/about">
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
              <Nav.Link bsPrefix="navbar" eventKey={2} target="_blank" href="https://www.linkedin.com/in/zacseewald/">
              <img className="linkedin" src={linkedInLogo} height="40px" />
              </Nav.Link>
              <Nav.Link bsPrefix="navbar" target="_blank" href="https://github.com/zaxblackdragon">
              <img className="github" src={gitLogo} height="40px" alt="github" />
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
