import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './ServiceStatus.css';

const ServiceStatus = () => {
    const [loggedInUser, setLoggedInUser, allbookings] = useContext(UserContext);
    // const { bkService, description } = allbookings;
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
                        {
                            allbookings.map(book =>
                                <div className="text-center">
                                    <div className="d-flex mb-3 justify-content-around">
                                        <img style={{ height: '50px' }} alt="" src={`data:image/png;base64,${book.image.img}`} />
                                        <button>Pending</button>
                                    </div>
                                    <h2>{book.bkService}</h2>
                                    <p>{book.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceStatus;