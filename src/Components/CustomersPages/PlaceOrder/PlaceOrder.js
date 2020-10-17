import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './PlaceOrder.css';



const PlaceOrder = () => {
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
                <div className="order-form1 container-fluid">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-input" name="name" defaultValue="Your name/Company's name" ref={register} />
                        <br />

                        <input className="form-input" name="email" defaultValue="Your email address" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />

                        <input className="form-input" name="service" defaultValue="your service" ref={register} />
                        <br />

                        <input className="form-input details" name="project" defaultValue="Project Details" ref={register} />
                        <br />

                        <input style={{ width: "20%", height: "40px" }} name="price" defaultValue="Price" ref={register} />
                        <button className="btn btn-outline-success ml-2 mb-2 file-btn">Upload project file</button>
                        <br />

                        <input className="btn btn-dark text-white" defaultValue="Send" type="submit" />
                    </form>
                </div>
            </div>
        </container>
    );
}

export default PlaceOrder;