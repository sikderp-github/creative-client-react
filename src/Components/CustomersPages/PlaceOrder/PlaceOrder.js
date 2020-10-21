import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

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

    const handleOrderSubmit = () => {
        const formData = new FormData()
        console.log(bookings);
        formData.append('file', file);
        formData.append('name', bookings.name);
        formData.append('email', bookings.email);
        formData.append('bkService', bookings.bkService);
        formData.append('description', bookings.description);
        formData.append('price', bookings.price);

        fetch('http://localhost:4000/orderServices', {
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
    };

    return (
        <section>
            <div className="container-fluid">
                <div className="col-md-3 sidebar-order">
                    <Sidebar />
                </div>
                <div className="mr-2 order-form">
                    <div className="d-flex justify-content-around">
                        <h3>Order</h3>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                    <div className="order-form1">
                        <form onSubmit={handleOrderSubmit}>
                            <div>
                                <input onBlur={handleBlur} type="text" className="form-control form-input" name="name" placeholder="Your name/Company's name" required />
                            </div>

                            <div >
                                <input onBlur={handleBlur} type="email" className="form-control form-input" name="email" placeholder="Your email address" required />
                            </div>

                            <div>
                                <input onBlur={handleBlur} type="text" className="form-control form-input" name="bkService" placeholder="Your Service" required />
                            </div>

                            <div>
                                <input onBlur={handleBlur} type="text" className="form-control form-input details" name="description" placeholder="Project Details" required />
                            </div>

                            <div>
                                <input onBlur={handleBlur} type="number" className="form-control file-btn" name="price" placeholder="Price" required />
                            </div>

                            <div>
                                <input onChange={handleFileChange} type="file" className="form-control file-btn" id="exampleInputPassword1" placeholder="Upload Project File" />
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default PlaceOrder;