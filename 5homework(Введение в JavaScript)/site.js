"use strict"
let user = prompt("Введите имя пользователя").split('');
let numberExist = false;
var userNewName = [];
for (let elem of user) {
    if (!isNaN(elem)) { //true mean elem is number
    numberExist = true;
    break;
  }
}
if (numberExist){   //если число встречается, то
  for (let i=0;i<user.length;i++){
    if (i%2==0)  {   // заменяем все четные (с нуля счет) на большие и
        if (!isNaN(user[i])){
          userNewName[i]=user[i];
        } else {
          userNewName[i]=user[i].toUpperCase();
        }
    } else {     //все нечетные на маленькие
      if (!isNaN(user[i])){
        userNewName[i]=user[i];
      } else {
        userNewName[i]=user[i].toLowerCase();
      }
    }
  }
} else {    //если не встречается, то
  for (let i=0;i<user.length;i++){  //переписываем массив задом на перед
    userNewName[i]=user[user.length-1-i];
  }
}
alert(userNewName.join(''));
