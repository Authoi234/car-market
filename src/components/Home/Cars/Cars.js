import React, { useEffect, useState } from 'react';
import SingleCar from './SingleCar';

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleDelete = car => {
        const agree = window.confirm(`Are You Sure You Want To Delete ${car.name}`)
        if (agree) {
            fetch(`http://localhost:4000/cars/${car._id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Car Deleted Successfully');
                    const remainning = cars.filter(cr => cr._id !== car._id)
                    setCars(remainning);
                }
            })
        }
    }

    return (
        <div className='mx-5 mt-5 grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
                cars.map(car => <div className='flex'>
                    <SingleCar car={car} key={car._id}></SingleCar>
                    <button className='shadow-lg shadow-white rounded-full h-1/6 w-1/12 text-center' onClick={ () => handleDelete(car) }>
                        <svg className="fill-red-400" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                    </button>
                </div>
                )
            }
        </div>
    );
};

export default Cars;