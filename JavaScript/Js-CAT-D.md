CAT D - OOP

### Q1. What is Object Oriented Programming? (OOP)

Object-Oriented Programming (OOP) is a `programming paradigm` based on the `concept of "objects"`, which can contain data (properties) and code (methods). <br />
By using objects, we pack data & corresponing behaviour into one block. <br />
Objects was developed with the goal of organizing code, to make it `more flexible and easier to maintain`. <br />

---

### Q2. What are classes and Instances?

A `class is a blueprint` or template for creating objects. Classes are `used to create instances`, which are `individual objects` created based on the class definition.

---

### Q3. What are 4 Fundamentals of OOP Principle?

1. Abstraction: Ignoring or hiding details that `don't matter`, allowing us to get an overview perspective of the thing we are implementing, instead of messing with details that don't really matter to our implementation.

2. Encapsulation: Encapsulation is the bundling of data (attributes) and the methods (functions) that operate on that data into a single unit (an object).

- Prevents external code from accidentally manipulating internal properties/state
- Allows to change internal implementation without the risk of breaking external code.

3. Inheritance: Making all properties and methods of a certain class available to child class, forming a hierarchical relationship betwen classes. This allows to `reuse common logic ` and to model real-world relationships.

4. Polymorphism: Polymorphism means "many forms", A child class can overwrite a method it inherited from a parent class. [It's more complex, but enough for our purposes]

---

### Q4. Explain OOP in JavaScript (Prototypes).

<!-- <a href="https://ibb.co/ChwkNw7"><img src="https://i.ibb.co/D51xs1C/imp-array-methods.png" alt="imp-array-methods" width=''></a> -->
<br />
    <img src="./images/OOPs in JS-Prototypes.png" alt="OOPs in JS-Prototypes" width=''>

---

### Q5. How do we implement OOP in JS in Practice?

1. `Constructor Functions` technique :- This is the way OOP has being done in JS from beginning.
2. ES6 Classes :- Modern way to do OOP in JS, 'Syntatic sugar' over Constructor functions
3. Object.create() :- easiest & most straightforward way of linking an object to a prototype object.
   <br /> <br />
   <img src="./images/3-ways-to-implement-OOP-in-JS.png" alt="3-ways-to-implement-OOP-in-JS" width=''>

---

### Q6. Explain Constructor Functions and the new operator. Expalin How do we implement Prototypes in Js using Constructor functions.

If the `function is called with new keyword` (new Constructor()), `this refers to the newly created object`.

```
    const Person = function (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;

        // Never do this, we will use Prototypes
        // this.calcAge = function () {
        //     console.log(2040 - this.birthYear)
        // }
    };
    Person();

    const ravie = new Person("Ravie", 1994);
    console.log(ravie);

    // 1. New {} is created
    // 2. function is called, this = {}
    // 3. {} linked to prototype  [The new object is linked (__proto__property) to the constructor function's prototype property]
    // 4. function automatically return {}

    const kishore = new Person("Kishore", 1990);
    console.log(kishore);

    // console.log(ravie instanceof Person);

    // ---------------------------------------------------
    // Prototypes :- Each & every function in JavaScript automatically has a property called Prototypes. (including constructor function)
    // Every Object that is created by certain constructor function will get access to all the methods and properties that we define on the constructor's prototype properties.
    console.log(Person.prototype);

    // This will have only one copy of calcAge function
    Person.prototype.calcAge = function () {
        console.log(2040 - this.birthYear);
    };

    ravie.calcAge();
    kishore.calcAge();
    // console.log(ravie.calcAge());
    // console.log(kishore.calcAge());

    console.log(ravie.__proto__);
    console.log(ravie.__proto__ === Person.prototype); // prototype of ravie object is the prototype property of the constructor function.
    // Golden Statement:- `Person.prototype` is actually not the prototype of Person but instead it is what's gona to be used as the prototype of all the objects that are created with the Person Constructor function

    console.log(Person.prototype.isPrototypeOf(ravie));
    console.log(Person.prototype.isPrototypeOf(kishore));
    console.log(Person.prototype.isPrototypeOf(Person)); // false

    // think like `prototype`: `.prototypeOfLinkedObjects`

    Person.prototype.gender = "Male";
    console.log(ravie.gender, kishore.gender);

    console.log(ravie.hasOwnProperty("firstName"));
    console.log(ravie.hasOwnProperty("gender"));
    console.log(ravie.hasOwnProperty("calcAge"));
```

---

### Q7. How Prototype Inheritance or Delegation works in JavaScript? What is Prototype Chain?

<img src="./images/How-Prototypal-Inheritance-delegation-works.png" alt="How-Prototypal-Inheritance-delegation-works" width=''> <br />

The object ravie is connected to a prototype and the ability of looking up methods and properties in a prototype is we call Prototype Chain. <br />

Prototype Chain:- The entire Series of links b/w objects linked through prototypes <br />

Object.prototype is usually the top of the prototype chain which means it's prototype is null (**proto**:null) <br />

<img src="./images/Prototype-chain.png" alt="Prototype-chain" width=''> <br />

1. `Prototypal Inheritance`:

   - In JavaScript, every object has an internal property called [[Prototype]] (often accessed via **proto** in modern browsers).
   - When you access a property or method on an object, if the object itself doesn't have that property, JavaScript looks at its [[Prototype]] (parent object) to find the property.
   - This process of searching for properties in the prototype chain continues until the property is found or the end of the prototype chain is reached.

2. `Prototype Chain`:
   - The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from their prototypes.
   - When you create an object using a constructor function or a class, the object's [[Prototype]] points to the constructor function's prototype object.
   - If a property or method is not found on the object itself, JavaScript looks for it in the object's prototype ([[Prototype]]), and if not found there, it continues up the prototype chain.

---

### Q8. Expalin prototype Inheritance in Built-In Objects.

1. Array Prototype Inheritance:

   - Arrays in JavaScript inherit properties and methods from Array.prototype.
   - This means that every array object automatically has access to methods like push, pop, forEach, etc., which are defined on Array.prototype.

   ```
   // Prototypal Inheritance on Built-In Objects

   console.log(ravie.__proto__);
   // Object.prototype (top of prototype chain)
   console.log(ravie.__proto__.__proto__);
   console.log(ravie.__proto__.__proto__.__proto__);

   console.dir(Person.prototype.constructor);

   const arr = [3, 6, 7, 6, 9, 1, 9, 3]; // new Array
   console.log(arr.__proto__);
   console.log(arr.__proto__ === Array.prototype);

   console.log(arr.__proto__.__proto__);
   console.log(arr.__proto__.__proto__.__proto__);

   // use the above knowledde to create own prototype method
   Array.prototype.unique = function () {
   return [...new Set(this)];
   };
   console.log(arr.unique()); // nice & fun experiement but don't do it practically.

   const h1 = document.querySelector("h1");
   console.dir(x=>x+1)
   ```

---

### Q9. What are ES6 Classes in JavaScript Prototypal Inheritance?
Classes in JavaScript don't work like traditional classes in other languages like java, C++. Instead, classes in JS are just `Syntatic Sugar` over what we learnt. They still implement Prototypal Inheritance behind the scenes but with the syntax that make more sense to people coming from other programming languages & so that is basically the goal of adding classes to JavaScript.

```
// class expression
// const PersonCl = class {}
```

```
// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2040 - this.birthYear);
    }

    // greet() {
    //     console.log(`Hey ${this.firstName}`)
    // }
}

const ravie = new PersonCl('ravie', 1994)
console.log(ravie)

console.log(ravie.__proto__)
console.log(ravie.__proto__ === PersonCl.prototype)

// we can also add methods from outside
PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`)
}
ravie.greet()
```

#### Notes :- 
1. Classes are NOT hoisted
2. Classes are first class citizens (we can pass them into functions and also return them from functions bcoz classes are also special kind of functions behind the scenes)
3. Classes are executed in strict mode (automatically even if we don't activate strict mode in our script)

---

### Q10. How Prototypal Inheritance is implemented through Object.create?
Object.create() allows you to create a new object that inherits from an existing object without the need for constructor functions and the new keyword. This is one way to implement prototypal inheritance in JavaScript. 

```
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto)
console.log(steven)
steven.firstName = 'Steven';
steven.birthYear = 1997;
steven.calcAge()

console.log(steven.__proto__ === PersonProto)

const sarah = Object.create(PersonProto);
console.log(sarah)
sarah.init('Sarah', 1999)
sarah.calcAge()
```

The first argument of Object.create() is the  object which should be the prototype of the newly-created object. <br />

<img src="./images/Object.create.png" alt="Object.create()" width=''> <br />

---
