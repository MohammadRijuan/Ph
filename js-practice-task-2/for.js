/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/


// for(let i = 1; i<=60;i++){
//     console.log('I will invest at least 6 hrs every single day for next 60 days!')
// }










/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

// for (let i = 61; i<=100;i++)
// {
//     if(i%2===1){
//         console.log(i);
//     }
// }
/***
Subtask-2:

Find all the even numbers from 78 to 98.

 */

// for (let i = 78; i<=98;i++)
//     {
//         if(i%2===0){
//             console.log(i);
//         }
//     }


// for(let i=78; i<=98; i+=2){
//     console.log(i);
// }


// for(let i = 78; i<=98; i++){
//     if(i%2 != 1){
//         console.log(i);
//     }
// }

















/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */


// let sum=0;
// for (let i = 91; i<130; i++){
//     if(i%2 === 1){
//         // console.log(i)
//         sum = sum+i;
//     }
//     sum++;
// }
// console.log(sum)

/***
 * 

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

// let sum=0;
// for (let i = 51; i<86; i++){
//     if(i%2 === 0){
//         console.log(i)
//         sum = sum+i;
//     }
//     sum++;
// }
// console.log(sum)













/***

Generate a multiplication table for number 9

 */

// console.log('multiplication table for number 9')
// for(let i=1; i<=10; i++){
//     result=9*i;
//     console.log('9 into ',i,'equals to',result);
// }













/***

Implement a countdown timer that counts down from 81 to 65.

 */


// for(let i = 81; i>=65; i--){
//     console.log('countdown ',i)
// }














/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// for(let i = 1; i<=40;i++){
//     if(i%2===1){
//         continue;
//     }
//     console.log(i)
// }


/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/


for(let i = 55; i<=85;i++){
    if(i%5===0 || i%2===0){
        continue;
    }
    console.log(i)
}
