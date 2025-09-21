var x;
x=10;// x : number(so)
console.log(x);
x = "xin chao";// string(chuoi)
console.log(x);
x = true;// boolean(dung/sai)
console.log(x);

var n =20;
var s = "hello";
var t = n + n;// 40
var k = n + s;// 20hello
var m = s + n;// hello20

if(t > 30){

}else{

}
var xyz = t>30?"A":"B";// toán tử 3 ngôi
//if(t > 30){
//  xyz = "A";
//}else{
//  xyz = "B";
//}

for(var i=0;i<10;i++){
    //var ab = "i=";
    //var bc = ab + i;
    //console.log(bc);
    console.log("i="+i);
}

var arr = [];
var abc = [1,2,"xin chao"];

arr[0] = 10;
arr[1] = 15;
arr.push(18);//arr[2] = 18;
arr.push(18);//arr[2] = 18;
arr.push(18);//arr[2] = 18;
arr.push(18);//arr[2] = 18;
arr.push(18);//arr[2] = 18;
arr.push(18);//arr[2] = 18;
arr.push(18);//arr[2] = 18;
arr.push(18);//arr[2] = 18;
arr.push(18);//arr[2] = 18;


for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}


// function tinhTong(a,b){
    //return a + b;
    // console.log(a + b);
// }
// tinhTong(5,7);
// tinhTong("a",8);
// tinhTong("a","b");
// tinhTong([1,3,4],9);

//alert("cấm người dưới 18 tuổi");
//var check = confirm("bạn đã đủ 18 tuổi chưa?");//return true/false
//if(check == true){
//   alert("bạn đã chọn YES");
//}else{
//   alert("bạn đã chọn NO");
//}

// var age = prompt("bạn bao nhiêu tuổi?");// string "20"
//age = age + 10; // "2010"
// alert(age);
// age = parseInt(age);
// "20" => 20
// "20ab48" => 20
// "a20" => NaN : not a number
 var lk = Math.random();// tạo 1 số thực ngẫu nhiên từ 0 -> 1
 lk = lk * 100;// 0 -> 100
lk = parseInt(lk);// 0 -> 99

// var num = prompt("bạn chọn số nào?");
// num = parseInt(num);
// if(num == lk){
//    alert("chúc mừng bạn đã trúng thưởng 1 tỉ!");
// }else{
//     alert("chúc bạn may mắn vào ngày mai!");
// }

// setTimeout(function(){
//     alert("ABC");
//     alert("XYZ");
// },3000);// 3000ms = 3s

var c =10;
var bom = setInterval(function(){
    alert(c);
    c--;
    if(c < 0){
        clearInterval(bom);
    }
},1000);