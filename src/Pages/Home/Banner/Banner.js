import React from 'react';
import { Link } from 'react-router-dom';
import bannerOne from '../../../assets/Banner/banner-1.png'
import bannerTwo from '../../../assets/Banner/banner-2.png'
import { FaArrowRight } from "react-icons/fa";
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className='carousel-img'>
        <img src={bannerTwo} alt="" className="w-full" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-[10%] top-1/4">
           <h1 className='xl:text-6xl banner-titles'>Wooden Style</h1>
         </div>
         <div className="absolute w-2/5 flex justify-end transform -translate-y-1/2 left-24 top-1/2">
           <h1 className='lg:text-[90px] uppercase banner-title-two hidden xl:block'>Living Room <br /> Furniture</h1>
         </div>
         <div className="absolute w-2/5 flex justify-start transform -translate-y-1/2 left-[11%] top-2/3">
         <Link>
         <button className="mr-5 bg-black py-3 px-4 text-white font-bold">Shop Now</button>
         </Link>
         </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 top-2/3 left-[40%]"> 
    <a href="#slide2" className="bg-pink-700 py-3 px-7 text-white text-2xl hover:bg-black"><FaArrowRight></FaArrowRight></a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='carousel-img'>
        <img src={bannerOne} alt="" className="w-full rounded-xl" />
        </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-[16%] top-1/4">
           <h1 className='xl:text-6xl banner-titles'>Unique Designs</h1>
         </div>
         <div className="absolute w-2/5 flex justify-end transform -translate-y-1/2 top-1/2">
           <h1 className='text-[48px] uppercase banner-title-two hidden xl:block'>Modern <br /> Sofa Set</h1>
         </div>
         <div className="absolute w-2/5 flex justify-start transform -translate-y-1/2 left-[18%] top-2/3">
         <Link>
         <button className="mr-5 bg-black py-3 px-4 text-white font-bold">Shop Now</button>
         </Link>
         </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 top-2/3 left-[40%]"> 
      <a href="#slide1" className="bg-pink-700 py-3 px-7 text-white text-2xl hover:bg-black"><FaArrowRight></FaArrowRight></a>
    </div>
  </div>
</div>
    );
};

export default Banner;