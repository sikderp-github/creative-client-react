import React from 'react';
import './Works.css';
import Carousel from "react-elastic-carousel";
import carousel1 from '../../../images/carousel1.png';
import carousel2 from '../../../images/carousel2.png';
import carousel3 from '../../../images/carousel3.png';
import carousel4 from '../../../images/carousel4.png';
import carousel5 from '../../../images/carousel5.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 }
];

const Works = () => {
    return (
        <section>
            <div className="works-container">
                <div className="pt-5 pb-0 mb-0">
                    <h1 className="text-center text-white">Here are some of  <span className="text-success">our works</span> </h1>
                </div>
                <div className="carousel-container">
                    <Carousel breakPoints={breakPoints}>
                        <div>
                            <img src={carousel1} alt="carousel-1" />
                        </div>
                        <div>
                            <img src={carousel2} alt="carousel-2" />
                        </div>
                        <div>
                            <img src={carousel3} alt="carousel-3" />
                        </div>
                        <div>
                            <img src={carousel4} alt="carousel-4" />
                        </div>
                        <div>
                            <img src={carousel5} alt="carousel-5" />
                        </div>

                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Works;