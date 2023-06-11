import React, { useEffect, useState } from 'react';
import { becomeaAdmin, becomeaInstructor } from '../../api/auth';

const Manageusers = () => {
    const [usersinf,setusersinfo] = useState()
    useEffect(()=>{
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(data =>{
        setusersinfo(data)
    })
    },[])


    const adminhandler=(email)=>{
        becomeaAdmin(email)
    }
    const instructorhandler=email=>{
        becomeaInstructor(email)
    }
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
           
          </label>
        </th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        usersinf?.map(u => <tr>
            <th>
              
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{u.email}</div>
                </div>
              </div>
            </td>
            <th>
              {
                u.role?<button disabled  className="btn  btn-primary w-14">ADMIN</button>:<button onClick={()=>adminhandler(u.email)} className="btn btn-primary w-14">ADMIN</button>
              }
            </th>
            <th>
            {
                u.role?<button disabled  className="btn  btn-primary w-24">Instructor</button>:<button onClick={()=>instructorhandler(u.email)} className="btn btn-primary w-24">INSTRUCTOR</button>
              }
            </th>
          </tr>
         )
      }
    </tbody>
  </table>
</div>
    );
};

export default Manageusers;