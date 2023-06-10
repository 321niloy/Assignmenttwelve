

export const saveUser = user =>{
    const currentuser = {
        email:user.email
    }


    fetch(`http://localhost:3000/users/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(currentuser),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}


export const becomeaAdmin = email =>{
    const currentuser = {
        role:'admin'
    }


    fetch(`http://localhost:3000/users/${email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(currentuser),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}


export const becomeaInstructor = email =>{
    const currentuser = {
        role:'instructor'
    }


    fetch(`http://localhost:3000/users/${email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(currentuser),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}

