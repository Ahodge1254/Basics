let weather = 75;

if(weather <70){
    console.log('wear a jacket');
} else {
    console.log('no jacket necessry!')
}

let Name='Aaron'

if (Name = 'Aaron'){
    console.log('Hello, my name is Aaron')
} else {
    console.log('Hello, what is your name?')
}

let name = 'aaroN'

if (name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
}

/*************************************************************************/

//Else If
let age=17;

if(age<=17){
console.log("Sorry, you're too young to do anything.")
}else if(age>=18 && age<21){
console.log('Yay! You can vote!')
}else if(age>=21 && age<25){
    console.log('Yay! You can drink!')
}else{
    console.log('Yay! You can rent a car!')
}