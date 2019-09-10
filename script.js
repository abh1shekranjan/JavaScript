var heightMark, heightJohn, weightMark, weightJohn;
var heightMark = prompt("Mark's Height in meter");
var weightMark = prompt("Mark's Weight  in kilogram");
var heightJohn = prompt("John's Height in meter");
var weightJohn = prompt("John's Weight in meter");

var bmiJohn = weightJohn / ( heightJohn * heightJohn );
var bmiMark = weightMark / ( heightMark * heightMark );

var check = bmiMark > bmiJohn ? true : false;
console.log("Is Mark's BMI higher than John's ? "+check);