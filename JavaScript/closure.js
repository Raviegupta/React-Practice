const sum = (a) => {
    console.log('hello')
    let c=4;

    return function(b) {
        return a+b+c;
    }
}

const closure = sum(2);
console.log(closure(5));      // closure function k liye a and c hi lexical scope h


// ex-2
const sum2 = (a,b,c) => {

    return {
        getSumTwo: function() {
            return a+b;
        },
        getSumThree: function() {
            return a+b+c;
        }
    }
}

const closure2 = sum2(5,7,9);
console.log(closure2.getSumTwo())
console.log(closure2.getSumThree())

const closure3 = sum2(1,2,3);
console.log(closure3.getSumTwo())
console.log(closure3.getSumThree())