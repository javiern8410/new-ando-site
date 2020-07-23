import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './cards.scss';

const BasicCard: React.FunctionComponent<any> = ({text, image = 'devices.jpg'}) => {
    const imageUrl = require(`../../images/cards/${image}`);

    return (
        <Card style={{ width: '18rem' }}>
            <div>
                <Card.Img variant="top" src={imageUrl} style={{overflow: 'hidden'}} />
            </div>
            <Card.Body>
                <Card.Title>{text}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default BasicCard;
