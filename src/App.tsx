import React from "react";
import Main from "./components/main/Main";
import Features from "./components/features/Features"
import CommentList from "./components/comments/CommentList";
import Footer from "./components/footer/Footer";
import ToTopBtn from "./components/totopbtn/ToTopBtn";
import "./app.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App: React.FunctionComponent = () => {
	return (
		<>
			<Main />
			<Features />
			<CommentList />
			<Footer />
			<ToTopBtn />
		</>
	);
};

export default App;
