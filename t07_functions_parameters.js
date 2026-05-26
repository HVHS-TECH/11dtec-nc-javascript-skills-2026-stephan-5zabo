/****************************
 Name of task; function_parameters
****************************/


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
output.innerHTML = "<h2>Added by Javascript</h2>";
output.innerHTML += "<p> hi " + Username + " as of " + Year + " you are " + age + " years old,</p>";
output.innerHTML += "<p> You were born in " + birthYear+ "</p>";
output.innerHTML += "<p> in 10 years you will be " + oldAge + " Years old,</p>";
output.innerHTML += "<p> you have " + money + " dollars,</p>";
output.innerHTML += "<p> You spend half of your money, now you have " + halfMoney + "</p>";
output.innerHTML += "<p> Then you get $3, now you have " + addMoney + "</p>";
displayWelcome( 4, 3, 2.50,)


writeline()
/****************************
Functions



****************************/

function writeline(){
// add a line to the html page
output.innerHTML += "<p>welcome to my shop</p>"
}

function displayWelcome(chocolate,chips,drink){
    output.innerHTML += "<p>welcome to my store "+Username+"</p>"
    output.innerHTML += "<p>Chocolate Bar: $"+chocolate+"</p>"
    output.innerHTML += "<p>Doritos: $"+chips+"</p>"
    output.innerHTML += "<p>Pepsi: $"+drink+"</p>"
}