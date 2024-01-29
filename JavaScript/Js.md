### Q1. What is closure in Javascript ?
Function bundled with its lexical environment is known as a closure. 
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


// ex-2
const sum2 = (a,b,c) => {

    return {
        getSumTwo: function() {
            return a+b;
        },
        getSumThree: function() {
            return a+b+c;
        }
    }
}

const closure2 = sum2(5,7,9);
console.log(closure2.getSumTwo())
console.log(closure2.getSumThree())

const closure3 = sum2(1,2,3);
console.log(closure3.getSumTwo())
console.log(closure3.getSumThree())
```

Use Cases (features):-
- Closures are commonly used to create `private variables and functions` in JavaScript. By defining a function within another function, we can create a private scope that is inaccessible from outside the outer function.
- Data Encapsulation and Privacy:
- Memory Efficiency: Since a closure retains references to the variables it needs from the outer scope, those variables are not immediately eligible for garbage collection
- Lexical Scoping: 

Disadv
- Memory Usage: Closures can keep variables in memory longer than expected, as they retain references to their outer scope's variables even after the outer function has finished executing. This can potentially lead to memory leaks if closures are not managed carefully, especially in long-running applications or when dealing with large datasets.
- Complexity and Maintenance: Overuse of closures can lead to code that is harder to understand and maintain, especially if closures are nested deeply or if they capture a large number of variables from their outer scopes. This can make the codebase more challenging for other developers to work with and can lead to maintenance issues.

---

### Q2. What is a Promise in JavaScript?
In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

#### What are the states of a Promise?
Promises can be in one of `three states`: `pending, fulfilled, or rejected`.
- **Pending**: The `initial state` of a Promise `before it resolves to a value or is rejected with an error`.
- **Fulfilled**: The state of a Promise when the `asynchronous operation has completed successfully`, resulting in a value.
- **Rejected**: The state of a Promise when the asynchronous operation has failed, resulting in an error.

When a Promise is resolved (either fulfilled or rejected), it returns a value that represents the outcome of the asynchronous operation. This value can be accessed using the then() method, which is used to handle the fulfillment of the Promise, or the catch() method, which is used to handle any errors that occur during the Promise execution.

#### How do you create a Promise in JavaScript?
we can create a Promise using the **new Promise()** `constructor`, passing a function with resolve and reject parameters that represent the completion or failure of the asynchronous operation.

#### What is Promise chaining?
Promise chaining is a technique used to execute multiple asynchronous operations in sequence, where each operation depends on the result of the previous one.

#### What is the difference between using Promises and callbacks for asynchronous operations?
Promises provide a more structured and composable way to handle asynchronous operations compared to traditional callback-based approaches, leading to more readable and maintainable code.

#### Can you create a Promise that resolves after a specific timeout?
Yes, we can create a Promise that resolves after a specified timeout using setTimeout() and the Promise constructor.

#### How do you handle errors in a Promise chain?
We can use the `catch() method` **at the end of a Promise chain** to handle any errors that occur in the chain.

---

### Q3. What is async/await in JavaScript?
async/await is a modern syntax for working with asynchronous code in JavaScript, introduced in ECMAScript 2017 (ES8). It provides a more readable and synchronous-like way to write asynchronous code.

#### How do you define an async function in JavaScript?
An async function is defined using the `async` keyword **before the function declaration**. Inside an async function, we can use the await keyword to pause the execution of the function until a promise is settled.

#### What does the await keyword do?
The await keyword is used inside an async function `to pause the execution of the function until a promise is settled` (either fulfilled or rejected). It can only be used inside an async function.

#### What does async function return?
Async functions always return a `promise`. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
If the function returns a value, the promise will be resolved with that value. If the function throws an error or rejects a promise, the promise returned by the async function will be rejected with that error.

#### How does error handling work with async/await?

#### Can you use async/await with any function that returns a promise?
Yes, we can use async/await with any function that returns a promise. This includes built-in functions that return promises (e.g., `fetch()` for making HTTP requests) as well as custom functions that return promises.

#### What is the difference between using async/await and chaining promises with then()?
async/await provides a more synchronous-like way to write asynchronous code compared to chaining promises with then(). It can make the code more readable and easier to reason about, especially when dealing with multiple asynchronous operations.

#### Can you use multiple await expressions in sequence?
Yes, we can use multiple await expressions in sequence to wait for multiple asynchronous operations to complete in a specific order.

---

### Q4. What is a callback function in JavaScript?
A callback function is a function that is `passed as an argument to another function` and is `executed after the completion of a specific task`.

#### What is the purpose of using callbacks in JavaScript?
Callbacks are used to handle **asynchronous operations**, such as `fetching data from a server, reading files, or handling user interactions`. They allow us to specify what should happen after an asynchronous task completes, without blocking the rest of the code.

---

### Q5. What is a higher-order function? How is it related to callbacks?
A higher-order function is a function that `either takes a function as an argument` or `returns a function as a result`.
Callbacks are often used with higher-order functions, where the **callback is passed as an argument to the higher-order function**.

#### What is the difference between synchronous and asynchronous callbacks?
Synchronous callbacks are executed immediately at the point where they are defined, blocking the execution of subsequent code. Asynchronous callbacks are scheduled to run later, allowing the rest of the code to continue executing while waiting for the callback to be invoked.

#### What is callback hell? How can it be mitigated?
Callback hell refers to the situation where multiple nested callbacks are used, leading to code that is difficult to read and maintain.
It can be mitigated by using techniques like named functions, modularization, or adopting newer asynchronous patterns like Promises or async/await.

#### What are some alternatives to callbacks for handling asynchronous operations in JavaScript?
`Promises and async/await` are modern alternatives to callbacks for handling asynchronous operations in JavaScript. They provide a more structured and readable way to work with asynchronous code.

#### Can you give an example of using a callback in a real-world scenario?
Example scenarios could include using a callback to handle the `response from an AJAX request`, `to process data after a file is read asynchronously`, or to `handle a user interaction event` in a web application.

---

### Q6. What are spread and rest operators in javascript?
`Spread Operator (...)` : The spread operator is used to expand an iterable (like an array) into individual elements.

`Rest Parameter (...)` : The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. <br>
Note: The rest parameter must be the last parameter in a function's parameter list, and there can only be one rest parameter in a function.

---

