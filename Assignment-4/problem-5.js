function  calculateSleepTime( times ) {

    if(!Array.isArray(times)){
        return "Invalid";
    }

    // for(const time of times){
    //     if(typeof time === 'string'){
    //         return "Invalid" 
    //     }
    // }
    
    let sum=0;
    for(const tim of times){
        sum=sum+tim;
    }
    
    let hour = Math.floor(sum/3600);
    let minute =Math.floor((sum%3600)/60);
    let second =Math.floor((sum)%60)
 
    return {hour,minute,second}
}


// console.log(calculateSleepTime(56))
console.log(calculateSleepTime([1000, 499, 519, 300]))
console.log(calculateSleepTime([1000, 2000, 725]))
console.log(calculateSleepTime([100, 3800]))
console.log(calculateSleepTime([]))
console.log(calculateSleepTime([5600]))
console.log(calculateSleepTime([100, 3800, "90" ]))
