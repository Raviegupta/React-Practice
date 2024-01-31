// 1. JavaScript is a Synchronous Single Threaded Language. It has only 1 callstack & it can do only 1 thing at a time.
// 2. All the codes of JavaScript is executed inside the callstack & The Callstack is inside JS Engine which is inside browser which is the most remarkable creation in the history of mankind.
// 3. whenever any JavaScript is run, a GEC is created, which is put inside the callstack, in case of function invocation, FEC is created & put inside the callstack. The main job of callstack is execute whatever comes inside it, it doesn't wait for anything. TimeTide & JavaScript wait for none.🤣
// 4. along with JS engine, browser also have local storage, Timer, bluetooth access, geolocation access & lot of other superpowers. If we need to access these superpowers, we need to have some kind of connection between these & JS Engine. So, to access all these superpowers we need Web APIs (setTimeout(), DOM APIs, fetch(), localStorage, ). & the Heartbreaking 💔 is that these web APIs (setTimeout(), DOM APIs, fetch(), localStorage, even console) are not the part of JavaScript.
// 5. window is a Global Object. (browser gives JS engine the facility to access these superpowers through this window object)
// 6. As soon as the timer expires the callback function which is registered in web apis environment, needs to be executed. And as all the code in JS is executed inside the callstack. we need to send these callback functions inside the call stack. So these goes to callstack through Callback Queue
// 7. Event loop & Callback Queue :- Event loop is just like gate-keeper, it continouslly checks the callback Queue & puts any available callback into the callstack if it is empty. 
// 8. MicroTask Queue :- similar to Callback Queue, but has higher priority, whatever function comes inside Microtask Queue will be executed first & function inside Callback Queue will be executed later. All the Callback functions which come through promises & Mutation Observer will go inside MicroTask Queue. All other callback functions such as from DOM APIs, eventListeners goes inside callback Queue.
// 9. Starvation of Callback queue :- suppose a microtask creates a new microtask when its executed and it goes on like this, then the callback inside callback queue will never get a chance to execute. this is Starvation of the task of Callback queue.
// 10. Web APIs :- It's a browser superpower.



// Event loop is just like a gate keeper...  


// video was really content haevy. don't blink your eyes...




// -------------------------

Learnt these heavy concepts from Asynchronous JavaScript & EVENT LOOP from scratch class.

Thanks to 

1. JavaScript is a Synchronous Single Threaded Language. It has only 1 callstack & and it can do only 1 thing at a time.

2. All the codes of JavaScript are executed inside the callstack & the callstack is inside JS Engine which is inside the browser which is the most remarkable creation in the history of mankind. 💥💥

3. Whenever any JavaScript is run, a GEC is created, which is put inside the callstack, in case of a function invocation, FEC is created & put inside the callstack. The main job of callstack is to execute whatever comes inside it, it doesn't wait for anything. TimeTide & JavaScript wait for none. 😂😂

4. along with the JS engine, the browser also have local storage, Timer, bluetooth access, geolocation access & and a lot of other superpowers. If we need to access these superpowers, we need to have some connection between these and JS Engine. 

5. So, to access all these superpowers we need Web APIs (setTimeout(), DOM APIs, fetch(), localStorage, console). & the Heartbreaking 💔 is that these web APIs are not part of JavaScript.

6. Window is a Global Object. (browser gives JS engine the facility to access these superpowers through this window object)

7. As soon as the timer expires the callback function registered in the web APIs environment, needs to be executed. And as all the code in JS is executed inside the callstack. we need to send these callback functions inside the call stack. So these go to callstack through Callback Queue. 💥

8. Event loop & Callback Queue:- Event loop 💞 is just like gate-keeper, it continuously checks the callback Queue & puts any available callback into the callstack if it is empty. 

9. MicroTask Queue:- similar to Callback Queue, but has higher priority 🟩, whatever function comes inside MicroTask Queue will be executed first & function inside Callback Queue will be executed later. All the Callback functions which come through promises & MutationObserver will go inside the MicroTask Queue. All other callback functions such as from DOM APIs, eventListeners go inside the callback Queue.

10. Starvation of Callback queue:- suppose a microtask creates a new microtask when it's executed and it goes on like this, then the callback inside the callback queue will never get a chance to execute. this is Starvation of the task of the Callback queue.