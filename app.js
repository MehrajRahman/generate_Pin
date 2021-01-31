function submitButtonClick(){
    const userInputDigit = document.getElementById("userInputBox");
    let userInput = 0;
    if((userInputDigit.value).length > 1){
        userInput = userInputDigit.value;       
    }
    let pinOutput = document.getElementById("pinShowBox");
    if((pinOutput.value).length > 1){
        pinOutput = pinOutput.value;
    }
    if(userInput == pinOutput){
        document.getElementById("pinMatched").style.display = "block";
    }else{
        document.getElementById("pinNotMatched").style.display = "block"
    }

}
const closeBox = document.getElementById("pinMatched");
closeBox.addEventListener("click", function(){
    document.getElementById("pinMatched").style.display = "none";
    document.getElementById("pinShowBox").value = "";
    document.getElementById("userInputBox").value = "";

});
const closeCrossBox = document.getElementById("pinNotMatched");
closeCrossBox.addEventListener("click", function(){
    document.getElementById("pinNotMatched").style.display = "none";
    document.getElementById("pinShowBox").value = 0;
    document.getElementById("userInputBox").value = 0;
});
//All digit will show on input box after clicked
function allButtonClicked(id){
    const digit = document.getElementById(id).innerText;
    let userTypedDigit = document.getElementById("userInputBox");
    userTypedDigit.value = userTypedDigit.value + digit;
}

    
    
    
    

function generatePinClicked(){
    const pinShowBox = document.getElementById("pinShowBox");
    const pin = generatePin();
    pinShowBox.value = pin;
    
};
    


//Pin generated
function generatePin(){
    const generatePinString = Math.random()*10000;
    const generatePinValue = (generatePinString + "").split(".")[0];
    if(generatePinValue.length === 4 ){
        return generatePinValue;        
    }else{
       return generatePin();       
    }     
}

