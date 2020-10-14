import React from 'react';
import AwesomeServices from '../AwesomeServices/AwesomeServices';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header />
            <AwesomeServices />
            <Works />
            <Feedback />
            <Contact />
        </div>
    );
};

export default Home;