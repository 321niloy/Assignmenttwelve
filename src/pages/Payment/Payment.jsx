import React, { useContext, useEffect, useState } from 'react';
import Cheakootfrom from './Cheakootfrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Authcontext } from '../../component/provider/Authprovider/Authprovider';
import useTitle from '../../hook/useTitle';

// Todo
const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk);
const Payment = () => {
    const {user} = useContext(Authcontext)
    const [selacteclass,setselacteclass] = useState([])
    useTitle('Pay')
  
    // how does reduce work!!!
    const total = selacteclass.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
 useEffect(()=>{
     fetch(`https://assignment-twelve-server-321niloy.vercel.app/instrucarts/${user?.email}`,{
         method:"GET",
         headers:{
             'content-type':'application/json'
         },
         body: JSON.stringify()
     })
     .then(res => res.json())
        .then(data =>{
            setselacteclass(data)
        })
        
 },[user])
    return (
        <div>
            <h1 className='text-3xl text-green-600 text-center mt-5'>Please Process THe Payment</h1>
            <div className='text-green-500 h-9 text-center'>_________________________________________</div>
            <div className='mt-4'>
                <Elements stripe={stripePromise}>
                <Cheakootfrom price={price} selacteclass={selacteclass}></Cheakootfrom>
                </Elements>
              
            </div>
        </div>
    );
};

export default Payment