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
