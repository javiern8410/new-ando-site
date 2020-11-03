import React from "react";
import "./technologies.scss";

const Technology: React.FunctionComponent<any> = ({name, icon}) => {
    const imageUrl = require(`../../images/tech/${icon}.png`);
    return (
        <div className="brand-item">
            <img src={imageUrl} alt={name} title={name} width="120px" />
        </div>
    )
}

const technologiesLisn = [
    {name: "Android", icon: "android"},
    {name: "Angular", icon: "angular-logo"},
    {name: "C#", icon: "csharp"},
    {name: "Github", icon: "github"},
    {name: "HTML5", icon: "html5"},
    {name: "IOS", icon: "ios"},
    {name: "java", icon: "java"},
    {name: "javascript", icon: "javascript"},
    {name: "Node JS", icon: "nodejs"},
    {name: "React JS", icon: "react.df70b005"},
    ]

const Technologies: React.FunctionComponent<any> = () => {
    

	return (
		<div className="technologies" id="technologies">
			<h1><i className="fa fa-yelp initial-red" aria-hidden="true"></i> Nuestras <span className="initial-red">  Tecnologías </span></h1>
            <div className="content">
               {
                   technologiesLisn.map(tech =>  <Technology name={tech.name} icon={tech.icon} />)
               }
            </div>
		</div>
	);
};

export default Technologies;
