import React, { useState } from 'react';
import { useEffect } from 'react';
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';
import './Feedback.css'

// const clients = [
//     {
//         name: 'Nash Patrik',
//         title: 'CEO, Manpol',
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia laborum magni voluptate doloribus nesciunt iure ratione nostrum distinctio aspernatur.",
//         picUrl: 'https://i.imgur.com/YoJzW63.png'
//     },
//     {
//         name: 'Miriam Barron',
//         title: 'CEO, Manpol',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia laborum magni voluptate doloribus nesciunt iure ratione nostrum distinctio aspernatur.',
//         picUrl: 'https://i.imgur.com/ehobmnG.png'
//     },
//     {
//         name: 'Bria Manone',
//         title: 'CEO, Manpol',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia laborum magni voluptate doloribus nesciunt iure ratione nostrum.',
//         picUrl: 'https://i.imgur.com/tFByDjz.png'
//     }

// ]

const Feedback = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/reviews')
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