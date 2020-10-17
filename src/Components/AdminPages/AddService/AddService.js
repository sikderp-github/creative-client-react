import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
// import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const { register, handleSubmit } = useForm();
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

        fetch('http://localhost:5000/addServices1', {
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
                    <h5>{loggedInUser.name}Login</h5>
                </div>
                <div className="row order-form2">
                    <form onSubmit={handleSubmit}>
                        {/* <div className="col">
                            <label><h4>Service Title</h4></label> <br />
                            <input className="form-input1" name="name" defaultValue="Enter title" ref={register} />
                        </div>
                        <div className="col">
                            <label><h4>Icon</h4></label> <br />
                            <button className="btn btn-outline-success file-btn1">Upload Image</button>
                        </div>
                        <br />
                        <div className="col mt-5">
                            <label><h4>Description</h4></label> <br />
                            <input className="form-input1 details" name="project" defaultValue="Enter description" ref={register} />
                        </div>
                        <input className="btn btn-success text-white d-flex justify-content-end" defaultValue="Send" type="submit" /> */}
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="exampleInputPassword1">Title</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="exampleInputPassword1">Upload a image</label>
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