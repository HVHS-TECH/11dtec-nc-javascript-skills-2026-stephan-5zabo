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



function getFormInput(){
    const NAME_FIELD = document.getElementById("Namefield")
     Username = NAME_FIELD.value;
     console.log("<p> Your name is "+Username+" you goober </p>")
    output.innerHTML = "<p> Your name is "+Username+" you goober </p>";
};