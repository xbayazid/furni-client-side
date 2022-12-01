import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-20 bg-base-200 text-base-content" style={{backgroundColor: "#E0E9CB"}}>
  <div>
    <span className="footer-title">About Us</span> 
    <Link className="link link-hover">Visit our Store</Link> 
    <Link className="link link-hover">Gallery</Link> 
    <Link className="link link-hover">Portfolio</Link> 
    <Link className="link link-hover">Support</Link>
  </div> 
  <div>
    <span className="footer-title">We're Here To Help</span>  
    <Link className="link link-hover">Online Payments</Link> 
    <Link className="link link-hover">Gift Cards</Link> 
    <Link className="link link-hover">Return Policy</Link>
    <Link className="link link-hover">Orders</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div> 
  <div>
    <span className="footer-title">subscirbe our newsletter</span> 
    <div className="form-control w-80">
      <div className="relative">
        <input type="text" placeholder="Enter your email address" className="input input-bordered w-full pr-16" /> 
        <button className="btn absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;