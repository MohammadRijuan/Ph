function calculateVAT(amount){
    const vat_prcntg= 7.5/100;
    const total_vat = amount * vat_prcntg;

    if(typeof amount === 'number' && amount > 0){
        return total_vat;
    }
    else{
        return "Invalid";
    }
}
