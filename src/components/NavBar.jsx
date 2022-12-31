import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import navbarLogo from "../imgs/girlCodeHeader.svg";

import "../App.css";

export default function NavBar() {

  return (
    <Navbar bg="light" expand="lg">
      <Container className="navbar" fluid>
        <Navbar.Brand className='navbar-name' as={NavLink} to="/">
          <img
            alt="logo"
            src={navbarLogo}
            width="200"
            height="150"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" bg="light">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/schedule" className="nav-link">Schedule</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/faq" className="nav-link">FAQ</Nav.Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSek2NJzhSxFLnPMce19OIkQ32lg-rgGrSmTh_8MNXUzFtvCZQ/viewform">
              <button type="button" className="nav-button">Volunteer</button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
