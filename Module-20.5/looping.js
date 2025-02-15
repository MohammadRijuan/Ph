/*
* 1. for loop
* 2. while loop
* 3. do while --> ignore
* 4. for of --> array loop korar jonno
* 5. for in --> object loop korar jonno 
*/


const friends = ['elon','nibraj','tohid','fahad'];

for (const friend of friends){
    // console.log(friend)
}

for (let i = 0; i < friends.length ; i++){
    console.log(i)
    console.log(friends[i])
}