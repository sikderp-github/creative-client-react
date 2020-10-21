import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AwserviceDetails from '../AwservicesDetails/AwserviceDetails';
import './AwesomeServices.css';

// const awServices = [
//     {
//         title: 'Web & Mobile design',
//         description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your project',
//         picUrl: 'https://i.imgur.com/jarnUoX.png'
//     },
//     {
//         title: 'Web & Mobile design',
//         description: 'Amazing flyers, social media, posts and brand representations that would make your brand stand out.',
//         picUrl: 'https://i.imgur.com/ZKtmL8A.png'
//     },
//     {
//         title: 'Web & Mobile design',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         picUrl: 'https://i.imgur.com/xOYqUfy.png'
//     }

// ]

const AwesomeServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://tranquil-thicket-30168.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="awServices-container">
            <h1 className="text-center mb-5">Provide awesome <span className="text-success">services</span> </h1>
            <Link to="/orders"><div className="row mt-1">
                {
                    services.map(service => <AwserviceDetails service={service}></AwserviceDetails>)
                }
            </div> </Link>
        </div>
    );
};

export default AwesomeServices;