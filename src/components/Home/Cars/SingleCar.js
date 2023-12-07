import React from 'react';

const SingleCar = ({ car }) => {
    console.log(car);
    return (
        <div className="card lg:card-side bg-base-100 shadow-lg shadow-indigo-500/50 my-10">
            <figure className='w-full'><img src={car.img} alt="Album" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-6xl">{car.name}</h2>
                <p>This car is very famous and comfortable. You should buy It. It is the world famous international {car.name}. If you dont belive me, search the name of the car in any search engine.</p>
                <p className='text-orange-600 text-2xl'>Price : {car.price}</p>
                <div className='flex justify-start'>
                    <label className="swap my-5">
                        <input type="checkbox" />
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" /></svg>
                    </label>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white text-2xl shadow-lg shadow-blue-500/50">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCar;