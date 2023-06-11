import  { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../component/provider/Authprovider/Authprovider';
import Swal from 'sweetalert2';
import useTitle from '../../hook/useTitle';
import { Link } from 'react-router-dom';


const Selactedclass = () => {
    const {user} = useContext(Authcontext)
   const [selacteclass,setselacteclass] = useState([])
   useTitle('Selacted Classes')
 
   // how does reduce work!!!
   const total = selacteclass.reduce((sum, item) => item.price + sum, 0);

useEffect(()=>{
    fetch(`http://localhost:3000/instrucarts/${user?.email}`,{
        method:"GET",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
       .then(data =>{
           console.log("sold",data)
           setselacteclass(data)
       })
       
},[user])

const handlecancel =(id)=>{
    console.log("lllll")
  
 fetch(`http://localhost:3000/instrucarts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    Swal.fire(
                        'Delete Succesfull!',
                        'You clicked the button!',
                        'success'
                      )
                      const newdata = selacteclass.filter(s => s._id !== id)
                      setselacteclass(newdata)

                })
    
}
    return (
    
     <>
       <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center mb-4">
                <h3 className="text-3xl">Total classes: {selacteclass.length}</h3>
                <h3 className="text-3xl">Total Price:${total}</h3>
                <Link to='/dashboard/payment'><button className="btn bg-purple-500 text-white font-extrabold w-16">Enroll</button></Link>
            </div>

      <div className='grid lg:grid-cols-2 gap-4 ms-4 shadow-2xl'>
      
      {
        selacteclass.map(s =>     <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className='h-96' src={s.image} /></figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">Name: {s.name}</h2>
          <p>Instructors Name: {s.instructorName}</p>
          <p>Instructors  Email: {s.instructorEmail?s.instructorEmail:"Now it is Not Available"}</p>
          <p>Available Seats: {s.availableSeats}</p>
          <p>Price: {s.price}</p>
          <div className="card-actions justify-center">
          <button onClick={()=>handlecancel(s._id)}  className="btn btn-outline btn-primary">Cancel</button>
          </div>
        </div>
      </div>)
      }
      </div>
     
     </>
    );
};

export default Selactedclass;