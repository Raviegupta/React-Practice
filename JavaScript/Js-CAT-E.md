### Q1. What is event propagation in JavaScript? explain event capturing and bubbling.

Event propagation in JavaScript refers to the mechanism by which events propagate through the DOM tree, from the target element to the root of the document or vice versa. There are two phases of event propagation: capturing phase and bubbling phase. <br />

1. `Event Capturing` (Trickling):

   - During the capturing phase, the event is captured by the outermost element and propagated to the target element.
   - This means that the event starts from the window object and moves down the DOM tree to the target element.
   - Event listeners attached during this phase are called before the event reaches the target element.

2. `Event Bubbling`:

   - After the event reaches the target element, it enters the bubbling phase.
   - During this phase, the event bubbles up from the target element to the window object.
   - Event listeners attached during this phase are called after the event reaches the target element.

   <img src="./images/event-bubbling-and-capturing.png" alt="event-bubbling-and-capturing" width=''> <br />

3. Example: <br />

   ```
   <style>
       #outer{ border: 2px solid red; padding: 30px; background-color: rgb(247, 188, 167); }
       #inner{ border: 2px solid blue; padding: 20px; background-color: rgb(154, 250, 250); }
   </style>

   <div id="outer">
     <div id="inner">Click me</div>
   </div>

   <script>
     document.getElementById("outer").addEventListener(
       "click",
       function () {
         console.log("Outer div clicked (capturing phase)");
       },
       true
     ); // true indicates capturing phase

     document.getElementById("inner").addEventListener("click", function () {
       console.log("Inner div clicked (bubbling phase)");
     });
   </script>
   ```

#### How do you add an event listener that only listens during the capturing phase?

To add an event listener that listens during the capturing phase, we can use the addEventListener method and set the third parameter useCapture to true. Here's an example:
`element.addEventListener('click', myFunction, true);`

---

### Q2. How can you stop event propagation in JavaScript?

we can stop event propagation using the `stopPropagation()` method. This method is available on the event object and can be called within an event handler to prevent the event from propagating further through the DOM tree.

```
element.addEventListener('click', function(event) {
    event.stopPropagation();
    // Other event handling code
});
```

---

### Q3. What is the target of an event in event propagation?

In event propagation, the `target of an event` refers to the element on which `the event was originally triggered`. When an event occurs on a particular element, it first triggers any event handlers attached to that element. Then, the event propagates through the DOM tree, triggering event handlers on ancestor elements through event bubbling or capturing.

During this propagation process, the event.target property always refers to the element on which the event was originally triggered, even if the event is currently being processed on an ancestor element due to event bubbling. This allows you to identify the specific element that triggered the event, which can be useful for handling the event appropriately based on its origin.

---

### Q4. What is event delegation? How does event delegation work?

Event delegation is a technique in JavaScript where a single event listener is attached to a parent element, rather than attaching event listeners to multiple child elements. This technique `leverages the concept of event bubbling`, where events triggered on nested child elements will bubble up through their ancestors in the DOM tree. <br />

When an event occurs on a child element, such as a click event, it bubbles up through the DOM tree. If a parent element has an event listener for that type of event, the event will trigger the listener on the parent element. By using event delegation, we can listen for events on a parent element and then determine which child element triggered the event based on the `event.target` property. <br />

Event delegation is particularly useful when you have a large number of child elements that need the same event handling logic. Instead of attaching event listeners to each child element, we can attach a single event listener to a common parent element and use event delegation to handle events for all child elements efficiently.

```
  <style>
    ul { padding: 0; list-style-type: none; }
    li { padding: 10px; margin-bottom: 5px; background-color: lightblue; cursor: pointer; }
  </style>

  <ul id="category">
    <li id="laptop">laptops</li>
    <li id="camera">Cameras</li>
    <li id="mobile">Mobiles</li>
    <li id="shoes">Shoes</li>
  </ul>

  <script>
    document.querySelector("#category").addEventListener("click", (event) => {
      if (event.target.tagName == "LI") {
        console.log('Clicked on item: ' + event.target.innerText);
        // window.location.href = "/" + event.target.id;
      }
    });
  </script>
```

