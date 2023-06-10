import React from 'react';

const InstructorCard = ({bio}) => {
    return (
        <div className='mt-5 mb-3'>  
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title mx-auto">{bio.name}</h2>
                  <p>{bio.email}</p>
                </div>
                <figure><img className='h-96' src={bio.image} alt="Shoes" /></figure>
              </div>
        </div>
    );
};

export default InstructorCard;