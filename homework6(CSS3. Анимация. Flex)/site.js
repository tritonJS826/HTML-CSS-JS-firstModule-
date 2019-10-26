"use strict"
let barMenu = document.getElementById("barMenu");
let barButton = document.getElementById('barButton');
barButton.addEventListener('click', openBarMenu);
barMenu.addEventListener('click',closeBarMenu); //Этот листенер переделать на кнопочку закрытия в barMenu
//barMenu -> closeButtonBarMenu


function openBarMenu() {
  barMenu.style.animation="openbarMenuAnimation 2s forwards";
}

function closeBarMenu(){
  barMenu.style.animation="closebarMenuAnimation 2s forwards";
}
