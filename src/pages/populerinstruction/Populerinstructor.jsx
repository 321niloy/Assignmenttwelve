import React, { useEffect, useState } from 'react';

const Populerinstructor = () => {
const [insBio,setinsbio] = useState()

    useEffect(()=>{
        fetch('https://assignment-twelve-server-321niloy.vercel.app/instructor')
        .then(res => res.json())
        .then(data => {
                console.log("aaa",data)
                setinsbio(data)
        })


    },[])
    return (
        <>
       <h1 className='text-center text-3xl mt-5 text-indigo-700'>___Populer Instructor___</h1>
       <div className='grid grid-cols-3 gap-4 mt-14 '>
            {
                insBio?.slice(0,6).map(bio =>    <div className='mt-5 mb-3'>  
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title mx-auto">{bio.name}</h2>
                      <p>{bio.email}</p>
                    </div>
                    <figure><img className='h-96' src={bio.image} alt="Shoes" /></figure>
                  </div>
            </div>)
            }
        </div>
        </>
    );
};

export default Populerinstructor;