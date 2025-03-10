const rijuan ={
    name :' Rijuan',
    age: 10,
    friends : ['nibraj','fahad','tohid'],
    status : 'not found'
}


// const rijuanStatus = rijuan.status
// const rijuanName = rijuan.name
// const rijuanFrnds= rijuan.friends
// const rijuanAge = rijuan.age

// destructuring
const {name,friends,age,status} = rijuan

console.log(name)




const friend= ['nibraj',{name :'fahim'},'fahad','tohid']

const [nayok,obj,fol] = friend

console.log(nayok)
console.log(obj)
console.log(fol)