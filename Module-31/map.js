const array = [1,2,3,4,5,6,7]

let temp =[]

for(let i = 0; i < array.length; i++){
    const element = array[i]
    const sum = element + 1;
    temp.push(sum)
}

// console.log(temp)


// const newArray = array.map(value => value+1)

const newArray = array.map(value=>{
    return value+1;
})

console.log(newArray)




const friends= ['nibraj','sakib','fahad']

const frndArray = friends.map((element,index)=>{
    // return element;
    return index;
})

console.log(frndArray)