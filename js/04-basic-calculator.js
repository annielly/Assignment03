var num1, num2, operator;
num1 = parseInt(window.prompt("Enter your first number:"));
num2 = parseInt(window.prompt("Enter your second number:"));
do {
	operator = window.prompt("Would you like to add, subtract, divide or multiply:").toLowerCase();
}while(!(operator === "add") && !(operator === "subtract") && !(operator === "multiply") && !(operator === "divide"));

function calculate(numA, numB, str){
	"use strict";
    switch(str){
		case "add":
			return numA+numB;
		case "subtract":
			return numA-numB;
		case "multiply":
			return numA*numB;
		case "divide":
			return numA/numB;
		default:
			return "Invalid";
	}
}
window.alert("Equals " + calculate(num1, num2, operator));
