/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// let burger = 501;
// let burger = 400;

// if (burger>= 500){
//     console.log('Free Coke')
// }
// else{
//     console.log('For coke 30tk')
// }





/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


// const weight = 44;
// const weight = 54;
// const weight = 74;
// const weight = 94;
// const height = 1.68;

// const BMI = weight/ height**2;

// if(BMI < 18.5){
//     console.log('You are undereight');
// }
// else if (BMI>=18.5 && BMI <= 24.9){
//     console.log('You are normal');
// }
// else if (BMI>=25 && BMI <= 29.9){
//     console.log('You are overweight');
// }
// else{
//     console.log('You are obese')
// }










/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let score = 58;
// let score = 68;
// let score = 78;
// let score = 89;
// let score = 98;

// if (score >= 90){
//     console.log('Your grade is A')
// }
// else if (score>= 80 && score <=89){
//     console.log('Your grade is B')
// }
// else if (score>= 70 && score <=79){
//     console.log('Your grade is C')
// }
// else if (score>= 60 && score <=69){
//     console.log('Your grade is D')
// }
// else{
//     console.log('You are fail')
// }






/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/


// let my_score = 81;
// let frnd_score = 89;
// let frnd_score = 69;
// let frnd_score = 49;
// let frnd_score = 39;

// if (my_score > 80){
//     if(frnd_score >80){
//         console.log('Go for a lunch')
//     }
//     else if(frnd_score >=60){
//         console.log('good luck next time')
//     }
//     else if (frnd_score >=40){
//         console.log('keep your friends message unseen')
//     }
//     else{
//         console.log('block your frnd')
//     }
// }
// else{
//     console.log('sleep and act sad')
// }







/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


// normal way

// let num1 = 7;
// let num1 = 5;
// let num2 = 6;

// if (num1 > num2){
//     console.log(num1*2)
// }
// else{
//     console.log(num1+num2)
// }


// tarnary operator

// condition ? expression_if_true : expression_if_false;

// let num1=5;
// let num1=7;
// let num2=6;

// (num1 > num2) ? console.log(num1*2) : console.log(num1+num2);






/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/



// let age=9;
// let age=19;
let age=69;

if (age < 10){
    console.log('free');
}
else if (age > 10 && age<30){
    console.log('student will get 50% discount')
}
else if(age>=60){
    console.log('senior citizen gets 15% discount')
}
else{
    console.log('regular ticket 800 tk')
}