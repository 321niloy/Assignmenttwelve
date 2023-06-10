import React, { useContext } from 'react';
import { Authcontext } from '../../component/provider/Authprovider/Authprovider';
import { Link,  useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';


const InstruementCard = ({instru}) => {
    const {user} = useContext(Authcontext)
    const location = useLocation();
    

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
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className='h-96' src={instru.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">Name: {instru.name}</h2>
          <p>Instructors Name: {instru.instructorName}</p>
          <p>Instructors  Email: {instru.instructorEmail?instructorEmail:"Now it is Not Available"}</p>
          <p>Available Seats: {instru.availableSeats}</p>
          <p>Price: {instru.price}</p>
          <div className="card-actions justify-center">
            {
                user?<button onClick={()=>handleselactedToCart(instru)} className="btn btn-primary">Get</button>:<Link to="/login" state={{from: location}} replace  className="btn btn-primary w-44">Get</Link>
            }
          </div>
        </div>
      </div>
    );
};

export default InstruementCard;

// 
// 