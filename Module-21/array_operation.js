function sumArray(numbers){
    let sum = 0;
    for (const number of numbers){
        console.log(number);
        sum=sum+number;
    }
    return sum;
}

const num=[1,2,3,4,5,6,7]
console.log(sumArray(num))


function getMenu() {
    console.log("Burger, Pizza, Pasta");
   }