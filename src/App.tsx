import React from "react";
import Main from "./components/main/Main";
import Features from "./components/features/Features"
import CommentList from "./components/comments/CommentList";
import Footer from "./components/footer/Footer";
import ToTopBtn from "./components/totopbtn/ToTopBtn";
import "./app.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Technologies from "./components/technologies/Technologies";
AOS.init();

const App: React.FunctionComponent = () => {
	return (
		<>
			<Main />
			<Features />
			<Technologies />
			<CommentList />
			<Footer />
			<ToTopBtn />
		</>
	);
};

export default App;
