"use strict"
let input,search,pr,result,result_arr, locale_HTML, result_store;
//input - text of user
//search- create regular phrase
//pr-- all benween <body> and </body>
//result -- чисто текст без тегов
//resultArr -- pr со стилями
//localeHTML -- original html

locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Исходный)
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click",findOnPage);
//let cancelBtn = document.getElementById("cancelBtn");
//cancelBtn.addEventListener("click",findOnPageBack);



function findOnPage() {

	input = document.getElementById("text").value; //получаем значение из поля в html
	if(input.length<1) {
		alert('Для поиска вы должны ввести один или более символов');
  }
  if(input.length>=1){
      //search = input;  //делаем из строки регуярное выражение
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


//function findOnPageBack() {
	//alert(locale_HTML);
	//document.body.innerHTML = locale_HTML; }   //обнуляем стили
