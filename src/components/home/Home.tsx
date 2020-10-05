import React from "react";
import Form from "../form/Form";
import "./home.scss";
const homeImg = require("../../images/homePic.jpg");

const Home: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<div className="main-content">
				<div className="container justify-end">
					<div>
						<h2 style={{padding: '10px 0', textAlign: 'center'}}>Es Muy Sencillo: Son Profesionales</h2>
						<img src={homeImg} alt="" className="img-fluid img-thumbnail float-left" />
					</div>
					<div style={{marginTop: '65px'}}>
						<Form />
					</div>
				</div>
			</div>
			<div className="container" style={{marginTop: '40px'}}>
					<div>
						<h5>
							Ponemos a Tu Disposición una Plataforma de Clase Mundial con Excelentes Resultados en Varios Mercados
						</h5>
						<ul>
							<li>Vínculo Directa con Varios Proveedores que permite a los Viajeros reservar en tu plataforma y tener confirmación inmediata.</li>
							<li>Capacidad de Integrarse con Cualquier Proveedor de forma Sencilla, sin la Necesidad de un Programador.</li>
							<li>Escalabilidad Infinita. Soportamos Todo el Crecimiento que Tu Agencia Tendrá. </li>
							<li>Actualizaciones y Soporte Técnico 24/7 </li>
							<li>Sistema de Protección de la Información 100% Garantizado</li>
						</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
