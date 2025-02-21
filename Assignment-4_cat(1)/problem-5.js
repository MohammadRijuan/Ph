function  calculateWatchTime( times ) {
    if(!Array.isArray(times)){
        return "Invalid";
    }

    for(const tim of times){
        if(typeof tim === 'string'){
            return "invalid"
        }
    }

    let total_scnd=0;
    for(const time of times){
        total_scnd = time+total_scnd;
    }
    const hour=Math.floor(total_scnd/3600);
    const minit=Math.floor((total_scnd%3600)/60);
    const scnd=Math.floor(total_scnd%60);

    return {hour,minit,scnd}
}


console.log(calculateWatchTime([100, 99, 119, 300]))
console.log(calculateWatchTime([1000, 2000, 725]))
console.log(calculateWatchTime([100, 3800]))
console.log(calculateWatchTime([]))
console.log(calculateWatchTime([5600]))
console.log(calculateWatchTime([100, 3800, "90" ]))