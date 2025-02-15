/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/


// for (let i = 1; i<=200; i++){
//     if(i===100){
//         break;
//     }
//     console.log(i)
// }


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


// let sum = 0;
// let num = 1;

// while (num <= 50) 
//     {
//     sum = sum + num;
    
//     if (sum >= 100) 
//     { 
//         break;
//     }
//     console.log(num); 
//     num++; 
// }

// console.log("Final Sum:", sum);
// console.log("Last Added Number:", num);










/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


// Answer:


// let i = 1
// while(i <= 100){
//     i++
//     console.log(i)
//     if(Number.isInteger(Math.sqrt(i))){
//         console.log("first square number is", i)
//         break;
//     }
// }














// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// const reverse_color=[]

// for(let i=colors.length-1 ;i>=0 ; i--){
//     reverse_color.push(colors[i])
// }

// console.log(reverse_color)











// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]


// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const even_number = []

// for(let i = 0; i<=numbers.length ; i++){
//     if(numbers[i]%2 === 0){
//         even_number.push(numbers[i]);
//     }
// }

// let i = 0;
// while(i<=numbers.length){
//     if(numbers[i]%2 ===0){
//         even_number.push(numbers[i])
//     }
//     i++;
// }

// console.log(even_number)












// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// var arr = ['a','b']

// let arr2 = numbers.concat(arr)

// console.log(arr2)


// let arr= 0;
// for(let i = 0; i <= numbers.length; i++){
//     arr=numbers.concat(numbers[i])
// }
// console.log(arr)
