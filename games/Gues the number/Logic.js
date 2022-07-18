let SelectedRandom = 0

function GenerateNumb(){
    SelectedRandom = Math.floor(Math.random * 100)
    
}

//checks and answers to the user
function Checkifnumber() {
    
        
        let userInput = document.getElementById("UserText").value
    
        document.getElementById("makesNewText").innerHTML = userInput;
        
        
        if(userInput > SelectedRandom){
            document.getElementById("makesNewText").innerHTML = "Too big";
        }
        else if(userInput < SelectedRandom){
            document.getElementById("makesNewText").innerHTML = "Too small";
        }
    
        else if(userInput == SelectedRandom){
            document.getElementById("makesNewText").innerHTML = "you guessed it, it was " + userInput.toString();
        }
        
        //else{
           // document.getElementById("makesNewText").innerHTML = "Do you even know what a number is?";
        }
        
    }


GenerateNumb()