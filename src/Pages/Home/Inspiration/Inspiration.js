import React from 'react';
import { Link } from 'react-router-dom';
import imageOne from '../../../assets/Inspiration/inspiration_01.jpg'
import imageTwo from '../../../assets/Inspiration/inspiration_02.jpg'
import { HiArrowNarrowRight } from "react-icons/hi";
import './Inspiration.css';

const Inspiration = () => {
    return (
        <div className='p-10' style={{backgroundColor: '#9DB97B'}}>
           <div className='grid md:grid-cols-1 xl:grid-cols-2 max-w-[1380px] mx-auto my-32'>
           <div className='ml-32 hidden xl:block'>
              <img className='imgOne' src={imageOne} alt="" />
              <img className='-ml-48 -mt-96 imgTwo' src={imageTwo} alt="" />
           </div>
           <div className='my-auto text-white'>
            <h2 className='title-inspire text-6xl hidden xl:block'>Inspiration</h2>
            <h1 className='uppercase semi-title font-semibold hidden xl:block'>think different</h1>
            <p className='details'>We started our journey for the people who don't have enough money to buy their dream furniture. With connected with us you can buy your desire used or second hand furniture with minimum cost.</p>
            <div className='mt-4'>
            <Link to='/category'>
            <button className='flex items-center p-2 inspiration-btn'>Let's Explore <HiArrowNarrowRight className='ml-2'></HiArrowNarrowRight></button>
            </Link>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Inspiration;