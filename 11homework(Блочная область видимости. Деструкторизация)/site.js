"use strict"
let input , pr , result , result_arr , locale_HTML;
//input - text of user
//pr-- all benween <body> and </body>
//result -- чисто текст без тегов
//resultArr -- pr со стилями
//localeHTML -- original html

//create Objects
let ford =  {
	 name: "ford",
	 age : 10,
	 cost: 2000,
	 type: "car"
 };
let mersedes = {
	 name: "mersedes",
	 age : 8,
	 cost: 5000,
	 type: "car"
 };
let harleyDavidson = {
	 name: "harleyDavidson",
	 age : 5,
	 cost: 10000,
	 type: "bike"
 };
let opel = {
	 name: "opel",
	 age : 17,
	 cost: 1500,
	 type: "car"
 };

let objArray = [ford,mersedes,harleyDavidson,opel];


locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Исходный)

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click",findTextOnPage);

let searchObjectBtn = document.getElementById('searchObjectBtn');
searchObjectBtn.addEventListener("click",findObjectOnPage);

createNewLiAboutObject(mersedes);
createNewLiAboutObject(ford);
createNewLiAboutObject(harleyDavidson);
createNewLiAboutObject(opel);


function findObjectOnPage() {
	//document.body.innerHTML = locale_HTML;
	input = document.getElementById("text").value; //получаем значение из поля в html
	if(input.length<1) {
		alert('Для поиска вы должны ввести один или более символов');
  }
	if(input.length>=1) {
		pr = document.getElementById("mainUl");   // сохраняем в переменную весь body
		pr.innerHTML= " ";
		let nothing = true;//если true,то выведет -- ничего не найдено
		for (let i=0;i<objArray.length;i++){
			for (let key in objArray[i]) {
				if (objArray[i][key]==input) {
					//alert(objArray[i][key] + "exist in"+ objArray[i].name);
					createNewLiAboutObject(objArray[i]);
					nothing = false;
				}
			}
		}
		if (nothing) {alert("Ничего не найдено");}
	}
}

function findTextOnPage() {
	input = document.getElementById("text").value; //получаем значение из поля в html
	if(input.length<1) {
		alert('Для поиска вы должны ввести один или более символов');
  }
  if(input.length>=1){
      //search = /input/g;  //делаем из строки регуярное выражение
		  pr = document.body.innerHTML;   // сохраняем в переменную весь body
		  result = pr.match(/>((.|\n)*?)</g);  //отсекаем все теги и получаем только текст
      result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)
			for(let i=0; i<result.length;i++) {
			  result_arr[i] = result[i].replace(new RegExp(input,'g'), '<span style="background-color:yellow;">'+input+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
			}
			for(let i=0; i<result.length;i++) {
				pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
			}
		  document.body.innerHTML = pr;  //заменяем html код
   }
}

function createNewLiAboutObject(obj) {
	var mainUl = document.getElementById("mainUl");

	mainUl.innerHTML+='<li>'+'<span>'+obj.name;
	for (let prop in obj) {
		if (prop != "name") {
			mainUl.innerHTML+='<span>'+prop+": "+obj[prop]+'</span>'+'<br>';
		}
	}
	mainUl.innerHTML+='</span>'+'</li>'+'<br>';
}
//function findTextOnPageBack() {
	//alert(locale_HTML);
	//document.body.innerHTML = locale_HTML;}   //обнуляем стили
