import React from 'react';
import { Form } from 'react-router-dom';
import './Contact.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='grid xl:grid-cols-2 w-[1400px] mx-auto mt-28 mb-40'>
            <div>
                <p className='contact-title italic'>Contact Us</p>
                <h1 className="uppercase contact-qna">got any question?</h1>
                <div className='grid xl:grid-cols-2 mt-3'>
                    <div>
                    <h3 className='office'>OFFICE</h3>
                    <div className='address'>
                    <p>1316 Abbot Kinney Blvd.</p>
                    <p>Copenhagen CA 90291</p>
                    <p>+112 345 6789</p>
                    <p>konsept@example.com</p>
                    </div>
                    </div>
                    <div>
                        <h3 className="office">Connect with us</h3>
                        <div className='social flex'>
                        <p className='ml-2 text-2xl'><FaFacebook></FaFacebook></p>
                        <p className='ml-2 text-2xl'><FaInstagram></FaInstagram></p>
                        <p className='ml-2 text-2xl'><FaTwitter></FaTwitter></p>
                        <p className='ml-2 text-2xl'><FaYoutube></FaYoutube></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Form>
                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mr-3" />
                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                 <div>
                 <textarea className="textarea textarea-bordered xl:w-3/4 xl:h-52 mt-4" placeholder="Message"></textarea>
                 </div>
                <div>
                <button>Send</button>
                </div>
                </Form>
            </div>
        </div>
    );
};

export default Contact;