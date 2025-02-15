const sentence = "i am a good learner"

let reverse = ''

// for (const letter of sentence){
//     // it will give every single letter
//     console.log(letter)
// }


for(const letter of sentence){
    //  it will reverse your sentence
    reverse= letter+reverse
}
console.log(reverse)

// another way but we will = ingnore it
let rev=''
for(let i = 0; i<sentence.length; i++){
    const letter = sentence[i]
    rev=letter + rev;
}
console.log(rev)



// shortcut

const reversed = sentence.split('').reverse().join('')
console.log(reversed)