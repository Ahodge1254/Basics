//Arrow function

//one-line

var cat = () => console.log("I like cats");

cat();

/*
returns
*/

function capitalizeName(name){
    let capName = '';
        for (let h in name){
            if(h== 0){
                 capName += name[h].toUpperCase();
            } else {
                capName += name[h].toLowerCase();
            } 
        }
        console.log(capName)
        return capName
    }
    const newName = capitalizeName("aaRon");
    console.log(newName + " how are you?")


    /* make a tip calculator using a function
    Have it return the value
    capture that returned value in a VARIABLE
    print that variable
    */

    function tipCalc(bill){
     tip = (bill * 0.2)
     return tip.toFixed(2)
    }

    let totalTip = tipCalc(20.00)
    console.log(totalTip)