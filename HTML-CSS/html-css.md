## HTML

### Q1. Define the list types in HTML?

- Ordered List :- to create a `numbered list`
- Unordered List :- to create a `bullet-point list`
- Description List :- create a list of terms and their descriptions.

  - `<dl>` description list
  - `<dt>` define term
  - `<dd>` describes each term

  ```
  <dl>
      <dt>Term 1</dt>
      <dd>Description 1</dd>
      <dt>Term 2</dt>
      <dd>Description 2</dd>
  </dl>
  ```

---

### Q2. Explain the importance of the `<lang>` attribute in an HTML document.

specify the `primary language of the content` in the document.

- Accessibility: Screen readers
- Translation and Localization: important for multiple languages websites.
- Search Engine Optimization

---

### Q3. What is the use of the alt attribute for images in HTML?

provide `alternative text` for an image. serves several important purposes:

- Accessibility :- Screen readers
- SEO:- Search engines use alternative text to understand the content of images.
- Broken Image Replacement

---

### Q4. Differentiate between an Ordered list and an Unordered list?

main difference:- how the items are visually represented

- ordered lists have numbered or lettered markers
- unordered lists have bullet points

---

### Q5. Explain the difference between block-level and inline elements in HTML.

Block-level Elements: create a block of content that `starts on a new line` and takes up the `full width` available.

- `<div>`, `<p>`, `<h1> to <h6>`, `<ul>`, `<ol>`, `<li>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`.
- used to structure the layout of a web page.

Inline Elements: do not start on a new line and only take up as much width as necessary.
- width & height property ❎,  padding and margin :- only left & right

- `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>`.
- used for small chunks of content within a block-level element.
- `<img>` is an ilne element but a special case.

---

### Q6. Why do we use a style sheet in HTML?

allow us to separate `styling` of a web page from its structure (HTML) and behavior (JavaScript).

- easier to manage and maintain the codebase.
- enhance the `maintainability`, `flexibility`, and `accessibility` of web pages.

---

### Q7. How do you create a hyperlink in HTML?

`<a>` (anchor) element with the `href` attribute.

---

### Q8. Describe how to use the `<fieldset>` and `<legend>` elements for grouping form elements.
`<fieldset>` :- used to group form elements together.   <br />
`legend` :- used as a caption or description for the `<fieldset>` should be the first child of the `<fieldset>` element.
```
<fieldset>
  <legend>Personal Information</legend>
  <!-- Form elements go here -->
</fieldset>

```

### Q9. What does display:inline-block do?
`display: inline-block;` :- combines the features of inline and block elements.
- Like inline elements, `inline-block elements do not start on a new line` and only take up as much width as necessary.
- Like block elements, `inline-block elements can have margins, padding,` and borders applied to them.
- when `inline is converted to inline-block `:- it will start to `take width & height & top, bottom padding & margin`. <br />
- useful when we want an element to have block-like features (such as margins and padding) while still flowing inline with other elements.

---

### Q10. Explain the significance of doctype in an HTML document.
The <!DOCTYPE> declaration gives instruction to the web browser about what version of HTML the page is written in. The doctype declaration must appear at the very beginning of an HTML document, before any other content.

---

### Q11. What is the role of the `<head>` tag in HTML?.
define the header section of a document, contains `metadata` about the document, such as its title, `links to stylesheets, scripts`, and other resources.

---

### Q12. What are the potential SEO impacts of improper use of HTML elements, and how can they be avoided?
Improper use of HTML elements can have various negative impacts on SEO, Missing or Incorrect `<title>` Tags, `meta` Tags, Improper use of heading, Using Non-Semantic Elements for Important Content, Broken Links and Incorrect URLs, Slow Page Load Times.

---

### Q. Describe the purpose of the `data-*` attribute in HTML5.
`data-* attribute` :- store custom data attributes directly in HTML elements. not visible to the user but can be used by scripts or stylesheets.    <br />

```
<button id="product" data-price="50" data-color="red">Buy Now</button>
```

---

## CSS

### Q1. Explain the difference between an id and a class in HTML and CSS.

id:- `uniquely identify a single element` on a page. `#` symbol   <br />
class:- categorize `multiple elements that share the same styling`. `.` symbol

