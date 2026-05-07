const output = document.getElementById("spaceForJavaScriptOutput");
/****************************
Main Code
****************************/
writeline("Less", "code", 8);
displayWelcome("stephan", 15)



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