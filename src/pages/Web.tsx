import React from 'react';
import WorkerCard from '../components/cards/WorkerCard';

const Web = () => {
  return (
    <React.Fragment>
          <div className="container">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illo ab cupiditate rerum voluptatum eveniet aut nesciunt reprehenderit nulla accusantium rem, corrupti deserunt doloribus, commodi in magni natus unde iusto!
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illo ab cupiditate rerum voluptatum eveniet aut nesciunt reprehenderit nulla accusantium rem, corrupti deserunt doloribus, commodi in magni natus unde iusto!
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illo ab cupiditate rerum voluptatum eveniet aut nesciunt reprehenderit nulla accusantium rem, corrupti deserunt doloribus, commodi in magni natus unde iusto!
            </p>
          </div>
        <div className="about-row" id="team">
          <div className="center-title">
            <h1>About our team</h1>
          </div>
          <div className="container padding-top-25">
            <WorkerCard position="CEO" />
            <WorkerCard position="DEVELOPER" />
            <WorkerCard position="MARKETING" />
          </div>
        </div>
    </React.Fragment>
  );
}

export default Web;