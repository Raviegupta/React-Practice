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

#### Explain the arrow function syntax in ES6. How does it differ from regular functions?
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

### Q10. == (Equality Operator) vs === (Strict Equality Operator)
`==` (Equality Operator):
- compares two values for equality, but it `does not check for the data type` of the values.
- If the two values being compared are of different types, JavaScript will attempt to convert them to a common type before making the comparison. (Actually it does `type coercion in background` to compare when data types are not equal.)
- For example, 1 == '1' will return true because JavaScript converts the string '1' to the number 1 before comparing.   <br />

`===` (Strict Equality Operator):
- compares two values for equality, but it `also checks for the data type` of the values.
- For example, 1 === '1' will return false because the values are of different types (number and string).

---

### Q11. difference b/w type conversion & type coersion.
type conversion :- Wheen we `manually` convert one data type to another.
type coercion :- When `JavaScriprt does it automatically` in background. (automatically convert types behind the scenes for us)

---

### Q12. Expalin forEach, map, filter, reduce methods in JS ? Diff b/w foeEach & map.
`.forEach` :-
- used to `iterate over elements` of an array and `perform a specified action` for each element.
- `Does not return a new array`. It simply iterates over the array and performs the specified callback function for each element.
- `Does not modify the original array`.     <br />
Use Case :-
    - when you want to `perform a side effect` for each element in the array, such as `logging`, `updating a variable`, or `making a network request for each element`.
```
const numbers = [1, 2, 3, 4];
numbers.forEach(function(num) {
    console.log(num * 2);
});
// Output: 2, 4, 6, 8
```


`.map` :- transform each element of an array and `create a new array` `with the transformed elements`.
- takes a callback function as an argument. 
- this callback function can take three arguments: `current element`, `index` of the current element, and the `array itself`.
- returns a `new array` with the results of applying the callback function to each element. and it also `doesn't modify the original array`    <br />
Use Case :-
    - when you want to `transform each element` in an array into a new value and create a new array with those transformed values.
```
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
// squaredNumbers is [1, 4, 9, 16, 25]
```
**Note**:- In summary, forEach is used for iteration and performing side effects, while map is used for transforming elements and creating a new array based on the transformation.


`.filter` :- `create a new array` with only the elements `that pass a certain condition`.
- It takes a callback function as an argument, which is applied to each element of the array.
- The callback function should return true if the element is to be included in the new array, or false otherwise. 
- The filter method returns a new array containing only those elements for which the callback function returns true.
- `doesn't modify the original array`
```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers is [2, 4]
```

`.reduce` :- used to `reduce an array to a single value`.
- It takes 2 arguments :- `a callback function` and an `optional initial value`.
- The `callback function` takes `four arguments`: the accumulator, the current element, index of current element, and the array itself.
- The `callback function` should `return the new value of the accumulator`.
- finally, The `reduce method` `returns the final value of the accumulator`.

```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// sum is 15
```

---

### Q13. What is scope in JavaScript? How does it work? What is Function Scope, Block Scope, lexical Scope?
Scope in JavaScript refers to the `visibility or accessibility` of `variables and functions within a program`. It determines the parts of the code where a particular variable or function can be accessed.     <br />
JavaScript has several types of scope, including `function scope`, `block scope`, and `lexical scope`.

1. FUNCTION SCOPE (local Scope)
    - variables declared inside a function are only accessible within that function.
    - variables declared using var keyword inside a function have function scope.
    ```
    function myFunction() {
        var str = 'I am a local variable';
        console.log(str); // Output: I am a local variable
    }
    myFunction()
    console.log(str);   // Error: str is not defined
    ```

2. Block Scope (ES6)
    - visibility of variables within blocks of code, such as those defined by `if statements`, `for loops`, or `while loops`.
    - variables declared using `let and const` keywords `have block scope`.
    ```
    if (true) {
        let blockVar = 'I am a block variable';
        console.log(blockVar); // Output: I am a block variable
    }
    console.log(blockVar); // Error: blockVar is not defined

    ```
3. Lexical Scope
    - Scoping is controlled by the `placement` of functions and blocks in the code.
    - In lexical scope, `a function can access variables defined in its outer function or global scope`.
    ```
        function outerFunction() {
            var outerVar = 'I am an outer variable';
            function innerFunction() {
                console.log(outerVar); // Output: I am an outer variable , outerVar is accessible here due to Lexical Scoping
            }
            innerFunction();
        }
        outerFunction();
    ```

