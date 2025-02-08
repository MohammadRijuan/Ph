// ---------- task-1 -------------

// let taka = 1000;

// let orange_and_apple = 700;

// const sum = taka - orange_and_apple 

// console.log(sum)



// --------- task-2 ----------

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// const math =75.25;
// const biology =65;
// const chemistry =80;
// const physics =35.45;
// const bangla = 99.50;

// const avg = (math+chemistry+bangla+biology+physics)/5;

// console.log(avg.toFixed(2));




// ---------- task-3 -----------

// You task is to divide the given number by 5 and show the remainder as the output.

// let number = 119;

// let left = number % 5;

// console.log(left);




// --------------- task-4 --------------------

// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.


// var a = isNaN('11');

// Answer : here 11 is a number but it was put into a string...so jd tries to convert it into number but NaN says it was not a number ...so for Nan function it will return False 

var a = isNaN(2-10);

// Answer : here we can see a subtraction and the result will be a neg number... it show as -8.... but NaN function does not want to make it that it was a number...so it will return false too
console.log(a);