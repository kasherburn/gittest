//create an object
function cdCollectionFunction(){
let cdCollection = {
    artistName : 'The Killers',
    albumName : 'Hot Fuss',
    numberOfTracks : 11,
    releaseYear :  2004,
}
//add top tracks in to that object
cdCollection.topTrackListing = ['Jenny was a friend of mine', 'Mr Brightside', 'Glamorous Indie Rock n Roll']


//build a sentence which adds in the values from the object


//use a for loop to display the top tracks of this album
for (i = 0; i < cdCollection.topTrackListing.length; i++){
    let topTrackListingVariable = cdCollection.topTrackListing[i]
console.log(`My favourite artist is ${cdCollection.artistName}, my favourite album of theirs is ${cdCollection.albumName} and a top track from that album is ${topTrackListingVariable}`)
}
}
cdCollectionFunction()