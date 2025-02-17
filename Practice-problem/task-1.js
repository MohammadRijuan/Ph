
// no duplicate

const numbers = [1,4,5,7,1,5,2,5]


function noDuplicate(array){
    const unique = [];
    for (const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique.sort();
}

const no_dupli=noDuplicate(numbers)

console.log(no_dupli);