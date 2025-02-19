
function  willSuccess(marks) {
    
    // face iteration error pblm because of not having an array
    // for (const mar of marks){
    //     if(typeof mar != 'number'){
    //         return "Invalid"
    //     }
    // }

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

