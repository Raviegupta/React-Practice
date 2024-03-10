## CAT-C

### Q1. How do you create an array in JavaScript? Can you give examples of array methods?
To create an array in JavaScript, you can use `array literals ([])` or the `Array constructor`

1. Using array literals:   <br />
`let fruits = ['apple', 'banana', 'orange'];`

2. Using the `Array constructor`:       <br />
`let cars = new Array('Toyota', 'Honda', 'BMW');`

    <a href="https://ibb.co/ChwkNw7"><img src="https://i.ibb.co/D51xs1C/imp-array-methods.png" alt="imp-array-methods" width=''></a>

```
const persons = ['taher', 'kishore', 'prabhat'];   
const num = [ 10, 0, 20, 5, 1000, 153, -17 ]

1. Mutate original array (unshift, push, shift, pop, splice, reverse, sort, fill)
Add (up)
persons.unshift('raju')
persons.push('ravie')

Delete
persons.shift()
persons.pop()
num.splice(2, 2, 'item1')
console.log(num)

Others (reverse, sort, fill)
persons.reverse()
persons.sort()
console.log(persons)
const res = num.sort((a,b)=>a-b)
console.log(num)
num.fill('ravie')
console.log(num)


2. A new array (map, filter, slice, concat, slice)
const newArray = num.map((item, index, newArray) => item**2 )
console.log(newArray)
const newArray = num.filter((item) => item>0)
console.log(newArray)
const newArray = num.slice(2, 4)
console.log(newArray)
const newArray = num.concat(persons)
console.log(newArray)
const flatten = [2, 3, [7, 4, [17, 5, [51, 73]]], [14, 3]]
const newArray = flatten.flat()
console.log(newArray)


3. An array index (indesOf, findIndex)
const index = persons.indexOf('kishore');
console.log(index)
const index = num.findIndex(ele => ele%2 !== 0)
console.log(index)


4. An array element (find)
products = [
  {
    id:1,
    name: 'women blouse'
  },
  {
    id:2,
    name: 'women top'
  },
  {
    id:3,
    name: 'women scarf'
  },
  {
    id:3,
    name: 'women jean'
  },
]
const element = products.find(item => item.id == 2);
console.log(element);


5. Know if array includes (includes, some, every - true, false)
const res = persons.includes('kishore')
console.log(res)
const res = num.some(ele => ele%2 == 0)
console.log(res)
const res = num.every(ele => ele%2 == 0)
console.log(res)


6. A new string (join)
const newStr = persons.join(', ')
console.log(newStr)


7. To transform to value (reduce)
const reducedValue = num.reduce((acc, ele) => acc = acc + ele, 0)
console.log(reducedValue)


8. To just loop (iterate) array  (forEach)
persons.forEach(item => console.log(item))
```
---

### Q2. What is the difference between splice & slice methods in JS ?
`.splice` :- The splice() method in JavaScript is used to change the contents of an array by `removing or replacing existing elements and/or adding new elements in place`. 
- It modifies the original array.
- `returns an array` `containing the removed elements`.
- syntax:- `array.splice(start, deleteCount, item1, item2, ...)`

    ```
    arr = [1, 2, 5, 7, 9, 12, 15, 47];
    const deletedItems = arr.splice(2, 2, 78, 45, 98);

    console.log(arr);              // [1,  2, 78, 45, 98, 9, 12, 15, 47 ]
    console.log(deletedItems);     // [ 5, 7 ]
    ```

---

`.slice` :- The slice() method in JavaScript `returns a shallow copy of a portion of an array into a new array object selected from begin to end` `(end not included)` where begin and end represent the index of items in that array. 
- The `original array will not be modified`.
- syntax:- `array.slice(begin, end)`

    ```
    arr = [1, 2, 5, 7, 9, 12, 15, 47];
    const slicedItems = arr.slice(2, 4);

    console.log(arr);              // [ 1,  2,  5,  7, 9, 12, 15, 47 ]   // doesn't modify the original array
    console.log(slicedItems);      // [ 5, 7 ]          // shallow copy of original array
    ```

---

### Q3. How find method works in JS?
`.find` :- `return` the `first element` in an array that `satisfies the provided testing function`. 
- It iterates over each element in the array and returns the first element for which the callback function returns true. 
- If no such element is found, it returns undefined.
- `array.find(callback(element, index, array), thisArg)`

    ```
    products = [
        {
            id:1,
            name: 'women blouse'
        },
        {
            id:2,
            name: 'women top'
        },
        {
            id:3,
            name: 'women scarf'
        },
        {
            id:3,
            name: 'women jean'
        },
    ]
    const element = products.find(item => item.id == 2);
    console.log(element);
    ```
---

### Q4. Explain join method in JS ?

---

### Q5. How do you create an object in JavaScript? How do you access object properties?
To create an object in JavaScript, we can use `object literals ([])` or the `new Object() constructor`

1. Using object literals:   <br />
    ```
    let person = {
        name: 'Ravie',
        city: 'Bengaluru'
    }
    console.log(person.name);       // Output: Ravie
    console.log(person['name']);    // Output: Ravie
    ```
    To access object props, we can use :- dot notation (`.`) or bracket notation (`[]`)     <br />
    Note:- we can use bracket notation, especially when the property name is dynamic or contains special characters:

