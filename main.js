$(document).ready(function (){
 

  var testNumLength = function(number) {
      if (number.length > 9) {
          display.text(number.substr(number.length-9,9));
           if (number.length > 8) {
                number = "";
               display.text("Error");
          }
       } 
   };

   function calculate(a, b, c){

 if(c === "+"){
  return a+b;
 }

 else if(c === "-"){
  return a-b;
 }

 if(c === "*"){
  return a*b;
 }

if(c === "/"){
  return a/b;
 }
   }; 

    var number = "";
    var latestNumber = "";
    var operator = "";
    var result = 0;
    var x = 0;
    var y = 0;
    var display  = $("#display");
    display.text(0);

  $("#clear").click(function(){
   latestNumber = "";
   display.text(0);
  }); 

   $("#clearall").click(function(){
   number = "";
   latestNumber = "";
   display.text(0);
  }); 


    $("#numbers a").not("#clear,#clearall").click(function(){
   latestNumber += $(this).text();
    display.text(latestNumber);
    testNumLength(number);
    });

    $("#operators a").not("#equals").click(function(){
   operator = $(this).text();
   if(number === ""){
   display.text(latestNumber + operator);
   number = latestNumber;
   latestNumber = "";
  }

  else {

   x = parseInt(number);
   y = parseInt(latestNumber);
  result = calculate(x, y, operator);
  display.text(result + operator);
  number = result.toString();
  latestNumber = "";

  }
   });

    $("#equals").click(function () {
      x = parseInt(number);
      y = parseInt(latestNumber);
      result = calculate (x, y, operator);
      display.text(result);
      testNumLength(number);
    });
});