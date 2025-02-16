function sizeString(str){
    const size = str.length;
    console.log(str,size)
}

sizeString('Chattogram')



function DodoubleorTriple(number , doDouble){
    if(doDouble === true){
        const result = number*2;
        return result
    }
    else{
        const result = number*3;
        return result;
    }
}

console.log(DodoubleorTriple(5,true))
console.log(DodoubleorTriple(5,false))