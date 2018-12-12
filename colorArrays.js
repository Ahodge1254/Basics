let color = ['White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet', 'Pink',  'Black'];
let num = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th']

function colorArray(colors, placements){
    for(i=0; i<10; i++){
        console.log(`${i+1}${placements[i]} is ${colors[i]}`)
    }
}

colorArray(color, num)