const min = Math.min(1,5,8,4,9,3,-2)
const max = Math.max(1,5,8,4,9,3,-2)

console.log(min)
console.log(max)

console.log(Math.PI)
console.log(Math.abs(-2))
console.log(Math.round(3.5))
console.log(Math.floor(3.5))
console.log(Math.floor(3.99995))
console.log(Math.ceil(3.99995))
console.log(Math.ceil(3.00001))

console.log(Math.random())


const rand = Math.round(Math.random())
console.log(rand)


// ---------------------------
const today= new Date();
const date= new Date('2024-12-04')
console.log(date.getMonth())


const specificDate = new Date(2021,10,12)
console.log(specificDate)
specificDate.setMonth(9)








// tallest guy

const heights=[60,68,72,78,82,56,62]

function getTaller(numbers){
    let max = numbers[0]
    for (const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const tallest = getTaller(heights)
console.log(tallest)