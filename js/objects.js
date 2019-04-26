//create an object

let person = {
    name : 'Kelly',
    age : 29,
    openKesta() {
        return 'we are open please come in!'
    },
    sayHi() {
        return `Hello, my name is ${this.name}`
    }
    
};

console.log(person.openKesta())
console.log(person.sayHi())
//you can create a function within an object and then call that but you need to call the object name and then the function name
//if you want to refer to the current object use 'this' instead of the object's name. You must do this within the object though.

//add a new key and list in to the object
person.song = ['milk', 'we are the champions', 'the bucket']
console.log(person.song)
//add a new string in to the array
person.song.push('we will rock you')
console.log(person.song)
//
for (i = 0; i < person.song.length; i++){
    console.log(person.song[i])
}
//for of loop - displays the whole array
for(let songs of person.song){
    console.log(songs)
}
//for in loop - displays all the index numbers within the array
for(let songs in person.song){
    console.log(songs)
}


let blackadder = {
    averageDay : "mild insult needed - you oaf.",
    badDay : "The eyes are open, the mouth moves, but Mr Brain has long since departed, hasn't he?"
}
let day = 'bad'
let insult = ''

if (day == 'bad'){
    insult = blackadder.badDay
}
else if (day == 'average'){
    insult = blackadder.averageDay
}

console.log(insult)

//create a method within an object

let rabbit = {
    name : 'Sherlock',
    colour : 'black and white',
    ears : 'uppy',

    bunHop(){
        return 'Bunny is hopping'
    },

    bunChew(){
        return 'Bunny is chewing'
    }

}
console.log(rabbit.bunHop())