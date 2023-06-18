import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import useTitle from '../../hook/useTitle';

const Instructor = () => {
useTitle('Instructors')
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
       <h1 className='text-center text-3xl mt-7'>Instructors Details</h1>
       <div className='grid grid-cols-3 gap-4 mt-14 '>
            {
                insBio?.map(bio =>  <InstructorCard key={bio._id} bio={bio}></InstructorCard>)
            }
        </div>
       </>
    );
};

export default Instructor;