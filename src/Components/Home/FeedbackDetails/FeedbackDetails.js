import React from 'react';
import './FeedbackDetails.css';

const FeedbackDetails = (props) => {
    const { name, title, description, picUrl } = props.client;
    return (
        <div className="col-md-3 sm-6 col-12 p-2 my-3 text-center feedback-card">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <img src={picUrl} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <h4>{title}</h4>
                </div>
            </div>
            <p>{description}</p>

        </div>
    );
};

export default FeedbackDetails;