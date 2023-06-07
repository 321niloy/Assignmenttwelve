import React, { createContext, useState } from 'react';
export const Authcontext = createContext()
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);







    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }
    return (
        <Authcontext.Provider>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;