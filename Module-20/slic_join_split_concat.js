const address = 'Chattogram'
const part = address.slice(2,5);

console.log(part)


const sentence = "i am a good boy"

console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));



const frndstr = 'mibu,dipu,fahu,kalu,malu';
const frnds = frndstr.split(',')

console.log(frnds);

const friend =[ 'mibu', 'dipu', 'fahu', 'kalu', 'malu' ];
console.log(friend.join())
console.log(friend.join('-'))
console.log(friend.join('/'))



const first = 'Rijuan'
const second = 'Monju'
// const fullname = first.concat(second)
const fullname = first.concat(' ').concat(second)

console.log(fullname)



// includes mane holo ck kora element ase kina
console.log(second.includes('x'))
console.log(second.includes('o'))