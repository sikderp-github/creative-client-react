import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './ServiceStatus.css';

const ServiceStatus = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="sidebar-order">
                <Sidebar />
            </div>
            <div className="order-form">
                <div className="d-flex justify-content-around">
                    <h3>Order</h3>
                    <h5>{loggedInUser.name}Login</h5>
                </div>
                <div className="row order-form1">
                    <div className="col-md-4 status-container">
                        <div className="d-flex mb-3 justify-content-around">
                            <img src="" alt="" />
                            <button>Pending</button>
                        </div>
                        <div className="text-center">
                            <h2>Title</h2>
                            <p>description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceStatus;