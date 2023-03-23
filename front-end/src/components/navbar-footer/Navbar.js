import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import './navbar.css';

const NavbarComplete = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand className="mx-3" id="logo">
          Bar App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavLink className="nav-link mx-3" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link mx-3" to="/menu">
              Menu
            </NavLink>
          </Nav>
          <div className="text-light">
            <NavLink className="nav-link mx-3" to="/login">
              Login o registarti <BiLogIn />
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <hr className="border border-5 border-dark my-3" />
    </>
  );
};

export default NavbarComplete;
