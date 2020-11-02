import React from "react";
import "./navbar.scss";

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
          ANDOPQ
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
        <a href="tel:1832674-6255" className="header-phone">
            <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i> {'  '}
            + 1 (832) 674-6255
        </a>
        <a href="#capture-form" onClick={uncheckB}>
          Contacto
        </a>
      </div>
    </div>
  );
};

export default NavBar;
