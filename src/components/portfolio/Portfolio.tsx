import React, {useState} from 'react'
import './portfolio.scss';
import './Picture'
import Picture from './Picture';

const pictures = [
    {
        image: 'aaa.png',
        text: 'Sitio Web de bla bla bla',
        category: 'web'
    },
    {
        image: 'bbb.jpeg',
        text: 'Sitio Web de bla bla bla',
        category: 'mobile'
    },
    {
        image: 'ccc.jpeg',
        text: 'Sitio Web de bla bla bla',
        category: 'sap'
    },
    {
        image: 'ccc.jpeg',
        text: 'Sitio Web de bla bla bla',
        category: 'sap'
    },
    {
        image: 'ccc.jpeg',
        text: 'Sitio Web de bla bla bla',
        category: 'sap'
    }
]

const Portfolio: React.FunctionComponent<any> = () => {

    const [category, setCategory] = useState('all');

    const handleCategory = (category: string) => {
        setCategory(category);
    }

    const categories  = Array.from(new Set(pictures.map(item => item.category)));


    // const imageUrl = require(`../../images/portfolio/portfolio1.jpeg`);
    return (
        <div>
            <div className="categories">
                <span onClick={() => handleCategory('all')}> All </span>
                {
                    categories.map((category, index) => (
                        <span key={index} onClick={() => handleCategory(category)}> { category.toUpperCase() } </span>
                    ))
                }
            </div>
            <div className="portfolio" style={{textAlign: 'center'}}>
                {
                    pictures.map((pic, index) => (
                        <div key={index} className={`${(pic.category !== category && category !== 'all') ? 'pic-hide' : 'pic-visible'}`}>
                            <Picture text={pic.text} image={pic.image} category={pic.category} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Portfolio;
