/*
SWITCH
Switch statements helps us choose between several options for a variable and a default
Four main parts to a switch statement
switch, the argument big evaluated
case, one of the options for the variable to be
break, this breaks us out of the switch statement once we hit the case
*/

var friend="Rishi";

switch (friend) {
    case "Rishi":
        console.log('Hey Rishi, Ninetail is an awesome Pokemon!');
        break;
    case "Diego":
        console.log('Hey Diego, I like Kirby.')
        break;
    default:
        console.log(`I'm sorry ${friend}, but do I know you?`)
}


var yep= -8;

switch (true) {
    case (yep<0 && yep>-10):
        console.log('worked');
        break;
    case (yep>0):
        console.log('worked!');
        break;
    default:
        console.log("didn't work")
}

/*****************************************************/
                //Ternay
/*****************************************************/
//What is a ternay? a great ay to write a single line for an if/ if else statement

let x=6;

(x>0) ? console.log("yes") : console.log("no")

if(x>0) {
    console.log('yes')
} else {
    console.log('no')
}




(x == 0) ? console.log("hello") : (x<0) ? console.log("hi") : console.log("goodbye");