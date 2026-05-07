const output = document.getElementById("spaceForJavaScriptOutput");
/****************************
Main Code
****************************/
writeline("Less", "code", 8);
let UserName = "Stephan"
displayWelcome(UserName)



/****************************
Functions
****************************/
function writeline(Less, code, matters){
 output.innerHTML += "<p>"+Less + code + matters +"</p>";
};

function displayWelcome(_name){
    output. innerHTML += "<p> Welcome to the page "+_name+"</p>"
}