---

### Q2. Describe the box model in CSS and its components.

how elements are rendered on a web by properties of their rectangular boxes. essentially a box that wraps around every HTML element.

- Content
- padding
- Border
- Margin

### Q3. What are CSS selectors? Give examples of the different types.

used to select and style elements in an HTML document.

1. Simple Selector :- Element Selector, Class Selector, ID Selector
2. Combinator Selector :- `Delhi Chennai Andhra Gujrat`
   - `Descendant selector (space)` :- all child weather own child, grand child, nested child...
   - `Child selector (>)` :- only main child.
   - `Adjacent sibling selector (+)` :- `directly` after another specific element. (first neighbour)
   - `General Sibling selector (~)` :- `all elements` that are next siblings of a specified element. (all neighbour)
3. Attribute Selector :- `[]` with the attribute name and value.

   - `a[target] {background-color: yellow;}`
   - `a[target="_blank"] {background-color: yellow;}`
   - `[title~="flower"] {border: 5px solid blue;}` :- contains `exact` in a space-separated list of words
   - `[title="flower"] {border: 5px solid blue;}` :- `starts with` `exact` value.
     - `[attribute|="top"]` :-  `starts with` `exact` value. `hypen allowed, space not`
     - `[attribute^="value"]` :- `starts with` `exact` value. `hypen, space allowed`
     - `[attribute$="value"]` :- `ends with` `exact` value. `hypen, space allowed`
     - `[attribute*="value"]` :- `contains` `exact` value. `hypen, space allowed`
     - `input[type="text"] { }`

4. Pseudo-class selectors :- `special state` of an element.
   - `a:link`, `a:visited`, `a:hover`, `a:active`
   - `:first-child` :- first child of any element.
   - `p i:first-child` :- `first <i> element in all <p> elements`:
   - `p:first-child i` :- all `<i>` elements in `<p>` elements that are the first child of any element:
   - `:last-child` :- Selects every `<p>` elements that is the last child of its parent
5. Pseudo-elements selectors :- `specified parts` of an element. ex:- Style the `first letter`, or `line`, of an element
   - `p::first-letter`, `p::first-line`,
   - `::before` :- insert some content before the content of an element. ex:- `h1::before {content: 'Ravie'}`
   - `::after` :-
   - `::marker` :- selects the markers of list items.`::marker { color: red; font-size: 50px; }`
   - `::selection` :- matches the portion of an element that is selected by a user. ::marker `{ color: red; font-size: 50px; }`

---

### Q4. What are the differences between visibility: hidden; and display: none;?

`visibility: hidden;` :- hides an element from view while preserving its space in the layout.
`display: none;` :- completely removes an element from the layout.

---

### Q5. Describe the flex-grow, flex-shrink, and flex-basis properties in CSS Flexbox.

used to control how flex items grow, shrink, and are initially sized within a flex container. <br />

- `flex-grow`: how much a flex item should grow relative to the other flex items in the same container when there is extra space available. default: 0,
- `flex-shrink`: how much a flex item should shrink relative to the other flex items in the same container when there is not enough space available. default: 1,
- `flex-basis`: specifies the initial size of a flex item before any remaining space is distributed according to the flex-grow and flex-shrink properties.
- Flex is shorthand for grow, shrink, and basis when all put together. It defaults to 0 (grow) 1 (shrink) and auto (basis).

---

### Q6. Explain the use of the position property in CSS with examples. [Practical]

5 - static, relative, fixed, absolute, sticky
`static`: default value. positioned according to the normal flow of the document. positioning is not affected by the top, right, bottom, or left properties. <br />
`relative` : positioned `relative to their normal position` in the document flow. can use top, right, bottom, left properties to move the element from its normal position. <br />
`absolute` : removed from the normal document flow and positioned `relative to the nearest positioned ancestor`. <br />
`fixed` : removed from the normal document flow and positioned `relative to the viewport`. (means they remain in the same position even when the page is scrolled.) <br />
`sticky` : positioned `based on the user's scroll position`. <br /> - They behave like relative positioning until they reach a specified offset from the top of the viewport, at which point they become fixed until the user scrolls back to that point.

---

### Q7. Explain the concept of CSS specificity and how it is calculated.

