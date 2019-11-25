"use strict"

var term = {
  Canada: 10,
  Germany: 20,
  Spain:50,
  Belarus:40,
  Russia:30
};


alert("Средняя температура (object:term): "+getAverageTemperature(term));
alert("Максимальная температура (object:term): "+getMaxTemperature(term));
alert("Произведение аргументов(1,'adf',22,2,'qwe'): "+arithMul(1,'adf',22,2,'qwe'));


function getAverageTemperature(tempObject){
 var average = 0;
 var counter = 0;
 for (let temp in tempObject) {
     average = average + tempObject[temp];
     counter++;
   }
  return (average/counter);
 }

 function getMaxTemperature(tempObject){
   var max = -270;
   for (let temp in tempObject){
     if (max<tempObject[temp]){
       max = tempObject[temp];
     }
   }
   return(max);
 }

//arithmul выведет произведение всех аргументов типа number,
//если все  аргументы не number то выведет error
 function arithMul(...args){
   var multiple = 1;
   var isNumberHere = false;
   for (let i of args){
     if (Number.isInteger((i))){
       isNumberHere = true;
       multiple =multiple * (i);
    }
  }
  if (isNumberHere){
    return(multiple);
  }else{
    return("error");
  }
 }
