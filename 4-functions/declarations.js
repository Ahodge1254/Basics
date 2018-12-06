//Functions are a set of statements that peform tasks or clalculates a value

//declarations

function Hi(){
    console.log('Hi')
}

//expression
var hi = function hi(){
    console.log('I already said hi')
}

//Declarations = Hoisted/Expression != Hoisted

//Function Calling

Hi()
hi()
hi()

function numbers(){
    for(var i=1; i<=10; i++){
        console.log(i)
    }
}

numbers()


let arr = ['This', 'is', 'really', 'cool']

function Challenge(){
    for(word in arr){
        console.log(word)
    }
}

Challenge()