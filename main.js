$(document).ready(function () {

var firstNum = '';
var secondNum = '';
var operator = '';
var display = $('#display');




 $('#numbers a').click(function displayNumbers(){
   firstNum = $(this).text();
   display.text(firstNum);
   //secondNum = $(this).text();
   //display.text(secondNum);

});


 $('#operators a').click(function displayNumbers(){
   operator = $(this).text();
   secondNum = firstNum;
   firstNum = '';
   display.text(operator);
});

$("#equals").click(function(){
if (operator === "+"){
firstNum = (parseInt(firstNum, 10) + parseInt(secondNum,10)).toString(10);
} else if (operator === "-"){
firstNum = (parseInt(secondNum, 10) - parseInt(firstNum,10)).toString(10);
//} else if (operator === "/"){
//number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
//} else if (operator === "*"){
//number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
}
display.text(firstNum);
})
//testNumLength(number);
//number = "";
//newnumber = "";
});

