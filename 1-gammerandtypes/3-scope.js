// var x=12

// function scope() {
//     var x=33
//     console.log(x);
// }
// scope()//33
// console.log(x); //12

var x =12

function scope() {
    var x=33;
    if (true){
        var x=45;
        console.log(x);
    }
    console.log(x)
}

scope()
console.log(x);

/*
variable    obeys fumctional scope  obes block scope    can be mutated (changd after initializaton)
var             x                       -                   x
let             x                       x                   x
const           x                       x                   -
*/
