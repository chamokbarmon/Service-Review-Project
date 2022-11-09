import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null)

    const login = (email,password)=>{

        return  signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser =>{
            console.log(currentuser);
            setUser(currentuser)
        });
        return()=>{
            return unsubscribe();
        }
    },[])
    const AuthInfo ={
        user ,
        login
    }
    return (
       <AuthContext.Provider value={AuthInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;