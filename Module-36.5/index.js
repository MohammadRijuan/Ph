// const age = 13;

// localStorage.setItem('age',age)

// console.log(localStorage.getItem('age'))



const handleStorage=()=>{
    const person ={
        name:"Rijuan",
        age : 10,
        friends : ["nibu",'fahad']
    }
    const convertedString = JSON.stringify(person)


    localStorage.setItem("Monju",convertedString)

    // to get pure obeject
    const converted = JSON.parse(convertedString)
    console.log(converted)

}