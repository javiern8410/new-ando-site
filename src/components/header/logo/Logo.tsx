import React from 'react'
import './logo.scss';
import logo from '../../../images/ando-logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="AndoPQ Software Solutions" />
            <div className="logo-text">
                <div className="logo-name">
                    AndoPQ
                </div>
                <div className="logo-slogan">
                    <span>Software</span>
                    <span>&</span>
                    <span>Sales Solutions</span>
                </div>
            </div>
        </div>
    );
};

export default Logo;
