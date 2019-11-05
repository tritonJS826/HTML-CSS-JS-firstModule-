"use strict"
let barMenu = document.getElementById("barMenu");
let barButton = document.getElementById('dws');
//let backBarButton =document.getElementById('barMenu');

//backBarButton.addEventListener('click',closeBarMenu);
barButton.addEventListener('click', openBarMenu);



function openBarMenu() {
  //barMenu.style.animation="openBarMenuAnimation 2s forwards";
  alert("Связь установлена)");
}

function closeBarMenu(){
  //barMenu.style.animation="closeBarMenuAnimation 2s forwards";
}
