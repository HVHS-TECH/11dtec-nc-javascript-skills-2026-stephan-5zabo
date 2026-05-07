const output = document.getElementById("spaceForJavaScriptOutput");
/****************************
Main Code
****************************/
writeline(Less, code, 8);





/****************************
Functions
****************************/
function writeline(Less, code, matters){
 output.innerHTML += "<p>"+Less + code + matters +"</p>";
};