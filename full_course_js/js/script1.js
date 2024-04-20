//------ Dùng để in ra văn bản --------
// console.log("Hello");
// console.log("I like Pizaa !"); 

//------ Dùng để in một alert trong trang web -------
// window.alert("This is an alert");
// window.alert("I like pizza!");

//------ lấy phần tử theo ID bên HTML ------
// document.getElementById("myH1").textContent= "Hello";
// document.getElementById("myP").textContent="I like pizza !";

//------ Khai báo và In ra thông tin với số liệu ------
// let x;                 - declare
// x = 100;               - assigment
// console.log(x);
// let age = 20;
// let price = 10.99;
// let gpa = 2.1;
// console.log(`You are ${age} years old`); -> 

//------ In thông tin bên trang HTML ------
// let fullName = "Bro Code";
// let age = 25;
// let student = false;
// document.getElementById("p1").textContent =  `Your name is ${fullName}`;
// document.getElementById("p2").textContent =  `Your age is ${age}`;
// document.getElementById("p3").textContent =  `Enrolled: ${student}`;


//------ Cho phép người dùng nhập thông tin từ bàn phím -------
//- Cách 1: window.prompt -> hiện giống window.alert
// let username;
// username = window.prompt("What is your username ?");
// console.log(username);

// - //Cách 2: HTML textbox;
// let username;
// document.getElementById('mySubmit').onclick = function(){
//     username = document.getElementById('myText').value;
//     console.log(username);
// }


//------- Type conversion = change the datatype of a value to another (strings, numbers, booleans) -----
//Example 1
// let age = window.prompt('How old are you?');
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;
// console.log("Your age is ",age,"years old");

//Example 2
// let x,y,z;
// x = Number('3.14');
// y = String(3.14);
// z = Boolean('3.14');
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


//------- Right angled triangle --------
// c = sqrt(a^2 + b^2);

//Cách 1
// let a, b, c;
// a = Number(document.getElementById('first').value);
// b = Number(document.getElementById('second').value);
// c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log("Side c: ", c);

//Cách 2
// let a, b, c;
// document.getElementById("mySubmit").onclick = function (){
//     a = document.getElementById("first").value;
//     a = Number(a);

//     b = document.getElementById("second").value;
//     b = Number(b);

//     c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
//     document.getElementById("cLabel").innerHTML = "Side C: "+c;
// }


