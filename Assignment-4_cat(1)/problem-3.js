function  electionResult( votes ) {
    if(!Array.isArray(votes)){
        return "Invalid";
    }

    let banana_count =0;
    let mango_count=0;

    for(const vote of votes){
        if(vote === 'mango'){
            mango_count++;
        }
        if(vote === 'banana'){
            banana_count++;
        }
    }

    if(banana_count > mango_count){
        return "Banana";
    }
    else if(mango_count > banana_count){
        return "Mango";
    }
    else if(banana_count === mango_count ){
        return "Draw";
    }
    else{
        return "Invalid";
    }
}



console.log(electionResult(["mango", "banana", "mango", "banana", "mango"]))
console.log(electionResult([]))
console.log(electionResult(["mango", "banana", "jaker party" , "no"]))
console.log(electionResult(["mango"]))
console.log(electionResult(["banana", "banana", "age e valo chilam" , "no"]))
console.log(electionResult({result: "mango , banana ,  mango"}))
console.log(electionResult("mango , banana"))
console.log(electionResult(["mango", "BananA", "na vote", "na vote"]))