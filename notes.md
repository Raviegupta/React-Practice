### Q. Why we use hooks in react ?
In React, Hooks are special functions that allow functional components to have state and side effects.
Before the introduction of hooks, state and lifecycle methods were primarily used in class components.
Hooks provide a more concise and expressive way to manage state, side effects, and other React features in functional components.

Here are some key reasons why hooks are used in React:

1. #### State Management in Functional Components:
    - The useState hook allows us to declare state variables and update them in a functional component.
2. #### Side Effects:
    - The useEffect hook enables functional components to perform side effects, such as data fetching, subscriptions, or manual DOM manipulations.
    - It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
3. #### Code Reusability:
4. #### Easy to Learn and Use:
5. #### Compatibility with Functional Programming:



#### Q. Can we use Hooks inside class component ?
No

---


## Q. Why we use useEffect hooks in react ?
In React, the useEffect hook is used to perform side effects in functional components. 
Side effects in React typically include **data fetching**, **subscriptions**, **manual DOM manipulations**, or any other operation that involves interacting with the outside world.
used as **lifecycle methods** in functional components.

Note:- useEeffect kab kab chalega ? => jab bi component banegi, update hogi, koi bi state update hogi, props ho, 

Here are some key reasons why useEffect is important:

1. #### Handling Side Effects:
    - such as fetching data from an API.
2. #### Lifecycle Methods Replacement: 
    - In class components, lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount were used to manage side effects. useEffect combines the functionality of these lifecycle methods in functional components.
3. #### Avoiding Infinite Loops:
    - useEffect can be used to prevent infinite rendering loops by allowing you to specify dependencies. The effect will only re-run if the values in the dependency array change.
4. #### Asynchronous Operations: 
    - Since useEffect supports asynchronous operations, it's well-suited for handling tasks like data fetching, where you might need to wait for data to be retrieved before updating the component's state.

    ```
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchDataFromApi();
            // Update state with the fetched data
        };

    fetchData();
    }, []);
    ```
5. #### Cleanup Operations: (useEffect k first argument i.e callback fun me ek function de sakte h, isi ko cleanup function bolte h)
    - We can return a cleanup function from useEffect to perform cleanup operations, such as unsubscribing from subscriptions or releasing resources or stopping the timer when the component is unmounted.
    ex:- socket.connect() me socket.disconnect function return karna
         setInterval me clearInterval() function return karna

---

## Q. Why we use useState hooks in react ?
In React, the useState hook is used to add state management to functional components. Before the introduction of hooks, state was primarily managed in class components using the `this.state` and `this.setState` syntax. The useState hook allows functional components to have local state, making it easier to manage and update data within the component.

Here are some reasons why useState is used:

1. #### Stateful Logic in Functional Components: 
    - With useState, functional components can now maintain and update their state, allowing for more complex and dynamic behavior.
      ```
        import React, { useState } from 'react';

        const ExampleComponent = () => {
        // Declare a state variable named "count" with an initial value of 0
        const [count, setCount] = useState(0);

        // Use the state variable in the component
        return (
            <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            </div>
        );
        };
      ```
2. #### Functional Updates:
    - useState allows us to pass a function to setCount that receives the current state and returns the new state. This is especially useful when the new state depends on the current state.
    ```
    const [count, setCount] = useState(0);

    // Functional update to increment the count
    const increment = () => {
    setCount((prevCount) => prevCount + 1);
    };
    ```
3. #### Multiple State Variables:
    - We can use useState multiple times within a component to manage multiple independent pieces of state. This helps in organizing and isolating different aspects of the component's state.
    ```
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    ```
4. #### Initialization with Props:
    - We can initialize state based on props, allowing the component to be more flexible and respond to external changes.

---

Syntax Similarity b/w useState & useReducer 
```
useState  :- const [BasicState, function] = useState(initialState)
useReducer:- const [state,      dispatch] = useReducer(reducer, {count: 0, color: true }) 
                                                                 like initial value of state
```
     
Note:- dispatch func `action` dispatch karega & state ko update karega, hume dispatch func ko ek unique identity deni padegi taki wo particular state ko update kare

```
const reducer = (state, action) => {
    if(action.type === 'inc') {
        return {
            ...state,
            count: state.count+1
        }
    }
    return state;    // for safety jab koi return ni hoga to undefined return na kare isliye `return state` laga dete h
}
```
Note:- Always remember, ye reducer function kuch na kuch return karega, if we have not returned anything then it will return undefined

---

## Q. What is useReducer Hook in react ?
The useReducer hook in React is a `state management hook` that is an alternative to the more commonly used useState hook, especially when dealing with complex state logic in our components. It is inspired by the Redux library's approach to state management.

basic overview of how useReducer works:

