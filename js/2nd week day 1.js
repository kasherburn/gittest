//math.random() creates a random number between 1 and 0, math.floor() returns the largest whole number equal to a given number. so in this times' our random number by 50

console.log(Math.floor((Math.random() * 50) +1))
console.log(Math.floor((Math.random() * 50) +1))
console.log(Math.floor((Math.random() * 50) +1))
console.log(Math.floor((Math.random() * 50) +1))
console.log(Math.floor((Math.random() * 50) +1))
console.log(Math.floor((Math.random() * 50) +1))

//create a prompt which asks for users name and outputs a random number between 1 and 50

function createRandomNumberBetweenOneAndFifty(){
    prompt("Please enter your name to generate your ticket number")
    alert((Math.floor((Math.random() * 50) + 1)))
}
createRandomNumberBetweenOneAndFifty()


//create a loop which runs from 9-0
for (i = 9; i > 0; i--){
    console.log(i);
}

for (i = 6; i > 0; i--){
    console.log(i);
}

//create an array of your favourite shoes/colours, then iterate through the length of the array and display to the console
let favouriteShoes = ['wedges', 'trainers', 'sandals', 'flip flops'];
for (let shoesIndex = 0; shoesIndex < favouriteShoes.length; shoesIndex++){
    console.log(favouriteShoes[shoesIndex]); 
}

let favouriteColours = ['yellow', 'green', 'purple', 'red'];
    for (let coloursIndex = 1; coloursIndex < favouriteColours.length; coloursIndex++){
        console.log(favouriteColours[coloursIndex]);
    }

    function favouriteChocolateArray(){
        favouriteChocolate = ['mars', 'galaxy', 'bounty'];
        return (favouriteChocolate[1])
    }
    console.log(favouriteChocolateArray())

    function favouriteFilmsFunction(){
        let favouriteFilmsArray = ['The Godfather', 'Shawshank Redemption', 'Schindlers List', 'Kill Bill Vol.1', 'Kill Bill Vol.2']
        favouriteFilmsArray.splice(1, 0, 'The Godfather 2')
            for (let filmIndex = 0; filmIndex < filmIndex.length; filmIndex++){
                console.log(favouriteFilmsArray[filmIndex])
            }

    }
    favouriteFilmsFunction()
