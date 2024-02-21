### Q1. What is closure in Javascript ?
A Function bundled with its lexical environment is known as a closure. <br>
Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure

Definition:-
A closure is created when a function is defined within another function (the outer function), and the inner function has access to the outer function's variables and parameters, as well as the global scope even after the outer function has finished executing.

```
const sum = (a) => {
    console.log('hello')
    let c=4;

    return function(b) {
        return a+b+c;
    }
}

const store = sum(2);
console.log(store(5));      // store function k liye a and c hi lexical scope h

```

Use Cases (features):-
- Closures are commonly used to create `private variables and functions` in JavaScript. By defining a function within another function, we can create a private scope that is inaccessible from outside the outer function.
- `Data Encapsulation and Privacy`:
- `Memory Efficiency`: Since a closure retains references to the variables it needs from the outer scope, those variables are not immediately eligible for garbage collection
- Lexical Scoping : 

Disadv
- `Memory Usage & leaks` : Closures can keep variables in memory longer than expected, as they retain references to their outer scope's variables even after the outer function has finished executing. This can potentially lead to `memory leaks` if closures are not managed carefully, especially in long-running applications or when dealing with large datasets.
- `Complexity and Maintenance` : Overuse of closures can lead to code that is `harder to understand and maintain`, especially if closures are nested deeply or if they capture a large number of variables from their outer scopes. This can make the codebase more challenging for other developers to work with and can lead to maintenance issues.

---

### Q2. What is a Promise in JavaScript?
In JavaScript, a Promise is an `object` that represents the eventual `completion (or failure)` of an `asynchronous operation` and its resulting `Future` value.

#### What are the states of a Promise?
`three states`: `pending, fulfilled, or rejected`.
- **Pending** : This is the `initial state` of a Promise `before it resolves to a value or is rejected with an error`.
- **Fulfilled** : when the `asynchronous operation has completed successfully`, resulting in a value.
- **Rejected** : when the asynchronous operation has failed, resulting in an error.

When a Promise is resolved (either fulfilled or rejected), it returns a value that represents the outcome of the asynchronous operation. This value can be accessed using the `then()` method, which is used to handle the `fulfillment of the Promise`, or the `catch()` method, which is used to handle any `errors that occur during the Promise execution`.

#### How do you create a Promise in JavaScript?
we can create a Promise using the `new Promise()` `constructor`, passing a function with `resolve` and `reject` **parameters** that represent the completion or failure of the asynchronous operation.

#### What is Promise chaining?
A technique used to `execute multiple asynchronous operations in sequence`, where `each operation depends` on the `result of the previous one`.

#### What is the difference between using Promises and callbacks for asynchronous operations?
Promises provides more `structured and composed` way to handle asynchronous operations compared to traditional callback-based approaches. Promise helps us to write `more readable and maintainable code`.

#### Can you create a Promise that resolves after a specific timeout?
Yes, we can create a Promise that resolves after a specified timeout using setTimeout() and the Promise constructor.

#### How do you handle errors in a Promise chain?
use `catch() method` **at the end of a Promise chain** to handle any errors that occur in the chain.

```
let promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})
 
promise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        console.log(errorMessage);
    });
```
---

### Q3. What are async/await in JavaScript?
async/await is a `modern syntax for working with asynchronous code in JavaScript`, introduced in `ECMAScript 2017 (ES8)`.  <br />
It provides a `more readable` and `synchronous-like way to write asynchronous code`.

#### How do you define an async function in JavaScript?
An async function is defined using the `async` keyword `before the function declaration`. <br />
Inside an async function, we can use the `await` keyword to `pause the execution of the function until a promise is settled`.

#### What does the await keyword do?
The await keyword is used inside an async function `to pause the execution of the function until a promise is settled` (either fulfilled or rejected). It can only be used inside an async function.

#### What does async function return?
Async functions `always` return a `promise`. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.        <br />
If the function returns a value, the promise will be resolved with that value. <br />
If the function throws an error or rejects a promise, the promise returned by the async function will be rejected with that error.

#### How does error handling work with async/await?

#### Can you use async/await with any function that returns a promise?
Yes, we can use async/await with any function that returns a promise. This includes built-in functions that return promises (e.g., `fetch()` for making HTTP requests) as well as custom functions that return promises.

#### What is the difference between using async/await and chaining promises with then()?
async/await provides a more `synchronous-like way to write asynchronous code` compared to chaining promises with then(). It can make the code more readable and easier to reason about, especially when dealing with multiple asynchronous operations.

#### Can you use multiple await expressions in sequence?
Yes, we can use multiple await expressions in sequence to wait for multiple asynchronous operations to complete in a specific order.

---

### Q4. What is a callback function in JavaScript?
It is a function that is `passed as an argument to another function` and is `executed after the completion of a specific task`.

#### What is the purpose of using callbacks in JavaScript?
Callbacks are used to handle **asynchronous operations**, such as `fetching data from a server, reading files, or handling user interactions`. They allow us to specify what should happen after an asynchronous task completes, without blocking the rest of the code.

---

### Q5. What is a higher-order function? How is it related to callbacks?
A higher-order function is a function that `either takes a function as an argument` or `returns a function as a result`.    <br />
Callbacks are often used with higher-order functions, where the **callback is passed as an argument to the higher-order function**.

#### What is the difference between synchronous and asynchronous callbacks?
Synchronous callbacks are executed immediately at the point where they are defined, `blocking the execution` of subsequent code.     <br />
Asynchronous callbacks are `scheduled to run later`, allowing the rest of the code to continue executing while waiting for the callback to be invoked.

