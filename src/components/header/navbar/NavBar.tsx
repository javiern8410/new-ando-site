import React from 'react';
import './navbar.scss';
import Logo from '../logo/Logo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

;    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark" className="site-navbar">
            <Navbar.Brand href="#"><Logo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#comments">Comments</Nav.Link>
                    <Nav.Link href="#team">Team</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
