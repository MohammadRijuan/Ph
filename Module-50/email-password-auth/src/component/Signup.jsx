import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Signup = () => {

   
    const [ErrorMessage, SetErrorMessage] = useState('')
    const [success,setSuccess]= useState(false)
    const [showPassword,SetPassword] = useState(false)
    
    const handleEmailAndPass = (e)=>{

        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value 
        const terms = e.target.terms.checked

        if(!terms){
            SetErrorMessage('please accept conditions')
            return
        }

        console.log(email,password)

        const pasRegEx= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        if(pasRegEx.test(password) === false){
            SetErrorMessage('Must be more than 8 characters, including At least one number, At least one lowercase letter ,At least one uppercase letter')
            return;
        }

        SetErrorMessage('')
        setSuccess(false)

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            // email verify
            sendEmailVerification(auth.currentUser)
            .then(()=>{

                setSuccess(true)
                alert('please check ur email to verify your email')
            })
        })
        .catch(error=>{
            console.log(error)
            SetErrorMessage(error.message)
        })

    }



    return (
        <div>
            <p>This is Sign up page</p>
            <form onSubmit={handleEmailAndPass} action="">
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        
                        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                            <div className="card-body">
                                <h1>Sign up</h1>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="label">Password</label>
                                   
                                    <div className='relative'>
                                    <input  type={showPassword ? 'password' : 'text'} className="input" name='password' placeholder="Password" />
                                    <button onClick={()=>SetPassword(!showPassword)} className='absolute top-4 right-4'>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </button>
                                    
                                    </div>

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <input type="checkbox"name='terms' className="checkbox" /><p>Accept our terms and condition</p>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                    <p>Already have an account? <Link to='/Login' className='underline'>Login</Link></p>
                                    {
                                        ErrorMessage && <p className='text-danger-500'>{ErrorMessage}</p>
                                    }
                                    {
                                        success && <p className='text-green-500'>user created successfully</p>
                                    }
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Signup;