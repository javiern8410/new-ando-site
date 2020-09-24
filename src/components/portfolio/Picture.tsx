import React from 'react';
import './picture.scss';

export interface PictureProps {
    text: string;
    image: string;
    category: string;
}

const Picture: React.FunctionComponent<PictureProps> = ({ text, image, category }) => {
    const imageUrl = require(`../../images/portfolio/${image}`);

    return (
        <div className={`picture`}>
            {text} - {category}
            <img src={imageUrl} alt={text} width="300px" loading="lazy" />
        </div>
    );
};

export default Picture;

