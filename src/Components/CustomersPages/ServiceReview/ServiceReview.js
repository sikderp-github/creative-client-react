import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './ServiceReview.css';

const ServiceReview = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [bookings, setBookings] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...bookings };
        newInfo[e.target.name] = e.target.value;
        setBookings(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = () => {
        const formData = new FormData()
        console.log(bookings);
        formData.append('file', file);
        formData.append('name', bookings.name);
        formData.append('company', bookings.company);
        formData.append('description', bookings.description);

        fetch('http://localhost:4000/addReview', {
            method: 'POST',
            body: formData
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
        <container>
            <div className="sidebar-order">
                <Sidebar />
            </div>
            <div className="mr-2 order-form">
                <div className="d-flex justify-content-around">
                    <h3>Order</h3>
                    <h5>{loggedInUser.name}</h5>
                </div>
                <div className="order-form1">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input onBlur={handleBlur} className="form-input" name="name" placeholder="Your name" ref={register} />
                        <br />

                        <input onBlur={handleBlur} className="form-input" name="company" placeholder="Designation, Company's name" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />

                        <input onBlur={handleBlur} className="form-input details" name="description" placeholder="Description" ref={register} />
                        <br />
                        <input onChange={handleFileChange} type="file" className="form-input" name="pic" placeholder="picture" ref={register} />
                        <br />
                        <input className="btn btn-dark text-white mt-2" defaultValue="Send" type="submit" />
                    </form>
                </div>
            </div>
        </container>
    );
};

export default ServiceReview;