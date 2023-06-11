import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const Cheakootfrom = ({price}) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError,setCardError]=useState('')

    const handleSubmit = async (event) => {
   
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }

        const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // console.log(card)

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
      } else {
        setCardError('')
        console.log('[PaymentMethod]', paymentMethod);
      }
    }
    return (
  <>
        
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
          {
        cardError && <p className='text-red-700 mt-3'>{cardError}</p>
      }
        <button className='bg-purple-950 w-20 mt-4' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    
  </>
        
       
    );
};

export default Cheakootfrom;