const person = {
    name:'Rijuan',
    age:12,
    friends: ['nibraj','sakib','fahad'],
    details:{
        job:"yes",
        isMarried:'No',
        status:'Not Found',
        father:{
            name:'Taher'
        }
    }
}


console.log(person['name'])
console.log(person['details']['job'])
// // console.log(person.details.mother.name)

// // to handle error we will use ? ..that is optional chaining
// console.log(person.details.mother?.name)