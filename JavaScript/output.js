function outer() {
    let a = 10;
    setTimeout(function inner() {
        console.log(a);
    }, 1000);
    a = 20;
}
outer();

// ------------------------

var a = 5;
function outer() {
    var a = 10;
    function inner() {
      a = 20;
        console.log('inner '+ a);   // 20
    }
    inner();
    console.log('outer ' + a);      // 20
}
outer();
console.log('global ' + a);          // 5


// ------------------

var a = 5;
function outer() {
    var a = 10;
    function inner() {
        console.log(a);         // 10
    }
    inner();
    console.log(a);             // 10
}
console.log(a);                 // 5
outer();
console.log(a);                 // 5


// ---------------