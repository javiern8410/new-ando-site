import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cards.scss';

const BasicCard: React.FunctionComponent<any> = ({text, image = 'devices.jpg', data}) => {
    const imageUrl = require(`../../images/cards/${image}`);

    let cardText = "Some quick example text to build on the card title and make up the bulk of the card's content.";

    if(data === 'web') {
        cardText = "Creamos sitios web con tecnologías de vanguardia altamente escalables y los acompañamos con soluciones de marketing y SEO para lograr visibilidad en la red."
    }
    if(data === 'mobile') {
        cardText = "Disfrutamos creando aplicaciones que aprovechan el poder de iOS y la flexibilidad de Android."
    }

    if(data === 'MVP') {
        cardText = "¿Tiene una idea? Concéntrese en su negocio mientras construimos lo que necesita. ¡Deje que nuestros especialistas en TI se encarguen de sus necesidades!"
    }

    return (
        <Card style={{ width: '18rem' }} className="brand-card">
            <div>
                <Card.Img variant="top" src={imageUrl} style={{overflow: 'hidden'}} />
            </div>
            <Card.Body>
                <Card.Title>{text}</Card.Title>
                <Card.Text>
                    {
                        cardText
                    }
                </Card.Text>
            </Card.Body>
            <div style={{margin: '10px'}}>
                <Button variant="primary">
                    <Link to="/web">
                        More...
                    </Link>
                </Button>
            </div>
        </Card>
    );
};

export default BasicCard;
