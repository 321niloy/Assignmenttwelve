import React, { useContext } from 'react';
import './login.css'
import start from '../../../../public/images/Shutterstock_2095487767.webp'
import { FaEnvelope} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../component/provider/Authprovider/Authprovider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../../hook/useTitle';

const Login = () => {
    useTitle('Login')
const {signIn,googleSignIn} = useContext(Authcontext)

const handlelogin= event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)

    signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Login Successful!',
                    'You clicked the button!',
                    'success'
                  );
               
            })
}

const googlehandelaer = () =>{
    googleSignIn()
    .then((result) => {
      const loguser = result.user;
      console.log(loguser)
    })
    .catch((error) => {
      console.log("ERROR",error)
    })
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
          <div className="login-button mb-3">
          <input className='bg-purple-700 text-white' type="submit" value="LOGIN" />
          </div>
           <span onClick={googlehandelaer}><FaGoogle className=' mx-auto text-3xl text-yellow-700'/></span>
            <p className="link mt-3">
              <Link to='/signup'>Sign Up</Link>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </form>
    );
};

export default Login;