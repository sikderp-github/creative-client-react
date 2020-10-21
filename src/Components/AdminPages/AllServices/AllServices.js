import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AllServices.css';

const AllServices = () => {
    const { loggedInUser, setLoggedInUser, allbookings } = useContext(UserContext);

    return (
        <>
            <div className="sidebar-order">
                <Sidebar />
            </div>
            <div className="mr-2 order-form">
                <div className="d-flex justify-content-around">
                    <h3>Service list</h3>
                    <h5>{loggedInUser.name}</h5>
                </div>
                <div className="order-form1">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary" scope="col">Project Details</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allbookings.map((bookings, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{bookings.name}</td>
                                        <td>{bookings.email}</td>
                                        <td>{bookings.bkServices}</td>
                                        <td>{bookings.description}</td>
                                        <td>pending</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllServices;