import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../fierbase/fierbase.config";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user,setUser ] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email,password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword (auth,email,password)
}

const signInUser = (email,password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
}

const signInWithGoogle = ()=>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider);
}

const logOut = () =>{
      setLoading(true);
      return signOut(auth);
}
    //observe auth state change
    useEffect(() =>{
 const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false);
      } )
      return() =>{
            unsubscribe();
      }
    },[])
     
const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      signInWithGoogle,
      logOut
               }
      

return (
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;

AuthProvider.PropTypes = {
      children: PropTypes.node
}

/***
 * 1. create context and export it
 * 2. set provider with value
 * 3. user the Auth provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the provider
 * ***/ 