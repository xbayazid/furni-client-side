import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import "./Category.css";
import BookingModal from "../../../Products/BookingModal/BookingModal";

const Category = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://furni-server-side-bayaziddeveloper-gmailcom.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center text-4xl mt-10">
        <h1 className="category-title">Latest Products</h1>
        <div className="divider w-96 mx-auto bg-rose-300 h-1 rounded-md"></div>
      </div>
      <div className="my-10 max-w-[1440px] mx-auto">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <CategoryCard key={service.id} service={service}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
