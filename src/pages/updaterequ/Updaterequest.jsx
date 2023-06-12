import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';

const Updaterequest = () => {
 const [update,setupdate] = useState()
 useTitle('Update admin ')

 useEffect(()=>{
    fetch('http://localhost:3000/requestcollection')
    .then(res => res.json())
    .then(data =>{
        
        console.log("nana",data)
        setupdate(data)
    })

 },[])

 const AdminUpdathandler=item=>{
    const {name,instructorName,instructorEmail,availableSeats,price,image} =item
    const updateclasses = {
        name,instructorName,instructorEmail,availableSeats,price,image
    }
    fetch(`http://localhost:3000/instruement`,{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateclasses)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
        const newrequ = update.filter(u=> u._id !== item._id)
        setupdate(newrequ)
 }

const handleDenide=id=>{
    console.log('jjjjjjj',id)
    fetch(`http://localhost:3000/requestcollection/${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
        const newrequ = update.filter(u=> u._id !== id)
        setupdate(newrequ)
 }

    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Instructor Name</th>
        <th>Instructor Email</th>
        <th>Available</th>
        <th>price</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        update?.map((u,index) =>  <tr>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={u.image} alt="" />
                  </div>
                </div>
              </div>
            </td>
            <td>
            {u.name}
            </td>
           <td>
           {u.instructorName}
           </td>
           <td>
            {
                u.instructorEmail
            }
           </td>
           <td>
           {u.availableSeats}
           </td>
           <td>{u.price}</td>
            <td>
              
          <button onClick={() => AdminUpdathandler(u)} className="btn btn-ghost w-16 bg-lime-600 text-white">update</button>
              
            </td>
            <td>
              <button onClick={() => handleDenide(u._id)} className="btn btn-ghost w-14 bg-red-800 text-white">Denied</button>
            </td>
          </tr>)
     }
    </tbody>
    
    
  </table>
</div>
    );
};

export default Updaterequest;