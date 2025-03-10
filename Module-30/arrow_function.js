function add(a,b){
    return a+b;
}
console.log(add(1,3))


const add2 = (a,b) =>{
    return a+b;
}
console.log(add2(5,3))


const content = (num1) =>{
    console.log("hello",num1)
}


console.log(content('hi'))



const test = ( ) =>{
    console.log('hello wmpty')
}

test()

const square = x => x*x;

console.log(square(5))


document.getElementById('title').addEventListener('click',
    function(){
        console.log('hello')
    }
)