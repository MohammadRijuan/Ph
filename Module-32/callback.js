// A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function

// 1

// function ghotok(patro){
//     // console.log('ami ki call korbo ',patro,'?')
//     patro()
// }

// const patro = 'Nibraj'
// const patro = ['a','b']
// const patro = function(){
//     console.log('ok ami paisi call')
// }

// ghotok(patro)






// 2

function ghotok(patro,name){
    patro(name)
}


const patro = function(name){
    console.log('ok ami paisi call',name)
}

ghotok(patro,'Nibraj')