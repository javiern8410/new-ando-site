import React from 'react';
import CommentForm from "../comments/CommentForm";
import './footer.scss';

const Footer: React.FunctionComponent = () => {

    return (
        <div className="footer-area">
            <div className="footer-top" id="contact">
                <div className="ando-mision">
                     <p>
                        Desarrollamos software a medida, siempre comprometidos con brindar servicios y soluciones de alto valor agregado.
                    </p>
                </div>
                <div className="footer-mid">
                    <h3>Ver más de nosotros</h3>
                    <span className="clickable"><i className="fa fa-facebook-square" aria-hidden="true"></i> Facebook</span> <br/>
                    <span className="clickable"><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</span>
                </div>
                <CommentForm />
            </div>
            <div className="footer-bottom">
                © 2020 All Right Reserved By Ando Solutions
            </div>
        </div>
    );
};

export default Footer;

