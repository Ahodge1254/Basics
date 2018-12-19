

let exampleObj ={
    color: 'green',
    smashes: true,
    name: 'Hulk',
    f: function(){
        if (this.color === 'green'){
            return true
        } else {return false}
    }
}
console.log (exampleObj.f())