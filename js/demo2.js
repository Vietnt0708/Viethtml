var hx = document.getElementById("box");
hx.innerText = "xin chao cac ban";// change text
hx.innerHTML = "<i>xin chào sinh viên lớp T2507E</i>";
hx.style.color = "blue";
hx.style.marginBottom = "20px";
hx.classList.remove("xyz");
hx.classList.add("abc");
hx.classList.add("gik");

var dv = document.getElementById("devide");
var f = 14;
// var d = setInterval(function(){
//     dv.style.fontSize = f + "px";
//     f+=2;
// },1000);

var fan = document.getElementById("fan");
var dg = 0;

var d = setInterval(function(){
    fan.style.transform = `rotate(${dg}deg)`;
    dg+=2;
},1);
