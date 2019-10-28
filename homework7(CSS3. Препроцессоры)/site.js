"use strict"
let barMenu = document.getElementById("barMenu");
let barButton = document.getElementById('barButton');
let formText = document.getElementById('formText');
let formSubmit = document.getElementById('formSubmit');
let backBarButton =document.getElementById('backBarButton');
//barButton.addEventListener('click', openBarMenu);
//barMenu.addEventListener('click',closeBarMenu);//Этот листенер переделать на кнопочку закрытия в barMenu : barMenu -> closeButtonBarMenu
formSubmit.addEventListener('click', checkFormType);
backBarButton.addEventListener('click',closeBarMenu);
function checkFormType() {
  if (!isNaN(formText.value) && formText.value!=""){
    alert('Yes, it is a number');
    barButton.addEventListener('click', openBarMenu);
    barButton.style.animation="changeColorOnGreen 3s forwards";
  } else {
    alert('It is not a number, try again');
    barButton.removeEventListener('click', openBarMenu);
    barButton.style.animation="changeColorOnRed 3s forwards";
    closeBarMenu();
  }

}

function openBarMenu() {
  barMenu.style.animation="openBarMenuAnimation 2s forwards";
}

function closeBarMenu(){
  barMenu.style.animation="closeBarMenuAnimation 2s forwards";
}
