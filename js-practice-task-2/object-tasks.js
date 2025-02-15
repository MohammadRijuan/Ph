//1. Access the golden rod color value in output.

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors["golden rod"])










//2. For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// // we can do both

// // car["passenger capacity"] =5;
// car.passenger_capacity =5;

// console.log(car)

// // find out a specific value
// console.log(car.make)
// console.log(car.model)
// console.log(car.passenger_capacity)
// console.log(car.year)










// 3.Display the physics marks as output.

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };


// console.log('Student name: ',student.name)
// console.log('Book:',student.physics.subject)
// console.log('Author:',student.physics.author)
// console.log('marks:',student.physics.marks)











// 4. Count the number of properties.


// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// // to count the property we will use-- Object.keys(arr_name).length
// console.log(Object.keys(student).length)

// // alternative
// const count_property = Object.keys(student).length
// console.log(count_property);









// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };

// for(let key in myObject){
//     // if u want key and type -
//     console.log(`Key :${key} | type: ${typeof myObject[key]}`)

//     // if u want key and value
//     console.log(`Key :${key} | value: ${myObject[key]}`)
// }