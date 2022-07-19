//in javascript knowing what type a variable is, can be very helpfull

//lets do some tests

let textType = "Hello";

//there are 2 numb types because the coma numbers are usually put into different types
//in other languages, but javascript takes them both as numbers
let numbType = 32;
let numbTypetwo = 21.23;

let booleanType = false;

console.log(typeof textType);
console.log(typeof numbType);
console.log(typeof numbTypetwo);
console.log(typeof booleanType);

console.log("---------------------------------------------------");
///////////////////////////////////////////////////////////////////////////////////////////
// you can either make text lowercase or uppercase
let randomWord = "Big Letters And SmAll LeTterS"

//use those 2 keywords
console.log(randomWord.toUpperCase());
console.log(randomWord.toLowerCase());


//you can also split texts trought the keyword "split()"

//lets split a sentance into a list

let Sentance = "i am writting a javascript code";

//lets split the sentance by whitespaces.
let splitten = Sentance.split(" ")

console.log(splitten)

console.log("---------------------------------------------------");

//trim can be usefull to remove both ends whitespaces
let wierdUserInput = "          Wierd text           "

console.log(wierdUserInput, "no trim")
console.log(wierdUserInput.trim(), "trim")

//theres also replace, which replaces every word with that part of string

let smallSentance = "javascript is love, javascript is life"

//replace only replaces the first word
console.log(smallSentance.replace("javascript", "python"), "replaces just the first word")

//replaceAll works with multiple keywords
console.log(smallSentance.replaceAll("javascript", "python"), "replaces all")
//PLEASE NOTE: "Programiz.com doesn't work on that"


