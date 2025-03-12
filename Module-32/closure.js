// Closures are powerful tools for managing event handling in JavaScript. They allow you to attach functions to events while maintaining access to the surrounding scope, which is particularly useful for data encapsulation and avoiding global variables.
// A JavaScript closure is when an inner function has access to its outer enclosing function's variables and properties.



// 1
// let counter =0;

// function sum(){
//     let counter=0
//     counter=counter+1;
//     console.log(counter)
// }

// counter=10;
// sum()






// 2

function sum2(){
    let counter =0;
    return function(){
        counter++;
        console.log(counter)
    }
}

const result = sum2()
result()
result()
result()
console.log(result)