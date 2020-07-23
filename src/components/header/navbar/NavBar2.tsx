import React from 'react';
import './navbar.scss';
import Logo from '../logo/Logo';

const NavBar = () => {
    return (
        <div className="site-navbar">
            <div>
                <Logo />
            </div>
            <div>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Servicios</a></li>
                    <li><a href="/">Portafolio</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
