import React, { useState } from 'react';
import { useEffect } from 'react';
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';
import './Feedback.css'

const Feedback = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://tranquil-thicket-30168.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="feedback-container">
            <h1 className="text-center">Clients <span className="text-success">Feedback</span> </h1>
            <div className="row mt-5 pt-2">
                {
                    reviews.map(review => <FeedbackDetails review={review}></FeedbackDetails>)
                }
            </div>
        </div>
    );
};

export default Feedback;