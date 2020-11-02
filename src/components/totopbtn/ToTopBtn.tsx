import React from 'react';
import './to-top-btn.scss';

const ToTopBtn: React.FunctionComponent<any> = () => {
	return (
		<a className="back-top" title="Go to Top" href="/#main"
			data-aos="fade-left"
			data-aos-offset="350"
			data-aos-anchor-placement="top-top"
		>
			<i className="fa fa-level-up" aria-hidden="true"></i>
		</a>
	)
}

export default ToTopBtn;