4. Global Scope
    - outside of any function or block
    - variables declared in global scope are accessible `everywhere`

---

### Q14. What is a Scope Chain?
In JavaScript, the scope chain refers to the mechanism by which the JavaScript engine resolves the value of a variable by `traversing the scope hierarchy`.     <br />
When a variable is referenced, the engine first looks for the variable in the current scope. If it doesn't find it there, it looks in the next outer scope, and so on, until it reaches the global scope.  <br />
Each function in JavaScript creates its own scope, and nested functions have access to variables in their containing (outer) scopes. This nesting of scopes forms a chain, known as the scope chain.

---

### Q15. Difference between FEC & GEC ?
**Global Execution Context** or **Execution Context**:
- It is `created` `when the script is executed` and is the `default` or outermost context.
- It `includes` `global objects` like `window (in browsers)` or `global (in Node.js)`, and this refers to the global object.

**Function Execution Context**:
- It is `created each time a function is called`.
- It `includes` the `function's arguments`, `local variables`, and `inner functions`.
- Each function call creates a new execution context, which is added to the top of the execution stack.

**Note**
- `All together make the call stack`

---

### Q16. What are template literals in ES6? How are they useful?
a feature in `ES6` (ECMAScript 2015) that `allow for more flexible and readable string formatting in JavaScript`.   <br />
They are enclosed by `backticks` ( ) instead of single or double quotes, and they support interpolation, allowing us to embed expressions directly within the string.

```
const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!
```

---

### Q17. What are some new features introduced in ES6 (ECMAScript 2015)?    (ABCD-PR-Tumse)
ES6, also known as ECMAScript 2015, introduced several new features and improvements to JavaScript. Some of the key features include:

1. `Arrow Functions`: Arrow functions provide a more concise syntax for writing function expressions. They also lexically bind the this value, making it easier to access the correct context.

2. `let and const`: let and const are block-scoped variables that provide an alternative to var. let is used for variables that can be reassigned, while const is used for variables that are not meant to be reassigned.

