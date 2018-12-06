/*
what is an array?
    has [] brackets
    can hold multiple datatypes
    great for listing
*/

let students = ['Tony', 'Marshall', 'Randy', 'Ray', 23, true, ['Ryan', 'Iesha']]
console.log(typeof students)
console.log(students instanceof Array)
console.log(students[6,1])

let name = students[6][1];
console.log(`Hello ${name}, you look nice today.`)

let food =['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog']
// for (f in food){
//     console.log(food[f])
// }
food.push('Porkchop')
for (f in food){
    console.log(food[f])
}




let food =['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog']
food.pop();
for (f in food){
    console.log(food[f])
}

food.forEach(f => {console.log(f); })



let movies =["The Iron Giant", "Labyrinth", "The Dark Crystal", "Plan 9 from Outer Space"]
// movies.splice(3,1, 'The Neverending Story')
// movies.push('King Kong')
for (m in movies){
    // console.log(movies[m])
}
movies.forEach(m => {console.log(m); })

let long =[1,2,3,4,5,6,7,8,9,10]
console.log(long.length)

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);
console.log(typeof colors);

let beach = ['red', 'green', 'blue', 'yellow']
console.log(beach instanceof Array)
var newBeach = beach.reverse()
console.log(newBeach)