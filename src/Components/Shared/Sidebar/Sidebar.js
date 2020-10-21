import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    const { loggedInUser } = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])



    return (
        <>
            <div className="container-fluid">
                <div>
                    <Link to="/"><img className="d-flex m-3" style={{ height: '50px' }} src={logo} alt="" /></Link>
                </div>
                <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/orders" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order</span>
                            </Link>
                        </li> <i className="fal fa-cart-plus"></i>
                        <li>
                            <Link to="/customerstatus" className="text-white">
                                <FontAwesomeIcon icon={faHome} /> <span>Service list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" className="text-white">
                                <FontAwesomeIcon icon={faHome} /> <span>Review</span>
                            </Link>
                        </li>

                        {isAdmin && <div>
                            <li>
                                <Link to="/allservices" className="text-white">
                                    <FontAwesomeIcon icon={faCalendar} /> <span>Service list</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addService" className="text-white">
                                    <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin" className="text-white">
                                    <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                                </Link>
                            </li>
                        </div>}
                        <br /> <br />
                        <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;