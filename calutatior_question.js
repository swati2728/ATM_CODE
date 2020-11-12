const prompt= require("prompt-sync")();
var num1 = prompt("Enter a number");
var num2 = prompt("Enter a number");
var b=parseInt(num1)
var a=parseInt(num2)
// console.log(typeof(num2))
var symbol = prompt("Enter a symbol");
if(symbol=="+"){
    console.log(a+b);
}else if(symbol=="-"){
    console.log(num1-num2);
}else if(symbol=="*"){
    console.log(num1*num2);
}else if(symbol=="/"){
    console.log(num1/num2);    
}