//Exceptions in javascript.
//in javascript just like in every other language, we have exception keywords

let ten = 10;

//if always is the beginning of checking
if(ten == 11){
    console.log("its 11")
}

// Note: ONLY IF THE IF FUNCTION IS FALSE SPECIFICLY IT CHECKS THE ELSE IF
// Note2: as many ELSE IF'S as you want can be added
else if(ten == 10){
    console.log("its 10")
    
//else works if nothing else works
}
else{
    console.log("whut ?")
}
//can be well used for error handling of a false input