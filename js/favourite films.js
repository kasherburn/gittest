
    //create an array of favourite films and then add two new films in to the array and display the results in a list
    
    function favouriteFilmsFunction(){
        let favouriteFilmsArray = ['The Godfather', 'Shawshank Redemption', 'Schindlers List', 'Kill Bill Vol.1', 'Kill Bill Vol.2']
        favouriteFilmsArray.splice(1, 0, 'The Godfather 2', 'Rush')
            for (let filmIndex = 0; filmIndex < favouriteFilmsArray.length; filmIndex++){
                console.log(favouriteFilmsArray[filmIndex])
            }

    }
    favouriteFilmsFunction()

    
    //create an array of favourite books and push a new book in to the array and display this to the console

    let favouriteBooksArray = ['Sapiens', 'The Goblet of Fire', 'The Tattoist of Auschwitz']

    function favouriteBooksFunction(){
            for (let favouriteBooksIndex = 0; favouriteBooksIndex < favouriteBooksArray.length; favouriteBooksIndex++){
                console.log(favouriteBooksArray[favouriteBooksIndex])
            }
    }
    favouriteBooksFunction()

    favouriteBooksArray.push('Brave New World')
    
    favouriteBooksFunction()

    //create a while loop for the 4 decks of cards and display these randomly

    let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

    let currentCard = 'diamond'


    while (currentCard !== 'Spade'){
        let randomCard = Math.floor((Math.random() * 10) % cards.length); //create a random number which is the same as the index length of the array
        currentCard = cards[randomCard]; //change variable currentCard to pick a random card from the desk by generating a random index number in the array
        console.log('Oops please try again!') //while the variable isnt spade display this message and keep running the loop until it is true
        console.log(currentCard)
    }
    console.log('Congrats!! You have picked the Spade')
    
   
   //create an array of films, use a for loop to iterate through the array and display it. Then create a function which checks harry potter is in it and displays a message.
    let films = ['Top Gun', 'The Notebook', 'Harry Potter']
    

    for (i = 0; i < films.length; i++){
        console.log(films[i])
    }

    function filmCheck(){
        if (films[2] == 'Harry Potter'){
            console.log('Expecto Patronum')

        }
        else {
        console.log("You need to watch Harry Potter")
        }
    }
    filmCheck()

    
    //create a function that runs a check whether a person likes nintendo or mario kart- if both display ... if not display ...
    let favouriteGame = "Mario Kart"
    let favouriteGame2 = "Nintendo"

    function favouriteGameCheck(){
            if (favouriteGame == "Mario Kart" && favouriteGame2 == "Nintendo"){
                console.log("let's play next week")
            }
            else {
                console.log("You're missing out")
            }
    }

    favouriteGameCheck()

  

