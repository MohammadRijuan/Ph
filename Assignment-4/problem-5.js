function  calculateSleepTime( times ) {
    
    // for (const time of times){
    //     if(typeof time != 'number'){
    //         return "Invalid"
    //     }
    // }

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
    // return sum;
    return {hour,minute,second}
}


console.log(calculateSleepTime(56))
