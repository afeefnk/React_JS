import React from 'react'
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const NavbarRouting = () => {
  return (
   <>
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="/">My Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/service">Service</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/memo">Memo</Nav.Link>
          <Nav.Link as={Link} to="/fetchdata">Fetch</Nav.Link>
          <Nav.Link as={Link} to="/axiosdata">Axios</Nav.Link>
          <Nav.Link as={Link} to="/axiostask">Axios Task</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
<Outlet/>
   </>
  )
}

export default NavbarRouting
