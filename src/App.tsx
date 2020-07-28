import React from 'react';
import './app.scss';
import Header from './components/header/Header'
import BasicCard from './components/cards/BasicCard'
import WorkerCard from './components/cards/WorkerCard'
import Portfolio from './components/portfolio/Portfolio'
import CommentForm from './components/comments/CommentForm'
import CommentList from './components/comments/CommentList'

function App() {

  const scrollTop = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

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
            <h1>Works</h1>
          </div>
          <div className="container" id="portfolio">
            <Portfolio />
          </div>
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
        <div className="footer">
          <div>
            asdadadsdd
          </div>
          <div>
            <CommentList />
          </div>
          <div>
            <CommentForm />
          </div>
        </div>
        <button onClick={() => scrollTop()} id="to-top-btn" title="Go to top">Top</button>
    </div>
  );
}

export default App;