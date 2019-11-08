"use strict"

//selecting dom elements for manipulation
var input = document.getElementById("input");
var ul = document.getElementById("ul");
var container = document.getElementById("todo");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closeBtn");
var overlay = document.getElementById("overlay")


//function to delete todo if delete span is clicked.
function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

//function to load todo if list is found in local storage.
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

//event listener for input to add new todo to the list.
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    let now = new Date;
    /*now.getFullYear()+'.'+now.getMonth()+'.'+now.getDate()+' '+now.getHours()+
    ':'+now.getMinutes()+':'+now.getSeconds();*/
    //creating lists and span when enter is clicked
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");

    var newTodo = this.value;
    this.value = " " ;

    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.innerHTML=+icon;
    ul.innerHTML+='<li>'+'<span><i class="fas fa-trash-alt"></i></span>'+newTodo+"  "+now.getFullYear()+
    '.'+now.getMonth()+'.'+now.getDate()+' '+now.getHours()+
    ':'+now.getMinutes()+':'+now.getSeconds()+'</li>';

    deleteTodo();

    }

});

// event listener to linethrough list if clicked
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);

//hide input box,when pencil icon is clicked
pencil.addEventListener('click', function(){
  input.classList.toggle('display');
});



//save todolist state so user can access it later
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );

});

//clear all todo when clear button is clicked
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

//display overlay when tips btn is clicked
tipsBtn.addEventListener("click",function(){
   overlay.style.height = "100%";
});

//close overlay when close btn is clicked
closeBtn.addEventListener("click",function(e){
  e.preventDefault;
  overlay.style.height = "0";

})

//delete todo
deleteTodo();

//load Todo
loadTodo();
