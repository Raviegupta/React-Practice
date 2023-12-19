// Memoization is an optimization technique that can be used to reduce time-consuming calculations 
// by saving previous input to something called cache and returning the result from it.


const calc = (n) => {
    let sum = 0;
    for(let i = 0; i<=n; i++) {
        sum += i;
    }
    return sum;
}

const memoize=(fun)=> {
    let cache={}
    return function(...args) {
        let n=args[0];
        if(n in cache) {
            console.log(cache)
            return cache[n]
        }else {
            console.log('calculating first time')
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time()
const effecient =  memoize(calc);
console.log(effecient(5))
console.timeEnd()


console.time()
console.log(effecient(6))
console.timeEnd()

console.time()
console.log(effecient(5))
console.timeEnd()