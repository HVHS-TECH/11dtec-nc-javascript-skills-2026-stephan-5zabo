const output = document.getElementById("spaceForJavaScriptOutput");
output.innerHTML = "hello world<br>";
/****************************
Main Code
****************************/
writeline("Less", "code", 8);
displayWelcome("Stephan", 15)

<form>
   <input type = "text">
   <input type = "submit">
</form>

/****************************
Functions
****************************/
function writeline(Less, code, matters){
 output.innerHTML += "<p>"+Less + code + matters +"</p>";
};

function displayWelcome(_name, _age){
    output. innerHTML += "<p> Welcome to the page "+_name+"</p>"
    output. innerHTML += "<p>You are "+_age+" years old</p>"
}