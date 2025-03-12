const handleUser = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
        // console.log(data)
        // we can get json file by calling function too..for that we have to make a function
        loadUser(data)
    })
}

const loadUser = (users) =>{
    // we can call the whole array
    console.log(users)

    // we can call the index of an array too
    console.log(users[0])
}