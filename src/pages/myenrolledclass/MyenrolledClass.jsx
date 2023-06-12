import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import { Fade } from 'react-awesome-reveal';

const MyenrolledClass = () => {
    const [enrollclass,setenrollclass] =useState()
    useTitle('My enroll')

    useEffect(()=>{
        fetch('http://localhost:3000/paymentget')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setenrollclass(data)
        })
    },[])
    return (
<>
<h1 className='text=3xl text-center text-purple-500 mb-5'><Fade>Enrolled Classes</Fade></h1>
{
enrollclass?.map((en,index) => <h1><span className='text-slate-600'>{index+1}st enroll class or Classses</span><span className='text-black font-extrabold'>=</span>{en.itemNames}</h1>
)
}

</>
    );
};

export default MyenrolledClass;


