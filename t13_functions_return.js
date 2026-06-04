/****************************
 Name of task; conditionals
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
     output.innerHTML += "<p> Your name is "+Username+" </p>";
    const AGE_FIELD = document.getElementById("agefield")
     age = AGE_FIELD.value;
     output.innerHTML += "<p> you are "+age+" years old </p>";
    const MONEY_FIELD = document.getElementById("moneyfield")
     money = MONEY_FIELD.value;
     output.innerHTML += "<p> And you have "+money+" pocket money left you goober </p>";
    output.innerHTML += "<p>A chocolate bar costs $4</p>";
    if (money >= 4){
     output.innerHTML += "<p> i guess you can buy it pussy </p>";
    } else {
       output.innerHTML += "<p> broke pussy </p>";    
    }

};

function calculateChange(_money,_price){
    return (_money-_price)
}


