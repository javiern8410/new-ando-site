import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./navbar.scss";
import Logo from "../logo/Logo";

const NavBar: React.FunctionComponent = () => {

  const uncheckB = () => {
    let element:any = document.getElementById("nav-check");  
    element.checked = false;
  }
  

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <Logo />
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <Link to="/#portfolio" onClick={uncheckB}>
          Portfolio
        </Link>
        <Link to="/#team" onClick={uncheckB}>
          Team
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
