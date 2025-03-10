const rijuan ={
    name :' Rijuan',
    age: 10,
    friends : ['nibraj','fahad','tohid'],
    status : 'not found'
}
rijuan.age = 12


// seal will not let anyone to include new element in a object but can change the value if existing property
Object.seal(rijuan)

// freeze will not let anyone to change the value or include any property
Object.freeze(rijuan)
rijuan.class = 14;


console.log(rijuan)

// console.log(Object.keys(rijuan))
// console.log(Object.values(rijuan))
// console.log(Object.entries(rijuan))



// for(let key in rijuan){
//     console.log(`key : ${key} , value : ${rijuan[key]}`)
// }


for(let [key,value] of Object.entries[rijuan]){
    console.log(`key : ${key} , value : ${value}`)
}