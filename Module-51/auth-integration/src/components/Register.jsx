// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
// import { auth } from '../firebase/firebase.init';
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {

    // const userInfo = use(AuthContext) --> now we will will do it by destructuring the creat user funtion
    // console.log(userInfo) --> 
    const {createUser} = use(AuthContext)

    const navigate = useNavigate()


    const handleRegister = (e)=>{
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value  
        const password = e.target.password.value

        console.log(name,email,password)
        
        //create an user
        // createUserWithEmailAndPassword(auth,email,password)
        // .then(result=>{
        //     console.log(result.user)

        // })
        // .catch(error=>{
        //     console.log(error.message)
        // })

        //will create user by calling function from AuthProvider

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
        })

    }
    return (
        <div className="card mt-4 bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold">Register now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="name" name='name' className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <p>Already have an account? please <Link to='/login' className='text-blue-500 underline'>Login</Link></p>
                            <button className="btn btn-neutral mt-4">Register</button>
                            
                        </form>
                    </div>
                </div>
    );
};

export default Register;