1. #### Reducer Function:
    - The key concept of useReducer is the "reducer" function.
    - This function takes the current state and an action as arguments and returns the new state based on that action. 
    - The reducer function follows the signature: (state, action) => newState
2. #### Dispatch Function:
    - The first element is the `current state`, and the second element is a dispatch function.
    - The dispatch function is used to dispatch actions to the reducer, triggering state updates.
3. #### Usage:
    - When an action is dispatched using dispatch(action), the reducer function is called with the current state and the action. The reducer determines how the state should change based on the action and returns the new state.

## Q. Why we use useReducer hooks in react ?
The useReducer hook in React is used for managing complex state logic in functional components. While the more commonly used useState hook is suitable for managing simpler state, useReducer becomes beneficial when dealing with state logic that involves multiple sub-values or when the next state depends on the previous state.

Here are some key reasons why useReducer Hook is important:

1. #### Complex State Logic:
2. #### State Dependencies:
    - When the next state depends on the previous state or when updating one part of the state relies on the values of other parts, useReducer allows you to express this dependency more explicitly within the reducer function.
3. #### Avoiding Prop Drilling:
    - In certain cases, when state management becomes more complex, prop drilling (passing down state through multiple layers of components) might become cumbersome. useReducer provides a way to manage state at a higher level in the component tree without passing it down explicitly.
    
---

What is memoization ?
Memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous input to something called cache and returning the result from it.

- Memoization can be applied to various types of functions, especially those that involve repetitive or expensive computations. It's a powerful optimization technique that can significantly improve the performance of certain algorithms or functions.

## Q. Why we use useMemo Hook in react ?
In React, the useMemo hook is used to memoize the result of a function so that the function is not re-executed `unless its dependencies have changed`. This can be particularly useful for optimizing performance in situations where a function's result is computationally expensive to calculate and its dependencies are static or change infrequently.

Here are some reasons why you might use the useMemo hook in React:

1. #### Performance Optimization:
2. #### Avoiding Unnecessary Calculations:
3. #### Preventing Unnecessary Re-renders:
4. #### Complex Computations or Data Processing:

---

### useMemo Vs useCallback
Mostly they are similar, The Main Difference is that 
- useMemo returns a `memoized value`
- useCallback returns `memoized function`

## Q. Why we use useCallback Hook in react ?
The useCallback hook in React is used to memoize callbacks in functional components. It is particularly useful in scenarios where you need to optimize performance by `preventing unnecessary re-renders of child components` that receive callbacks as props.

Here are some reasons why you might use the useCallback hook in React:

1. #### Preventing Unnecessary Re-renders:
- When passing callbacks as props to child components, using useCallback to memoize those callbacks can prevent unnecessary re-renders of child components.
- This is especially important when the callbacks are created in the parent component's render function, as new instances of the callback functions would be created on every render without memoization.
2. #### Optimizing Performance:

---

## What is context API ?
In React, the Context API is a feature that allows us to share data between components without having to explicitly pass props through every level of the component tree.
- It's designed to solve the problem of "prop drilling," where we have to pass data through multiple layers of components that don't need the data directly but are required to pass it down to child components.

The Context API consists of two main parts:

1. #### Context Object:
- The context object is created using the `createContext` function from the React module. It returns a `Provider` and a `Consumer`.
- The `Provider` is used to wrap the part of the component tree where you want to make the context available.
- The `Consumer` is used within components to access the context value provided by the nearest Provider in the component tree.
2. #### Provider and Consumer Components:
- The Provider component accepts a value prop, which is the data you want to make available to descendant components.

The Context API is particularly useful for managing global state, theme data, user authentication, or any data that needs to be accessed by many components in a React application without manually passing props down through every level of the component tree.

---

### Q. What is propdrilling in react ? 
Prop drilling in React refers to the process of passing data from a component at the top of the component tree down to a component at the bottom of the tree through multiple intermediate components that do not need the data themselves but are required to pass it along.

Here are some common approaches to avoid prop drilling:

1. #### Use Context API:
2. #### Use State Management Libraries: 
- State management libraries like `Redux`, `MobX`, or `Recoil` provide a centralized store for managing application state. Components can access the store directly to retrieve and update state without the need to pass it through props.
3. #### Higher-Order Components (HOCs) or Render Props:
- `Higher-Order Components` and `Render Props` are patterns that allow us to encapsulate logic for accessing and manipulating data in a reusable component. This can help avoid prop drilling by providing a clean interface for components to access data.

---

## Q. What is React Router? How we achieve Routing in React ?
React Router is a `popular routing library` for React that allows us to handle `navigation and routing` in a React application. It provides a way to declare routes, map them to specific components, and handle navigation between different parts of the application without a full page reload.

Here's a brief overview of how React Router works and how we can achieve routing in a React application using React Router:

