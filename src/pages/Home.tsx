import React from "react";
import "../app.scss";
import BasicCard from "../components/cards/BasicCard";
import WorkerCard from "../components/cards/WorkerCard";
import Portfolio from "../components/portfolio/Portfolio";
import CommentList from "../components/comments/CommentList";


const Home: React.FunctionComponent = () => {

  return (
    <React.Fragment>
      <div className="brand-row">
        <div className="center-title">
          <h1>Que hacemos</h1>
        </div>
        <div className="container">
          <div>
            <p className="home-paragrahp">
              En Ando SoftWare Solutions, como innovadores en el área de las
              tecnologías de la información, ofrecemos soluciones que se
              caracterizan por su versatilidad y calidad, las cuales permiten a
              nuestros clientes mejorar procesos fundamentales para su negocio.
            </p>
            <p className="home-paragrahp">
              Somos creadores de una amplia gama de productos y servicios
              destinados a facilitar el trabajo diario; con soluciones
              integrales y a medida, logramos satisfacer las necesidades con la
              rapidez y eficiencia que nuestros clientes requieren, contando con
              un equipo experimentado, dispuesto a volcar todo de sí para
              alcanzar los objetivos.
            </p>
          </div>
        </div>
        <div className="container">
          <BasicCard
            text="Full Stack Web & Marketing Solutions"
            image="ui-design.jpeg"
            data="web"
          />
          <BasicCard
            text="Android & IOS App Design"
            image="app-develop.jpg"
            data="mobile"
          />
          <BasicCard text="StartUps" image="startups.jpg" data="MVP" />
        </div>
      </div>
      <div className="portfolio-row" id="portfolio">
        <div className="center-title">
          <h1>Dosier</h1>
        </div>
        <Portfolio />
      </div>
      <div className="comment-row" id="comments">
        <div className="center-title text-white">
          <h1>What People Say</h1>
        </div>
        <CommentList />
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
};

export default Home;
