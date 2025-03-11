class person{
    // to make status private we will use # on perameter
    #status;
    constructor(name,age,status){
        this.name = name;
        this.age = age;
        this.#status = status
    }

    sleep(){
        console.log(`${this.name} sleep at 11pm`)
    }

    // if we want to see the private thing then we can see it by calling a function
    action(){
        console.log(this.#status)
    }
}

const Rijuan = new person('Rijuan',12,'unmarried')
// Rijuan.sleep()
console.log(Rijuan.status)
Rijuan.action()



const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

