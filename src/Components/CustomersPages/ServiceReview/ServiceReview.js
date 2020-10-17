import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './ServiceReview.css';

const ServiceReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <container>
            <div className="sidebar-order">
                <Sidebar />
            </div>
            <div className="mr-2 order-form">
                <div className="d-flex justify-content-around">
                    <h3>Order</h3>
                    <h5>{loggedInUser.name}Login</h5>
                </div>
                <div className="order-form1">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-input" name="name" defaultValue="Your name" ref={register} />
                        <br />

                        <input className="form-input" name="company" defaultValue="Designation, Company's name" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />

                        <input className="form-input details" name="description" defaultValue="Description" ref={register} />
                        <br />

                        <input className="btn btn-dark text-white mt-2" defaultValue="Send" type="submit" />
                    </form>
                </div>
            </div>
        </container>
    );
};

export default ServiceReview;