import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const [errorMessage, SetErrorMessage] = useState('')
    const [success,SetSuccess] = useState(false)

    const handleLogin=(e)=>{

        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email,password)

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            if (!result.user.emailVerified){
                alert('verify your email')
            }
            else{

                SetSuccess(true)
            }
        })
        .catch(error=>{
            console.log(error)
            SetErrorMessage(error.message)

        })

    }

    const emailRef = useRef()


    const handleForgetPassword=()=>{
        console.log(emailRef.current.value)

        const email = emailRef.current.value

        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('please check ur email to set ur pass')
        })
        .catch((error)=>{
            console.log(error.message)
        })

    }
    return (
        <div>
            <h2>This is login</h2>
            <form onSubmit={handleLogin} action="">
                
                        
                        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
                                    <p>Dont u have an account? please <Link to='/signup' className='underline'>SignUp</Link></p>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                    {
                                        errorMessage && <p className='text-danger-500'>{errorMessage}</p>
                                    }
                                    {
                                        success && <p className='text-green-500'>logged in successfully</p>
                                    }
                                </fieldset>
                            </div>
                        </div>
                   
            </form>

        </div>
    );
};

export default Login;