CSS specificity is a `set of rules` used to determine `which CSS styles are applied to an element when multiple conflicting styles are present`.
calculated using four components:

1. Inline Styles: 1000
2. ID Selectors: 100
3. Class Selectors, Attribute Selectors, and Pseudo-classes: 10
4. Type Selectors and Pseudo-elements: 1 <br>
   calculation method <br>
   - Start with a specificity of 0.
   - For each Inline selector, add 1000 to the specificity.
   - For each ID selector, add 100 to the specificity.
   - For each class selector, attribute selector, or pseudo-class, add 10 to the specificity.
   - For each type selector or pseudo-element, add 1 to the specificity.
     ex:- `div#myId.myClass` has a specificity of 111 (1 ID selector, 1 class selector, and 1 type selector).

---

### Q8. Explain !important keyword?

!important rule is a `special case that overrides specificity`.

- When !important is added to a style, it takes `precedence over all other declarations, regardless of their specificity`.

---

### Q9. What is the difference between margin and padding?

`margin` :- `space outside an element's border`. transparent areas that separate an element from other elements in the layout.
`padding` :- `space between the element's content and its border`. transparent areas that separate an element from other elements in the layout.

---

### Q10. How do you make a text input field read-only in HTML?

To make a `text input field read-only` in HTML, add the `readonly attribute` to the `<input>` element. This attribute prevents users from editing the content of the input field, but they can still select and copy the text. <br />
`<input type="text" value="ReadOnlyText" readonly>`

---



---

## Practical Questions
### Q1. How to center a div?
- `flex`:- .parent{ height: 100vh; `display: flex; justify-content: center; align-items: center;` }
- `grid`:- .parent{ height: 100vh; `display: grid; place-items: center;` }
- `positions` :- .parent{ height: 100vh; position: relative; }
                .child{ width: 100px; height: 100px; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; }
- `positions` :- 
.child{ width: 100px; height: 100px; position: absolute; top: 0; left: 0; transform: translate(-50%, -50%); }

---

### Q2. How do pseudo-elements (::before, ::after) work in CSS?
allow us to insert content before or after an element's content without having to add extra HTML.
- used to add `decorative elements`, such as `icons or text`, or to apply styles to specific parts of an element.
- `h1::before {content: 'Ravie 💥'}`
- `h1::after {content: '💝'}`

---

### Q3. Create a HTML form?
```
<style>
  body { font-family: Arial, sans-serif; }
  form { max-width: 400px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; }
  label { display: block; margin-bottom: 5px; }
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"],
  input[type="submit"] {
    width: 100%; padding: 10px; margin-bottom: 10px; box-sizing: border-box;
  }
</style>

<form action="#" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <label for="mobile">Mobile Number:</label>
  <input type="tel" id="mobile" name="mobile" required>

  <label>Gender:</label>
  <label><input type="radio" name="gender" value="male" required> Male</label>
  <label><input type="radio" name="gender" value="female" required> Female</label>

  <label><input type="checkbox" name="terms" required> I accept the terms and conditions</label>

  <input type="submit" value="Submit">
</form>
```

---

### Q4. Show how display flex, flex wrap, justify content work?


---
---
## Extra Important Questions
Q. What are Self-Closing Tag?   <br />
They not have any content or do not require closing tags ex :- `<img>`, `<br>`, and `<input>`.

Q. void elements in HTML?   <br />
Self Closing Tags, void elements, empty elements are the same.

Q. What is the importance of name="viewport" content="width=device-width, initial-scale=1.0" charset="UTF-8" ?  <br />
instructions for how the webpage should fit on different screens, like phones, tablets, or computers

Q. Forms and Input Tags.    <br />
`<form>, <input>, <textarea>, <button>`,    <br />
`<select>` :- Defines a drop-down list;     `<option>`:- Defines an option in a drop-down list  <br />
`<label>` :- Defines a label for an `<input>` element   <br />
`<fieldset>` :- Groups related elements in a form   <br />
`<legend>` :- Defines a caption for a      element  <br />

Q. What are Attributes. <br />
extra information added to HTML elements

Q. tags associated with table in HTML.  <br />
`<table>, <caption>, <th>, <td>, <thead>, <tbody>, <tfoot>`
