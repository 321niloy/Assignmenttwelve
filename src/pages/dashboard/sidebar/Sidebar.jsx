import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../component/provider/Authprovider/Authprovider';

const Sidebar = () => {
   const [navuser,setnavuser] = useState([])
   const {user} = useContext(Authcontext)
    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            const remain = data.find(d=> d.email === user.email)
            console.log("remain",remain)
            setnavuser(remain)
    
        })
    },[])
    return (
       <>
      
            <h1 className='text-2xl text-white font-extrabold'>DashBoard</h1>
            
               
                
                    {!navuser?.role && !navuser?.position && !navuser?.status && (
 <li><Link to="/dashboard/selactedclass" className='text-white'>User selact Class</Link></li>
)}

          
               {navuser?.position && 
                <>
                 <li><Link to="/dashboard/myclass" className='text-white'>My selacted Class</Link></li>
                <li><Link to="/dashboard/myenroll" className='text-white'>My Enrolled Class</Link></li>
                <li><Link to="/dashboard/studendash" className='text-white'>Payment</Link></li>
                </>
               }
            





         
                {navuser?.status &&
                    <>
                    <li><Link to="/dashboard/Addclasses" className='text-white'>Add Class</Link></li>
                <li><Link to="/dashboard/instruclass" className='text-white'>My classes</Link></li>
                    </>
                }
          



          
             {navuser?.role &&
                <>
                   <li><Link to="/dashboard/manrageuse" className='text-white'>Manage Classes</Link></li>
                   <li><Link to="/dashboard/updaterequest" className='text-white'>Update Request</Link></li>
                </>
             }
             
       </>
    );
};

export default Sidebar;