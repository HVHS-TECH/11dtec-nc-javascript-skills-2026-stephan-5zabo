const output = document.getElementById("spaceForJavaScriptOutput");
output.innerHTML = "hello world<br>";

const Name_FIELD = document.getElementById("nameField");
let userName = Name_FIELD.value;
/****************************
Main Code
****************************/
writeline("Less", "code", 8);
displayWelcome("Stephan", 15)



/****************************
Functions
****************************/
function getFormInput(){
    Const Name_FIELD =  document.getElementById("nameField");
    let userName = Name_FIELD.value;
    output.innerHTML = "<p>Your name is "+userName+"</p>";
}