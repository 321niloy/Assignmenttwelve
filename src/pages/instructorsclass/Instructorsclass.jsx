import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../component/provider/Authprovider/Authprovider';
import useTitle from '../../hook/useTitle';

const Instructorsclass = () => {
    const {user} = useContext(Authcontext)

    useTitle('My-class')
const [myclass,setmyclass] = useState()

    useEffect(()=>{
        fetch('http://localhost:3000/instruement')
        .then(res => res.json())
        .then(data => {
                console.log("aaa",data)
                const Myclass = data.filter(d => d.instructorEmail === user.email)
                console.log("zzz",Myclass)
                setmyclass(Myclass)
        })
        .catch(error => {
            console.error("Error fetching data:", error);
          });
        
    },[])
    return (
        <div>
            <h1>Instructors class</h1>
            {

             myclass?.map(m =>  <div className="card card-compact w-96 bg-base-100 shadow-xl">
             <figure><img className='h-96' src={m.image} /></figure>
             <div className="card-body">
               <h2 className="card-title mx-auto">Name: {m.name}</h2>
               <p>Instructors Name: {m.instructorName}</p>
               <p>Instructors  Email: {m.instructorEmail}</p>
               <p>Available Seats: {m.availableSeats}</p>
               <p>Price: {m.price}</p>
               <div className="card-actions justify-center">
               <button className="btn btn-outline btn-primary">Update</button>
               </div>
             </div>
           </div>)
            }


        </div>
    );
};

export default Instructorsclass;