## CAT-A

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

### 9. Event loop, Callstack, Callback Queue, MicroTask Queue, JS Engine
- JavaScript is a Synchronous Single 😉 Threaded Language. It has only `1 callstack` & and it can do `only 1 thing at a time`.
- All the codes of JavaScript are executed inside the callstack & the `callstack is inside JS Engine` `which is inside the browser` which is the most remarkable creation in the history of mankind. 💥💥
- Whenever any JavaScript is run, a GEC is created, which is put inside the callstack, in case of a function invocation, FEC is created & put inside the callstack.
- The `main job of callstack` is to `execute whatever comes inside it`, it doesn't wait for anything. TimeTide & JavaScript wait for none. 😂😂
- along with the JS engine, the `browser also have local storage, Timer, bluetooth access, geolocation access` & and a lot of other superpowers. If we need to access these superpowers, we need to have some connection between these and JS Engine.
- So, to `access all these superpowers` we `need Web APIs` (`setTimeout(), DOM APIs, fetch(), localStorage, console`). & the Heartbreaking 💔 is that these web APIs are not part of JavaScript.
- `Window is a Global Object`. (browser gives JS engine the facility to access these superpowers through this window object)
- As soon as the `timer expires` the callback function registered in the web APIs environment, needs to be executed. And as all the code in JS is executed inside the callstack. we `need to send these callback functions inside the call stack`. So `these go to callstack through Callback Queue`. 💥
- `Event loop` & `Callback Queue` :- `Event loop` 💞 is just like `gate-keeper`, it `continuously checks the callback Queue` & `puts any available callback into the callstack` `if it is empty`.
- `MicroTask Queue`:- `similar to Callback Queue`, but has `higher priority` 🟩, whatever function comes inside MicroTask Queue will be `executed first` & `function inside Callback Queue will be executed later`.
- `What task` come `under MicroTask Queue` :- All the `Callback functions` which come `through promises & MutationObserver` will `go inside the MicroTask Queue`. <br / >  All other callback functions such as from DOM APIs, eventListeners go inside the callback Queue.
- `Starvation of Callback queue` :- suppose a `microtask creates a new microtask when it's executed and it goes on like this`, then the `callback inside the callback queue will never get a chance to execute`. this is Starvation of the task of the Callback queue.
- `Web APIs` :- It's a `browser superpower`.

#### What is the event loop in JavaScript?
event loop is a `mechanism` that `allows JavaScript to perform non-blocking operations` by handling asynchronous events like callbacks, promises, and async/await.
#### How does the event loop work?
Describe the event loop's process, including the call stack, task queue (or callback queue), and event loop operations like pushing tasks from the task queue onto the call stack.
#### What is the difference between the call stack and the task queue?
Explain that the call stack is used for function calls and keeps track of the execution context, while the task queue is used for holding asynchronous tasks that are ready to be executed.
#### What is the role of the event loop in handling asynchronous operations?
Discuss how the event loop continuously checks the call stack and task queue, and when the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution.
#### Can you explain the concept of callback hell and how to avoid it?
Mention that callback hell occurs when multiple nested callbacks make the code difficult to read and maintain. Explain that using promises, async/await, or modularizing code can help avoid callback hell.
#### How does JavaScript handle asynchronous operations like AJAX requests or setTimeout()?
Describe that JavaScript uses the event loop to handle these operations by delegating them to the browser's APIs and then processing the results once they are available.
#### How does the event loop handle errors in asynchronous operations?
Discuss that errors in asynchronous operations can be handled using try/catch blocks or by attaching error handlers to promises.

---

### Q10. Explain the concept of asynchronous programming in JavaScript.
Asynchronous programming in JavaScript allows us `to execute code without blocking the main thread.     <br />
It is crucial for handling tasks like fetching data from a server, reading files, or waiting for user input.    <br />
It enables us to write code that can continue to run while waiting for these tasks to complete, improving the overall responsiveness and efficiency of our application.
#### several mechanisms for asynchronous programming in JavaScript:
Callbacks: handle asynchronous operations in older JavaScript code.     <br />
Promises: cleaner and more structured way to handle asynchronous operations     <br />
Async/Await: provide a more synchronous-like way to write asynchronous code

---

### Q11. How do you handle errors in asynchronous JavaScript code?
- Using Promises with `.catch()` :  If we are using Promises, we can use the `.catch()` method to handle any errors that occur during the execution of the Promise chain.  <br />
- Using `try...catch with Async/Await`

---

### Q12. What are the different types of timers in JavaScript?
`setTimeout` : `Executes` a function `once` `after a specified delay`.     <br />
`setInterval` : `Executes` a function `repeatedly`, with a `fixed time delay` between each call

#### How do you use setTimeout to delay code execution?
```
setTimeout(()=>{
    console.log('Hello')
}, 2000)
```

#### How do you use setInterval to execute code repeatedly?
#### Create a Timer that will execute 5 times at interval of 1 sec?
```
let counter = 0;
const intervalId = setInterval(()=>{
    console.log('Interval message ' + counter);
    counter++;
    if (counter === 5) {
        clearInterval(intervalId); 
      }
}, 1000)
console.log(intervalId)
```

#### How do you cancel a timer in JavaScript?
For `setTimeout`, use `clearTimeout` and `pass the timer ID` returned by setTimeout.
For `setInterval`, use `clearInterval` and `pass the timer ID` returned by setInterval.

#### Create a Timer that will execute 5 times at interval of 1 sec using setTimeout ?
```
let counter = 0;
function timer() {
  if (counter < 5) {
    console.log(`Timer executed ${counter + 1} times`);
    counter++;
    setTimeout(timer, 1000); // Call timer again after 1 second
  }
}
timer(); // Start the timer
```
---

### Q 13. What is memoization ?
Memoization is an `optimization technique` that can be used to `reduce time-consuming calculations` `by saving previous input to` something called `cache` and returning the result from it.

#### where memoization can be used ?
Memoization can be applied to `various types of functions`, especially those that `involve repetitive or expensive computations`.

#### write a code to explain the memoization.
```
const calc = (n) => {
    let sum = 0;
    for(let i = 0; i<=n; i++) {
        sum += i;
    }
    return sum;
}

const memoize=(fun)=> {
    let cache={}
    return function(...args) {
        let n=args[0];
        if(n in cache) {
            console.log(cache)
            return cache[n]
        }else {
            console.log('calculating first time')
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time()
const effecient =  memoize(calc);
console.log(effecient(5))
console.timeEnd()

// console.time()
// console.log(calc(5))
// console.timeEnd()


console.time()
console.log(effecient(5))
console.timeEnd()

console.time()
console.log(effecient(5))
console.timeEnd()
```

---

### Q14. What is Currying in JavaScript ? 
Currying is a technique in functional programming where a `function with multiple arguments is transformed into a sequence of nested functions`, `each taking a single argument`.   <br />
The `curried function` `returns` a `new function` with `each argument applied one at a time`. `<br />

```
// Normal Function
function sum(a, b, c) {
    return a + b +c;
}
console.log(sum(2, 3, 4));

// currying function
function curriedSum (a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    } 
}
console.log(curriedSum(2)(3)(4));
```
While currying may add some complexity, it can provide significant benefits in terms of `code flexibility, readability, and maintainability`.

---