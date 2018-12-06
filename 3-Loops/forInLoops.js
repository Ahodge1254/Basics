let student= {name: "jaime", awesome: true, course: "Javascript"};

for(item in student) {
    console.log(item);
    console.log(student[item])
}

let catArray = ['tabby', 'burmese', 'ragdoll', 'totie'];
for(cat in catArray){
    console.log(cat);
}

let name = 'dave';
var capName;

for(var letter in name){
    if(letter ==0){
        capName = name[letter].toUpperCase();
    } else {
        capName += name[letter];
    }
}

console.log(capName);