3. `Template Literals`: Template literals allow for easier string interpolation and multiline strings using backticks (`).

4. `Rest and Spread Operators`: The rest parameter (...) allows functions to accept an indefinite number of arguments as an array. The spread operator (...) allows arrays and objects to be expanded into individual elements or key-value pairs.

5. `Destructuring Assignment`: Destructuring allows for the extraction of values from arrays or objects into individual variables, making it easier to work with complex data structures.

6. `Promises`: cleaner way to work with asynchronous code, making it easier to manage callbacks and handle errors.

7. `Default Parameters`: Functions can now have default parameter values, which are used if no argument is provided or if the argument is undefined.
    ```
    function greet(name = 'Anonymous') {
        console.log(`Hello, ${name}!`);
    }
    greet(); // Output: Hello, Anonymous!
    greet('John'); // Output: Hello, John!
    ```

8. `Classes`: provides a more familiar and concise way to define classes and constructor functions in JavaScript.

9. `Modules`: standardized way to organize and reuse code, allowing for better code organization and maintainability.

10. `Symbol`: new primitive data type that can be used as unique identifiers, helping to `prevent naming conflicts in objects`.

---

### Q18. What are conditional statements in JavaScript? 
these are used to perform different actions based on `different conditions`.  <br />

`if statement` : allows us to execute a block of code only if a specified condition is true.

`if...else statement` : Executes one block of code if a specified condition is true and another block of code if the condition is false.

`if...else if...else statement` : Allows you to check multiple conditions and execute a different block of code for each condition.

`switch statement` : Evaluates an expression and executes a block of code depending on the expression's value. It is an `alternative to chaining multiple if...else if...else statements`.

```
let a = 10
switch (a) {
    case 7:
        // code to be executed if expression matches value1
        console.log('7')
        break;
    case 10:
        console.log('10')
        // code to be executed if expression matches value2
        break;
    default:
        console.log('default')
        // code to be executed if expression doesn't match any case
}
```

`ternary operator` (?:): Provides a shorthand way to write if...else statements in a single line.

### Q19. What are loops in JavaScript? various types loops in JS. Difference between for...in loop & for...of loop
loops are used to `repeatedly execute a block of code` `as long as a specified condition is true`.
1. `for` loop: Executes a block of code a `specified number of times`.

2. `while` loop: Executes a block of code `as long as the specified condition is true`.
    ```
    while (condition) {
        // code to be executed
    }
    ```

3. `do...while` loop: Similar to a while loop, but the `block of code is executed` `at least once before the condition is tested`.
    ```
    let userInput;
    do {
        userInput = prompt("Please enter a number greater than 10:");
    } while (isNaN(userInput) || parseInt(userInput) <= 10);
    console.log("Valid input received:", parseInt(userInput));
    ```

4. `for...in loop`: used to `iterate over the keys` (property names) of an object(object, arrays).
    ```
    const person = {
        name: 'John',
        age: 30,
        occupation: 'Developer'
    };
    const person = ['kishore', 'taher', 'prabhat', 'ravie']

    for (let key in person) {
        console.log(key + ':', person[key]);
    }
    ```

5. `for...of loop`: Iterates over iterable objects like `arrays`, `strings`, `maps`, `sets`, etc. 
    - it `directly iterates over the values`, not the keys.
    - It does `not iterate over plain objects`.
    ```
    const numbers = [1, 2, 3, 4, 5];
    for (let number of numbers) {
        console.log(number);
    }
    ```

#### In summary:-  for...in is used to iterate over object keys, while for...of is used to iterate over iterable values.

---

### Q 20. What is WebStoarage?
Web storage, also known as `DOM storage`, is a `mechanism` defined by the `Web Storage API` for `storing` `key-value pairs` `locally within a user's browser`.    <br />
It provides two `objects` for storing data: `localStorage` and `sessionStorage`.

1. **LocalStorage**:
- `Data` stored in localStorage `persists even after the browser is closed and reopened`. It has `no expiration time`.
- The `data stored` in localStorage is `specific to the domain of the website`.
- Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.
- Storage limit is the maximum amongst the two.

```
let obj = {
  name: "ravi",
  age: 30,
};
// Storing data in localStorage
localStorage.setItem("user", JSON.stringify(obj));

// Retrieving data from localStorage
let result = localStorage.getItem("user");
const object = JSON.parse(result);
console.log(object);
console.log(object.name);
console.log(object.age);

// Removing data from localStorage
localStorage.removeItem("user");
```

2. **sessionStorage**:
- `Data` stored in sessionStorage is `only available` for the `duration of the page session`. It is cleared when the page session ends, typically when the browser tab is closed.
- Like localStorage, the data stored in sessionStorage is specific to the domain of the website.
- Data is never transferred to the server.
- Storage limit is larger than a cookie (at most 5MB).
Note :- cache < session storage (5MB) < localStorage

---

### Q21. What is JSON? JSON.parse(), JSON.stringify.
JSON (JavaScript Object Notation) :- `data interchange format` that is easy for humans to read and write, and easy for machines to parse and generate. 
- often used to `exchange data` `between a server and a web application`.

1. `JSON.parse()`: The JSON.parse() method is used to `parse a JSON string` and `convert it into a JavaScript object`. 
    - JSON string --------> JavaScript object.

```
const jsonStr = '{"name": "John", "age": 30}';
const obj = JSON.parse(jsonStr);
console.log(obj);           // Output: {"name": "John", "age": 30}
console.log(obj.name);      // Output: John
```

2. `JSON.stringify()` : convert a JavaScript object into a JSON string.
```
const obj = { name: 'John', age: 30 };
const jsonStr = JSON.stringify(obj);
console.log(jsonStr);       // Output: '{"name":"John","age":30}'
```

---

### Q22. What are logical operators in javascript ?
In JavaScript, logical operators are used to p`erform logical operations on values`. There are three logical operators:

`Logical AND (&&)`: The logical AND operator `returns true` `if both operands are true`; otherwise, it returns false.

`Logical OR (||)`: The logical OR operator `returns true` `if at least one of the operands is true`; otherwise, it returns false.

`Logical NOT (!)`: The logical NOT operator `returns true` `if the operand is false` and `vice versa`.

---

### Q23. this keyword

---