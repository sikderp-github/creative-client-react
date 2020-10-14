import React from 'react';

const AwserviceDetails = (props) => {
    const { title, description, picUrl } = props.service;
    return (
        <div className="col-md-4 sm-6 col-12 d-flex justify-content-center align-items-center">
            <div className="mx-auto mt-5 text-center shadow p-3 mb-5 bg-white rounded">
                <img src={picUrl} alt="" />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default AwserviceDetails;