---

### Q5. What is the DOM? How the DOM really works?

The Document Object Model (DOM) is a programming `interface` for web documents. It represents the structure of a document as a `tree of objects`, where each object corresponds to a part of the document, such as elements, attributes, and text. <br />

The DOM works by parsing an HTML or XML document and creating a hierarchical tree of objects that represent the document's structure. This tree is then used by scripts to interact with the document, such as accessing or modifying its content, structure, and style. <br />

The DOM provides a way for scripts to dynamically update and interact with the content of a web page, allowing for rich, interactive web applications. It also provides a standardized way for scripts and web browsers to interact, ensuring compatibility across different browsers and platforms.

<img src="./images/what-is-DOM.png" alt="what-is-DOM" width=''> <br />

<img src="./images/DOM-API.png" alt="DOM-API" width=''> <br />

---

### Q6. How do you select, create, append, and remove elements in the DOM dynamically?

1. We can `select elements` using methods like

   - getElementById
   - getElementsByClassName
   - getElementsByTagName
   - querySelector
   - querySelectorAll <br />

   ```
   // Select element by id
   const element = document.getElementById('myElementId');

   // Select elements by class name (returns HTMLCollection, means LIVE Collection, if DOM changes, this collection automatically updated)
   const elements = document.getElementsByClassName('myClassName');

   // Select elements by tag name (returns HTMLCollection, means LIVE Collection, if DOM changes, this collection automatically updated)
   const allButtons = document.getElementsByTagName('button');

   // Select the first element that matches a CSS selector
   const element = document.querySelector('.mySelector');

   // Select all elements that match a CSS selector
   const allSections = document.querySelectorAll('.section');   // returns NodeList
   ```

2. `Creating Elements`: We can create new elements using the `createElement` method and set their properties using the setAttribute method or by directly assigning values to their properties.

   ```
   // Create a new element
   const newElement = document.createElement('div');

   // Set attributes
   newElement.setAttribute('id', 'newElementId');
   newElement.setAttribute('class', 'newElementClass');

   // add class
   newElement.classList.add('message')

   // Set properties
   newElement.textContent = 'Hello, world!';

   newElement.innerHTMl = 'Hello, world! <button class='btn'></button>'
   ```

3. `Appending Elements`: We can append new elements to the DOM using methods like `appendChild` or `insertBefore`.

   ```
   // Append a new element to an existing element
   parentElement.appendChild(newElement);

   // Insert a new element before an existing element
   parentElement.insertBefore(newElement, existingElement);

   // Insert a specified element as the first child of another element. (move)
   parentElement.prepend(newElement)

   // Insert the new element as the last child of the parent element (move)
   parentElement.append(newElement);

   parentElement.append(newElement.cloneNode(true));    // creates a new node that is a duplicate of the original node

   parentElement.before(newElemnt)
   parentElement.after(newElemnt)
   ```

4. `Removing Elements`: We can remove elements from the DOM using the `removeChild` method or `remove` method.

   ```
   // Remove an element
   parentElement.removeChild(newElemnt);

   document.querySelector('.btn')
   .addEventListener('click', function () {
    newElemnt.remove();                     // remove() is latest
   })
   ```

---

### Q7. How do you add or remove classes from an element using JavaScript?
To add or remove classes from an element using JavaScript, you can use the classList property.

1. `Adding a Class`: Use the `classList.add()` method 
    ```
    // Select the element
    const element = document.getElementById('myElement');

    // Add a class
    element.classList.add('myClass');
    ```

2. `Removing a Class`: Use the `classList.remove()` method to remove a class from an element.
    ```
    // Remove a class
    element.classList.remove('myClass');
    ```

3. `Toggling a Class`: Use the `classList.toggle()` method to toggle a class on an element. If the class is present, it will be removed. If it's not present, it will be added.
    ```
    // Toggle a class
    element.classList.toggle('myClass');
    ```

4. `classList.contains()`: Checks if the element has a specific class. Returns `true if the class exists`, otherwise false.
    ```
    if (element.classList.contains('myClass')) {
      // write logic here
    }
    ```

