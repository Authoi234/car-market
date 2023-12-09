import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddCar = () => {
    const [car, setCar] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value + "$";
        const img = form.img.value;
        const newCar = { name: name, price: price, img: img };
        setCar(newCar)

        console.log(car);

        fetch('http://localhost:5000/cars', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <p className="text-2xl text-slate-300">Go to <Link className='text-red-400' to={'/'}>Home</Link></p>
            <h2 className='text-4xl'>
                Please Add A Car For Sale
            </h2>
            <form className='form-control flex justify-center items-center' onSubmit={handleSubmit}>
                <input type="text" className='w-1/3 rounded-md block px-5 py-4 mx-5 my-5' name='name' placeholder='Name of your car' />
                <input type="number" className='w-1/3 rounded-md block px-5 py-4 mx-5 my-5' placeholder='$ Price of your car (dont add $ symbol)' name="price" />
                <input type="text" className='w-1/3 rounded-md block px-5 py-4 mx-5 my-5' name='img' placeholder='Img Link of your car' />
                <button type="submit" className='btn btn-primary text-white text-xl'>Add Now</button>
            </form>
        </div>
    );
};

export default AddCar;