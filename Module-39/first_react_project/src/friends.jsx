import { use } from "react"
// import Friend from "./friend"

export default function Friends({fetchFriend}){
    const fetchFriendss = use(fetchFriend)
    console.log(fetchFriendss)
    return (
        <div>
            <h3>Total Friends : {fetchFriendss.length}</h3>
            {
                fetchFriendss.map(Friend=> <Friends Friend={Friend}></Friends>)
            }
        </div>
    )
}