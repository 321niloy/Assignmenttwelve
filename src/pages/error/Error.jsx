import React from 'react';
import error from '../../../public/images/GSAP-SVG-Animation-404-Error-Milk-Carton.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-auto'>
            <div  className='relative w-auto'><img src={error} alt="" /></div>
            <div><Link to="/" className="btn btn-success absolute text-white lg:text-3xl lg:top-72 top-20">Go to Home</Link></div>
        </div>
    );
};

export default Error;