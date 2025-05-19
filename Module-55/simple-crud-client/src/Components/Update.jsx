
import { useLoaderData } from 'react-router';

const Update = () => {
    const user = useLoaderData()
    console.log(user)


    const handleUpdate=(e)=>{
        e.preventDefault()

        const name= e.target.name.value
        const email = e.target.email.value

        const updated = {name,email}
        console.log(updated)

        fetch(`http://localhost:3000/users/${user._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body : JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    console.log('updated successfully',data)
                }
            })


    }
    return (
        <div>
            <form onSubmit={handleUpdate} action="">
                <input type="text" name='name' defaultValue={user.name}/>
                <br />
                <input type="email" name='email' defaultValue={user.email}/>
                <br />
                <input type="submit" value='update User' />
            </form>
            
        </div>
    );
};

export default Update;