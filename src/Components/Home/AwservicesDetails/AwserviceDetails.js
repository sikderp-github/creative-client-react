import React from 'react';
import './AwsomeDetails.css';

const AwserviceDetails = ({ service }) => {
    return (
        <div className="col-md-3 sm-6 col-12 d-flex mx-auto justify-content-center align-items-center aw-services">
            <div className="mx-auto mt-5 text-center shadow p-3 mb-5 bg-white rounded">
                <img style={{ height: '100px' }} alt="" src={`data:image/png;base64,${service.image.img}`} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default AwserviceDetails;