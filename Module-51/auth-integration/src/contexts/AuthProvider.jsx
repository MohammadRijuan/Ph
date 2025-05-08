import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    
    const[user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const GoogleProvider =new GoogleAuthProvider()
    
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signinUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signoutUser=()=>{
        setLoading(true)
        return signOut(auth)
        
    }

    const GoogleSignin=()=>{
        setLoading(true)
        signInWithPopup(auth,GoogleProvider)
    }    
    //WE WILL USE USEeFFECT INSTEAD OF IT

    // onAuthStateChanged(auth,(currentUser)=>{
    //     if(currentUser){
    //         console.log('has current user',currentUser)
    //     }
    //     else{
    //         console.log('current user ',currentUser)
    //     }
    // })

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('inside useEffect on auth stat change',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const userInfo={
        createUser,
        signinUser,
        signoutUser,
        user,
        loading,
        GoogleSignin

    }
    return (
        <AuthContext value={userInfo}>
            {children}

        </AuthContext>
    );
};

export default AuthProvider;