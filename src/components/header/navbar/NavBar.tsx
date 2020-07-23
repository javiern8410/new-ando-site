import React from 'react';
import './navbar.scss';
import Logo from '../logo/Logo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
    const [login, setLogin] = React.useState(false)
;    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark" className="site-navbar">
            <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    {login ? (
                        <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" onClick={() => setLogin(false)}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <Navbar.Text>
                             <a href="#" onClick={() => setLogin(true)}>Sig In</a>
                        </Navbar.Text>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
