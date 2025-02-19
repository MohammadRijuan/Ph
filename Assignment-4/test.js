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




function  validContact( contact ) {

    if(typeof contact != 'string'){
        return 'Invalid';
    }
    
    if(contact.startsWith('01') && contact.length === 11){
        if(!isNaN(Number(contact))){
            return true;
        }
    }
    else{
        return false;
    } 
}




function  willSuccess(marks) {
    if(!Array.isArray(marks)){
        return "Invalid";
    }

    let pass_sub=0;
    let fail_sub=0;

    for(const mark of marks){
        if(mark >= 50){
            pass_sub++;
        }
        else{
            fail_sub++;
        }
    }
    return pass_sub > fail_sub; 
}




function  validProposal( person1 , person2 ) {
    if(typeof person1 != 'object' || typeof person2 != 'object'){
        return "Invalid";
    }

    if(!person1.hasOwnProperty('name') || !person1.hasOwnProperty('gender') || !person1.hasOwnProperty('age') || 
    !person2.hasOwnProperty('name') || !person2.hasOwnProperty('gender') || !person2.hasOwnProperty('age')){
        return "Invalid";
    }
    
    if(person1.gender === person2.gender){
        return false;
    }

    const age_gap = Math.abs(person1.age - person2.age)

    if(age_gap > 7){
        return false;
    }
    
    return true;
}





function  calculateSleepTime( times ) {

    if(!Array.isArray(times)){
        return "Invalid";
    }
    
    let sum=0;
    for(const tim of times){
        sum=sum+tim;
    }
    
    let hour = Math.floor(sum/3600);
    let minute =Math.floor((sum%3600)/60);
    let second =Math.floor((sum)%60)
 
    return {hour,minute,second}
}



