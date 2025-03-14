// const handleUser=()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res=> res,jon())
//     .then(data => console.log(data))
//     .catch(error=> console.log('dorci error',error))
// }


// handleUser()


const handleUser2= async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    // console.log(response)

    // const data = await response.json()
    const data = await response.jon()
    console.log(data)

    }
    catch{
        console.log('for showing an error')
    }
}


handleUser2()



