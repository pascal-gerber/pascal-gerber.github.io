//in javascript you have 3 types of indexes the last one being in another part
//and regex also being in a different part

////////////////////////////////////////////////////////////////////////////////////////////////
//1. the most used is the array index
let peoples = ["Thomas", "Joe", "Michael", "David", "Rebecca"]

//Lists start off by 0 always so Thomas is the index 0 of this list

console.log(peoples[0], "index 0 of peoples")
console.log(peoples[1], "index 1 of peoples")
console.log(peoples[2], "index 2 of peoples")
//and soo on


//////////////////////////////////////////////////////////////////////////////
//Now pay good attention, you can loop trought them all with this code part
console.log("-------------------------")

function printout(person, IndexOfPerson){
    console.log(person + " is at index: " + IndexOfPerson)
}
peoples.forEach(printout);

console.log("-------------------------")
////////////////////////////////////////////////////////////////////////////////////////////////
//2. indexes in strings

let nameOfPerson = "David"

console.log(nameOfPerson[0], "first letter")
//you can also take specificly indexes of strings

console.log(nameOfPerson.slice(0, 3), "4 first letters")
// slice keyword allows you to take certain parts of the cake, works also for lists

console.log(nameOfPerson.indexOf("vid"), "finding the indexes of the vid part");
//indexOf allows you to find certain words in a string

