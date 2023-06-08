import React, { useContext, useState } from 'react';
import  './signup.css'
import start from '../../../public/images/Shutterstock_2095487767.webp'
import { Link } from 'react-router-dom';
import { Authcontext } from '../../component/provider/Authprovider/Authprovider';
import useTitle from '../../hook/useTitle';

const Signup = () => {
  useTitle("Signup")
    const [error,seterror] = useState('')
    const [suc,setsuc] = useState('')
    const {createUser,updateUserProfile} = useContext(Authcontext)
    const handlesignup = event =>{
        event.preventDefault()
        setsuc('')
        seterror('')
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        const Confirmpassword = form.Conpassword.value
        console.log(email,password,name,photo)
       
        // validation
       
        if(!/(?=.*[A-Z])/.test(password)){
            seterror("Please atleast set one Uppercase")
            return;
        }
        else if(password.length<6){
            seterror("Please atleast set six carecter in your Password")
        }

       else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            seterror("Please include at least one special character");
            return;
          }
          else if(password !== Confirmpassword){
            seterror("password and Confirm password should same");
            return;
          }

        createUser(email,password)
        .then(result => {
          const Createuser = result.user;
          console.log(Createuser)
          setsuc('Signup successfull')
          updateUserProfile( name, photo)
          form.reset()
        })
        .catch(error =>{
          console.log(error)
          seterror(error.massage)
        })


     
        // .then(updatedProfile => {
        //   console.log('Profile updated:', updatedProfile);
        // })
        // .catch(error => {
        //   console.log('Profile update failed:', error.message);
        // })



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
              <div className="second-input">
                
                <input type="password" name='Conpassword' placeholder="Confirm Password" className="name" required/>
              </div>
              <div className='mt-2'>
               
               <input type="text" name='photo' placeholder="photo" className="name" required/>
             </div>
             <div className="login-button mt-2">
             <input className='bg-purple-700 text-white' type="submit" value="Signup" />
             </div>
             <p className='text-red-700      mt-2 mb-2'>{error}</p>
                <p className='text-green-700 mt-2 mb-2'>{suc}</p>
               <p className="link">
                 <Link className='mt-0' to='/login'>Log In</Link>
               </p>
              
    
            </div>
          </div>
          
   
        </div>
        
       </form>
    );
};

export default Signup;