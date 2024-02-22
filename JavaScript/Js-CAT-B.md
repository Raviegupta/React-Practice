## CAT-B

### Q1. What is JavaScript?

JavaScript is a `scripting language` that enables you to create `dynamically updating content`.

HIGH LEVEL DEF:- <br />
JavaScript is a `HIGH-LEVEL`, `PROTOTYPE BASED OBJECT ORIENTED`, `MULTI PARADIGM`, `INTERPRETED OR JUST IN TIME COMPILED` `DYNAMIC` `SINGLE-THREADED`,` GARBAGE COLLECTED` Programming language with `FIRST CLASS Functions` and a `NON-BLOCKING EVENT LOOP` CONCURRENCY MODEL.

1. High-Level :- JavaScript & Python (low-level:- C)
2. Garbage Collection :- It cleans the memory automatically
3. Interpreted or JIT :-

   - Compilation :- Entire code ----------> Machine Code at one & written in binary file (Poratable) --------> execution
   - Interpretation :- runs through the source code & executes it line by line.
   - JIT Compilation :- Entire code ----------> Machine Code at once (Not Portable) --------> executed `immediately`

4. Multi-Paradigm :- Procedural programming, OOP Approach, Functional Programming Approach
5. Prototype Based object-oriented :- Array.prototype.push => arr.push()
6. First Class Functions :- here, `functions` are `simply` treated as `variables`. we can pass them into other functions, & return them from functions
7. Dynamic Typed :- No Data types definitions. Types becomes known at runtime only. `let x = 23; let y = 19;  x = 'ravie'`; Data type of variable is automatically changed.
8. Single Threaded :- One task at a time.
9. Non-blocking Event loop :-
   - Concurrency Model :- how the JS Engine handles `multiple task happening at the same time` => Why do we nned that => JS runs in one `single thread`, so it acn only do one thing at a time. => So what about long-running task? It sounds that it would block the single thread, So how will we achieve non-blocking behaviour => By using `event-loop` => it takes long running tasks, executes them in the background, & puts them in the main thread one they are finished.

---

### Q2. How do you declare variables in JavaScript?

using var, let and const <br />

- var :- Functional Scoped or Global, re-declared ✅, re-assigned ✅, hoisted with undefined ✅
- let :- Block Scoped, no re-decl ❌, re-assigned ✅, not hoisted ❌
- const :- Block Scioped, no re-decl ❌, no-reassigned ❌, not hoisted ❌
  <br />
  Note :- const variables cannot be reassigned, but their properties can be changed if they are objects or arrays.

---

### Q3. Diff b/w local & global Variables?

Global Variables:

- Declared outside of any function.
- Accessible from anywhere in the script, including inside functions.
- Remain in memory for the entire duration of the page load or until explicitly deleted.

Local Variables:

- Declared `inside a function` using var, let, or const.
- Accessible only within the function in which they are declared (i.e., they have `function scope`).
- Exist only as long as the function is executing; they are destroyed once the function returns.

---

### Q4. what are the various data types in javascript ?

**Primitive Data Types**: (BB SS NN U) <br />
`Boolean`: either true or false. <br />
`BigInt` : <br />
`String`: textual data. <br />
`Symbol`: (added in ECMAScript 6) `unique and immutable value` used `to identify object properties`. <br />
`Number`: numeric data <br />
`Null`: an `intentional absence` of any object value. <br />
`Undefined`: an `uninitialized variable` or missing property. <br />

**Non-Primitive (Reference) Data Types**: <br />
`Object`: collection of key-value pairs (properties and methods)
`Array`: `special kind of object` used to `store` a l`ist of elements`
`Functions`: Represents a reusable block of code that can be called with different arguments.
`Date`: Represents a date and time value. e.g., new Date().

---

### Q5. Differenece between null and undefined.

undefined typically means a variable has not been assigned a value, while null is used to `explicitly` indicate that a variable is `intentionally empty or has no value`. <br />

1. `undefined`

   - indicates that a `variable` has been `declared` but has `not been assigned a value yet`.
   - It is the `default value` of `uninitialized variables`.
   - It is `also returned by functions` that `do not explicitly return a value`.

2. `null`
   - It is an `explicitly assigned value` that represents the `absence of any object value`.
   - often used to explicitly indicate that a variable or object does not have a value.

---

### Q6. What is isNaN() in JS ?

isNaN() is a `function in JavaScript` that determines whether a value is NaN (`Not-a-Number`). <br>
returns true if the value is NaN, and false otherwise. <br>
isNaN() `attempts to convert the value to a number before checking` if it is NaN. If the conversion to a number fails, it returns true.

