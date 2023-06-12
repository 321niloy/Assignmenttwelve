import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';

const Studentdashboard = () => {
    const [paymentclass,setpaymentclass] =useState()
    useTitle('student payment')
    useEffect(()=>{
        fetch('http://localhost:3000/paymentget')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setpaymentclass(data)
        })
    },[])
    return (
        <div>
            <h1>Studentdashboard</h1>
            <div>

            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th> 
        <td>Email</td> 
        <td>Transaction Id</td> 
        <td>Price</td> 
        <td>date</td> 
        <td>Quantity</td> 
      </tr>
    </thead> 
    <tbody>
    {
      paymentclass?.map((en ,index)=> <tr>
      <th>{index+1}</th> 
      <td>{en.email}</td> 
      <td>{en.transactionId}</td> 
      <td>{en.price}</td> 
      <td>{en.date}</td> 
      <td>{en.quantity}</td> 
      </tr>)
    }
      
    </tbody> 
    
  </table>
</div>
        </div>
        </div>
    );
};

export default Studentdashboard;