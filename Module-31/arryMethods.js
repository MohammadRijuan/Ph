// foreach,filter,find


const products = [
    {name:'samsung',color:'white',price : 17000},
    {name:'iphone',color:'black',price : 171000},
    {name:'nokia',color:'gray',price : 9000},
    {name:'one plus',color:'black',price : 19000}
]


products.forEach(product =>{
    // console.log(product)
    if(product.color== 'black'){
        console.log(product)
    }

})


const newProduct = products.filter(product=> product.price > 10000)
console.log(newProduct)


const Product = products.find(product=> product.price === 9000)
console.log(Product)

