const person = ['rakib','sakib','fakib','bolod']

const sort_person = person.sort();

console.log(sort_person)

// ganjakuri sorting
const numbers = [2,81,6,4,7,65,14,3,58]

const sort_number = numbers.sort()

console.log(sort_number)


// actual sorting in ascending

const numbers1 = [2,81,6,4,7,65,14,3,58]

const sort_number1_asc = numbers.sort(function(a,b) {return a- b})

console.log(sort_number1_asc)


// actual sorting in ascending
const numbers2 = [2,81,6,4,7,65,14,3,58]

const sort_number_dsc = numbers2.sort(function(a,b) {return b - a})

console.log(sort_number_dsc)