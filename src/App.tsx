import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import CommentList from "./components/comments/CommentList";
import ToTopBtn from "./components/totopbtn/ToTopBtn";
import "./app.scss";

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
        <main className="grid-container" id="top">
            <Header />
            <Home />
            <CommentList />
            <Footer />
            <ToTopBtn />
        </main>
      </React.Fragment>
  );
};

export default App;
