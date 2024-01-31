// ----------------------------------------------------------------------------
// Hoisting...
// Hoisting is a phenomenon in JavaScript by which we can access variables and functions even before we have initialised it.

// Even before the code starts get executing memory is allocated to all variables & functions.
// Not Defined vs Undefined
// arrow function & function expression are behave just like variables. So, it will allocate memory with placeholder undefined.
// only in proper normal function declartion



var x = 7;

function getName() {
  console.log('Hello Ravie');
}

getName();
console.log(x);
console.log(getName);