2. Using the `Object constructor`:       <br />
    ```
    let person = new Object();
    person.name = 'Ravie';
    person.city = 'Bengaluru';
    console.log(person)
    ```

---

### Q6. what are shallow copy and deep copy in object?
Shallow copy and deep copy are two ways to copy objects in JavaScript, each with different behaviors:

1. Shallow Copy:
    - Shallow copy creates a new object and copies all top-level properties of the original object.
    - If the properties of the original object are primitive types (e.g., numbers, strings), they are copied directly.
    - If the `properties are objects or arrays`, `only the references to those objects or arrays are copied`, not the actual objects or arrays. This means changes to nested objects or arrays in the copied object will affect the original object, and vice versa.
    - Shallow copy can be achieved using `Object.assign()` or the spread operator (...).

    ```
    const obj1 = {
        name: 'Ravie',
        city: 'Bengaluru'
    }
    const obj2 = obj1;
    // const obj2 = Object.assign(obj1)
    obj2.city = 'Chennai'
    console.log(obj1, obj2)
    ```

2. Deep Copy:
    - Deep copy creates a new object and recursively copies all nested objects and arrays.
    - This ensures that changes to nested objects or arrays in the copied object do not affect the original object, and vice versa.
    - How to do Deep copy:- using `spread operator` or using `JSON.parse(JSON.stringify(obj1))`
    ```
    let obj1 = { a: 1, b: { c: 2 } };
    let obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy
    obj2.b.c = 3;
    console.log(obj1, obj2); 

    let obj1 = {
        name: "ravie",
        city: "bokaro",
        ravieFrnd: {
            frnd: "kishore",
            city: "Bengaluru",
            kishoreFrnd: {
            frnd: "Taher",
            city: "indore",
            },
        },
        learning: "JavaScript",
        ravieFrnd2: {
            name: "priyanka",
            city: "mumbai",
        },
    };

    let obj2 = {
        ...obj1,
        ravieFrnd: {
            ...obj1.ravieFrnd,
            kishoreFrnd: { ...obj1.ravieFrnd.kishoreFrnd },
        },
        ravieFrnd2: { ...obj1.ravieFrnd2 },
    };

    // let obj2 = JSON.parse(JSON.stringify(obj1))

    obj2["name"] = "viru";
    obj2["ravieFrnd"]["frnd"] = "Anna";
    obj2["ravieFrnd"]["kishoreFrnd"]["frnd"] = "Prabhat";

    console.log(obj1);
    console.log(obj2);
    ```

---

### Q7. What are various methods of Objects?
1. `Object.keys(obj)`: Returns an array of a given object's `with property names`.
    ```
    let obj1 = {
        name: "ravie",
        city: "bokaro",
    }
    const res = Object.keys(obj1);   // [ 'name', 'city' ]
    console.log(res)
    ```
2. `Object.values(obj)`: Returns an array of a given object's `with property values`.
    ```
    let obj1 = {
        name: "ravie",
        city: "bokaro",
    }
    const res = Object.values(obj1);  // [ 'ravie', 'bokaro' ]
    console.log(res)
    ```
3. `Object.entries(obj)`: Returns an array of a given object's own string-keyed property [key, value] pairs.
    ```
    let obj1 = {
        name: "ravie",
        city: "bokaro",
    }
    const res = Object.entries(obj1);  // [ [ 'name', 'ravie' ], [ 'city', 'bokaro' ] ]
    console.log(res)
    ```
4. `Object.freeze(obj)`: Freezes an object: You `cannot add, delete, or modify any properties` of a frozen object.
    ```
    let obj = {
        prop1: 1,
        prop2: "Hello"
    };
    Object.freeze(obj);
    obj.prop1 = 42;             // Attempting to modify a frozen object                 ❌
    delete obj.prop2;           // Attempting to delete a property from a frozen object ❌
    obj.prop3 = "New property"; // Attempting to add a new property                     ❌
    console.log(obj);           // Output: { prop1: 1, prop2: "Hello" }                 
    ```
5. `Object.seal(obj)`: `cannot add or delete, but we can modify any properties`
    ```
    let obj = {
        prop1: 1,
        prop2: "Hello"
    };
    Object.seal(obj);
    obj.prop1 = 42;             // Modifying an existing property is allowed ✅
    obj.prop3 = "New property"; // Attempting to add a new property          ❌
    delete obj.prop2;           // Attempting to delete a property           ❌
    console.log(obj);           // Output: { prop1: 42, prop2: "Hello" }
    ```

---

### Q8. 

----------------------------------------------
#### Array Methods (Most Imp)
- forEach():      ✅
- map():          ✅
- filter():       ✅ 
- reduce():       ✅
- splice():       ✅
- slice():        ✅
- find():         ✅
- join():         ✅
- push():         ✅
- pop():          ✅    
- shift():        ✅
- unshift():      ✅
- sort():         ✅

array = ['a', 'k', 'r', 'k', 'p', 'k', 't']
#### Array Methods (Less Imp)  
- indexOf() and lastIndexOf():    ✅
- some() and every():             ✅
- concat():                       ✅
- includes():                     ✅
- reverse():                      ✅
- isArray(): This method determines whether the passed value is an Array.
----------------------------------------------