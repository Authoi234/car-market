import React, { useState } from 'react';

const AddCar = () => {
    const [car, setCar] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const newCar = {name: name, price: price, img: img};
        setCar(newCar)
    
        // fetch('http://localhost:4000/users', {

        // })
        // .then(res => res.json());
        // .then(data => console.log(data))
    }
    return (
        <div>
            <h2 className='text-4xl'>
                Please Add A Car For Sale
            </h2>
            <form className='form-control flex justify-center items-center' onSubmit={handleSubmit}>
                <input type="text" className='w-1/3 block rounded-md px-5 py-4 mx-5 my-5' name='name' placeholder='Name of your car' />
                <input type="text" className='w-1/3 block rounded-md px-5 py-4 mx-5 my-5' name='price' placeholder='Price of your car' />
                <input type="text" className='w-1/3 block rounded-md px-5 py-4 mx-5 my-5' name='img' placeholder='Img Link of your car' />
                <button type="submit" className='btn btn-primary text-white text-xl'>Add Now</button>
            </form>
        </div>
    );
};

export default AddCar;