---

### Q8. How do we use styles, and attributes in the DOM dynamically?
- Manipulating Styles and attributes:

    ```
    <style>
      :root { --color-primary:beige; }
      body{ background-color: var(--color-primary); }
      ul { padding: 0; list-style-type: none; }
      li { padding: 10px; margin-bottom: 5px; background-color: lightblue; cursor: pointer; }
    </style>

    <img class="image" src="./images/DOM-API.png" alt="imp-array-methods" width="600" designer="ravie" data-version-number='3.0' />
    <ul id="category">
      <li id="laptop">laptops</li>
      <li id="mobile">Mobiles</li>
      <li id="shoes">Shoes</li>
    </ul>


    <script>
      const cat = document.getElementById("category");    // Get a reference to the element

      // Styles (set as inline styles)
      cat.style.backgroundColor = "#37383d";
      cat.style.padding = "10px";

      console.log(cat.style.backgroundColor);
      console.log(cat.style.padding);
      console.log(getComputedStyle(cat))            // To get other than inline styles, we can use this
      console.log(getComputedStyle(cat).color);
      console.log(getComputedStyle(cat).height);

      // manipulating height dynamically
      cat.style.height = Number.parseFloat(getComputedStyle(cat).height) + 40 + "px";

      // CHANGING ROOT PROPERTY
      document.documentElement.style.setProperty('--color-primary', 'orangered')

      // Attributes  (read)
      const image = document.querySelector('.image')
      console.log(image.alt)
      console.log(image.src)
      console.log(image.className)
      
      image.alt = 'Beautiful minimalist image'      // update/changing attribute dynamically
      console.log(image.alt)

      // Non-Standard attributes
      console.log(image.designer)                   // undefined
      console.log(image.getAttribute('designer'))   // special way

      image.setAttribute('company', 'Web Development')
      console.log(image.getAttribute('company')) 
      console.log(image.src)  
      console.log(image.getAttribute('src'))        // relative

      // data-attribute (special kind of attribute that starts with word data)
      console.log(image.dataset.versionNumber)
    </script>
    ```
---

### Q9. What is a data-attribute in HTML? how to read them from javascript?
- Data attributes in HTML allow us to store extra information on standard, semantic HTML elements. They are prefixed with `data-` and can be accessed and manipulated using JavaScript.   <br />

    ```
      <img class="image" src="./images/DOM-API.png" alt="imp-array-methods" width="600" data-version-number='3.0' />

      const image = document.querySelector('.image')

      // read
      console.log(image.dataset.versionNumber)
      console.log(image.getAttribute('data-version-number'))      // another way to read

      // set dynamically
      image.setAttribute('data-custom', 'hello world')

    ```

---

### Q10. What is the difference between innerHTML, textContent and innerText? 
1. `innerHTML`: Allows us to set or get the HTML content inside an element. When we use innerHTML to set content, it treats the content as actual HTML and parses any HTML tags.
This means we can insert new elements, including script elements, which will be executed when inserted.
    ```
    <div class="div"></div>

    <script>
      const div = document.querySelector(".div");
      div.innerHTML = `<p>Lorem, ipsum dolor.</p>`;
      console.log(div);
    </script>
    ```

2. `textContent`: Sets or returns the text content of the specified node, It treats the content `as plain text` and `does not parse HTML`. It will escape any HTML tags, displaying them as text.
    ```
    <script>
      const div = document.querySelector(".div");
      div.textContent = `<p>Lorem, ipsum dolor.</p>`;
    </script>
    ```

3. `innerText`: Similar to textContent, it sets or returns the text content of the specified node. However, `it considers the CSS styling when rendering the text`.  <br />

In summary, innerHTML is used for setting or getting HTML content, textContent is used for setting or getting text content as plain text, and innerText is used for setting or getting text content considering CSS styling.

---

### Q11. How do you prevent the default behavior of an event?
To prevent the default behavior of an event in JavaScript, we can use the `preventDefault()` method. This method is `available on the event object that is passed to event handlers`. Here's how we can use it:
```
element.addEventListener('click', function(event) {
  event.preventDefault();
});
```

---
