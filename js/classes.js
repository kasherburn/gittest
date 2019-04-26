// // class bunny {
// //     constructor(name, hops){
// //         this._name = name;
// //         this._hops = hops;
// //     }

// //     // get name() {
// //     //     return this.name;
// //     // }
// //     // get hops() {
// //     //     return this.hops;
// //     // }
// //     // increaseHops() {
// //     //     this.hops ++;
// //     // }
// // }

// // const Navi = new bunny('Navi', 18);
// // const Sherlock = new bunny('Sherlock');

// // console.log(Navi._name, Navi._hops);

// //create a class for ua92 with 2 variables which can be changed for each person and one constant which is the room
// //classes are basically templates which we can use and then add data in to
// class ua92 {
//     constructor(name, studentId){
//         this._name = name;
//         this._studentId = studentId;
//         this._room = 'UA92';

//     }
//     get name(){
//         return this._name;
//     }
//     get studentId(){
//         return this._studentId;
//     }
// }

// const Kelly = new ua92('Kelly', 104);

// console.log(Kelly._name, Kelly._studentId, Kelly._room);

class cdCollection {
    constructor (artist, album){
        this._artist = artist;
        this._album = album;
        this._owner = 'Kelly Sherburn';
    }
    get artist(){
        return this._artist;
    }
    get album(){
        return this._album;
    }
    
}
const theKillers = new cdCollection('The Killers', 'Hot Fuss');
const kingsOfLeon = new cdCollection('Kings of Leon', 'Aha Shake Heartbreak')

console.log(theKillers._artist, theKillers._album, theKillers._owner);
console.log(kingsOfLeon._artist, kingsOfLeon._album, kingsOfLeon._owner);