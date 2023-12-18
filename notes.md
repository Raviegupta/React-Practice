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