import React from 'react';
import './FeedbackDetails.css';

const FeedbackDetails = ({ review }) => {
    return (
        <div className="col-md-3 sm-6 col-12 p-2 my-3 text-center feedback-card">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <img style={{ height: '100px' }} alt="" src={`data:image/png;base64,${review.image.img}`} />
                </div>
                <div>
                    <h2>{review.name}</h2>
                    <h4>{review.company}</h4>
                </div>
            </div>
            <p>{review.description}</p>
        </div>
    );
};

export default FeedbackDetails;