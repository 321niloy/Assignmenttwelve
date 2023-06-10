import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider/Authprovider';

const Privateroute = ({children}) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace> </Navigate>
};


export default Privateroute;