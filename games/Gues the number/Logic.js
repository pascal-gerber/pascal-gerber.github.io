let SelectedRandom = Math.floor(Math.random() * 100)
let numberOfTries = 0

//for restarting the game
function GenerateNumb(){
    SelectedRandom = Math.floor(Math.random() * 100)
    numberOfTries = 0
    document.getElementById("makesNewText").innerHTML = "restarted";
    document.getElementById("amountOfTries").innerHTML = "Tries : 0";
}

//checks and answers to the user
function Checkifnumber() {
        let userInput = document.getElementById("UserText").value
        document.getElementById("makesNewText").innerHTML = SelectedRandom.toString();
        
        if(Number(userInput) > SelectedRandom){
            document.getElementById("makesNewText").innerHTML = "Too big";
        } else if(Number(userInput) < SelectedRandom){
            document.getElementById("makesNewText").innerHTML = "Too small";
        } else if(Number(userInput) == SelectedRandom){
            document.getElementById("makesNewText").innerHTML = "you guessed it, it was " + userInput.toString();
        } else {
           document.getElementById("makesNewText").innerHTML = "Do you even know what a number is?";
        }
    
        numberOfTries++
        document.getElementById("amountOfTries").innerHTML = "Tries : " + numberOfTries.toString();
}
