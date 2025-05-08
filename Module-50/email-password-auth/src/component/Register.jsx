import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const Register = () => {

    const [success,setSuccess] = useState(false)
    
    const [errorMessage, setErrorMessage] =useState('')

    const handleSubmit=(e)=>{
        e.preventDefault() // to stop the loading

        // target will collect ur specific event handler by making a name
        const email = e.target.email.value  // by declaring the name =email in input field
        const password = e.target.password.value //by declaring name= password in input field
        

        const passRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        if(passRegExp.test(password) === false){
            setErrorMessage('Must be more than 8 characters, including At least one number, At least one lowercase letter ,At least one uppercase letter')
            return;
        }
        setSuccess(false)
        // if there is no error set a default null
        setErrorMessage('')
        // create a user
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess(true)
        })
        .catch(error=>{
            console.log(error)
            setErrorMessage(error.message)
        })

        console.log(email, password)

    }
    return (
        <div>
            <h1>This is register</h1>

            <form onSubmit={handleSubmit} action="">

                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" name='email' placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>

                <br />


                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder="Password"
                        minLength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    />
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
                
                <br />

                <button className='btn btn-primary'>Submit</button>

                {
                    errorMessage && <p className='text-danger-500'>{errorMessage}</p>
                }
                {
                    success && <p className='text-green-500'>user has created successfully</p>
                }

            </form>
        </div>
    );
};

export default Register;