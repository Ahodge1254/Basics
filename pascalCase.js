/*
Pascal Challenge
make a function that takes in one prameter
split up the string into individual words
capitalize the first letter in each word
return the new string */

let c= "i like learning at eleven fifty"

function cap(string){
    let broken = string.split(' ');
    let newString= '';
    for(i=0; i<broken.length; i++){
        let rest = broken[i].slice(1);
        let letter = broken[i].charAt(0).toUpperCase();
        newString += letter + rest + ' '
        
    }
    return newString;
}

console.log(cap(c))