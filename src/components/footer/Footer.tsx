import React from 'react';
import CommentForm from "../comments/CommentForm";
import './footer.scss';

const Footer: React.FunctionComponent = () => {

    return (
        <div className="footer-area">
            <div className="footer-top" id="contact">
                <div>
                    asadasd
                </div>
                <div>
                    asdasdd
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

