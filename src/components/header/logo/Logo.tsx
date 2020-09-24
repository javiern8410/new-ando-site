import React from 'react'
import {Link} from 'react-router-dom';
import './logo.scss';
import logo from '../../../images/ando-logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="AndoPQ Software Solutions" />
                <div>
                    <span>AndoPQ</span>
                    <span>Software Solutions</span>
                </div>
            </Link>
        </div>
    );
};

export default Logo;
