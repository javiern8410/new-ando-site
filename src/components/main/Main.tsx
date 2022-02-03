import React from "react";
import "./main.scss";
import NavBar from "../navbar/NavBar";
const homeImg = require("../../images/about.png");

const Main: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <div className="main" id="main">
                <NavBar />
                <div className="content">
                    <div className="side-left">
                        <div className="main-title">
                            <span className="initial-red">R</span>ápido
                            <span className="small-text"> y </span>
                            <span className="initial-red">S</span>encillo

                        </div>
                        <div className="subtitle">
                            Ando Software & Sales Service
                        </div>
                        <div className="about">
                            Somos profesionales comprometidos con brindar servicios y respuestas de alto valor agregado
                        </div>
                    </div>
                    <div className="header-pic" data-aos="fade-up">
                        <img src={homeImg} alt="Ando PQ Software Solutions" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Main;
