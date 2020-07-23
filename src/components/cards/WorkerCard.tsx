import React from 'react'
import Card from 'react-bootstrap/Card'
import './cards.scss';

const WorkerCard: React.FunctionComponent<any> = ({position}) => {
    const teamData = require('../../data/team.json');
    const imageUrl = require(`../../images/team/${teamData[position].picture}`);
    console.log(teamData);

    return (
        <Card style={{ width: '18rem', border: '0px' }}>
            <div className="person-icon">
                <Card.Img variant="top" src={imageUrl} style={{overflow: 'hidden'}} />
            </div>
            <Card.Body>
                <Card.Title>{teamData[position].name}</Card.Title>
                <Card.Text>
                    {teamData[position].description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WorkerCard;

