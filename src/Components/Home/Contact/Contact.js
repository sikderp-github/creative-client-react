import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact px-5 my-1 py-5">
            <div className="row container">
                <div className=" col-md-6 section-header text-center mb-5 pr-3">
                    <h1>Let us handle your <br /> project professionally. </h1> <br />
                    <p>With well written codes, we build organizating apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 text-center pl-3 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your name /company *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" placeholder="Your Message *"></textarea>
                        </div>
                        <div className="form-group text-left">
                            <button type="button" className="btn btn-dark"> Send </button>
                        </div>
                    </form>
                    <br />
                    <footer className="text-center mt-5">
                        <p><small>copyright @sikderp-2020</small></p>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Contact;