```
console.log(isNaN(123));      // false, 123 is a number
console.log(isNaN('123'));    // false, '123' can be converted to the number 123
console.log(isNaN('Hello'));  // true, 'Hello' cannot be converted to a number
console.log(isNaN(NaN));      // true, NaN is not a number
console.log(isNaN(true));     // false, true is converted to 1, which is a number
console.log(isNaN(false));    // false, true is converted to 0, which is a number

```

---

### Q7. How do we check the type of variable in JavaScript ?

using the `typeof` operator

```
let x = 10;
console.log(typeof x);  // Output: "number"

let y = 'Hello';
console.log(typeof y);  // Output: "string"

let z = true;
console.log(typeof z);  // Output: "boolean"

// typeof return `object` :- If the variable is an `object` or `null` (arrays and `functions` are also considered objects).
// typeof return `function :-  If the `variable` is a function.
```

---

### Q8. Diff v/w JS Expressions and Statement.

`JS Expression` :- a piece of code that `results into a value`. <br />
    ex:- 3 + 4, 1991, true && false && !false   <br />
`JS Statement` :- a bigger piece of code that is executed which doesnot produce a value itself. It `performs some actions`.  terminated by a semicolon ;
ex:- variable declarations, loops, conditionals, and function declarations.

```
if(23>10) {
    const str = '23 is bigger';
}
```
---

### Q9. What are various Types of Functions in JavaScript? 
1. Named Function or (Normal Function) or (Function Declaration):
```
function add(a, b) {
    return a + b;
}
```

2. Function Expression :- 
```
const action = function () {
    alert('function expression')
}
```

3. Anonymous Function:
```
let multiply = function(a, b) {
    return a * b;
};
```

4. Arrow Function: ES6, handles `this` keyword differently compared to regular functions.
```
const sum = (a, b) => {
    return a+b;
}
```
    - Inline Func :- `let square = x => x * x;`

4. Immediately Invoked Function Expression (IIFE):
```
(function (a, b) {
    return a + b;
})(2,3)
```

5. HOF :-  takes another function as an argument or returns a new function or both. ex:- `map, filter, reduce`.
```
function multiplier(factor) {
    // multiplier is a higher-order function bcoz it returns a new function
    return function(x) {
        return x * factor;
    };
}

// Using the higher-order function to create a new function
let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

```

```
function applyOperation(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(applyOperation(3, 4, add)); // Output: 7  // applyOperation is a HOF bcoz it takes another func as an argument, add is callback func

```

6. Pure Func :- 
    - They rely only on their input arguments and `do not depend on external state`. it has no side effects.
    - always returns the `same result for the same arguments`
    - It does not modify variables outside its scope or perform any I/O operations.
    ```
    function add(a, b) {
        return a = a + b;
    }
    let a = 5;
    let b = 7
    add(a,b)
    ```


7. Impure Func :- 
    - can rely on and modify external state & `have side effects` like `modifying global variables` or performing I/O operations.
    - `may produce different results for the same input` 
    ```
    let total = 0;
    function addToTotal(value) {
        total += value;
    }
    addToTotal(5)
    ```

8. First Class Function :- here, `functions` are `simply` treated as `variables`. we can pass them into other functions, & return them from functions.      <br />
ex:- Function Expressions, Arrow Functions is a First Class Function

9. Callback Functions :- function that is `passed as an argument` to another function and is `executed after some operation has been completed`. Callback functions are `commonly used in asynchronous programming` to handle tasks that depend on the completion of a previous operation.

#### What is the difference between function declarations and function expressions?

---

### Q 10. == vs === vs typeOf

---


9. forEach & map Diff, map, filter & reduce
10. Scope, Function Scope, Block Scope, lexical Scope
    - What is scope in JavaScript? How does it work?
11. Local Scope vs Global Scope
12. FEC, GEC
13. Explain the arrow function syntax in ES6. How does it differ from regular functions?
14. What are template literals in ES6? How are they useful?
15. How do you create an array in JavaScript? Can you give examples of array methods?
16. How do you create an object in JavaScript? How do you access object properties?
    Control Flow:
17. What are conditional statements in JavaScript? Can you give an example of an if statement?
18. What are loops in JavaScript? Can you explain the difference between for loop and while loop?
19. What are some new features introduced in ES6 (ECMAScript 2015)?
20. Can you explain the use of arrow functions, template literals, and destructuring in ES6?
21. WebStorage, LocalStorage
22. What is JSON? JSON.parse(), JSON.stringify

23. this keyword