#### What is callback hell? How can it be mitigated?
Callback hell refers to the `situation where multiple nested callbacks are used`, leading to code that is difficult to read and maintain.<br />
It can be avoided by using techniques like `named functions`, `modularization`, or adopting newer asynchronous patterns like `Promises` or `async/await`.

#### What are some alternatives to callbacks for handling asynchronous operations in JavaScript?
`Promises and async/await` are modern alternatives to callbacks for handling asynchronous operations in JavaScript.     <br />
They provide a more structured and readable way to work with asynchronous code.

#### Can you give an example of using a callback in a real-world scenario?
Example scenarios could include using a callback to handle the `response from an AJAX request`, `to process data after a file is read asynchronously`, or to `handle a user interaction event` in a web application.

---

### Q6. What are spread and rest operators in javascript?
`Spread Operator (...)` : The spread operator is used to `expand an iterable` (like an array) into individual elements.

`Rest Parameter (...)` : The rest parameter syntax `allows a function to accept an indefinite number of arguments as an array`. <br>
Note: The rest parameter must be the last parameter in a function's parameter list, and there can only be one rest parameter in a function.

```
// rest parameter in array
function sum (a, b, ...rest) {
    console.log(rest);      // [ 4, 7, 5, 6 ]
}
sum(2, 3, 4, 7, 5, 6)           

// spread operator in array
const names = ['kishore', 'prabhat', 'taher']
function printName (name, secName, thirdName, fourthName) {
    console.log(name, secName, thirdName, fourthName);
}
printName('ravi', ...names)     // ravi kishore prabhat taher

// ---------------------------------------------------------
// rest in object
const students = {
    name: 'ravi',
    age: '26',
    city: 'gurgaon',
    country: 'Ind'
}
const {name, ...rest} = students;
console.log(name, rest)     // ravi { age: '26', city: 'gurgaon', country: 'Ind' }

// spread in object
const newStudent = {
    ...students,
    name: 'kishore'
}
console.log(newStudent)     // { name: 'kishore', age: '26', city: 'gurgaon', country: 'Ind' }
```

#### What is Destructuring in array? write an example to explain this.
extract values from arrays and assign them to variables
```
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, ...rest] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
```
---

### Q7. What are Call, Apply and Bind methods in JavaScript? Explain with examples.
call and apply are used to invoke a function with a `specified this value` and arguments provided as an `array` (in the case of `apply`) or as `individual arguments` (in the case of `call`).      <br />
`bind` is used to `create a new function` with a `specified this value` and initial arguments.


`call()`  <br />
we borrow a function from another object and use data of another object.   <br />
first arg is the reference of the object which it will points to and later arguments can be the arguments to the function.

```
const name = {
    firstName: 'ravie',
    lastName: 'gupta',
    // printFullName: function () {
    //     return (this.firstName + ' ' + this.lastName );
    // }
}
const printFullName = function (city, country) {
    return (this.firstName + ' ' + this.lastName + ' from ' + city + ' ' + country );
}

const name2 = {
    firstName: 'kishore',
    lastName: 'cherukuru',
}
console.log(printFullName.call(name2, 'banglore', 'india'));
```

`apply()`  <br />
`only difference` b/w the call & apply method is `how we pass the arguments`.  <br />
here all the function arguments are passed as a `array list` in second argument.

```
array = ['banglore', 'india'];
console.log(printFullName.apply(name2, array));
```

bind()  <br />
`similar to call method`, only diifernce is that `it binds the object with the function` & `returns a new function`.    <br />
If we have to `invoke later`, we can use this bind method

```
const newFun = printFullName.bind(name2, 'banglore', 'india');
console.log(newFun());
```

#### How does bind differ from call and apply?
`bind` `does not immediately invoke the function`. Instead, it `returns a new function` with the this value and arguments preset, which can be `called later`.

---

### Q8. What is Hoisting in JavaScript ?
phenomenon by which we can `access variables and functions` `even before we have initialised` it.   <br />

`var` keyword is hoisted with undefined ✅  <br />
normal function is hoisted ✅   <br />
let, const keyword are not hoisted ❌   <br />
arrow function, function expression are not hoisted. ❌

```
var x = 7;

function getName() {
  console.log('Hello Ravie');
}

getName();
console.log(x);
console.log(getName);
```
#### How does hoisting work with function declarations (Normal Function) ?
we can call a function before it is declared in the code.

#### Does hoisting work the same way for function expressions?
No, `function expressions are not hoisted in the same way as function declarations`.  <br />
`only` the `variable declaration is hoisted`, not the function definition.

```                            
                              HOISTED              INITIAL VALUE               SCOPE
function declaration          ✅ YES              Actual Function           Block scope
var variables                 ✅ YES                 undefined                Function
let & const variables         ❌ NO             <uninitialisec> TDZ         Block scope
func expression & arrows                `Depends` if using var or let/const
```

#### What is Temporal Dead Zone in JavaScript ? 
In JavaScript, variables declared with let and const are hoisted to the top of their block scope but are not initialized until the actual declaration statement is executed.  <br />
This means that there is a `phase` in the code where `the variable exists` (due to hoisting) `but cannot be accessed` `because` it has `not` `been initialized yet`. This is called variables are in Temporal Dead Zone.

#### is TDZ applied only for let & const. not for var keyword ?
`Yes`, the Temporal Dead Zone (TDZ) is specific to variables declared with let and const and does not apply to variables declared with var. When a variable is declared with var, it is hoisted to the top of its function scope (or global scope if declared outside a function) and is initialized with undefined at that point. This means that var variables can be accessed before their actual declaration in the code without causing a ReferenceError.

---
