// break

// 1.Write a loop 1 to 200. Use break to exit the loop once you find 100.

// for(let i = 0; i<200; i++){
//     console.log(i);
//     if(i==150){
//         break;
//     }
// }






// 2.Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let sum = 0;
let num = 1;

while (true) {
    sum += num;
    if (sum >= 100) {
        // when condition will meet it break here
        break;
    }
    // num++;
}

console.log(`Final sum: ${sum}, Last added number: ${num}`);
