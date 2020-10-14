import React from 'react';
import AwserviceDetails from '../AwservicesDetails/AwserviceDetails';

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
    return (
        <div>
            <h1 className="text-center">Provide awesome <span className="text-success">services</span> </h1>
            <div className="row">
                {
                    awServices.map(service => <AwserviceDetails service={service}></AwserviceDetails>)
                }
            </div>
        </div>
    );
};

export default AwesomeServices;