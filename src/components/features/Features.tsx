import React from "react";
import "./features.scss";

const Feature: React.FunctionComponent<any> = ({name, icon}) => {
    return (
        <div className="feature-box" data-aos="zoom-in">
            <div className="title">
                {icon} - {name}
            </div>

            <div className="body">
                <img alt="stay-connected" src="../images/saas1/feature/1.png" />
                <div className="feature-content">
                    <h4 className="service-heading"> Responsive <span className="initial-red">Layout</span></h4>
                    <hr />
                    <p >Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists</p>
                </div>
            </div>
        </div>
    )
}

const Features: React.FunctionComponent<any> = () => {

	return (
		<div className="features" id="features">
			<h1><i className="fa fa-yelp" aria-hidden="true"></i> Awesome <span className="initial-red">  Features </span></h1>
            <div className="content">
                <Feature name="Web" icon="web 2.0" />
                <Feature name="Mobile" icon="web 2.0" />
                <Feature name="Marketing Solutions" icon="web 2.0" />
                <Feature name="Web" icon="web 2.0" />
                <Feature name="Mobile" icon="web 2.0" />
                <Feature name="Marketing Solutions" icon="web 2.0" />
            </div>
		</div>
	);
};

export default Features;
