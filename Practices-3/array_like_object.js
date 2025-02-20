function add(num1,num2){
    console.log(num1,num2)

    // arguments only work in function...it will output others element same as array like object
    console.log(arguments)
}

add(1,3);
add(1,3,4,78);