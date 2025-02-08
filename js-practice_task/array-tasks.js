// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

// Answer :

// var a = ['mango','apple','pineapple','jackfruit','grape']

// console.log(a[2]);

// a[1]='jambura';

// console.log(a);











// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

// Answer:

// var a = ['bandarban','rangmati','kaptai']

// a.push('coxbazar') //single element pushing into an array

// console.log(a);

// a.push('kagrachori','sajek'); //double element pushing into an array

// console.log(a);

// a.pop() //removing the last element from array

// console.log(a); //result










// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.


// Answer:

// practicing

// const frnds= ['nibraj','fahad','tohid','fahim','saiful'];

// console.log(frnds)
// // (includes) checking an array our specific element is there or not
// console.log(frnds.includes('nibraj'));
// console.log(frnds.includes('sakib'));


// real answer:

// const books = ['math','physics','chemistry','bgs']

// if(books.includes('javascript')){
//     console.log('ks book is present')
// }
// else{
//     console.log('js is not present')
// }







// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.



// Answer :

// var a=[1,2,3,1,5,6];
// var b =[];
// var c = 123;

// console.log(Array.isArray(a),'this variable is an array');
// console.log(Array.isArray(b));
// console.log(Array.isArray(c));








// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().


// Answer:

// const a=[1,2,3,4,5];
// const b = [6,7,8,9];

// // we use concat to combine two array
// together = a.concat(b)

// console.log(together)