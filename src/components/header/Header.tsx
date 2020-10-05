import React from 'react'
import NavBar from './navbar/NavBar';
import './header.scss';
// import logo from '../../../images/ando-logo.png';

const Header = () => {
    return (
        <div className="header">
            <NavBar />
            <div className="slogan white">
                <h1>
                    Sabes Cual es el Secreto de las Personas Exitosas?
                </h1>
            </div>
        </div>
    );
};

export default Header;
