// hoisting is before assigning a variable if  we want to see the result of it then it shows undefine...becoz js take that variable name as a 1st line without assigning a value
// it will happen only with var


// var output  //js automatically take that

// console.log(output)

// var output = "Rijuan"


// if we take variable wid const and execute the output before assign a value it will give an error..at this tym js will not take the name of variable as a 1st line
// console.log(output)

// const output = "Rijuan"





function sum(num1,num2){
    
    var result2 //js automatically ney behind the scene

    if(true){
        // var result2=num1-num2
        const result2=num1-num2
    }
    

    // var er ketre ans dibe but const er ketre dibena
    console.log(result2)
}

sum(10,30)