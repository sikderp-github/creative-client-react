import React from 'react';
import { Link } from 'react-router-dom';
import AwserviceDetails from '../AwservicesDetails/AwserviceDetails';
import './AwesomeServices.css';

const awServices = [
    {
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your project',
        picUrl: 'https://i.imgur.com/jarnUoX.png'
    },
    {
        title: 'Web & Mobile design',
        description: 'Amazing flyers, social media, posts and brand representations that would make your brand stand out.',
        picUrl: 'https://i.imgur.com/ZKtmL8A.png'
    },
    {
        title: 'Web & Mobile design',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        picUrl: 'https://i.imgur.com/xOYqUfy.png'
    }

]

const AwesomeServices = () => {
    const handleAddService = () => {
        console.log('object');
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(awServices)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="awServices-container">
            <h1 className="text-center mb-5">Provide awesome <span className="text-success">services</span> </h1>
            <Link to="/orders" onClick={handleAddService}><div className="row">
                {
                    awServices.map(service => <AwserviceDetails service={service}></AwserviceDetails>)
                }
            </div> </Link>
        </div>
    );
};

export default AwesomeServices;