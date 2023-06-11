import React from 'react';

const Addclass = () => {
    const handleAdd = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const instructorName=form.instructorName.value
        const instructorEmail=form.instructorEmail.value
        const availableSeats=form.availableSeats.value
        const price= form.price.value
        const image= form.photo.value

       
        const addclasses = {
            name,instructorName,instructorEmail,availableSeats,price,image
        }
        form.reset()
        fetch(`http://localhost:3000/instruement`,{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addclasses)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div>
            
            <div>
        <div className="min-h-screen py-40" > 
  <div className="container mx-auto">
    
      <div className="w-full lg:w-1/2 py-10 px-12">
        <h2 className="text-3xl mb-4 font-extrabold text-purple-500">=== ADD CLASSES ===</h2>
        
        <form onSubmit={handleAdd}>
          <div className="mt-5">
            <input type="text" name='name' placeholder="Name" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
          </div>
          <div className="mt-5">
                <input type="text" name='instructorName' placeholder="Instructor Name" className="border rounded-lg border-gray-400 py-1 px-2 w-full"required/>
              </div>
              <div className="mt-5 me-2">
            <input type="text" name='instructorEmail' placeholder="Instructor Email" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
          </div>
          <div className="mt-5">
            <input type="text" name='availableSeats' placeholder="Available Seats" className="border rounded-lg border-gray-400 py-1 px-2 w-full"  required/>
          </div>
          <div className="mt-5">
            <input type="text" name='price' placeholder="Price" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
          </div>

          
          <div className="mt-5">
                <input type="text" name='photo' placeholder="Photourl" className="border rounded-lg border-gray-400 py-1 px-2 w-full"  required/>
              </div>
    
          <div className="mt-5">
              <input className="w-full border-purple-600 rounded-lg bg-purple-800 py-3 text-center text-white" type="submit" value="Add Class" />
              
            </div>
           
        </form>
    
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Addclass;