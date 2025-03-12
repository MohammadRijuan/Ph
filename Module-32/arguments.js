// Arguments are values (primitive or object) passed as input to a function


// function sum(a,b,c){
    //1
    // console.log(arguments)
    // console.log(a,b,c)


    // 2
//     const newArg = [...arguments]
//     console.log(newArg)

// }

// sum(1,5,4,8,23)




// 3 pass by value

// let a=10;
// let b=20;


// function sum(num1,num2){
//     // console.log(num1,num2)

//     // it will not change bcoz a variable value alreay transfer into the memory
//     num1=50;
// }

// sum(a,b)
// console.log(a)





// 4 pass by referrence

const person ={name:'Rijuan',age:12}


function sum(obj){
    // non-primitive datar ketre value rakhe na js...address or refrrence ta rakhe...jar fole name change hcce
    // array obj holo non-promitive data
    obj.name='Monju'

}

console.log(person)

sum(person)
console.log(person)

