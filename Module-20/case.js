// lower case, upper case

// const name1 = 'md rijuan monju' 
// const name2 = 'Md Rijuan monju'

// it will give fake bcz of lower case upper case issues
// if(name1 === name2){
//     console.log('name is correct')
// }
// else{
//     console.log('fake')
// }


// so we have to make all the things in upper case or lower case

// if(name1.toLowerCase() === name2.toLowerCase()){
//     console.log('name is correct')
// }
// else{
//     console.log('fake')
// }





const name1 = 'md rijuan monju ' 
const name2 = ' md rijuan monju'
// it will give fake bcz of side gap issues
if(name1 === name2){
        console.log('name is correct')
    }
    else{
        console.log('fake')
    }

// to make it correct then we will use trim()...it will not count middle gap issues

if(name1.trim() === name2.trim()){
    console.log('correct');
}
else{
    console.log('wrong')
}
