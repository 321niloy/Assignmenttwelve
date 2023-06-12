import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../provider/Authprovider/Authprovider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Populerclass = () => {
    const {user} = useContext(Authcontext)
    const [popuclass,setposelacteclass] = useState([])
    const navigate = useNavigate()
  
 
 useEffect(()=>{
     fetch(`http://localhost:3000/instruement`)
     .then(res => res.json())
        .then(data =>{
            setposelacteclass(data)
        })
        
 },[user])

 const handleselactedToCart = item => {
    console.log(item);
    const {_id,image,name,instructorName,availableSeats,price} = item
    if(user && user.email){
        const cartItem = {image,name,instructorName,availableSeats,price, email: user.email}
        fetch('http://localhost:3000/instrucarts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Selacted',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    else{
        Swal.fire({
            title: 'Please login to selacted the class',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }
}
    return (
        <div className='mt-4 mb-4'>
            <h1 className='text-3xl text-purple-800 text-center m-4'>------------ Populer_____Classes -------------</h1>
           <div className='grid lg:grid-cols-3'>
           {
                popuclass?.slice(0,6).map(s=> <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-96' src={s.image} /></figure>
                <div className="card-body">
                  <h2 className="card-title mx-auto">Name: {s.name}</h2>
                  <p>Instructors Name: {s.instructorName}</p>
                  <p>Instructors  Email: {s.instructorEmail?instructorEmail:"Now it is Not Available"}</p>
                  <p>Available Seats: {s.availableSeats}</p>
                  <p>Price: {s.price}</p>
                  <div className="card-actions justify-center">
                  {
                user?<button onClick={()=>handleselactedToCart(s)} className="btn btn-primary">Get</button>:<Link to="/login" state={{from: location}} replace  className="btn btn-primary w-44">Get</Link>
            }
                  </div>
                </div>
              </div>)
            }
           </div>
        </div>
    );
};

export default Populerclass;