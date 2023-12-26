## What is closure in Javascript ?
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
- 