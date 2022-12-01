import React from 'react';
import { CiLocationOn, CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './ProductsCard.css'

const ProductsCard = ({product, setProductModal}) => {
    const {id, title, img, sellerName, location, resaleP, orginialP, used, posted} = product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl max-w-[1440px] mx-auto">
  <figure><img className='w-2/3' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl product-title">{title}</h2>
    <div className='grid grid-cols-2 products-details'>
    <p className='flex'><CiUser className='mr-1'></CiUser>{sellerName}</p>
    <p className='flex'><CiLocationOn className='mr-1 text-green-900'></CiLocationOn>{location}</p>
    </div>
    <div className='grid grid-cols-2 products-details'>
    <p>Resale Price: {resaleP}</p>
    <p>Original Price: {orginialP}</p>
    </div>
    <div className='grid grid-cols-2 products-details'>
    <p>Using Time: {used}</p>
    <p>Posted: {posted}</p>
    </div>
    <div className="card-actions justify-end">
         <label onClick={() => setProductModal(product)} htmlFor="booking-modal" className="mr-5 bg-black py-3 px-4 text-white products-btn">Book Now</label>
    </div>
  </div>
</div>
    );
};

export default ProductsCard;