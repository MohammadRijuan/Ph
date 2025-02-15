const numbers = [1,2,3,4,5,6,7];

// console.log(numbers)

// numbers.reverse()

// console.log(numbers)




// without using reverse function

rev_num=[];

// for (const num of numbers){
//     // it will not reverse the number
//     rev_num.push(num)

//     // unshift makes the thing in reverse way
//     // rev_num.unshift(num)
// }

// another way

for(let i = numbers.length -1 ; i>=0; i--){
    rev_num.push(numbers[i]);
}

console.log(rev_num)