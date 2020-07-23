import React from 'react'
import NavBar from './navbar/NavBar';
import './header.scss';
// import logo from '../../../images/ando-logo.png';

const Header = () => {
    return (
        <div className="header-content">
            <NavBar />
            
            <div className="slogan white">
                {/* <img src={logo} alt=""/> */}
                <h1>
                    <i>
                        #Best Software Solutions
                    </i>
                </h1>    
            </div>

        </div>
    );
};

export default Header;
