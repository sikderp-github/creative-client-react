import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AllServices.css';

const AllServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <div className="sidebar-order">
                <Sidebar />
            </div>
            <div className="mr-2 order-form">
                <div className="d-flex justify-content-around">
                    <h3>Service list</h3>
                    <h5>{loggedInUser.name}Login</h5>
                </div>
                <div className="order-form1">
                    <div className="row service-list">
                        <div className="col d-flex status-bar mt-4 justify-content-around mr-2">
                            <strong>Name</strong>
                            <strong>Email ID</strong>
                            <strong>Service</strong>
                            <strong>Project Details</strong>
                            <strong>Status</strong>
                        </div>
                        <div className="row service-list1">
                            <div className=" col status-bar1 d-flex justify-content-around mr-2 mt-2">
                                <p>Tuhin</p>
                                <p>tuhin@gmil.com</p>
                                <p>Graphics</p>
                                <p>Project Details-djfsjfk</p>
                                <p style={{ color: 'red' }}>Pending</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AllServices;