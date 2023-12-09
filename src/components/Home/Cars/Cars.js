import React, { useEffect, useState } from 'react';
import SingleCar from './SingleCar';

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleDelete = car => {
        const agree = window.confirm('Are you sure you want to Delete', car.name)
        console.log(agree);
        if (agree) {
            // console.log('Deleting car with id :', car._id);
            fetch(`http://localhost:5000/cars/${car._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Car deleted successfully.')
                    const remainningCars = cars.filter(cr => cr._id !== car._id);
                    setCars(remainningCars)
                }
            })
        }
    }

    return (
        <div className='mx-5 mt-5 grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
                cars.map(car => <div className='flex'><SingleCar car={car} key={car._id}></SingleCar><button className='shadow-lg shadow-white rounded-full text-4xl h-1/6 w-1/12 text-center' onClick={() => handleDelete(car)}>❌</button></div>)
            }
        </div>
    );
};

export default Cars;