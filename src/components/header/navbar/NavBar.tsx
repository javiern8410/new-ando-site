import React from 'react';
import './navbar.scss';
import Logo from '../logo/Logo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
    const [login, setLogin] = React.useState(false)

    const toggleLogin = (e:any, loginState:any) => {
        e.preventDefault();
        setLogin(loginState)
    }

;    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark" className="site-navbar">
            <Navbar.Brand href="/asdasdadsd"><Logo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#team">Team</Nav.Link>
                    {login ? (
                        <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/asdadsada">Dashboard</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/sdfsdf" onClick={(e) => toggleLogin(e, false)}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <Nav.Link href="/asdasdd" onClick={(e:any) => toggleLogin(e, true)}>
                            Sig In
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
