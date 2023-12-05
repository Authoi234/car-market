import React from 'react';
import Cars from './Cars/Cars';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <h1 className='text-4xl font-bold text-red-500 mt-5'>Welcome to our Car Market</h1>
            <p className='text-2xl text-red-300 my-5'>Buy You favourite super cars, land cruisers, <br /> hypercars, RJB cars etc</p>
            <Link to='/addCar' className='btn btn-outline btn-primary'>Add Car</Link>
           <Cars></Cars>
        </div>
    );
};

export default Home;