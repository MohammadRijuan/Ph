import React, { use, useState } from 'react';
import { Link } from 'react-router';

const Users = ({userPromise}) => {
    const loadedUser = use(userPromise)
    // console.log(loadedUser)
    const [users,setUsers] = useState(loadedUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value

        const newUser = { name, email }
        console.log(newUser)

        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body : JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after creating a new user in db ', data)
                if(data.insertedId){
                    newUser._id = data.insertedId
                    const newUsers = [...users,newUser]
                    setUsers(newUsers)
                    alert('user added successfully')
                    e.target.reset()
                }
            })
    }


    const handleDelete = (id) =>{
        console.log('deleted this id',id)
        fetch(`http://localhost:3000/users/${id}`,{
            method: "DELETE",
            
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount){
                const remainingUsers = users.filter(user=> user._id !==id)
                setUsers(remainingUsers)
                console.log('after delete',data)
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="submit" />
            </form>

            <div>
                <h1>{users.length}</h1>
                {
                    users.map(user => <p key={user._id}>{user.name} - {user.email} 
                    <Link to={`/users/${user._id}`}>Details</Link>
                    <Link to={`/update/${user._id}`}>Edit</Link>
                    <button onClick={()=> handleDelete(user._id)}>x</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;