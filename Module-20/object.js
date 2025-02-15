// object declaration

const Student ={
    name:'Md Rijuan Monju',
    class:'Hons 3rd year',
    department: 'English'
}

console.log(Student);
console.log(Student.name);
console.log(Student.class);
console.log(Student.department);

// for of - array
// for in - Object
// key - value
for(let key in Student){
    console.log('Student Information')
    console.log(`${key} : ${Student[key]}`)
}

console.log(Student['class'])
delete Student.department;

console.log(Student);



// declare an object

const school = new Object();
console.log(school)

// to put a new record
school['students'] = 2000;
console.log(school)