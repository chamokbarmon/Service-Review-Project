import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loading,setLoading] =useState(true)
    const provider = new GoogleAuthProvider();

    const  handelgooglesignin = ()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }

    const createuser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

   const login = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
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
        loading,
        createuser,
        login,
        handelgooglesignin
    }
    return (
       <AuthContext.Provider value={AuthInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;