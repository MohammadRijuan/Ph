const numbers = [1,2,8,4,1,6]

// 1st way

// for (let i = 0; i< numbers.length; i++){
//     console.log(numbers[i])
// }

// 2nd way

// for(const number of numbers){
//     console.log(number)
// }




const products=[
    {id:1, name:'redmi phone' ,price:20000},
    {id:2, name:'redmi ' ,price:50000},
    {id:3, name:'samsung phone' ,price:70000},
    {id:4, name:'iphone' ,price:120000},
    {id:5, name:'motorola' ,price:7000},
    {id:6, name:'nokia' ,price:2000},
]


function matchProduct(products,search){
    const matched =[]

    for(const product of products){
        if(product.name.tolowerCase().includes(search.tolowerCase())){
            matched.push(product)
        }
    }
    return matched
}

console.log(matchProduct(products,'phone'))