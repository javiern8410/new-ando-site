import React from 'react'
import './portfolio.scss';

const Portfolio: React.FunctionComponent<any> = () => {
    const imageUrl = require(`../../images/portfolio/portfolio1.jpeg`);
    return (
        <div style={{textAlign: 'center'}}>
            <h3>PortFolio</h3>
            <div>
                <img src={imageUrl} alt="Our Portfolio" width="75%" />
            </div>
        </div>
    );
};

export default Portfolio;
