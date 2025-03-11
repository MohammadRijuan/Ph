class vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    move(){
        console.log('i can move')
    }
}

class Bus extends vehicle{
    constructor(name,price,seat){
        super(name,price);
        this.seat = seat;
    }
    route(){
        console.log('crg ro dhaka')
    }
}


class truck extends vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }
    load(){
        console.log('100kg')
    }
}


const marsa = new Bus('marsa',600,50)
console.log(marsa)