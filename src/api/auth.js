

export const saveUser = user =>{
    const currentuser = {
        email:user.email
    }


    fetch(`https://assignment-twelve-server-321niloy.vercel.app/users/${user?.email}`,{
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


    fetch(`https://assignment-twelve-server-321niloy.vercel.app/users/${email}`,{
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
        status:'instructor'
    }


    fetch(`https://assignment-twelve-server-321niloy.vercel.app/users/${email}`,{
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

export const becomeaStudent = email =>{
    const currentuser = {
        position:'student'
    }


    fetch(`https://assignment-twelve-server-321niloy.vercel.app/users/${email}`,{
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

