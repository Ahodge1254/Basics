//Parameters are like empty storage boxe we can name what ever we want. They ned to use the same 
//name inside of the function

//We can also have multiple different parameters for a single function. we provide th prameter
//when we call our function

function pet(animal){
    console.log(`I have a ${animal} for a pet`)
}

pet('dog');
pet('cat');
pet('occelot');


function code(word){
    console.log(`Coding is ${word}!`)
}

code('fun');

function pet2(animal, owner){
    console.log(`${owner} has a ${animal} for a pet`)
}

pet2('dog', 'Autumn')
pet2('cat', 'Alecx')
pet2('occelot', 'Dave')

function name(firstName, lastName){
    console.log(`Hello, my name is ${firstName} ${lastName}`)
}

name('Aaron', 'Hodge')