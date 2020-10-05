import React from 'react'
import './logo.scss';
import logo from '../../../images/ando-logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="AndoPQ Software Solutions" />
            <div>
                <span>AndoPQ</span>
                <span>Software Solutions</span>
            </div>
        </div>
    );
};

export default Logo;
