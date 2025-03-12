const person={
    name:'Rijuan',
    age:10,
    married:false
}

// to turn the obj into json
const newPerson =JSON.stringify(person)
// console.log(newPerson) 

// to turn the json file into obj

const ob = JSON.parse(newPerson)
console.log(ob)