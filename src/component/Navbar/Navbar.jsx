import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider/Authprovider';

const Navbar = () => {
  const {user, logOut} = useContext(Authcontext)
  console.log("kk",user)


 const logoutbutton = () =>{
logOut()
.then()
.catch(error => console.log(error))

 }
    return (
        <div className='bg-purple-600 text-white'>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-purple-600 rounded-box w-52">
        <li><Link to="/" className='text-white'>Home</Link></li>
        <li><Link to="/instructor" className='text-white'>Instructor</Link></li>
        <li><Link to="/class" className='text-white'>Classes</Link></li>
        <li><Link to="/dashboard" className='text-white'>Dashboard</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">Learn Hub</a>
  </div>
  <div className="navbar-end">
   {/* sign and log */}
   {
    user?  <button onClick={logoutbutton} className="btn btn-secondary w-24">Logout</button> :<><Link to='/login' className='mr-2 btn btn-secondary text-white'>Login</Link>
    <Link to='/signup' className='btn btn-secondary text-white'>Sign in</Link></>
   }
    {/* ///////// */}
     {/* ava */}
   {
    user &&   <div className="avatar ms-2 ">
    <div className="lg:w-11 w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src={user?.photoURL
  } />
    </div>
  </div>
   }
     {/* //////// */}

  </div>
</div>
        </div>
    );
};

export default Navbar;