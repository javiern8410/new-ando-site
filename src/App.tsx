import React from 'react';
import './app.scss';
import Header from './components/header/Header'
import BasicCard from './components/cards/BasicCard'
import WorkerCard from './components/cards/WorkerCard'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <div className="grid-container">
        <div className="header">
          <Header />
        </div>
        <div className="brand-row">
          <div className="container">
            <BasicCard text="Web Site Development" image="ui-design.jpeg" />
            <BasicCard text="Marketing Solutions" image="planning.jpg" />
            <BasicCard text="Android & IOS App Design" image="app-develop.jpg" />
          </div>
        </div>
        <div className="portfolio-row">
          <div className="center-title">
            <h1>About our team</h1>
          </div>
          <div className="container">
            <Portfolio />
          </div>
        </div>
        <div className="about-row">
          <div className="center-title">
            <h1>About our team</h1>
          </div>
          <div className="container">
            <WorkerCard position="CEO" />
            <WorkerCard position="DEVELOPER" />
            <WorkerCard position="MARKETING" />
          </div>
        </div>
        <div className="footer">
          asdasd234234324
        </div>
    </div>
  );
}

export default App;