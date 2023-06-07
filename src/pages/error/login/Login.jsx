import React from 'react';
import './login.css'
import start from '../../../../public/images/Shutterstock_2095487767.webp'
import { FaEnvelope} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {


const handlelogin= event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)
}
    return (
        <form onSubmit={handlelogin} className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={start} className="profile"/>

           </div>


         </div>
         <div>
           <h1 className='font-extrabold mb-2'>Login Page</h1>
           <div>
            
             <input type="text" name='email' placeholder="Email" className="name" required/>
           </div>
           <div className="second-input">
             
             <input type="password" name='password' placeholder="Password" className="name" required/>
           </div>
          <div className="login-button">
          <input className='bg-purple-700 text-white' type="submit" value="LOGIN" />
          </div>
           
            <p className="link">
              <Link to='/signup'>Sign Up</Link>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </form>
    );
};

export default Login;