1. #### Installation: 
    ```
    using npm:     npm install react-router-dom
    using yarn:    yarn add react-router-dom
    ```

2. #### Route Component:
The Route component is a key building block of React Router. It renders some UI when a location matches the route's path.
```
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
};
```
3. #### Link Component:
The Link component is used to navigate between different routes in our application. It renders an anchor tag (`<a>`) with the appropriate href attribute.
```
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

```
4. #### Route Parameters:
 route parameters allow us to define dynamic parts of a URL that can be accessed as parameters in our components. This is useful when we have routes that need to handle variable data, such as user IDs, product slugs, or any other dynamic segment of a URL.

 - Route parameters are specified in the path of a Route component by prefixing a part of the path with a colon (:) followed by the parameter name.
 ```
 <Route path="/users/:userId" component={UserDetails} />
 ```

 - `Accessing Route Parameters:`
    - Inside the component rendered by the Route, we can access the route parameters using the `match` prop passed by React Router.
    - The match prop contains information about how the Route matched the URL, including the `params` object, which contains the route parameters.
    ```
    import React from 'react';
    import { useParams } from 'react-router-dom';

    const UserDetails = () => {
    const { userId } = useParams();
    // userId contains the value of the route parameter
    return <div>User ID: {userId}</div>;
    };

    export default UserDetails;
    ```
    Note:- In this example, `useParams` is a `hook` provided by React Router that allows us to access the route parameters from within a functional component.

 -  `Dynamic URLs:`
    - When navigating to a route with parameters, you can provide the dynamic values as part of the URL.
    ```
    import { Link } from 'react-router-dom';

    const UserList = () => {
    return (
        <ul>
            <li><Link to="/users/1">User 1</Link></li>
            <li><Link to="/users/2">User 2</Link></li>
        </ul>
    );
    };

    export default UserList;
    ```
    - In this example, clicking on the Link components will navigate to URLs like /users/1 and /users/2, where 1 and 2 are the dynamic values for the userId parameter.

- Multiple Route Parameters:
We can define multiple route parameters in a single path by separating them with slashes.
```
<Route path="/users/:userId/posts/:postId" component={PostDetails} />
```
In this example, the URL pattern `/users/:userId/posts/:postId` defines two route parameters: `userId` and `postId`.

---

## Q. Forms in React ?
In React, forms are used to collect user input. React provides a way to manage form state and handle form submissions using `controlled components`

```
import React, { useState } from 'react'

const ReactForm1 = () => {

    const [name, setName] = useState(0);
    const [framework, setFramework ] = useState('');
    const [TnC, setTnC] = useState(false);

    const handleData=(event)=> {
        event.preventDefault();
        console.warn(name, framework, TnC);
    }

  return (
    <div>
        <h1>React Form in practice:</h1>

        <form action="" onSubmit={handleData}>
            <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/> <br />
            
            <select name="" id="" onChange={(e)=>setFramework(e.target.value)}>
                <option value="Angular Js">Angular</option>
                <option value="React Js">React</option>
                <option value="Vue Js">Vue</option>
            </select> <br />

            <input type="checkbox" name="" id="" onChange={(e)=>setTnC(e.target.checked)} /><span>Agree with terms n conditions</span> <br />

            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default ReactForm1
```

## Q.Explain controlled and uncontrolled components?
In React, controlled and uncontrolled components refer to two different approaches for managing form elements and their state.

1. Controlled Components:
- In a controlled component, the form data is handled by React component. (through the use of hooks such as the useState hook.)
- Changes to the form element are handled by `event handlers` (e.g., `onChange` for input elements), which update the component state with the new value.

2. Uncontrolled Components
- Form data is handled by the Document Object Model (DOM) rather than by React. The DOM maintains the state of form data and updates it based on user input.
- Uncontrolled components are typically used when we want to integrate React with non-React code
- Since the form data is managed by the DOM, you can access the `current` value of the form element using a `ref` after the component has been rendered.
```
import React, { useRef } from 'react'

const UseRefUncontrolled = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        alert(`Input value: ${inputRef.current.value}`);
        console.log(inputRef.current)
        console.log(inputRef.current.value);
        console.log(inputRef.current.type);
        console.log(inputRef.current.placeholder);

        inputRef.current.style.backgroundColor = 'red';
    } 

  return (
    <div>
        <h1>Uncontrolled Component: using useRef</h1>

        <input type="text" ref={inputRef} name="" id="" placeholder='type here' />
        <button onClick={handleClick}>Get Value</button>
    </div>
  )
}

export default UseRefUncontrolled
```

### Q. what is useRef hook in react ?
In React, the useRef hook is used to create a mutable reference to a DOM element or a value that persists across renders without causing a re-render when its value changes.

- It returns a mutable ref object whose `.current` property is initialized with the passed argument (initialValue).
- It can be used to access a DOM element directly.