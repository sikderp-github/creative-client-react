import React from 'react';
import { Link } from 'react-router-dom';
import Frame from '../../../images/logos/Frame.png';

import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/hire" className="btn btn-dark text-white">Hire us</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={Frame} alt="" className="img-fluid headerMainImg" />
            </div>
        </main>
    );
};

export default HeaderMain;