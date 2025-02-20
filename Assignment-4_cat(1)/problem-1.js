function cashOut( money ) {
    if(typeof money != 'number' || money < 0){
        return "Invalid";
    }
    const charge = 1.75/100;

    const cashout_charge = money * charge
    return cashout_charge;
}

console.log(cashOut(2000))
console.log(cashOut(100))
console.log(cashOut(999))
console.log(cashOut(-350))
console.log(cashOut(0))
console.log(cashOut('101'))
console.log(cashOut('sdxjhsabcx'))
