/****************************
 Name of task; activate via button
****************************/
console.log("running t01_javascriptAndHtml.js")

// Variables
let Username = "Stephan";
let Year = 2026;
let age = 15;
let money = 57;
let birthYear;
let oldAge;
oldAge = age + 10;
birthYear = Year - age;
halfMoney = money / 2;
addMoney = halfMoney + 3;



/****************************
Main Code
****************************/
const output = document.getElementById("spaceForJavaScriptOutput");

/****************************
Functions



****************************/



function writeline(){
// add a line to the html page
output.innerHTML += "<p>welcome to my shop</p>"
}