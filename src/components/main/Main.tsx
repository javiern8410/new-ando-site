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
                    <div>
                        <div className="main-title">
                            <span className="initial-red">S</span>imple
                            <span className="small-text"> and </span>
                            <span className="initial-red">S</span>mart

                        </div>
                        <div className="subtitle">
                            Software & Sales Service
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <img src={homeImg} alt="Ando PQ Software Solutions" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Main;
