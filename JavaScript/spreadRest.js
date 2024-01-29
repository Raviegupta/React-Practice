// rest operator in array
function addNumbers(a,b,c, ...others) {
    console.log(others)
    return a+b+c;
}
const result = addNumbers(2,3,4,1,5);
console.log(result);



// spread operator in array
const names = ['ravi', 'vivek', 'taher'];
function getNames(name1, name2, name3) {
    console.log(name1, name2, name3 );
}
getNames(names[0], names[1], names[2]);
getNames(...names);


// --------------------------------------------------
// rest in object
const students = {
    name: 'ravi',
    age: '26',
    city: 'gurgaon'
}
const {name, ...rest} = students;
console.log(name)
console.log(rest)


// spread in object
const newStudent = {
    ...students
}
console.log(newStudent);
