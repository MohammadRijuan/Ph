function  isBestFriend( f1 , f2 ) {
    if(typeof f1 != 'object' || typeof f2 != 'object' || f1 === null || f2 === null){
        return "Invalid";
    }

    if(!f1.hasOwnProperty('name') || !f1.hasOwnProperty('roll') || !f1.hasOwnProperty('bestFriend') || !f2.hasOwnProperty('name') || !f2.hasOwnProperty('roll') || !f2.hasOwnProperty('bestFriend')) {
        return "Invalid";
    }

    if(f1.roll === f2.bestFriend && f2.roll === f1.bestFriend){
        return true;
    }
    else{
        return false;
    }
}

console.log(isBestFriend({ name: "hashem", roll: 1, bestFriend: 2 },
    { name: "kashem", roll: 2, bestFriend: 1 }
    ))

console.log(isBestFriend({ name: "hashem", roll: 21, bestFriend: 1},
    { name: "kashem", roll: 1, bestFriend: 2 }
    ))
console.log(isBestFriend({ name:"kashem", roll: 2, bestFriend: 11},
    "Kashem er Kono Bondhu Nai"
    ))
console.log(isBestFriend("hashem", { name:"kashem", roll: 2, bestFriend: 11}))
console.log(isBestFriend({ name: "hashem", roll: 1 , bestFriend: 1},
    { name: "kashem" , roll: 1, bestFriend: 1 }
    ))