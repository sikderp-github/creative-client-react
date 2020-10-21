import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...service };
        newInfo[e.target.name] = e.target.value;
        setService(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(service);
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);

        fetch('https://tranquil-thicket-30168.herokuapp.com/addServices1', {
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
        <div>
            <div className="sidebar-order">
                <Sidebar />
            </div>
            <div className="mr-2 order-form">
                <div className="d-flex justify-content-around">
                    <h3>Add Services</h3>
                    <h5>{loggedInUser.name}</h5>
                </div>
                <div className="row order-form2">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="exampleInputPassword1">Title</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="exampleInputPassword1">Upload image</label>
                                <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Description</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Name" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;