import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './Admin.css';

const Admin = () => {
    const { loggedInUser, setLoggedInUser, setAdmin } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4000/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(docs => setAdmin(docs))
    };
    return (
        <div>
            <div className="sidebar-order">
                <Sidebar />
            </div>
            <div className="mr-2 order-form">
                <div className="d-flex justify-content-around">
                    <h3>Add Services</h3>
                    <h5>{loggedInUser.name}</h5>
                </div>
                <div className="row order-form1">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col">
                            <label><h4>Email</h4></label> <br />
                            <input className="form-input1" name="email" placeholder="Your email" ref={register} />
                        </div>
                        <div className="col mt-2">
                            <input className="btn btn-success text-white d-flex flex-end" defaultValue="Send" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;