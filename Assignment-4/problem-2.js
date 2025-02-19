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

