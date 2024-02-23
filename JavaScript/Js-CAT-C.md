## CAT-C

### Q1. How do you create an array in JavaScript? Can you give examples of array methods?
To create an array in JavaScript, you can use `array literals ([])` or the `Array constructor`

1. Using array literals:   <br />
`let fruits = ['apple', 'banana', 'orange'];`

2. Using the `Array constructor`:       <br />
`let cars = new Array('Toyota', 'Honda', 'BMW');`

3. Using `array destructuring`: You can create arrays by destructuring values from other arrays.        <br />
`let [a, b, c] = [1, 2, 3];`

    <a href="https://ibb.co/ChwkNw7"><img src="https://i.ibb.co/D51xs1C/imp-array-methods.png" alt="imp-array-methods" width=''></a>

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
    arr = [1, 2, 5, 15, 9, 12, 15, 47];
    const result = arr.find((ele)=> ele%2==0);  
    console.log(result);    // 2
    ```
---

### Q4. Explain join method in JS ?







CAT C - Objects & Prototypes
0. 
0. How do you create an object in JavaScript? How do you access object properties?
1. Shallow copy Vs Deep Copy
2. Different Types of Writing Object
    - Object values, entries
3. Prototypal Inheritance & Prototype Chain
4. OOPS Concept (Abstraction, Polymorphism, Inheritance, Class & Object)
5. new keyword




Array Methods (Most Imp)
map():          ✅
filter():       ✅ 
reduce():       ✅
forEach():      ✅
splice():       ✅
slice():        ✅
find():         ✅

join(): This method joins all elements of an array into a string and returns the string.


push(): This method adds one or more elements to the end of an array and returns the new length of the array.
pop(): This method removes the last element from an array and returns that element.
shift(): This method removes the first element from an array and returns that element. This method changes the length of the array.
unshift(): This method adds one or more elements to the beginning of an array and returns the new length of the array.
split(): The split() method is used to split a string into an array of substrings based on a specified separator. It does not change the original string.
sort(): This method sorts the elements of an array in place and returns the sorted array.

Array Methods (Less Imp)
indexOf() and lastIndexOf(): These methods return the index of the first/last occurrence of a specified value in an array.
some() and every(): These methods check if some/every element in the array passes a test implemented by the provided function.
concat(): This method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
includes(): This method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
reverse(): This method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
isArray(): This method determines whether the passed value is an Array.
reverse(): The reverse() method reverses the elements in an array in place. It modifies the original array and returns a reference to the reversed array.
