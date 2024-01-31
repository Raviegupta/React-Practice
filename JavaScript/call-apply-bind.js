let name = {
    firstName: "ravie",
    lastName: "gupta",
    // printFullName() {
    //     console.log(this.firstName + ' ' + this.lastName);
    // }
}

const printFullName = function (city, state) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + city + ' ' + state);
}

// name.printFullName();

let name2 = {
    firstName: "taher",
    lastName: "rangwala",
}
// name.printFullName.call(name2);

// call() :- we borrow a function from another object and use data of another object. first arg is the reference of the object which it will points to and later arguments can be the arguments to the function

printFullName.call(name, 'bokaro', 'jhar');
printFullName.call(name2, 'indore', 'MP');


// apply() :- the only difference b/w the call & apply method is how we pass the arguments, here all the function arguments are passed as a array list in second argument.

printFullName.apply(name, ['bokaro', 'jhar']);
printFullName.apply(name2, ['indore', 'MP']);


// bind() :- It is similar to call method, the only diifernce is that it binds the object with the function & returns a new function. If we have to invoke later, we can use this bind method

const printMyName = printFullName.bind(name, 'bokaro', 'jhar')
printMyName;




// write pollyfill for a bind, function currying 