import React from "react";
import { Link } from "react-router-dom";
import './CategoryCard.css';

const CategoryCard = ({ service }) => {
  const { _id, name, logo } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={logo} alt="" className="rounded-xl w-full bg-red-100" />
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title card-name">{name}</h2>
    <div className="card-actions justify-end">
    <Link to={`/category/${_id}`}>
        <button className="mr-5 bg-black py-3 px-4 text-white font-bold btn-style">View All</button>
    </Link>
    </div>
  </div>
</div>
    
  );
};

export default CategoryCard;
