let variableOne = 1;
let variableTwo = 10;
let variableThree = 20;
let variableFour= 100;
console.log(variableFour + variableTwo);

//add variable 1 to variable 2 and make this the new value of variable 1
variableOne += variableThree;
console.log(variableOne);
//minus one from variable 2
variableTwo--;
console.log(variableTwo);
//times variable 3 by variable 4
variableThree *= variableFour;
console.log(variableThree);

//2000 divide by 200 = 10
variableThree /= variableFour;
console.log(variableThree);

let favouriteDrink = "coffee";
console.log(`My favourite drink is ${favouriteDrink}`)

//create a program that stores a person's name, age and favourite colour that logs to the console in a complete sentence
let name = "Kelly"
let age = 29
let favouriteColour = "green"
console.log(`${name} is aged ${age} and her favourite colour is ${favouriteColour}`)

//create a variable which if it is below 20 returns 'your ticket is valid' and if not returns 'your ticket has expired.'
let ticketNumber = 4
if (ticketNumber < 20)
    { 
        console.log("your ticket is valid")
    }
    else
    {
        console.log("your ticket has expired")
    }

//finds the number in which the character is in the string
    let myName = "Kelly"
    let mySurname = "Sherburn"
   console.log(myName.lastIndexOf("y"))

//replace the y in kelly with an i
   console.log(myName.replace("y","i"))

//remove the first syllable from my string  
    console.log(myName.slice(1))

//create a new string which should read "el"  
    console.log(myName.substring(1, 3))

//create a new string which should read "lly" (starts at 2 which is l and 3 is the length of the string to cut)
    console.log(myName.substr(2, 3))

//add two strings together and add a space in between them both
    console.log(myName.concat(" ", mySurname))

//the first letter of kelly is k - you need to create a variable for the index number
    let fullName = "Kelly Sherburn"
    let index = 0
    console.log(`The first letter of Kelly is ${fullName.charAt(index)}`)


