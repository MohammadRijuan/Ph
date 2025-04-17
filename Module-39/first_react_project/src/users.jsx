import { use } from "react"

export default function Users({fetchUser}){
    const Userstyle ={
        border :"2px solid green",
        borderRadius: "5px"
    
    }


    const fetchUsers = use(fetchUser)
    return (
        <div>
            <h1 style={Userstyle}> users : {fetchUsers.length}</h1>
        </div>
    )
}