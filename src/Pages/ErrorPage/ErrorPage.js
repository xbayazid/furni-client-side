import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/Error/error.gif'

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <img src={errorImg} alt="" />
            </div>
            <div className='text-center'>
                <Link to='/' className='bg-blue-400 p-5 text-white font-bold'>
                <button>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;