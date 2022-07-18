

//For loops are written using the for() function "simply having the for syntax"
//first you define a new variable to be changed, then a condition logic and at the end a adding one to the variable
for(let Floop = 0; Floop < 10; Floop++){
    console.log("for loop", Floop)
}
////////////////////////////////////////////////////////////////////////////////////////////

//while has a lot of similarities to the for loop in javascript
//while has just a different settup and only takes the condition to the top

let Wloop = 0;

while (Wloop < 10) {
  console.log("while loop " + Wloop);
  Wloop++;
}

//while can be used for different purposes by that

////////////////////////////////////////////////////////////////////////////////////////////

//the setinterval loop
//Note: setinterval somehow does not react like a loop tho it loops non stop
let IntervalLoop = 0

function firstfunction(){
    
    console.log("Interval loop", IntervalLoop);
    IntervalLoop++;
    if(IntervalLoop == 10){
        //acts like a break function for the interval
    clearInterval(IntervalValue);
        }
}


// by intervals you can put a time to sleep
let IntervalValue = setInterval(firstfunction, 1000);
// the time is put as miliseconds, so 1000 miliseconds = 1 second

//made by pascal
//enjoy!


