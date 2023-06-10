import React from 'react';
import ok from '../../../public/images/Shutterstock_2095487767.webp'
const Extrasection = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={ok} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Contact</h1>
      <p className="py-6">Gmail: Kabir@gmail.com </p>
      <p className="py-6">Number: 017*********</p>
      <button className="btn btn-primary">Call</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Extrasection;