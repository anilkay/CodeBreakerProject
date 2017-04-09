let answer =document.getElementById('answer');
let attempt =document.getElementById('attempt');
function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer=='' ||attempt=='') {
        setHiddenFields();
    }
    if(!validateInput(input.value)){
        return false;
    }
    else {
        attempt+=1;
    }
}
function setHiddenFields() {
  var rand=Math.random()*9999;
  answer= Math.floor(rand);
  answer=""+answer;
  attempt=0;
  if(answer.length==1){
      answer="0"+answer;
  }
 for(var i=4;i>=answer.length;i--){
     if(answer.length==4){
         break;
     }
     answer="0"+answer;

 }
 console.log(answer);
}
function setMessage(message) {
    var m=document.getElementById("message");
    m.innerHTML=message;
}
function validateInput(input) {
    if(input.length==4){
      return true;
    }
    else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}
//implement new functions here
