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


---

#### Q. Can we use Hooks inside class component ?
No

--


## Q. Why we use useEffect hooks in react ?
In React, the useEffect hook is used to perform side effects in functional components. 
Side effects in React typically include **data fetching**, **subscriptions**, **manual DOM manipulations**, or any other operation that involves interacting with the outside world.
used as **lifecycle methods** in functional components.

Note:- useEeffect kab kab chalega ? => jab bi component banegi, update hogi, koi bi state update hogi, props ho, 

Here are some key reasons why useEffect is important:

1. #### Handling Side Effects:
    -  such as fetching data from an API.
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