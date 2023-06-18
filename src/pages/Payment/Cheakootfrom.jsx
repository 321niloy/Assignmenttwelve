import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../component/provider/Authprovider/Authprovider';
import './cheakoutfrom.css'
import { becomeaStudent } from '../../api/auth';

const Cheakootfrom = ({price,selacteclass}) => {
    const stripe = useStripe()
    const elements = useElements();
    const {user} = useContext(Authcontext)
    const [cardError,setCardError]=useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(()=>{
    
    if(price>0){
      fetch(`https://assignment-twelve-server-321niloy.vercel.app/create-payment-intent`,{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({price})
    })
    .then(res => res.json())
    .then(data => {
        console.log("back",data.clientSecret)
        setClientSecret(data.clientSecret)
    })
    }
    },[price])






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
        // console.log('[PaymentMethod]', paymentMethod);
      }

      setProcessing(true)

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
    );

    if(confirmError){
        console.log(confirmError)
    }

    console.log("paymentintent",paymentIntent)
    setProcessing(false)

    if(paymentIntent.status === 'succeeded'){
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;
      // Student Position
      becomeaStudent(user.email)
      // ------------
       // save payment information to the server
       const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: selacteclass.length,
        cartItems: selacteclass.map(item => item._id),
        // menuItems: selacteclass.map(item => item.menuItemId), ///////////////////////
        status: 'service pending',
        itemNames: selacteclass.map(item => item.name,)
    }
    fetch(`https://assignment-twelve-server-321niloy.vercel.app/payments`,{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
      })
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
       {transactionId && <p className="text-green-500 mt-3">Transaction complete with transactionId: {transactionId}</p>}
        <button className='bg-purple-950 w-20 mt-4' type="submit" disabled={!stripe || !clientSecret ||  processing}>
          Pay
        </button>
      </form>
    
  </>
        
       
    );
};

export default Cheakootfrom;

// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useContext, useEffect, useState } from 'react';
// import { Authcontext } from '../../component/provider/Authprovider/Authprovider';

// const Cheakootfrom = ({ price }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const { user } = useContext(Authcontext);
//   const [cardError, setCardError] = useState('');
//   const [clientSecret, setClientSecret] = useState('');

//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       try {
//         const response = await fetch('https://assignment-twelve-server-321niloy.vercel.app/create-payment-intent', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ price }),
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch client secret');
//         }
        
//         const data = await response.json();
//         setClientSecret(data.clientSecret);
//       } catch (error) {
//         console.log('Error fetching client secret:', error);
//       }
//     };

//     fetchClientSecret();
//   }, [price]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card,
//     });

//     if (error) {
//       console.log('[error]', error);
//       setCardError(error.message);
//     } else {
//       setCardError('');
//       console.log('[PaymentMethod]', paymentMethod);
//     }

//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: card,
//         billing_details: {
//           email: user?.email || 'unknown',
//           name: user?.displayName || 'anonymous',
//         },
//       },
//     });

//     if (confirmError) {
//       console.log(confirmError);
//     }

//     console.log(paymentIntent);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//         {cardError && <p className='text-red-700 mt-3'>{cardError}</p>}
//         <button className='bg-purple-950 w-20 mt-4' type='submit' disabled={!stripe || !clientSecret}>
//           Pay
//         </button>
//       </form>
//     </>
//   );
// };

// export default Cheakootfrom;
