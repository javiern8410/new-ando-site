import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import CommentList from "./components/comments/CommentList";
import "./app.scss";

const App: React.FunctionComponent = () => {
  return (
      <div className="grid-container" id="top">
          <Header />
          <Home />
          <CommentList />
          <Footer />
      </div>
  );
};

export default App;
