
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const Login = () => {
    
    const [user ,setUser] = useState(null)

    const provider = new GoogleAuthProvider

    const handleGoogle =()=>{
        console.log('clicked')
        signInWithPopup(auth,provider)

        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log('signout successfully')
            setUser(null)

        })
        .catch(error=>{
          console.log(error)
        })
    }
    return (
        <div>
            {/* <button onClick={handleGoogle}>Sign up with google</button>
            <button onClick={handleSignOut}>Sign out</button> */}
            {
                user ? 
                <button onClick={handleSignOut}>Sign out</button> : 
                <button onClick={handleGoogle}>Sign up with google</button>
            }
            <div>
                <h3>{user?.displayName}</h3>
                <h3>{user?.email}</h3>
                <h3>{user?.photoURL}</h3>
            </div>
            
        </div>
    );
};

export default Login;