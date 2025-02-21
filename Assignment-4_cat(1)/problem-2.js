function  validEmail( email ) {
    if(Array.isArray(email) || typeof email !='string'){
        return "Invalid";
    }

    if(email.includes('@') && email.endsWith('.com')){
        return true;
    }
    
    // for (let i = 0; i < email.length; i++) {
    //     if (email[i] === ' ') {
    //         return false;
    //     }
    // }
    // if(email.startsWith('.-_+@') || email.includes(' ')){
    //     return false;
    // }

    let char = email[0];
    if (char === '.' || char === '-' || char === '_' || char === '+' || char === '@') {
        return false;
    }

    for (let i = 0; i < email.length; i++) {
        if (email[i] === " ") {
            return false;
        }
    }

    // let space = email.split(" ");
    // if (space.length > 0) {
    //     return false; 
    // }
}

console.log(validEmail("ferdous@gmail.com"))
console.log(validEmail("1zihad@gmail.com"))
console.log(validEmail("-king@yahoo.com"))
console.log(validEmail(["jhankar@hero.com"]))
console.log(validEmail("Mewo@cat.com"))
console.log(validEmail("programming-hero.com"))
console.log(validEmail("chat420@gpt.net"))
console.log(validEmail(true))
console.log(validEmail("he ro@alom.com"))
