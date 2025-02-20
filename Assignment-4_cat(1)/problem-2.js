function  validEmail( email ) {
    if(typeof email != 'string' || Array.isArray(email)){
        return "Invalid";
    }

    if(email.endsWith('.com') &&  email.includes('@') && typeof email === 'string'){
        return true;
    }
    else if(email.includes(' ') && email.startsWith('.-_+@')){
        return false
    }
    else
    {
        return false;
    }

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
