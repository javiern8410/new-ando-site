import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Header from "./components/header/Header";
import CommentForm from "./components/comments/CommentForm";
import Home from "./pages/Home";
import Web from "./pages/Web";
import "./app.scss";

const App: React.FunctionComponent = () => {

  const NotFound: React.FunctionComponent = () => {
    return (
      <div>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </div>
    );
  };

  return (
    <Router>
      <div className="grid-container" id="top">
        <div className="header">
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/web" component={Web} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <div className="footer">
          <div>asdadadsdd</div>
          <div>asdasdasdasd</div>
          <div className="comment-container">
            <CommentForm />
          </div>
        </div>
        <Link to="#top" id="to-top-btn" title="Top">
          <i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i>
        </Link>
      </div>
    </Router>
  );
};

export default App;
