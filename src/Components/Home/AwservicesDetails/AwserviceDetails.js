import React from 'react';
import './AwsomeDetails.css';

const AwserviceDetails = (props) => {
    const { title, description, picUrl } = props.service;
    return (
        <div className="col-md-3 sm-6 col-12 d-flex mx-auto justify-content-center align-items-center aw-services">
            <div className="mx-auto mt-5 text-center shadow p-3 mb-5 bg-white rounded">
                <img src={picUrl} alt="" />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AwserviceDetails;