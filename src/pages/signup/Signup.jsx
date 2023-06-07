import React from 'react';
import  './signup.css'
import start from '../../../public/images/Shutterstock_2095487767.webp'
import { Link } from 'react-router-dom';

const Signup = () => {

    const handlesignup = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(email,password,name,photo)
        form.reset()
    }
    return (
        <form onSubmit={handlesignup} className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={start} className="profile"/>
   
              </div>
   
   
            </div>
            <div>
              <h1 className='font-extrabold mb-2'>Signup Page</h1>
              <div>
               
                <input type="text" name='name' placeholder="Name" className="name" required/>
              </div>
              <div className='mt-3'>
               
                <input type="text" name='email' placeholder="Email" className="name" required/>
              </div>
              <div className="second-input">
                
                <input type="password" name='password' placeholder="Password" className="name" required/>
              </div>
              <div className='mt-3'>
               
               <input type="text" name='photo' placeholder="photo" className="name" required/>
             </div>
             <div className="login-button">
             <input className='bg-purple-700 text-white' type="submit" value="Signup" />
             </div>
              
               <p className="link">
                 <Link to='/login'>Log In</Link>
               </p>
              
    
            </div>
          </div>
          
   
        </div>
       </form>
    );
};

export default Signup;