import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loading,setLoading] =useState(true)
   

    const GoogleProvider = (provider)=>{
        setLoading(true)
         return signInWithPopup(auth,provider)
      }

    const createuser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

   const login = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
   const logOut =()=>{
    return signOut(auth)
  }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser =>{
            console.log(currentuser);
            setUser(currentuser)
            setLoading(currentuser)
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
        GoogleProvider,
        logOut
    }
    return (
       <AuthContext.Provider value={AuthInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;