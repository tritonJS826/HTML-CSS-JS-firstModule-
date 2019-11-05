"use strict"
let barMenu = document.getElementById("barMenu");
let barButton = document.getElementById('dws');
//let backBarButton =document.getElementById('barMenu');

//backBarButton.addEventListener('click',closeBarMenu);
barButton.addEventListener('click', openBarMenu);


// функция поиска test в строке str 
function testInput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' содержит ';
  } else {
    midstring = ' не содержит ';
  }
  console.log(str + midstring + re);
}

var testString  = 'hey JuDe';
var re = /[A-Z]/g;

testInput(re, testString); // выведет: hey Jude содержит /[A-Z]/g
