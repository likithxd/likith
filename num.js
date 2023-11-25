var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById("GuessBtn").addEventListener("click",function(){
        var guess=parseInt(document.getElementById("GuessInput").value);
        attempts++;
        if(guess===randomNumber){
             displayMessage("ewww!ela maya ala ",+attempts,"attempts");
            document.getElementById("GuessBtn").disabled=true;
        }
        else if(guess>randomNumber){
             displayMessage("too high try a lower number");
        }
        else{
             displayMessage("too low try a higher number");
        }
});
function displayMessage(k){
    document.getElementById("Message").textContent=k;
} 