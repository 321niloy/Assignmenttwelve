import React, { useEffect, useState } from 'react';
import InstruementCard from './InstruementCard';


const Instrument = () => {
    const [instruement,setinstrument] = useState()
    useEffect(()=>{
        fetch('http://localhost:3000/instruement')
        .then(res => res.json())
        .then(data =>{
            setinstrument(data)
        })
    },[])
    return (
        <>
       <h1 className='text-center text-3xl mt-9'>All Instrument Classes Details</h1>
       <div className='grid grid-cols-3 gap-4 mt-14 '>
            {
                instruement?.map(instru => <InstruementCard key={instru._id} instru={instru}></InstruementCard >)
            }
        </div>
       </>
    );
};

export default Instrument;