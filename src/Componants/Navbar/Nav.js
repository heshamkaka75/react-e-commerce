import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/AppImages/WhatMakesYouHappy_v1_0.webp'
import './Nav.css'
import { useSelector } from 'react-redux';

function MyNav() {
  const numberCards = useSelector(state => state.card)
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src = {logo}
              width="70"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to='/' className='nav-link'>Home</Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Link className='nav-link' href="#link">Contact</Link>
            <Link to='/pro' className='nav-link'>Product</Link>
            <Link to='/card' className='nav-link'>Card {numberCards.length} </Link>
            <NavDropdown title="Other " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;