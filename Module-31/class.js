class products {
    // owner ='Rijuan'

    constructor(name,price,brand,owner){
        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.owner = owner
    }

    details(){
        console.log('ami details')
    }
}

const apple = new products('iphone',12000,'apple','monju')
console.log(apple)


const samsung = new products('samsung',11000,'dur','sifat')

console.log(samsung)