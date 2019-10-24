let butChangeStyle = document.getElementById('butChangeStyle');
let butToOtherPage = document.getElementById('butToOtherPage');
let butDelAll = document.getElementById('butDelAll');

butChangeStyle.addEventListener("click", changeStyle);
butToOtherPage.addEventListener("click",goToOtherPage);
butDelAll.addEventListener("click", delAll);

function changeStyle(){
  document.body.style.backgroundImage = "url('forest.jpg')";
  butChangeStyle.style.background = "black";
  butChangeStyle.style.padding = "20px 20px";
  butChangeStyle.style.color= "white"
  butToOtherPage.style.background = "black";
  butToOtherPage.style.padding = "20px 20px";
  butToOtherPage.style.color= "white"
  butDelAll.style.background ="black";
  butDelAll.style.padding = "20px 20px";
  butDelAll.style.color= "white";
}

function goToOtherPage(){
  window.location.href = "3buttonSite2.html";
}

function delAll(){
  document.body.innerHTML = "";
  document.body.style.background = "white";
  document.body.innerHTML += '<div id="menu">menu</div>'+
  '<div id="mainBlock" >mainBlock</div>'+
  '<footer id="footer">footer info</footer>';
  let menu = document.getElementById("menu");
  menu.style.cssText='background-color : rgba(250,50,170,0.9);'+
  'text-align : center;'+
  'line-height : 10vh;'+
  'display : flex;'+
  'flex-direction : row;'+
  'justify-content : space-around;'+
  'align-items : center;'+
  'position : fixed;'+
  'border-style : solid;'+
  'margin-left : 0;'+
  'width : 98%;'+
  'height : 20vh;'+
  'margin-top : 0px;';
  let mainBlock = document.getElementById("mainBlock");
  mainBlock.style.cssText='background-color : rgba(250,50,170,0.9);'+
  'text-align : center;'+
  'display : block;'+
  'position : absolute;'+
  'top : 25%;'+
  'left : 25%;'+
  'width : 50%;'+
  'height : 50vh;';
  let footer = document.getElementById("footer");
  footer.style.cssText='background-color : rgba(100,200,100,0.9);'+
  'border : 5px solid black;'+
  'position : fixed;'+
  'height : 10vh;'+
  'bottom : 0vh;'+
  'text-align : center;'+
  'width : 98%;';
}
