let butChangeStyle = document.getElementById('butChangeStyle');
let butToOtherPage = document.getElementById('butToOtherPage');
let butDelAll = document.getElementById('butDelAll');

butChangeStyle.addEventListener("click", changeStyle);
butToOtherPage.addEventListener("click",goToOtherPage);
butDelAll.addEventListener("click", delAll);

function changeStyle(){
  document.body.style.backgroundImage = "url('forest.jpg')";
  butChangeStyle.style.background = "black";
  butChangeStyle.style.display = "flex";
  butChangeStyle.style.width = "15%";
  butChangeStyle.style.height = "15%";
  butChangeStyle.style.justifyContent = "center";
  butChangeStyle.style.alignContent = "center";
  butChangeStyle.style.color = "white";
  butToOtherPage.style.background = "black";
  butToOtherPage.style.display = "flex";
  butToOtherPage.style.width = "15%";
  butToOtherPage.style.height = "15%";
  butToOtherPage.style.justifyContent = "center";
  butToOtherPage.style.alignContent = "center";
  butToOtherPage.style.color = "white";
  butDelAll.style.background ="black";
  butDelAll.style.display = "flex";
  butDelAll.style.width = "15%";
  butDelAll.style.height = "15%";
  butDelAll.style.justifyContent = "center";
  butDelAll.style.alignContent = "center";
  butDelAll.style.color = "white";
}

function goToOtherPage(){
  window.location.href = "3buttonSite2.html";
}

function delAll(){
  document.body.innerHTML = "";
  document.body.innerHTML += '<HTML><body id="body">'+
  '<div id="menu">menu</div>'+
  '<div id="mainBlock" >mainBlock</div>'+
  '<footer id="footer">footer info</footer>'+
  '</body></HTML>';
  //let body = document.getElementById("body");
  document.body.style.cssText='display : flex;' +
  'flex-direction : column;' +
  'width : 99%;' +
  'justify-content : space-between;'+
  'align-items: center;'+
  'background-image : url("air.jpg");'+
  'height:97%;';
  //

  let menu = document.getElementById("menu");
  menu.style.cssText='background-color : rgba(250,250,170,0.5);'+
  'display : flex;'+
  'flex-direction : column;'+
  'justify-content : space-around;'+
  'align-items : center;'+
  'border-style : solid;'+
  'width : 100%;'+
  'min-height : 20%;' +
  'align-self : flex-start;'+
  'flex:0 0 15%;';
  let mainBlock = document.getElementById("mainBlock");
  mainBlock.style.cssText='background-color : rgba(250,200,170,0.5);'+
  'display : flex;'+
  'flex-direction : column;'+
  'justify-content : space-around;'+
  'align-items : center;'+
  'width : 50%;' +
  'flex:0 0 30%;';
  let footer = document.getElementById("footer");
  footer.style.cssText='background-color : rgba(100,200,100,0.5);'+
  'border : 5px solid black;'+
  'display : flex;'+
  'flex-direction : column;'+
  'justify-content : center;'+
  'align-items : center;'+
  'width : 100%;' +
  'flex:0 0 15%;'+
  'position:relative;'
  }
