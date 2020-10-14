import React from 'react';
import './ReferOrg.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const RefOrg = () => {
    return (
        <div className="row ref-org">
            <div className="col-md-2 d-flex justify-content-center mx-auto">
                <div>
                    <img src={slack} alt="" />
                </div>
                <div>
                    <img src={google} alt="" />
                </div>
                <div>
                    <img src={uber} alt="" />
                </div>
                <div>
                    <img src={netflix} alt="" />
                </div>
                <div>
                    <img src={airbnb} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RefOrg;